import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["media.themoviedb.org"],
  },
};

export default nextConfig;
