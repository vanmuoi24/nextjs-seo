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
    // Tối ưu performance
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ⚠️ Bỏ headers và redirects vì không hoạt động khi export
  // Nếu muốn redirect thì bạn tự xử lý bằng <meta http-equiv="refresh"> trong page
  // hoặc cấu hình ở Nginx/Apache/Netlify thay vì Next.js

  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "next/font",
      "framer-motion",
      "react-icons",
    ],
    // Tối ưu performance
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Tối ưu webpack cho performance
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
