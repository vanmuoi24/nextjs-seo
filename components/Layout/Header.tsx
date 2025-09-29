"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.jpeg";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a route is active
  const isActiveRoute = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="">
      {/* Top Bar - Thông tin liên hệ */}
      <div className="hidden md:block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-3 px-14  shadow">
        <div className="w-full mx-auto">
          <div className="flex justify-between items-center">
            {/* Left side - Contact info */}
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium">Ninh Bình - Hà Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <FaPhone className="w-4 h-4 text-white" />
                </div>
                <a
                  href="tel:0785689211"
                  className="font-medium hover:text-red-300"
                >
                  0785.689.211
                </a>
              </div>
            </div>

            {/* Right side - Social media */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-300">Theo dõi chúng tôi:</span>
              <div className="flex gap-2">
                {/* Social links */}
                <div className="flex gap-2">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/tho.dien.nuoc.hanam.ninhbinh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 
      5.373-12 12c0 5.99 4.388 10.954 10.125 
      11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
      1.792-4.669 4.533-4.669 1.312 0 2.686.235 
      2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 
      1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
      23.027 24 18.062 24 12.073z"
                      />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@thodienhanam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.005 3.005 0 00-2.116-2.127C19.61 3.5 12 3.5 12 3.5s-7.61 0-9.382.559A3.005 3.005 0 00.502 6.186C0 7.965 0 12 0 12s0 4.035.502 5.814a3.005 3.005 0 002.116 2.127C4.39 20.5 12 20.5 12 20.5s7.61 0 9.382-.559a3.005 3.005 0 002.116-2.127C24 16.035 24 12 24 12s0-4.035-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@thodienhanam"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 011.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}

      <nav
        className={`bg-white  border-none  duration-500 ease-in-out  mx-auto px-6 shadow-md
    ${
      isScrolled
        ? "fixed top-0 left-0 w-full shadow-red-500 shadow-md z-50 opacity-100 translate-y-0"
        : "relative  -translate-y-2 "
    }`}
      >
        <div className="container mx-auto px-4 lg:px-8 ">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={logo}
                    alt="Logo Thợ Điện"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  THỢ ĐIỆN
                </h1>
                <p className="text-xs text-gray-500 font-medium -mt-1">
                  Chuyên nghiệp - Uy tín - Giá rẻ
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                  isActiveRoute("/")
                    ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                aria-current={isActiveRoute("/") ? "page" : undefined}
              >
                Trang chủ
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                  isActiveRoute("/about")
                    ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                aria-current={isActiveRoute("/about") ? "page" : undefined}
              >
                Giới thiệu
              </Link>

              <Link
                href="/services"
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                  isActiveRoute("/services")
                    ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                aria-current={isActiveRoute("/services") ? "page" : undefined}
              >
                Dịch vụ
              </Link>

              <Link
                href="/project"
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                  isActiveRoute("/project")
                    ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                aria-current={isActiveRoute("/project") ? "page" : undefined}
              >
                Dự án
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                  isActiveRoute("/contact")
                    ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                aria-current={isActiveRoute("/contact") ? "page" : undefined}
              >
                Liên hệ
              </Link>
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-4 cursor-pointer">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-xl animate-shake" />
                </div>
                <div>
                  <p className="text-xs font-medium opacity-90">Hotline 24/7</p>
                  <a
                    href="tel:0785689211"
                    className="text-sm font-bold hover:text-red-200"
                  >
                    0785.689.211
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className={`px-4 py-3 font-semibold rounded-lg transition-all duration-200 ${
                    isActiveRoute("/")
                      ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute("/") ? "page" : undefined}
                >
                  Trang chủ
                </Link>
                <Link
                  href="/about"
                  className={`px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                    isActiveRoute("/about")
                      ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute("/about") ? "page" : undefined}
                >
                  Giới thiệu
                </Link>
                <Link
                  href="/services"
                  className={`px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                    isActiveRoute("/services")
                      ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute("/services") ? "page" : undefined}
                >
                  Dịch vụ
                </Link>
                <Link
                  href="/project"
                  className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                    isActiveRoute("/project")
                      ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                  aria-current={isActiveRoute("/project") ? "page" : undefined}
                >
                  Dự án
                </Link>
                <Link
                  href="/contact"
                  className={`px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                    isActiveRoute("/contact")
                      ? "text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveRoute("/contact") ? "page" : undefined}
                >
                  Liên hệ
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="hidden md:flex items-center space-x-4 cursor-pointer">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-opacity-20 rounded-full flex items-center justify-center">
                    <FaPhone className="text-xl animate-shake" />
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-90">
                      Hotline 24/7
                    </p>
                    <a
                      href="tel:0785689211"
                      className="text-sm font-bold hover:text-red-200"
                    >
                      0785.689.211
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
