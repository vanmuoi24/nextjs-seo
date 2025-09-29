import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Tối ưu font loading
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Tối ưu font loading
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "SEO App - Công cụ SEO chuyên nghiệp",
    template: "%s | SEO App",
  },
  description:
    "Công cụ SEO toàn diện giúp tối ưu hóa website, nghiên cứu từ khóa, phân tích đối thủ và theo dõi thứ hạng trên Google.",
  keywords: [
    "SEO",
    "tối ưu hóa công cụ tìm kiếm",
    "Google SEO",
    "nghiên cứu từ khóa",
    "backlink",
    "phân tích đối thủ",
    "theo dõi thứ hạng",
    "SEO tools",
    "công cụ SEO",
    "marketing online",
  ],
  authors: [{ name: "SEO App Team" }],
  creator: "SEO App",
  publisher: "SEO App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-actual-domain.com"), // ⚠️ Thay đổi domain thực
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/vi",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://your-actual-domain.com", // ⚠️ Thay đổi domain thực
    title: "SEO App - Công cụ SEO chuyên nghiệp",
    description:
      "Công cụ SEO toàn diện giúp tối ưu hóa website, nghiên cứu từ khóa, phân tích đối thủ và theo dõi thứ hạng trên Google.",
    siteName: "SEO App",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO App - Công cụ SEO chuyên nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO App - Công cụ SEO chuyên nghiệp",
    description:
      "Công cụ SEO toàn diện giúp tối ưu hóa website, nghiên cứu từ khóa, phân tích đối thủ và theo dõi thứ hạng trên Google.",
    images: ["/og-image.jpg"],
    creator: "@seoapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-actual-google-verification-code", // ⚠️ Thay đổi verification code thực
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/banner.png" as="image" />
        <link rel="preload" href="/logo.jpeg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
