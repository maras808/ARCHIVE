import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    dynamicIO: true,
    ppr: true,
  },
};

export default nextConfig;
