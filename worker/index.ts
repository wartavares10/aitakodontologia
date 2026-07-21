/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import { blockedRobotsContent, seoConfig } from "../config/seo";

interface Env {
  ASSETS?: Fetcher;
  DB: D1Database;
  IMAGES?: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS
          ? env.ASSETS.fetch(new Request(new URL(path, request.url)))
          : fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          if (!env.IMAGES) return new Response(body, { headers: { "Content-Type": "image/webp" } });
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const response = await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);
    let headersChanged = false;

    if (!seoConfig.allowIndexing && headers.get("content-type")?.toLowerCase().includes("text/html")) {
      headers.set("X-Robots-Tag", blockedRobotsContent);
      headersChanged = true;
    }

    if (response.ok && (url.pathname.startsWith("/assets/aitak/hero-implant-frames/") || url.pathname.startsWith("/assets/fonts/"))) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
      headersChanged = true;
    }

    return headersChanged
      ? new Response(response.body, { status: response.status, statusText: response.statusText, headers })
      : response;
  },
};

export default worker;
