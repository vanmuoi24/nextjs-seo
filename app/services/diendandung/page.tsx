"use client";
import React from "react";
import { motion, Transition } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import diendd from "../../../public/đienandung.jpg";
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

const DienDanDungPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Banner */}
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={diendd}
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
              DỊCH VỤ SỬA DÂN DỤNG TẠI NINH BÌNH – HÀ NAM
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
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Cần tìm thợ sửa điện dân dụng tại Ninh Bình – Hà Nam?
          </h2>
          <p className="text-lg leading-relaxed">
            Chúng tôi chuyên nhận sửa chữa hệ thống điện gia đình: từ hỏng hóc
            nhỏ như ổ cắm, công tắc, bóng đèn, đến xử lý chập cháy, rò rỉ điện,
            mất pha, đảm bảo an toàn tuyệt đối. <br />
            <strong>
              Có mặt tận nơi sau 30 phút, phục vụ nội – ngoại thành, giá hợp lý,
              làm việc cả thứ 7 – Chủ nhật.
            </strong>
          </p>
        </motion.section>

        {/* Danh sách dịch vụ */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            CÁC DỊCH VỤ SỬA ĐIỆN DÂN DỤNG
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sửa ổ cắm, công tắc, bóng đèn, đèn trần",
              "Thay CB, aptomat, cầu dao, bảng điện",
              "Xử lý mất điện, điện chập cháy, rò điện",
              "Lắp mới đường dây điện nổi – âm tường",
              "Cân pha, chống quá tải, chống giật",
              "Đi lại dây điện toàn nhà, sửa dây đứt âm tường",
              "Kiểm tra rò rỉ điện, tiêu hao điện bất thường",
              "Tư vấn, cải tạo hệ thống điện dân dụng an toàn, tiết kiệm điện",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
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
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white py-12 px-6 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            LIÊN HỆ NGAY ĐỂ NHẬN HỖ TRỢ NHANH
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

export default DienDanDungPage;
