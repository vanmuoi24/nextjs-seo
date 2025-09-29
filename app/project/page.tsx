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
import { X } from "lucide-react";

const fadeInUp: { hidden: any; show: any } = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
    } as Transition,
  },
};

const projects = [
  {
    title: "Lắp đặt hệ thống điện lạnh cho khách sạn",
    desc: "Hoàn thiện hệ thống điều hòa âm trần và kho lạnh bảo quản thực phẩm.",
    img: anh1,
  },
  {
    title: "Sửa chữa điện dân dụng toàn nhà",
    desc: "Đi lại dây điện âm tường, thay thế aptomat và ổ cắm an toàn.",
    img: anh2,
  },
  {
    title: "Thi công hệ thống điện nước văn phòng",
    desc: "Lắp đặt điện chiếu sáng, hệ thống nước cho văn phòng 5 tầng.",
    img: anh3,
  },
];

const gallery = [anh1, anh2, anh3, anh4, anh5, anh7, anh8, anh9, anh10, anh11];

const ProjectsPage = () => {
  const [previewImg, setPreviewImg] = useState<any | null>(null);
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16 cursor-pointer">
        {/* Tiêu đề */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Những công trình tiêu biểu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi đã hoàn thành nhiều dự án điện – điện lạnh – điện nước,
            mang lại sự hài lòng cho khách hàng từ nhà dân, văn phòng đến nhà
            máy.
          </p>
        </motion.div>

        {/* Grid dự án */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery ảnh thực tế */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Hình ảnh công trình đã thực hiện
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Một số hình ảnh thực tế trong quá trình thi công và hoàn thiện.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              onClick={() => setPreviewImg(img)}
              className="relative h-52 w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Image
                src={img}
                alt={`Hình ảnh công trình ${idx + 1}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
            >
              <X className="w-6 h-6 text-gray-800 cursor-pointer" />
            </button>
            <Image
              src={previewImg}
              alt="Preview"
              className="rounded-lg object-contain mx-auto"
              width={800}
              height={600}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
