"use client";
import React from "react";
import { Phone, MapPin, Star, Clock, Shield, Users } from "lucide-react";

export default function ContactClient() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner - Đỏ như trong hình */}
      <section className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Để nhận{" "}
            <span className="text-yellow-300 font-bold">báo giá tốt nhất</span>{" "}
            và{" "}
            <span className="text-yellow-300 font-bold">
              dịch vụ chuyên nghiệp
            </span>
            !
          </p>

          {/* Phone Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:0979821293"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              <Phone className="w-6 h-6" />
              0979 821 293
            </a>
            <a
              href="tel:0988392334"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              <Phone className="w-6 h-6" />
              0988 392 334
            </a>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">5+ Năm kinh nghiệm</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">Bảo hành 3–6 tháng</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Thiết bị chuyên nghiệp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - 2 cột như trong hình */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Thông tin liên hệ */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Thông tin liên hệ
                </h2>
                <p className="text-gray-600 mb-6">
                  Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn. Hãy liên hệ
                  ngay để được phục vụ tốt nhất!
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Điện thoại</h3>
                        <div className="text-red-600 font-semibold">
                          <p>0979 821 293</p>
                          <p>0988 392 334</p>
                        </div>
                        <p className="text-gray-500 text-sm">Hỗ trợ 24/7</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Địa chỉ</h3>
                        <p className="text-gray-600">
                          Dịch vụ di động - Đến tận nơi
                        </p>
                        <p className="text-gray-600">
                          Phủ Lý, Hà Nam và các tỉnh lân cận
                        </p>
                        <p className="text-gray-600">Phục vụ 24/7 mọi nơi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Gọi ngay để được tư vấn */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Gọi ngay để được tư vấn miễn phí
                </h2>
                <p className="text-gray-600 mb-6">
                  Chúng tôi chỉ nhận tư vấn qua điện thoại để đảm bảo chất lượng
                  dịch vụ tốt nhất
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:0979821293"
                    className="block w-full bg-red-600 text-white py-4 px-6 rounded-lg font-bold text-center hover:bg-red-700 transition"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Hotline 1: 0979 821 293
                    </div>
                  </a>
                  <a
                    href="tel:0988392334"
                    className="block w-full bg-red-600 text-white py-4 px-6 rounded-lg font-bold text-center hover:bg-red-700 transition"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Hotline 2: 0988 392 334
                    </div>
                  </a>
                </div>

                {/* Tại sao chỉ nhận tư vấn qua điện thoại */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">
                    Tại sao chỉ nhận tư vấn qua điện thoại?
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>
                        Tư vấn trực tiếp, chính xác theo nhu cầu thực tế
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Báo giá ngay lập tức, không cần chờ đợi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Hướng dẫn sử dụng và bảo dưỡng chi tiết</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Đặt lịch hẹn sửa chữa ngay trong cuộc gọi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Hỗ trợ khẩn cấp 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Khu vực phục vụ với Google Maps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="border-t-4 border-red-600 mb-8"></div>
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Khu vực phục vụ của chúng tôi.
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Dịch vụ di động - Chúng tôi đến tận nơi phục vụ khách hàng
          </p>

          {/* Google Maps */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239125.28057872734!2d105.81113525701713!3d20.533571787812246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c511181964e1%3A0x74a9b90d3b326852!2zSMOgIE5hbSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1759500917008!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ khu vực Hà Nam"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Dịch vụ điện lạnh tại 16 phường Hà Nam */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Dịch vụ điện lạnh tại 16 phường Hà Nam
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Chúng tôi phục vụ tất cả 16 phường của tỉnh Hà Nam sau sáp nhập với
            dịch vụ sửa chữa, lắp đặt điện lạnh di động chuyên nghiệp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                ward: "Phường Duy Tiên",
                service: "Sửa chữa điều hòa, tủ lạnh, máy giặt",
              },
              {
                ward: "Phường Duy Tân",
                service: "Lắp đặt máy lạnh, bảo dưỡng hệ thống",
              },
              {
                ward: "Phường Đồng Văn",
                service: "Dịch vụ điện lạnh công nghiệp",
              },
              { ward: "Phường Duy Hà", service: "Sửa chữa tại nhà 24/7" },
              {
                ward: "Phường Tiên Sơn",
                service: "Tư vấn thiết kế hệ thống lạnh",
              },
              {
                ward: "Phường Lê Hồ",
                service: "Bảo dưỡng định kỳ, sửa chữa khẩn cấp",
              },
              {
                ward: "Phường Nguyễn Úy",
                service: "Thay thế linh kiện chính hãng",
              },
              {
                ward: "Phường Lý Thường Kiệt",
                service: "Dịch vụ điện lạnh dân dụng",
              },
              { ward: "Phường Kim Thanh", service: "Lắp đặt điều hòa mới" },
              {
                ward: "Phường Tam Chúc",
                service: "Sửa chữa máy giặt, tủ lạnh",
              },
              { ward: "Phường Kim Bảng", service: "Bảo hành 3–6 tháng" },
              { ward: "Phường Hà Nam", service: "Dịch vụ di động nhanh chóng" },
              { ward: "Phường Phù Vân", service: "Tư vấn lựa chọn thiết bị" },
              {
                ward: "Phường Châu Sơn",
                service: "Sửa chữa điều hòa inverter",
              },
              { ward: "Phường Phủ Lý", service: "Trung tâm dịch vụ chính" },
              {
                ward: "Phường Liêm Tuyền",
                service: "Hỗ trợ kỹ thuật chuyên nghiệp",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.ward}</h3>
                <p className="text-gray-600 text-sm">{item.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dịch vụ điện lạnh di động chuyên nghiệp */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Dịch vụ điện lạnh di động chuyên nghiệp
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Chúng tôi cung cấp dịch vụ sửa chữa, lắp đặt điện lạnh di động uy
            tín tại Hà Nam, Nam Định, Ninh Bình và các tỉnh lân cận. Đội ngũ kỹ
            thuật viên giàu kinh nghiệm với thiết bị di động hiện đại.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Khu vực phục vụ di động */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Khu vực phục vụ di động
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Hà Nam:</strong> 16 phường sau sáp nhập
                </li>
                <li>
                  <strong>Nam Định:</strong> Nam Định, Mỹ Lộc, Vụ Bản...
                </li>
                <li>
                  <strong>Ninh Bình:</strong> Ninh Bình, Tam Điệp, Hoa Lư...
                </li>
                <li>
                  <strong>Thái Bình:</strong> Thái Bình, Quỳnh Phụ...
                </li>
                <li>Các tỉnh lân cận khác</li>
                <li className="text-red-600 font-semibold">
                  Dịch vụ 24/7 mọi nơi
                </li>
              </ul>
            </div>

            {/* Dịch vụ di động chuyên môn */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Dịch vụ di động chuyên môn
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sửa chữa điều hòa tại nhà</li>
                <li>• Lắp đặt máy lạnh di động</li>
                <li>• Bảo dưỡng tủ lạnh tại chỗ</li>
                <li>• Sửa chữa máy giặt di động</li>
                <li>• Dịch vụ điện lạnh công nghiệp</li>
                <li>• Tư vấn thiết kế hệ thống lạnh</li>
              </ul>
            </div>

            {/* Ưu điểm dịch vụ di động */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Ưu điểm dịch vụ di động
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bảo hành 3-6 tháng</li>
                <li>• Phụ kiện chính hãng 100%</li>
                <li>• Giá cả cạnh tranh nhất khu vực</li>
                <li>• Hỗ trợ 24/7 mọi nơi</li>
                <li>• Đến tận nơi nhanh chóng</li>
                <li>• Thiết bị di động hiện đại</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
