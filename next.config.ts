import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The page behaviour ported from the design (src/site/*/logic.ts) starts its
  // animations, observers and timers once on mount. Strict Mode's dev-only
  // mount -> unmount -> mount cycle would leave those pages inert in `next dev`.
  reactStrictMode: false,
  // `npm run export` writes a plain static site to out/ for any static host
  // (Netlify Drop, S3, GitHub Pages, cPanel...).
  ...(process.env.STATIC_EXPORT ? { output: "export" as const, trailingSlash: true } : {}),
};

export default nextConfig;
