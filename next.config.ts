import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignores TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignores ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  /* Add any additional Next.js configuration options here */
};

export default nextConfig;
