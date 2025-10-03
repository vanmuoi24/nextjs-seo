import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Liên Hệ - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam | Hotline 24/7",
  description:
    "Liên hệ dịch vụ sửa điện nước tại Ninh Bình & Hà Nam. Hotline: 0979 821 293, 0988 392 334. Có mặt sau 30 phút, hỗ trợ 24/7, bảo hành sau sửa chữa.",
  keywords: [
    "liên hệ",
    "hotline",
    "sửa điện nước Ninh Bình",
    "sửa điện nước Hà Nam",
    "thợ điện nước",
    "số điện thoại",
    "địa chỉ",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://diencongnghiep.store/lien-he-sua-dien-nuoc-ninh-binh-ha-nam",
    siteName: "Dịch Vụ Sửa Điện Nước",
    title:
      "Liên Hệ - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam | Hotline 24/7",
    description:
      "Liên hệ dịch vụ sửa điện nước tại Ninh Bình & Hà Nam. Hotline: 0979 821 293, 0988 392 334. Có mặt sau 30 phút, hỗ trợ 24/7.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Liên hệ dịch vụ sửa điện nước tại Ninh Bình & Hà Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Liên Hệ - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam | Hotline 24/7",
    description:
      "Liên hệ dịch vụ sửa điện nước tại Ninh Bình & Hà Nam. Hotline: 0979 821 293, 0988 392 334. Có mặt sau 30 phút, hỗ trợ 24/7.",
    images: ["/banner.png"],
  },
  alternates: {
    canonical:
      "https://diencongnghiep.store/lien-he-sua-dien-nuoc-ninh-binh-ha-nam",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
