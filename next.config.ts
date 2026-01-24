import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "zielis-gabriel-portfolio-projects-images.s3.us-east-1.amazonaws.com",
      }
    ],
    qualities: [75, 90]
  }
};

export default nextConfig;
