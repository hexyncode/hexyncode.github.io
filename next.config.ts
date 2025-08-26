import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['localhost'],
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
