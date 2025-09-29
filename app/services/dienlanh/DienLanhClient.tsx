// ...existing code...
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, X } from "lucide-react";
import dienlanh from "@/public/dienlanh.jpg";
import { FaPhone } from "react-icons/fa";

// ...existing code...
const services = [
  "Sửa điều hòa treo tường, điều hòa âm trần, điều hòa công nghiệp",
  "Vệ sinh, bơm ga, thay block, xử lý xì giàn nóng – lạnh",
  "Sửa tủ lạnh, tủ đông, tủ mát: không lạnh, chảy nước, không đóng tuyết",
  "Sửa máy giặt, máy sấy: không vắt, không xả nước, báo lỗi",
  "Sửa máy nước nóng năng lượng mặt trời và máy nước nóng lạnh trực tiếp",
  "Sửa kho lạnh bảo quản thực phẩm, dược phẩm",
  "Bảo trì thiết bị điện lạnh định kỳ cho nhà ở, cửa hàng, công ty, nhà máy",
  "Thi công, lắp đặt mới hệ thống lạnh theo yêu cầu",
];

const benefits = [
  "Loại bỏ bụi bẩn, vi khuẩn, nấm mốc — bảo vệ sức khỏe",
  "Tăng hiệu suất làm lạnh — giảm tiêu thụ điện 15–25%",
  "Kéo dài tuổi thọ thiết bị 5–7 năm",
  "Giảm tiếng ồn — vận hành êm ái",
];

const tips = [
  "Vệ sinh lưới lọc bụi 1 tháng/lần",
  "Đặt nhiệt độ hợp lý: 25–27°C để tiết kiệm điện",
  "Đảm bảo dàn nóng cách tường tối thiểu 10 cm",
  "Tránh ánh nắng trực tiếp vào dàn nóng",
  "Kiểm tra áp suất gas mỗi 6 tháng, nạp gas kịp thời",
];

// Gallery ảnh trong /public
const gallery = [
  "/z7053211018381_666543c57c2d4e72fd44d25e1fe11d16.jpg",
  "/z7053211012359_dea13f2e062fcbfcc4c4d3ca2746fb4e.jpg",
  "/z7053211006095_5dc21856d5168a622ed38141b3b62ecc.jpg",
  "/z7057416451477_6af0ad49e4e8717facbe0b2774bbd813.jpg",
  "/z7053211001216_3e54d71f0e43dc7aa26d451aa930019e.jpg",
  "/z7053210987975_4bfe3bc4b78f5da157d78544afc33922.jpg",
];

