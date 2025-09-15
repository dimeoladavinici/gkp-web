import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // quitalo si no lo necesitás:
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
