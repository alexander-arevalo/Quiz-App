import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  allowedDevOrigins: [
    "http://192.168.100.10",
    "http://192.168.100.10:3000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
};

export default nextConfig;
