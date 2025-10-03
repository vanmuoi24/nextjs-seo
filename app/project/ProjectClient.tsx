"use client";
import React, { useState } from "react";
import { motion, Transition } from "framer-motion";
import Image from "next/image";
import anh1 from "../../public/z7053211018381_666543c57c2d4e72fd44d25e1fe11d16.jpg";
import anh2 from "../../public/z7053211012359_dea13f2e062fcbfcc4c4d3ca2746fb4e.jpg";
import anh3 from "../../public/z7053211006095_5dc21856d5168a622ed38141b3b62ecc.jpg";
import anh4 from "../../public/z7053211006095_5dc21856d5168a622ed38141b3b62ecc.jpg";
import anh5 from "../../public/z7053211001216_3e54d71f0e43dc7aa26d451aa930019e.jpg";
import anh7 from "../../public/z7053210982565_ba8e6b8a683ec4fa8b4a8c23ab0c6443.jpg";
import anh8 from "../../public/z7053210981045_eb97fab33e8c3da12736c006a68c9363.jpg";
import anh9 from "../../public/z7053210972441_5811749920675edc8f10c09b865f9855.jpg";
import anh10 from "../../public/z7053210964192_d7949568525a4b00dc5851e94360db94.jpg";
import anh11 from "../../public/z7053210963248_328ef43715efa05c5b865e9d44f53d40.jpg";
import anh12 from "../../public/z7053210987975_4bfe3bc4b78f5da157d78544afc33922.jpg";

const fadeInUp: { hidden: any; show: any } = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    } as Transition,
  },
};

const fadeInLeft: { hidden: any; show: any } = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    } as Transition,
  },
};

const fadeInRight: { hidden: any; show: any } = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    } as Transition,
  },
};

export default function ProjectClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Sửa chữa tủ điện công nghiệp",
      category: "dien-cong-nghiep",
      image: anh1,
      description: "Dự án sửa chữa tủ điện công nghiệp tại nhà máy Ninh Bình",
      location: "Ninh Bình",
    },
    {
      id: 2,
      title: "Lắp đặt hệ thống điện dân dụng",
      category: "dien-dan-dung",
      image: anh2,
      description: "Lắp đặt hệ thống điện cho nhà dân tại Hà Nam",
      location: "Hà Nam",
    },
    {
      id: 3,
      title: "Sửa chữa điều hòa không khí",
      category: "dien-lanh",
      image: anh3,
      description: "Sửa chữa điều hòa cho văn phòng tại Ninh Bình",
      location: "Ninh Bình",
    },
    {
      id: 4,
      title: "Bảo trì hệ thống điện nhà xưởng",
      category: "dien-cong-nghiep",
      image: anh4,
      description: "Bảo trì định kỳ hệ thống điện nhà xưởng",
      location: "Hà Nam",
    },
    {
      id: 5,
      title: "Sửa chữa tủ lạnh",
      category: "dien-lanh",
      image: anh5,
      description: "Sửa chữa tủ lạnh cho gia đình tại Ninh Bình",
      location: "Ninh Bình",
    },
    {
      id: 6,
      title: "Lắp đặt hệ thống điện mới",
      category: "dien-dan-dung",
      image: anh7,
      description: "Lắp đặt hệ thống điện cho nhà mới xây",
      location: "Hà Nam",
    },
    {
      id: 7,
      title: "Sửa chữa máy giặt",
      category: "dien-lanh",
      image: anh8,
      description: "Sửa chữa máy giặt cho khách hàng tại Ninh Bình",
      location: "Ninh Bình",
    },
    {
      id: 8,
      title: "Cải tạo hệ thống điện công nghiệp",
      category: "dien-cong-nghiep",
      image: anh9,
      description: "Cải tạo và nâng cấp hệ thống điện công nghiệp",
      location: "Hà Nam",
    },
    {
      id: 9,
      title: "Sửa chữa ổ cắm, công tắc",
      category: "dien-dan-dung",
      image: anh10,
      description: "Sửa chữa ổ cắm, công tắc cho nhà dân",
      location: "Ninh Bình",
    },
    {
      id: 10,
      title: "Lắp đặt điều hòa mới",
      category: "dien-lanh",
      image: anh11,
      description: "Lắp đặt điều hòa mới cho văn phòng",
      location: "Hà Nam",
    },
    {
      id: 11,
      title: "Sửa chữa CB, aptomat",
      category: "dien-dan-dung",
      image: anh12,
      description: "Sửa chữa CB, aptomat cho nhà dân",
      location: "Ninh Bình",
    },
  ];

  const categories = [
    { id: "all", name: "Tất cả", count: projects.length },
    {
      id: "dien-dan-dung",
      name: "Điện dân dụng",
      count: projects.filter((p) => p.category === "dien-dan-dung").length,
    },
    {
      id: "dien-cong-nghiep",
      name: "Điện công nghiệp",
      count: projects.filter((p) => p.category === "dien-cong-nghiep").length,
    },
    {
      id: "dien-lanh",
      name: "Điện lạnh",
      count: projects.filter((p) => p.category === "dien-lanh").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Dự Án Đã Thực Hiện
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Khám phá những dự án sửa điện chuyên nghiệp mà chúng tôi đã thực
              hiện tại Ninh Bình & Hà Nam
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Liên hệ ngay
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Xem dịch vụ
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-6 lg:px-12 py-16">
        {/* Filter Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Lọc theo loại dự án
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    📍 {project.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Thành Tích Dự Án</h2>
            <p className="text-red-100">
              Những con số ấn tượng trong hơn 15 năm hoạt động
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Dự án hoàn thành" },
              { number: "5000+", label: "Khách hàng hài lòng" },
              { number: "15+", label: "Năm kinh nghiệm" },
              { number: "100%", label: "Tỷ lệ thành công" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 bg-white rounded-2xl p-8 text-center shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Bạn Có Dự Án Tương Tự?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn miễn phí và báo giá chi tiết cho dự án
            của bạn
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Liên hệ ngay
            </a>
            <a
              href="tel:0979821293"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Gọi: 0979 821 293
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
