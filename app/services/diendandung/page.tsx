"use client";
import React from "react";
import Script from "next/script";
import { motion, Transition } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import diendd from "../../../public/z7057416444686_424798481365a586cb005327a0f17ea7.jpg";
// ...existing code...
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

const DienDanDungPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen antialiased">
      {/* FAQ Schema for SEO */}
      <Script id="faq-json-ld-diendandung" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Ổ cắm bị chập chờn do đâu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Thường do tiếp xúc kém, oxy hóa chân cắm hoặc dây dẫn lỏng. Kỹ thuật sẽ xử lý và thay thế khi cần.",
              },
            },
            {
              "@type": "Question",
              name: "Có bảo hành không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tùy hạng mục công việc, dịch vụ được bảo hành 3–6 tháng sau sửa chữa.",
              },
            },
            {
              "@type": "Question",
              name: "Bao lâu thợ có mặt?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Thông thường có mặt sau khoảng 30 phút trong khu vực phục vụ.",
              },
            },
          ],
        })}
      </Script>

      {/* Top bar */}

      {/* Banner */}
      <div className="relative h-[420px] overflow-hidden">
        {/* Ảnh nền */}
        <Image
          src={diendd}
          alt="Dịch vụ sửa điện dân dụng"
          fill
          className="object-cover object-center"
        />

        {/* Overlay mờ để chữ nổi hơn */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Nội dung */}
        <div className="absolute inset-0 flex items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="container mx-auto px-6 lg:px-12"
          >
            <div className="max-w-4xl text-white text-center mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-balance">
                Sửa điện dân dụng nhanh — An toàn — Giá rõ ràng
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Phục vụ Ninh Bình &amp; Hà Nam. Có mặt ~30 phút, làm việc cả
                cuối tuần, bảo hành sau sửa.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-red-600 px-5 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
                >
                  <Phone className="w-5 h-5" /> Gọi ngay: 0979 821 293
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-red-500/20 transition font-medium"
                >
                  Xem dịch vụ
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="container mx-auto px-6 lg:px-12 py-14 space-y-14">
        {/* Intro */}
        <motion.section
          id="intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <div className="md:flex md:items-center md:justify-between gap-8">
            <div className="md:flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Cần thợ sửa điện tại Ninh Bình &amp; Hà Nam?
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Nhận sửa hệ thống điện gia đình: ổ cắm, công tắc, CB, chập cháy,
                rò điện, đi dây mới, cân pha, chống giật. Báo giá minh bạch, có
                hóa đơn và bảo hành công việc.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:w-80 p-4 rounded-lg bg-gradient-to-r from-gray-100 to-white shadow">
              <div className="text-sm text-gray-500">Phục vụ</div>
              <div className="text-xl font-semibold mt-1">
                Nội &amp; ngoại thành
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href="#"
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-center font-semibold"
                >
                  0979.821.293
                </a>
                <a
                  href="#"
                  className="flex-1 px-4 py-2 border rounded-lg text-center"
                >
                  0988.392.334
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-4">Dịch vụ nổi bật</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <motion.article
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition flex gap-4 items-start border-l-4 border-red-600"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-md text-red-600">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="text-gray-800">{item}</div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          id="process"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-4">
            Quy trình đơn giản, minh bạch
          </h3>
          <ol className="grid md:grid-cols-4 gap-4 text-gray-700">
            {[
              "Tiếp nhận & tư vấn nhanh",
              "Khảo sát — có mặt ~30 phút",
              "Báo giá & xử lý chuyên nghiệp",
              "Bàn giao – nghiệm thu – bảo hành",
            ].map((step, i) => (
              <li
                key={i}
                className="
    p-5 
    rounded-2xl 
    bg-white/90 
    shadow-md 
    border border-red-100 
    hover:shadow-xl 
    hover:shadow-red-200 
    hover:scale-[1.03] 
    transition 
    duration-300 cursor-pointer
    ease-out
  "
              >
                <div className="text-xs uppercase tracking-wide text-black-500">
                  Bước {i + 1}
                </div>
                <div className="font-semibold mt-2 text-gray-800">{step}</div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Gallery */}
        <motion.section
          id="gallery"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-6">Hình ảnh thực tế</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/z7053210963248_328ef43715efa05c5b865e9d44f53d40.jpg",
              "/z7053210964192_d7949568525a4b00dc5851e94360db94.jpg",
              "/z7053210972441_5811749920675edc8f10c09b865f9855.jpg",
              "/z7053211006095_5dc21856d5168a622ed38141b3b62ecc.jpg",
              "/z7053211018381_666543c57c2d4e72fd44d25e1fe11d16.jpg",
              "/z7053211001216_3e54d71f0e43dc7aa26d451aa930019e.jpg",
            ].map((src, i) => (
              <figure
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Hình ảnh sửa điện ${i + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold">Cần hỗ trợ ngay?</h3>
            <p className="text-white/90 mt-2">
              Gọi đội ngũ kỹ thuật chuyên nghiệp, xử lý nhanh, an toàn và có bảo
              hành.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="px-5 py-3 rounded-lg bg-white text-red-600 font-semibold shadow"
            >
              Gọi 0979 821 293
            </a>
            <a
              href="#"
              className="px-5 py-3 rounded-lg border border-white/30 text-white"
            >
              Gọi 0988 392 334
            </a>
          </div>
        </motion.section>
      </main>

      {/* Floating contact */}
      <a
        href="#"
        aria-label="Gọi ngay"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 bg-red-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Gọi ngay</span>
      </a>
    </div>
  );
};

export default DienDanDungPage;
// ...existing code...
