"use client";
import Image from "next/image";
import worker from "../../public/wỏk.jpg";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerChildren = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="relative bg-white text-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Cột trái - Nội dung */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          >
            GIỚI THIỆU VỀ TRUNG TÂM
          </motion.h2>
          <motion.p
            variants={fadeInLeft}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Là đơn vị tiên phong và uy tín trong lĩnh vực sửa chữa điện công
            nghiệp – điện dân dụng – điện lạnh tại Tỉnh Ninh Bình, Hà Nam và các
            khu vực lân cận.
          </motion.p>
          <motion.p
            variants={fadeInLeft}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Chúng tôi hiểu rằng hệ thống điện là “mạch máu” của mọi hoạt động
            sản xuất và sinh hoạt. Một sự cố nhỏ cũng có thể gây gián đoạn,
            thiệt hại lớn.
          </motion.p>
          <motion.p
            variants={fadeInLeft}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Chính vì vậy, chúng tôi ra đời với sứ mệnh trở thành người đồng hành
            đáng tin cậy – giúp bạn giải quyết mọi vấn đề về điện một cách{" "}
            <span className="font-semibold text-indigo-700">
              Nhanh chóng – An toàn – Chuyên nghiệp
            </span>
            .
          </motion.p>

          <motion.ul variants={fadeInLeft} className="space-y-3 text-gray-700">
            <ul className="space-y-2">
              <li>
                ⭐{" "}
                <Link
                  href="/"
                  className="underline text-black-600 hover:text-blue-800"
                >
                  “Thợ điện ở gần tôi”
                </Link>
              </li>
              <li>
                ⭐{" "}
                <Link
                  href="/"
                  className="underline text-black-600 hover:text-blue-800"
                >
                  Bạn cần sửa điện nước tại Ninh Bình, Hà Nam? Có mặt trong 30
                  phút, hỗ trợ nhanh, uy tín.
                </Link>
              </li>
              <li>
                ⭐{" "}
                <Link
                  href="/"
                  className="underline text-black-600 hover:text-blue-800"
                >
                  Làm việc theo bảng giá rõ ràng, nhiều chính sách ưu đãi giúp
                  khách hàng tiết kiệm chi phí.
                </Link>
              </li>
            </ul>
          </motion.ul>
        </motion.div>

        {/* Cột phải - Ảnh + Đánh giá */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {/* Ảnh kỹ thuật viên */}
          <motion.div
            variants={fadeInRight}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={worker}
              alt="Kỹ thuật viên điện"
              className="object-cover"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Box đánh giá */}
          <motion.div
            variants={fadeInRight}
            className="bg-gray-50 rounded-xl p-6 shadow-lg text-gray-800"
          >
            <h3 className="text-lg font-bold mb-4">
              210 đánh giá của khách hàng
            </h3>
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600">4.1 / 5 sao</span>
            </div>

            <div className="space-y-2">
              {[
                { stars: 5, percent: 57 },
                { stars: 4, percent: 18 },
                { stars: 3, percent: 10 },
                { stars: 2, percent: 8 },
                { stars: 1, percent: 7 },
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="w-10 text-sm font-medium">
                    {item.stars}★
                  </span>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-sm text-gray-600">
                    {item.percent}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
