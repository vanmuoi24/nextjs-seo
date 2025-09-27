import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              THỢ ĐIỆN NƯỚC NINH BÌNH - HÀ NAM
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Phục vụ khu vực Tỉnh Ninh Bình, Hà Nam và vùng lân cận. Hỗ trợ kỹ
              thuật nhanh tại Phường Hà Nam, Tỉnh Ninh Bình. Nhận phục vụ tại
              nhà & xưởng sản xuất – có mặt nhanh theo lịch hẹn.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="https://diencongnghiep.store/"
                  className="hover:text-white"
                >
                  diencongnghiep.store
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.thodienhanam.store"
                  className="hover:text-white"
                >
                  thodienhanam.store
                </Link>
              </li>
              <li>📞 0979 821 293</li>
              <li>📞 0988 392 334</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cam kết</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Có mặt tận nơi – Hỗ trợ tận tâm – An toàn là trên hết</li>
              <li>✔ Nhanh chóng – Uy tín – Giá hợp lý</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kết nối</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/tho.dien.nuoc.hanam.ninhbinh/?_rdc=1&_rdr#"
                className="hover:text-blue-400 transition-colors"
              >
                Facebook
              </Link>
              <Link href="#" className="hover:text-pink-400 transition-colors">
                Instagram
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>
            © 2024 THỢ LẮP ĐẶT SỬA CHỮA ĐIỆN NƯỚC – Ninh Bình & Hà Nam. Mọi
            quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
