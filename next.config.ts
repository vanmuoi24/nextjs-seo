import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Xuất site tĩnh (out/)
  output: "export",

  // SEO optimizations
  trailingSlash: false,
  generateEtags: true,

  // Image optimization (static export cần unoptimized)
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ⚠️ Bỏ headers và redirects vì không hoạt động khi export
  // Nếu muốn redirect thì bạn tự xử lý bằng <meta http-equiv="refresh"> trong page
  // hoặc cấu hình ở Nginx/Apache/Netlify thay vì Next.js

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "next/font"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
