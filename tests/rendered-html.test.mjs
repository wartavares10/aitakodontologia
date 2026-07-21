import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;
const blockedRobots =
  /noindex,\s*nofollow,\s*noarchive,\s*nosnippet,\s*noimageindex/i;

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the landing page with temporary indexing protection", async () => {
  const response = await render();
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(response.headers.get("x-robots-tag") ?? "", blockedRobots);
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /<title>Aitak Odontologia \| Dentista em Sorocaba<\/title>/i);
  assert.match(html, /name=["']description["'][^>]*Clínica odontológica em Sorocaba/i);
  assert.match(html, /name=["']robots["'][^>]*noindex/i);
  assert.match(html, /name=["']googlebot["'][^>]*noindex/i);
  assert.match(html, /name=["']bingbot["'][^>]*noindex/i);
  assert.match(html, /rel=["']manifest["'][^>]*href=["']\/site\.webmanifest["']/i);
  assert.match(html, /href=["']\/favicon\.ico["']/i);
  assert.match(html, /href=["']\/favicon\.svg["']/i);
  assert.match(html, /href=["']\/apple-touch-icon\.png["']/i);
  assert.match(html, /rel=["']mask-icon["'][^>]*href=["']\/safari-pinned-tab\.svg["']/i);
  assert.match(html, /"@type":"Dentist"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(html, /aggregateRating/);
  assert.doesNotMatch(html, /rel=["']canonical["']/i);
  assert.doesNotMatch(html, /aitak-odontologia\.wartavares10\.chatgpt\.site/i);
});

test("ships a valid manifest and a blocked robots file", async () => {
  const manifest = JSON.parse(
    await readFile(new URL("../public/site.webmanifest", import.meta.url), "utf8"),
  );
  const robots = await readFile(
    new URL("../public/robots.txt", import.meta.url),
    "utf8",
  );

  assert.equal(manifest.name, "Aitak Odontologia");
  assert.equal(manifest.theme_color, "#063E31");
  assert.equal(manifest.icons.length, 3);
  assert.equal(manifest.icons.at(-1).purpose, "maskable");
  assert.match(robots, /BLOQUEIO TEMPORÁRIO DE INDEXAÇÃO/);
  assert.match(robots, /User-agent:\s*\*/i);
  assert.match(robots, /Disallow:\s*\//i);
  assert.doesNotMatch(robots, /Sitemap:/i);
});
