import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sửa Điện Dân Dụng Chuyên Nghiệp Tại Ninh Bình & Hà Nam | Nhanh Chóng, An Toàn",
  description:
    "Dịch vụ sửa điện dân dụng uy tín tại Ninh Bình & Hà Nam. Sửa ổ cắm, công tắc, CB, chập cháy, rò điện. Có mặt sau 30 phút, bảo hành sau sửa chữa. Liên hệ: 0979 821 293",
  keywords:
    "sửa điện dân dụng, sửa ổ cắm, sửa công tắc, sửa CB, điện dân dụng Ninh Bình, điện dân dụng Hà Nam, sửa chập cháy, rò điện, cân pha",
  openGraph: {
    title: "Sửa Điện Dân Dụng Chuyên Nghiệp Tại Ninh Bình & Hà Nam",
    description:
      "Dịch vụ sửa điện dân dụng uy tín tại Ninh Bình & Hà Nam. Có mặt sau 30 phút, bảo hành sau sửa chữa.",
    images: [
      {
        url: "/z7057416444686_424798481365a586cb005327a0f17ea7.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ sửa điện dân dụng tại Ninh Bình & Hà Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sửa Điện Dân Dụng Chuyên Nghiệp Tại Ninh Bình & Hà Nam",
    description:
      "Dịch vụ sửa điện dân dụng uy tín tại Ninh Bình & Hà Nam. Có mặt sau 30 phút, bảo hành sau sửa chữa.",
    images: ["/z7057416444686_424798481365a586cb005327a0f17ea7.jpg"],
  },
  alternates: {
    canonical:
      "https://diencongnghiep.store/sua-dien-dan-dung-ninh-binh-ha-nam",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
