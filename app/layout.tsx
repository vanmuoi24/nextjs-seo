import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Dịch Vụ Sửa Điện Nước Chuyên Nghiệp Tại Ninh Bình & Hà Nam | Uy Tín Hàng Đầu",
  description:
    "Dịch vụ sửa điện nước chuyên nghiệp tại Ninh Bình & Hà Nam. Sửa điện dân dụng, điện công nghiệp, điện lạnh. Có mặt sau 30 phút, bảo hành sau sửa chữa. Liên hệ: 0979 821 293",
  keywords:
    "sửa điện nước, sửa điện dân dụng, sửa điện công nghiệp, sửa điện lạnh, Ninh Bình, Hà Nam, thợ điện nước, sửa chữa điện nước",
  openGraph: {
    title: "Dịch Vụ Sửa Điện Nước Chuyên Nghiệp Tại Ninh Bình & Hà Nam",
    description:
      "Dịch vụ sửa điện nước chuyên nghiệp tại Ninh Bình & Hà Nam. Có mặt sau 30 phút, bảo hành sau sửa chữa.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Dịch vụ sửa điện nước tại Ninh Bình & Hà Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dịch Vụ Sửa Điện Nước Chuyên Nghiệp Tại Ninh Bình & Hà Nam",
    description:
      "Dịch vụ sửa điện nước chuyên nghiệp tại Ninh Bình & Hà Nam. Có mặt sau 30 phút, bảo hành sau sửa chữa.",
    images: ["/banner.png"],
  },
  alternates: {
    canonical: "https://diencongnghiep.store/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/banner.png" as="image" type="image/png" />
        <link rel="preload" href="/logo.jpeg" as="image" type="image/jpeg" />
        <link
          rel="preload"
          href="/z7057416444686_424798481365a586cb005327a0f17ea7.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
