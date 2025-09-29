import { Metadata } from "next";
import DichVuDienLanh from "./DienLanhClient";

// Khai báo metadata ở server file (không có "use client")
export const metadata: Metadata = {
  title:
    "Dịch Vụ Sửa Điện Lạnh tại Ninh Bình & Hà Nam | Sửa Điều Hòa, Tủ Lạnh, Máy Giặt",
  description:
    "Dịch vụ sửa điện lạnh chuyên nghiệp tại Ninh Bình & Hà Nam. Sửa điều hòa, tủ lạnh, máy giặt, kho lạnh — có mặt sau 30 phút, tư vấn miễn phí, báo giá rõ ràng.",
  keywords:
    "sửa điều hòa, sửa tủ lạnh, sửa máy giặt, vệ sinh điều hòa, nạp gas, điện lạnh Ninh Bình, điện lạnh Hà Nam",
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
};

export default function Page() {
  return <DichVuDienLanh />;
}
