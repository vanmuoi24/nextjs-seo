import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Giới Thiệu Về Chúng Tôi - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam",
  description:
    "Trung tâm sửa chữa điện nước uy tín tại Ninh Bình & Hà Nam. Hơn 10 năm kinh nghiệm, đội ngũ kỹ thuật chuyên nghiệp, có mặt sau 30 phút. Đánh giá 4.1/5 sao từ 210 khách hàng.",
  keywords:
    "giới thiệu, về chúng tôi, trung tâm sửa điện nước, Ninh Bình, Hà Nam, kỹ thuật viên điện nước, đánh giá khách hàng",
  openGraph: {
    title:
      "Giới Thiệu Về Chúng Tôi - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam",
    description:
      "Trung tâm sửa chữa điện nước uy tín tại Ninh Bình & Hà Nam. Hơn 10 năm kinh nghiệm, đội ngũ kỹ thuật chuyên nghiệp.",
    images: [
      {
        url: "/wỏk.jpg",
        width: 1200,
        height: 630,
        alt: "Kỹ thuật viên điện nước tại Ninh Bình & Hà Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Giới Thiệu Về Chúng Tôi - Dịch Vụ Sửa Điện Nước Tại Ninh Bình & Hà Nam",
    description:
      "Trung tâm sửa chữa điện nước uy tín tại Ninh Bình & Hà Nam. Hơn 10 năm kinh nghiệm, đội ngũ kỹ thuật chuyên nghiệp.",
    images: ["/wỏk.jpg"],
  },
  alternates: {
    canonical:
      "https://diencongnghiep.store/gioi-thieu-sua-dien-nuoc-ninh-binh-ha-nam",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
