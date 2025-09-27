"use client";
import React from "react";
import { Phone, MapPin, Building2, Star } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 shadow-2xl">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Để nhận{" "}
              <span className="font-bold text-yellow-300">
                báo giá tốt nhất
              </span>{" "}
              và dịch vụ{" "}
              <span className="font-bold text-yellow-300">chuyên nghiệp</span>!
            </p>

            {/* Hotlines */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-yellow-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-6 h-6" /> 0979 821 293
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-yellow-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-6 h-6" /> 0988 392 334
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-red-100">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300 fill-current" />
                <span className="font-semibold">5+ Năm kinh nghiệm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-300 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="font-semibold">Bảo hành chính hãng</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-300" />
                <span className="font-semibold">Thiết bị chuyên nghiệp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Thông tin liên hệ
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn. Hãy liên hệ
                  ngay để được phục vụ tốt nhất!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Điện thoại
                    </h3>
                    <div className="space-y-1">
                      <a
                        href="#"
                        className="block text-red-600 hover:text-red-700 font-semibold"
                      >
                        0979 821 293
                      </a>
                      <a
                        href="#"
                        className="block text-red-600 hover:text-red-700 font-semibold"
                      >
                        0988 392 334
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm">Hỗ trợ 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Địa chỉ
                    </h3>
                    <p className="text-gray-700">
                      Dịch vụ di động - Đến tận nơi
                      <br />
                      Phủ Lý, Hà Nam và các tỉnh lân cận
                    </p>
                    <p className="text-gray-600 text-sm">
                      Phục vụ 24/7 mọi nơi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action - Phone Only */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Gọi ngay để được tư vấn miễn phí
                  </h2>
                  <p className="text-lg text-gray-600">
                    Chúng tôi chỉ nhận tư vấn qua điện thoại để đảm bảo chất
                    lượng dịch vụ tốt nhất
                  </p>
                </div>

                {/* Hotlines */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                      href="#"
                      className="flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold text-xl hover:from-red-700 hover:to-red-800 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
                    >
                      <Phone className="w-6 h-6" />
                      <div className="text-left">
                        <p className="text-sm opacity-90">Hotline 1</p>
                        <p className="text-lg">0979 821 293</p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold text-xl hover:from-red-700 hover:to-red-800 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
                    >
                      <Phone className="w-6 h-6" />
                      <div className="text-left">
                        <p className="text-sm opacity-90">Hotline 2</p>
                        <p className="text-lg">0988 392 334</p>
                      </div>
                    </a>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">
                      Tại sao chỉ nhận tư vấn qua điện thoại?
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-left">
                      <li>
                        • Tư vấn trực tiếp, chính xác theo nhu cầu thực tế
                      </li>
                      <li>• Báo giá ngay lập tức, không cần chờ đợi</li>
                      <li>• Hướng dẫn sử dụng và bảo dưỡng chi tiết</li>
                      <li>• Đặt lịch hẹn sửa chữa ngay trong cuộc gọi</li>
                      <li>• Hỗ trợ khẩn cấp 24/7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Khu vực phục vụ của chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Dịch vụ di động - Chúng tôi đến tận nơi phục vụ khách hàng
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-[500px]">
              <iframe
                title="Google Maps - Khu vực phục vụ Hà Nam và các tỉnh lân cận"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.234442158263!2d105.974!3d20.253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135%3A0x0!2zTmloIELDrG5o!5e0!3m2!1svi!2s!4v1695611111111"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Dịch vụ di động - Đến tận nơi
                  </h3>
                  <p className="text-gray-600">
                    Phục vụ tại Phủ Lý, Hà Nam và các tỉnh lân cận
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                      #dienlanhdiđong
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                      #dienthanhanam
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                      #suachuadienlanh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hà Nam Wards Section - SEO Optimized */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dịch vụ điện lạnh tại 16 phường Hà Nam
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Chúng tôi phục vụ tất cả{" "}
              <strong>16 phường của tỉnh Hà Nam</strong> sau sáp nhập với dịch
              vụ sửa chữa, lắp đặt điện lạnh di động chuyên nghiệp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Duy Tiên</h3>
              <p className="text-sm text-gray-600">
                Sửa chữa điều hòa, tủ lạnh, máy giặt
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Duy Tân</h3>
              <p className="text-sm text-gray-600">
                Lắp đặt máy lạnh, bảo dưỡng hệ thống
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Đồng Văn</h3>
              <p className="text-sm text-gray-600">
                Dịch vụ điện lạnh công nghiệp
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Duy Hà</h3>
              <p className="text-sm text-gray-600">Sửa chữa tại nhà 24/7</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Tiên Sơn</h3>
              <p className="text-sm text-gray-600">
                Tư vấn thiết kế hệ thống lạnh
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Lê Hồ</h3>
              <p className="text-sm text-gray-600">
                Bảo dưỡng định kỳ, sửa chữa khẩn cấp
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Nguyễn Úy</h3>
              <p className="text-sm text-gray-600">
                Thay thế linh kiện chính hãng
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">
                Phường Lý Thường Kiệt
              </h3>
              <p className="text-sm text-gray-600">
                Dịch vụ điện lạnh dân dụng
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Kim Thanh</h3>
              <p className="text-sm text-gray-600">Lắp đặt điều hòa mới</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Tam Chúc</h3>
              <p className="text-sm text-gray-600">
                Sửa chữa máy giặt, tủ lạnh
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Kim Bảng</h3>
              <p className="text-sm text-gray-600">
                Bảo hành chính hãng 12 tháng
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Hà Nam</h3>
              <p className="text-sm text-gray-600">
                Dịch vụ di động nhanh chóng
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Phù Vân</h3>
              <p className="text-sm text-gray-600">Tư vấn lựa chọn thiết bị</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Châu Sơn</h3>
              <p className="text-sm text-gray-600">
                Sửa chữa điều hòa inverter
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Phường Phủ Lý</h3>
              <p className="text-sm text-gray-600">Trung tâm dịch vụ chính</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">
                Phường Liêm Tuyền
              </h3>
              <p className="text-sm text-gray-600">
                Hỗ trợ kỹ thuật chuyên nghiệp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Local Keywords Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dịch vụ điện lạnh di động chuyên nghiệp
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Chúng tôi cung cấp dịch vụ sửa chữa, lắp đặt điện lạnh di động uy
              tín tại
              <strong> Hà Nam, Nam Định, Ninh Bình</strong> và các tỉnh lân cận.
              Đội ngũ kỹ thuật viên giàu kinh nghiệm với thiết bị di động hiện
              đại.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Khu vực phục vụ di động
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Hà Nam</strong> - 16 phường sau sáp nhập:
                </li>
                <li className="ml-4 text-sm">
                  Phường Duy Tiên, Duy Tân, Đồng Văn, Duy Hà, Tiên Sơn, Lê Hồ,
                  Nguyễn Úy, Lý Thường Kiệt, Kim Thanh, Tam Chúc, Kim Bảng, Hà
                  Nam, Phù Vân, Châu Sơn, Phủ Lý, Liêm Tuyền
                </li>
                <li>
                  • <strong>Nam Định</strong> (Nam Định, Mỹ Lộc, Vụ Bản...)
                </li>
                <li>
                  • <strong>Ninh Bình</strong> (Ninh Bình, Tam Điệp, Hoa Lư...)
                </li>
                <li>
                  • <strong>Thái Bình</strong> (Thái Bình, Quỳnh Phụ...)
                </li>
                <li>• Các tỉnh lân cận khác</li>
                <li>• Dịch vụ 24/7 mọi nơi</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
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

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Ưu điểm dịch vụ di động
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bảo hành chính hãng 12 tháng</li>
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

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cần hỗ trợ khẩn cấp?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Gọi ngay hotline để được hỗ trợ 24/7 - Chúng tôi đến tận nơi phục vụ
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:0979821293"
              className="flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-yellow-50 hover:scale-105 transition-all shadow-xl"
            >
              <Phone className="w-6 h-6" />
              0979 821 293
            </a>
            <a
              href="tel:0988392334"
              className="flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-yellow-50 hover:scale-105 transition-all shadow-xl"
            >
              <Phone className="w-6 h-6" />
              0988 392 334
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
