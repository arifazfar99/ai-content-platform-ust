import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'globalassets.starbucks.com'
      },
      {
        protocol: 'https',
        hostname: 'static.nike.com'
      },
    ]
  },
};

export default nextConfig;
