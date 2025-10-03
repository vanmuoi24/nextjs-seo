import { Metadata } from "next";
import DichVuDienLanh from "./DienLanhClient";

// Khai báo metadata ở server file (không có "use client")
export const metadata: Metadata = {
  title:
    "Sửa Điện Lạnh Chuyên Nghiệp Tại Ninh Bình & Hà Nam | Điều Hòa, Tủ Lạnh, Máy Giặt",
  description:
    "Dịch vụ sửa điện lạnh chuyên nghiệp tại Ninh Bình & Hà Nam. Sửa điều hòa, tủ lạnh, máy giặt, kho lạnh — có mặt sau 30 phút, tư vấn miễn phí, báo giá rõ ràng. Hơn 10 năm kinh nghiệm.",
  keywords:
    "sửa điều hòa, sửa tủ lạnh, sửa máy giặt, vệ sinh điều hòa, nạp gas, điện lạnh Ninh Bình, điện lạnh Hà Nam, sửa điện lạnh chuyên nghiệp, bảo trì điện lạnh",
  openGraph: {
    title:
      "Dịch Vụ Sửa Điện Lạnh tại Ninh Bình & Hà Nam - Nhanh chóng, Chuyên nghiệp",
    description:
      "Sửa điều hòa, tủ lạnh, máy giặt; hỗ trợ 24/7, có mặt trong 30 phút. Tư vấn miễn phí, báo giá rõ ràng.",
    images: [
      {
        url: "/dienlanh.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ sửa điện lạnh",
      },
    ],
  },
  alternates: {
    canonical: "https://diencongnghiep.store/sua-dien-lanh-ninh-binh-ha-nam",
  },
};

export default function Page() {
  return <DichVuDienLanh />;
}
