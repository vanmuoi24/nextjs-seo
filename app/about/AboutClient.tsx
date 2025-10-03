"use client";
import Image from "next/image";
import worker from "../../public/wỏk.jpg";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut", // không còn TS error
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function AboutClient() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Về Chúng Tôi - Dịch Vụ Điện Chuyên Nghiệp Tại Ninh Bình & Hà Nam
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực điện, chúng tôi tự hào
                là đơn vị uy tín hàng đầu cung cấp dịch vụ sửa chữa điện dân
                dụng, công nghiệp và điện lạnh tại Ninh Bình & Hà Nam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Liên hệ ngay
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Xem dịch vụ
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={worker}
                  alt="Thợ điện chuyên nghiệp tại Ninh Bình & Hà Nam"
                  fill
                  className="object-cover"
                  quality={75}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Câu Chuyện Của Chúng Tôi
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Bắt đầu từ một nhóm thợ điện trẻ với niềm đam mê và tinh thần
                trách nhiệm cao, chúng tôi đã phát triển thành một đội ngũ
                chuyên nghiệp với hơn 50 kỹ thuật viên có tay nghề cao, phục vụ
                khách hàng tại Ninh Bình & Hà Nam.
              </p>
              <p>
                Với phương châm "Chất lượng - An toàn - Uy tín", chúng tôi cam
                kết mang đến những giải pháp điện tối ưu nhất cho mọi nhu cầu
                của khách hàng, từ hộ gia đình đến các doanh nghiệp, nhà xưởng
                công nghiệp.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc và giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Chất Lượng",
                description:
                  "Sử dụng vật liệu chính hãng, thiết bị hiện đại, quy trình chuẩn quốc tế",
                icon: "⭐",
              },
              {
                title: "An Toàn",
                description:
                  "Tuân thủ nghiêm ngặt các tiêu chuẩn an toàn điện, bảo vệ tính mạng và tài sản",
                icon: "🛡️",
              },
              {
                title: "Uy Tín",
                description:
                  "Cam kết bảo hành dài hạn, giá cả minh bạch, dịch vụ chuyên nghiệp",
                icon: "🤝",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Đội Ngũ Chuyên Nghiệp
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hơn 50 kỹ thuật viên có tay nghề cao, được đào tạo bài bản và có
              kinh nghiệm thực tế
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                role: "Kỹ Thuật Viên Điện Dân Dụng",
                count: "25+",
                description:
                  "Chuyên sửa chữa điện gia đình, ổ cắm, công tắc, CB",
              },
              {
                role: "Kỹ Thuật Viên Điện Công Nghiệp",
                count: "15+",
                description: "Chuyên tủ điện, nhà xưởng, máy móc công nghiệp",
              },
              {
                role: "Kỹ Thuật Viên Điện Lạnh",
                count: "10+",
                description: "Chuyên điều hòa, tủ lạnh, máy giặt, kho lạnh",
              },
              {
                role: "Kỹ Sư Điện",
                count: "5+",
                description: "Thiết kế, tư vấn hệ thống điện chuyên nghiệp",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {member.count}
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">
                  {member.role}
                </h3>
                <p className="text-sm text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Thành Tích Nổi Bật</h2>
            <p className="text-xl text-red-100">
              Những con số ấn tượng trong hơn 15 năm hoạt động
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Năm Kinh Nghiệm" },
              { number: "5000+", label: "Khách Hàng Hài Lòng" },
              { number: "10000+", label: "Dự Án Hoàn Thành" },
              { number: "24/7", label: "Hỗ Trợ Khẩn Cấp" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Sẵn Sàng Phục Vụ Bạn
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn miễn phí và báo giá chi tiết cho mọi
              nhu cầu về điện
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Liên hệ ngay
              </Link>
              <Link
                href="tel:0979821293"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Gọi: 0979 821 293
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
