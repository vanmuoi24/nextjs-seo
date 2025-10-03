"use client";
import React from "react";
import {
  Phone,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Settings,
  AlertTriangle,
} from "lucide-react";
import diencongnghiep from "../../../public/diencongnghiepdetail.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const DienCongNghiepPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br text-white">
        <div className="relative w-full min-h-[500px] flex items-center justify-center">
          {/* Background Image */}
          <Image
            src={diencongnghiep}
            alt="Dịch vụ sửa điện công nghiệp"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
            >
              DỊCH VỤ SỬA ĐIỆN CÔNG NGHIỆP
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
            >
              TẠI TỈNH NINH BÌNH - HÀ NAM
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-white"
            >
              UY TÍN • NHANH CHÓNG • GIÁ HỢP LÝ
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-8 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="font-semibold">
                  Kỹ thuật viên tay nghề cao
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Shield className="w-6 h-6 text-green-400" />
                <span className="font-semibold">An toàn - Đúng kỹ thuật</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Clock className="w-6 h-6 text-orange-400" />
                <span className="font-semibold">Có mặt sau 30 phút</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0979821293"
                className="flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
              >
                <Phone className="w-6 h-6" />
                0979 821 293
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0988392334"
                className="flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
              >
                <Phone className="w-6 h-6" />
                0988 392 334
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-6 text-center"
            >
              Bạn đang tìm dịch vụ sửa điện công nghiệp uy tín tại Ninh Bình Hà
              Nam?
            </motion.h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl mb-6"
              >
                Chúng tôi chuyên khắc phục nhanh sự cố điện nhà xưởng, tủ điện,
                máy móc công nghiệp, đảm bảo{" "}
                <strong>an toàn – đúng kỹ thuật – tiết kiệm thời gian</strong>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg mb-6"
              >
                Đội ngũ kỹ thuật viên tay nghề cao, có thể giao tiếp tiếng Anh –
                tiếng Trung, sẵn sàng làm việc trực tiếp với kỹ sư nước ngoài.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500"
              >
                <p className="text-xl font-bold text-blue-800 mb-2">
                  Hỗ trợ 24/7 – Có mặt tận nơi sau 30 phút
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CÁC DỊCH VỤ SỬA ĐIỆN CÔNG NGHIỆP CHÚNG TÔI CUNG CẤP
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Sửa chữa hệ thống điện nhà xưởng
                </h3>
              </div>
              <p className="text-gray-700">
                Khắc phục sự cố điện nhà máy sản xuất, đảm bảo hoạt động liên
                tục
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Bảo trì tủ điện công nghiệp
                </h3>
              </div>
              <p className="text-gray-700">
                Kiểm tra, bảo trì tủ điều khiển PLC, đảm bảo vận hành ổn định
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Khắc phục sự cố chập cháy
                </h3>
              </div>
              <p className="text-gray-700">
                Xử lý quá tải, mất pha, rò điện, đảm bảo an toàn tuyệt đối
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Nâng cấp hệ thống điện
                </h3>
              </div>
              <p className="text-gray-700">
                Cập nhật theo tiêu chuẩn an toàn mới, tối ưu hiệu suất
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Thi công cáp điện động lực
                </h3>
              </div>
              <p className="text-gray-700">
                Đấu nối cáp điện, điều khiển chuyên nghiệp, đúng tiêu chuẩn
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Cân pha, xử lý lệch pha
                </h3>
              </div>
              <p className="text-gray-700">
                Chống giật, chống quá tải, đảm bảo cân bằng tải điện
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bảng Giá Lắp Đặt Điện Công Nghiệp Tham Khảo
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              <strong>Lưu ý:</strong> Đây chỉ là bảng giá tham khảo ban đầu. Để
              nhận được báo giá chi tiết và chính xác nhất, vui lòng liên hệ
              trực tiếp hotline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Hạng mục</th>
                  <th className="px-6 py-4 text-left font-bold">
                    Giá tham khảo (VNĐ)
                  </th>
                  <th className="px-6 py-4 text-left font-bold">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black-400">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Thi công lắp đặt hệ thống điện công nghiệp cơ bản
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    180.000 – 250.000
                  </td>
                  <td className="px-6 py-4 text-black">
                    Dây dẫn, ống luồn, công tắc, ổ cắm
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Lắp đặt tủ điện công nghiệp
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    2.500.000 – 12.000.000
                  </td>
                  <td className="px-6 py-4 text-black">
                    Tùy loại tủ và số lượng thiết bị
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Thi công điện 3 pha</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    300.000 – 450.000
                  </td>
                  <td className="px-6 py-4 text-black">
                    Bao gồm đấu nối, kiểm tra tải
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Đi dây nổi hệ thống điện
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    150.000 – 220.000
                  </td>
                  <td className="px-6 py-4 text-black">
                    Chủ yếu sử dụng ống gen nổi, dễ bảo trì
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Đi dây âm tường, âm sàn
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    250.000 – 350.000
                  </td>
                  <td className="px-6 py-4 text-black">
                    Yêu cầu đục tường, che chắn kỹ
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Lắp đặt máy cắt CB, MCCB
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    200.000 – 500.000/cái
                  </td>
                  <td className="px-6 py-4 text-black">
                    Tùy chủng loại và dòng định mức
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Đấu nối biến tần, khởi động mềm
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    800.000 – 2.500.000
                  </td>
                  <td className="px-6 py-4 text-black">
                    Tùy công suất và cấu hình hệ thống
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Lắp đặt hệ thống chiếu sáng nhà xưởng
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    160.000 – 250.000
                  </td>
                  <td className="px-6 py-4 text-black">
                    Tính theo mét vuông hoặc điểm đèn
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Cân pha hệ thống điện
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    2.000.000 – 5.000.000
                  </td>
                  <td className="px-6 py-4 text-black">
                    Dành cho hệ thống điện 3 pha tải lớn
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Bảo trì hệ thống điện công nghiệp
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    1.000.000 – 4.000.000/lần
                  </td>
                  <td className="px-6 py-4 text-black">
                    Tùy mức độ kiểm tra và quy mô công trình
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quy Trình Báo Giá Lắp Đặt Điện Công Nghiệp
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Tiếp nhận yêu cầu
                  </h3>
                  <p className="text-gray-700">
                    Khách hàng liên hệ và cung cấp thông tin cơ bản về dự án
                    (quy mô, loại hình công trình, yêu cầu kỹ thuật…).
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Khảo sát công trình (nếu cần)
                  </h3>
                  <p className="text-gray-700">
                    Đội ngũ kỹ sư của chúng tôi sẽ đến trực tiếp công trình để
                    khảo sát, đo đạc và đánh giá các yếu tố ảnh hưởng đến chi
                    phí.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Lập dự toán chi tiết
                  </h3>
                  <p className="text-gray-700">
                    Dựa trên thông tin thu thập được, chúng tôi sẽ lập dự toán
                    chi tiết cho từng hạng mục công việc, vật tư và nhân công.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Gửi báo giá cho khách hàng
                  </h3>
                  <p className="text-gray-700">
                    Bảng báo giá chi tiết sẽ được gửi đến khách hàng trong thời
                    gian sớm nhất.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Thương thảo và điều chỉnh (nếu cần)
                  </h3>
                  <p className="text-gray-700">
                    Chúng tôi sẵn sàng thương thảo và điều chỉnh báo giá để phù
                    hợp với yêu cầu và ngân sách của khách hàng.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ký kết hợp đồng
                  </h3>
                  <p className="text-gray-700">
                    Sau khi thống nhất về báo giá và các điều khoản, chúng tôi
                    tiến hành ký kết hợp đồng thi công.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Cần tư vấn dịch vụ điện công nghiệp?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Liên hệ ngay để được khảo sát và báo giá miễn phí
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0979821293"
              className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
            >
              <Phone className="w-6 h-6" />
              0979 821 293
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0988392334"
              className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
            >
              <Phone className="w-6 h-6" />
              0988 392 334
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DienCongNghiepPage;
