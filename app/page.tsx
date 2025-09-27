"use client";

import Link from "next/link";
import Image from "next/image";
import banner from "../public/banner.png";
import { motion } from "framer-motion";

import { Montserrat } from "next/font/google";
import { FiPhone } from "react-icons/fi";
import Service from "@/components/service/Service";
const bebas = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 ">
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src={banner}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay mờ */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Nội dung sang bên trái */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Hiệu ứng cho khối text */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className={`${bebas.className} text-4xl md:text-7xl tracking-wide text-white mb-4`}
              >
                CHUYÊN LẮP ĐẶT SỬA CHỮA ĐIỆN NƯỚC UY TÍN
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                KỸ THUẬT VIÊN CHUYÊN NGHIỆP, THÀNH THẠO TIẾNG ANH VÀ TIẾNG
                TRUNG, SẴN SÀNG LÀM VIỆC TRỰC TIẾP VỚI KHÁCH HÀNG QUỐC TẾ
              </p>

              {/* Nút CTA có animation */}
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone className="w-5 h-5" />
                Liên Hệ Tư Vấn 0785689211
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="">
        <Service />
      </section>
    </div>
  );
}
