import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static files, so GitHub Pages can host it.
  output: "export",
  // Pages serves project sites from /<repo>; the deploy workflow sets this.
  basePath: process.env.PAGES_BASE_PATH,
  // The image optimizer needs a server. Avatars come pre-sized from GitHub anyway.
  images: { unoptimized: true },
};

export default nextConfig;
