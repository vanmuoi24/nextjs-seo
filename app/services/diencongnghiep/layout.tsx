import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sửa Điện Công Nghiệp Chuyên Nghiệp Tại Ninh Bình & Hà Nam | Uy Tín Hàng Đầu",
  description:
    "Dịch vụ sửa điện công nghiệp chuyên nghiệp tại Ninh Bình & Hà Nam. Sửa chữa tủ điện, nhà xưởng, máy móc công nghiệp. Có mặt sau 30 phút, bảo hành 6-12 tháng. Liên hệ: 0979 821 293",
  keywords:
    "sửa điện công nghiệp, sửa tủ điện, sửa điện nhà xưởng, điện công nghiệp Ninh Bình, điện công nghiệp Hà Nam, sửa chữa điện công nghiệp, bảo trì điện công nghiệp",
  openGraph: {
    title: "Sửa Điện Công Nghiệp Chuyên Nghiệp Tại Ninh Bình & Hà Nam",
    description:
      "Dịch vụ sửa điện công nghiệp uy tín hàng đầu tại Ninh Bình & Hà Nam. Có mặt sau 30 phút, bảo hành 6-12 tháng.",
    images: [
      {
        url: "/diencongnghiepdetail.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ sửa điện công nghiệp tại Ninh Bình & Hà Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sửa Điện Công Nghiệp Chuyên Nghiệp Tại Ninh Bình & Hà Nam",
    description:
      "Dịch vụ sửa điện công nghiệp uy tín hàng đầu tại Ninh Bình & Hà Nam. Có mặt sau 30 phút, bảo hành 6-12 tháng.",
    images: ["/diencongnghiepdetail.jpg"],
  },
  alternates: {
    canonical:
      "https://diencongnghiep.store/sua-dien-cong-nghiep-ninh-binh-ha-nam",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
