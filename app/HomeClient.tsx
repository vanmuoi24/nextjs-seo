"use client";
import { motion } from "framer-motion";
import { AlertTriangle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

// Danh sách bài viết blog
const posts = [
  {
    title: "Hướng dẫn kiểm tra và sửa chữa hệ thống điện công nghiệp an toàn",
    excerpt:
      "Quy trình cơ bản kiểm tra, bảo dưỡng tủ điện, đấu nối motor và xử lý sự cố điện công nghiệp.",
    image: "/z7057416444686_424798481365a586cb005327a0f17ea7.jpg",
    href: "/services/diencongnghiep",
  },
  {
    title: "5 bước xử lý sự cố điện dân dụng thường gặp",
    excerpt:
      "Hướng dẫn cách khắc phục nhanh các sự cố điện trong gia đình: mất điện, chập cháy, ổ cắm hỏng…",
    image: "/z7053211006095_5dc21856d5168a622ed38141b3b62ecc.jpg",
    href: "/services/dienlanh",
  },
  {
    title: "Mẹo tiết kiệm điện khi sử dụng thiết bị điện lạnh",
    excerpt:
      "Những cách đơn giản giúp giảm hóa đơn điện khi vận hành máy lạnh, tủ lạnh, máy nước nóng lạnh.",
    image: "/z7053210987975_4bfe3bc4b78f5da157d78544afc33922.jpg",
    href: "/services/diendandung",
  },
];

export default function HomeClient() {
  return (
    <>
      {/* ==== BLOG SECTION ==== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Bài viết hướng dẫn sửa điện công nghiệp – dân dụng
          </h2>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-64 bg-gray-100 animate-pulse rounded-xl"
                  />
                ))}
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link
                  key={index}
                  href={post.href}
                  className="group bg-gray-50 rounded-xl shadow hover:shadow-xl transition overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    <div className="mt-4 text-red-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Đọc tiếp →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl p-10 text-gray-800 shadow-2xl overflow-hidden"
        >
          {/* Nội dung */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Icon SOS */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4 shadow-md">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>

            <h3 className="text-3xl font-bold mb-4 drop-shadow-sm text-red-600">
              Bạn đang cần thợ điện nước uy tín tại Tỉnh Ninh Bình – Hà Nam?
            </h3>

            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Chúng tôi cung cấp dịch vụ sửa chữa điện nước{" "}
              <span className="font-semibold text-red-600">
                nhanh chóng – chuyên nghiệp – giá hợp lý
              </span>
              .
            </p>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Đội ngũ kỹ thuật có mặt tận nơi, xử lý điện dân dụng, điện lạnh,
              điện công nghiệp chỉ trong 30 phút. Gọi thợ ngay khu vực{" "}
              <span className="font-semibold text-red-600">
                Duy Tiên – Hà Nam cũ
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:0979821293"
                className="flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                <PhoneCall className="w-6 h-6" /> 0979 821 293
              </a>
              <Link
                href="/contact"
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-600 hover:text-white transition-colors shadow-md"
              >
                Đặt lịch hẹn
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
