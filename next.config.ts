import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/Vinus" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/Vinus/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
