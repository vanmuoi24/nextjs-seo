"use client";
import React from "react";
import Image from "next/image";
import { motion, Transition } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";
import dienlanh from "@/public/dienlanh.jpg";

const fadeInUp: { hidden: any; show: any } = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1], // giờ phải ép kiểu any hoặc dùng Transition
    } as Transition,
  },
};
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // xuất hiện so le từng item
    },
  },
};

const DienLanhPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Banner */}
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={dienlanh}
          alt="Dịch vụ sửa điện lạnh"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="max-w-4xl text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              DỊCH VỤ SỬA ĐIỆN LẠNH TẠI NINH BÌNH – HÀ NAM
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Nhanh chóng • Chuyên nghiệp • Giá hợp lý
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 space-y-20">
        {/* Giới thiệu */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bạn đang cần sửa điện lạnh tại Ninh Bình – Hà Nam?
          </h2>
          <p className="text-lg leading-relaxed">
            Chúng tôi chuyên sửa chữa điều hòa, tủ lạnh, máy giặt, kho lạnh… với
            đội ngũ thợ lành nghề, tận tâm. <br />
            <strong>
              Có mặt sau 30 phút – Hỗ trợ toàn tỉnh – Làm việc cả ngoài giờ
            </strong>
          </p>
        </motion.section>

        {/* Các dịch vụ */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            CÁC DỊCH VỤ SỬA ĐIỆN LẠNH
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sửa điều hòa treo tường, âm trần, công nghiệp",
              "Vệ sinh, bơm ga, thay block",
              "Sửa tủ lạnh, tủ đông, tủ mát",
              "Sửa máy giặt, máy sấy",
              "Sửa máy nước nóng lạnh, NLMT",
              "Sửa kho lạnh bảo quản",
              "Bảo trì định kỳ công ty, nhà máy",
              "Thi công, lắp đặt hệ thống lạnh",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 bg-white rounded-xl shadow-md flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA cuối */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white py-12 px-6 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            LIÊN HỆ NGAY ĐỂ NHẬN BÁO GIÁ TỐT NHẤT
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0979821293"
              className="flex items-center gap-3 bg-white text-red-600 px-6 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" /> 0979 821 293
            </a>
            <a
              href="tel:0988392334"
              className="flex items-center gap-3 bg-white text-red-600 px-6 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" /> 0988 392 334
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DienLanhPage;
