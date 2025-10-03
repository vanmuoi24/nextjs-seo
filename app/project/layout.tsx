import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dự Án Đã Thực Hiện - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam",
  description:
    "Xem các dự án sửa điện nước đã thực hiện tại Ninh Bình & Hà Nam. Hình ảnh thực tế các công trình, nhà xưởng, hệ thống điện dân dụng và công nghiệp đã hoàn thành.",
  keywords:
    "dự án đã thực hiện, công trình sửa điện nước, hình ảnh thực tế, Ninh Bình, Hà Nam, portfolio, gallery",
  openGraph: {
    title: "Dự Án Đã Thực Hiện - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam",
    description:
      "Xem các dự án sửa điện nước đã thực hiện tại Ninh Bình & Hà Nam. Hình ảnh thực tế các công trình đã hoàn thành.",
    images: [
      {
        url: "/z7053211018381_666543c57c2d4e72fd44d25e1fe11d16.jpg",
        width: 1200,
        height: 630,
        alt: "Dự án sửa điện nước đã thực hiện tại Ninh Bình & Hà Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dự Án Đã Thực Hiện - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam",
    description:
      "Xem các dự án sửa điện nước đã thực hiện tại Ninh Bình & Hà Nam. Hình ảnh thực tế các công trình đã hoàn thành.",
    images: ["/z7053211018381_666543c57c2d4e72fd44d25e1fe11d16.jpg"],
  },
  alternates: {
    canonical:
      "https://diencongnghiep.store/du-an-sua-dien-nuoc-ninh-binh-ha-nam",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