export default function DichVuDienLanh() {
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://example.com/#business",
        name: "Dịch Vụ Điện Lạnh - Ninh Bình & Hà Nam",
        telephone: "+84987654321",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ninh Bình",
          addressRegion: "Ninh Bình",
          addressCountry: "VN",
        },
        areaServed: ["Ninh Bình", "Hà Nam"],
        description:
          "Sửa chữa và bảo trì các thiết bị điện lạnh: điều hòa, tủ lạnh, máy giặt, kho lạnh.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Bao lâu thợ có thể có mặt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Thông thường có mặt sau 30 phút trong khu vực Ninh Bình & Hà Nam.",
            },
          },
          {
            "@type": "Question",
            name: "Có hỗ trợ ngoài giờ không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Có, hỗ trợ 24/7 với phí ngoài giờ hợp lý.",
            },
          },
        ],
      },
      {
        "@type": "ImageGallery",
        name: "Hình ảnh công trình đã thực hiện",
        image: gallery.map((p) => `https://example.com${p}`),
      },
    ],
  };

  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header / Intro */}
      <header className="bg-gradient-to-r from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 uppercase leading-tight">
              Dịch Vụ Sửa Điện Lạnh Tại Tỉnh Ninh Bình & Hà Nam
            </h1>
            <p className="mt-3 text-gray-700 text-lg">
              Nhanh chóng, chuyên nghiệp, giá hợp lý. Có mặt sau 30 phút — hỗ
              trợ nội & ngoại thành — nhận làm ngoài giờ. Tư vấn kỹ thuật miễn
              phí, báo giá rõ ràng trước khi làm.
            </p>

            <p className="mt-4 text-gray-600">
              Chuyên sửa: điều hòa, tủ lạnh, máy giặt, kho lạnh, máy nước nóng
              lạnh… Đội thợ lành nghề và tận tâm.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3 justify-center md:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-red-700 transition"
                aria-label="Gọi ngay 0987 654 321"
              >
                <FaPhone /> Gọi Ngay: 0987 654 321
              </a>
              <a
                href="#services"
                className="inline-block px-5 py-3 rounded-xl border border-blue-100 text-blue-600 bg-white hover:bg-blue-50 transition"
              >
                Xem dịch vụ
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src={dienlanh}
              alt="Kỹ thuật viên sửa chữa điện lạnh tại hiện trường"
              className="object-cover w-full h-72 md:h-80"
              priority
            />
          </div>
        </div>
      </header>

      {/* Main content: services */}
      <section id="services" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Các dịch vụ sửa điện lạnh chúng tôi cung cấp
          </h2>

          <p className="text-gray-700 mb-6">
            Bạn đang cần sửa điện lạnh tại Tỉnh Ninh Bình, Hà Nam? Chúng tôi xử
            lý nhanh mọi sự cố, từ thiết bị gia dụng đến hệ thống công nghiệp.
          </p>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <li
                key={i}
                className="bg-white rounded-lg p-4 shadow-sm flex items-start space-x-3"
              >
                <CheckCircle className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">{s}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why / Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-8">
          <article>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Tại sao phải vệ sinh bảo dưỡng điều hòa thường xuyên?
            </h3>
            <ul className="space-y-3 text-gray-700">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Mẹo giúp điều hòa hoạt động ổn định
            </h3>
            <ul className="space-y-2 text-gray-700">
              {tips.map((t, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Quy trình 5 bước */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Quy trình vệ sinh bảo dưỡng điều hòa chuẩn 5 bước
          </h2>
          <ol className="space-y-4 text-gray-700 list-decimal list-inside bg-white p-6 rounded-lg shadow-sm">
            <li>
              <strong>Kiểm tra tổng quát:</strong> Đánh giá tình trạng, đo điện
              áp, kiểm tra áp suất gas, remote, board mạch, đường ống thoát
              nước.
            </li>
            <li>
              <strong>Tháo lắp và vệ sinh dàn lạnh:</strong> Tháo vỏ, lưới lọc;
              ngâm và chà rửa bằng dung dịch chuyên dụng; phun rửa dàn trao đổi
              nhiệt, khử mùi, diệt khuẩn.
            </li>
            <li>
              <strong>Vệ sinh dàn nóng:</strong> Vệ sinh cánh quạt, dàn nóng
              ngoài trời, loại bỏ rác; phun rửa, khử khuẩn, siết bulong.
            </li>
            <li>
              <strong>Kiểm tra gas và nạp thêm (nếu cần):</strong> Đo áp suất
              gas, phát hiện & xử lý rò rỉ, bổ sung gas R22 / R32 / R410A nếu
              thiếu.
            </li>
            <li>
              <strong>Chạy thử & bàn giao:</strong> Kiểm tra lưu lượng gió,
              nhiệt độ đầu ra, hướng dẫn khách và ghi phiếu bảo dưỡng.
            </li>
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Hình ảnh công trình đã thực hiện
          </h2>
          <p className="text-gray-600 mb-6">
            Một số hình ảnh thực tế các công trình, lắp đặt và sửa chữa đã hoàn
            thành.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, idx) => (
              <figure
                key={idx}
                className="overflow-hidden rounded-lg shadow-sm"
              >
                <button
                  onClick={() => setPreviewImg(src)}
                  className="w-full focus:outline-none"
                  aria-label={`Xem hình công trình ${idx + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Công trình sửa điện lạnh ${
                      idx + 1
                    } - lắp đặt/ sửa chữa tại Ninh Bình Hà Nam`}
                    width={900}
                    height={600}
                    className="object-cover w-full h-52 md:h-44 hover:scale-105 transition-transform"
                  />
                </button>
                <figcaption className="text-sm text-gray-600 p-2">
                  Hình {idx + 1}: Sửa/ lắp đặt điều hòa & hệ thống điện lạnh
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
              aria-label="Đóng xem ảnh"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            <Image
              src={previewImg}
              alt="Xem trước hình công trình"
              width={1200}
              height={800}
              className="rounded-lg object-contain mx-auto"
            />

            <div className="mt-3 text-right">
              <a
                href="tel:0987654321"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow"
              >
                <FaPhone /> Gọi đặt lịch
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-gray-700">
            Hỗ trợ 24/7 – Có mặt sau 30 phút. Liên hệ:{" "}
            <a href="tel:0987654321" className="font-semibold text-blue-600">
              0987 654 321
            </a>
          </p>
        </div>
      </footer>

      {/* Floating call button */}
      <a
        href="tel:0987654321"
        className="fixed right-4 bottom-4 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg md:hidden flex items-center gap-2"
        aria-label="Gọi nhanh"
      >
        📞 Gọi
      </a>
    </main>
  );
}
// ...existing code...
