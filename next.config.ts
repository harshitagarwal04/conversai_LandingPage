import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows for more detailed type checking during build
    tsconfigPath: './tsconfig.json',
  },
  // Optional: Add any other specific configurations
};

export default nextConfig;