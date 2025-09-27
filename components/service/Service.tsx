"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, ArrowRight, PhoneCall } from "lucide-react";
import dienlanh from "../../public/dienlanh.jpg";
import diencongnghiep from "../../public/diencongnghiep.jpg";
import diandandung from "../../public/đienandung.jpg";
import Image from "next/image";

const services = [
  {
    title: "ĐIỆN CÔNG NGHIỆP",
    description:
      "Thi công, lắp đặt hệ thống điện nhà xưởng, sửa chữa tủ điện, ATS, đấu nối motor, xử lý sự cố điện công nghiệp an toàn.",
    image: diencongnghiep,
    icon: "⚡",
    features: [
      "Lắp đặt hệ thống điện nhà xưởng",
      "Sửa chữa tủ điện, ATS,công suất",
      "Đấu nối motor, máy lạnh công nghiệp",
      "Xử lý chạm chập, rò rỉ, đo kiểm an toàn",
    ],
    price: "Liên hệ báo giá",
    href: "/services/diencongnghiep",
  },
  {
    title: "ĐIỆN LẠNH",
    description:
      "Bảo trì, sửa chữa và lắp đặt máy lạnh tại nhà, xử lý nhanh sự cố máy lạnh không lạnh, kêu to, chảy nước.",
    image: dienlanh,
    icon: "❄️",
    features: [
      "Bảo trì, vệ sinh máy lạnh",
      "Sửa chữa máy lạnh nhanh chóng",
      "Tháo lắp, di dời máy lạnh",
      "Xử lý sự cố tủ lạnh, máy nước nóng lạnh",
    ],
    price: "Liên hệ báo giá",
    href: "/services/dienlanh",
  },
  {
    title: "ĐIỆN DÂN DỤNG",
    description:
      "Sửa chữa điện trong nhà, xử lý chập cháy, mất điện, lắp đặt ổ cắm, công tắc, hệ thống chiếu sáng và cải tạo điện cũ.",
    image: diandandung,
    icon: "💡",
    features: [
      "Sửa chữa điện trong nhà",
      "Xử lý chập cháy, mất điện",
      "Lắp đặt công tắc, ổ cắm, đèn chiếu sáng",
      "Thi công cải tạo điện dân dụng",
    ],
    price: "Liên hệ báo giá",
    href: "/services/diendandung",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Cột 1 - Nội dung chính */}
          <div className="flex flex-col items-start text-left">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-2xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dịch Vụ Nổi Bật Chúng Tôi Cung Cấp
            </motion.a>
          </div>

          <div className="text-gray-700 text-sm md:text-base leading-relaxed"></div>

          {/* Cột 3 - Nút mũi tên */}
          <div className="flex justify-center md:justify-end gap-4">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            >
              <ArrowRight className="w-6 h-6 text-gray-600 " />
            </motion.button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 cursor-pointer"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 z-10"></div>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl opacity-20">{service.icon}</div>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {service.price}
                </div>

                {/* Service Icon */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-red-500">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="pt-8 px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Dịch vụ bao gồm:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <svg
                          className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-2">
                  <Link
                    href="/contact"
                    className="flex-1 bg-red-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition-colors text-sm"
                  >
                    Liên hệ ngay
                  </Link>
                  <Link
                    href={service.href}
                    className="flex-1 border border-red-500 text-red-500 text-center py-2 px-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-sm"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="text-center mt-16">
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

              <h3 className="text-3xl font-extrabold mb-4 drop-shadow-sm text-red-600">
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
                  href="tel:0966814094"
                  className="flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  <PhoneCall className="w-6 h-6" /> 0966.814.094
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
      </div>
    </section>
  );
}
