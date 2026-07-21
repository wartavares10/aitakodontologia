import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The production host does not expose a compatible image transformation
  // binding. Serve the already optimized WebP assets directly so every image
  // keeps its intrinsic dimensions, lazy-loading behavior and visual crop.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
