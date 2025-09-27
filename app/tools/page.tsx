import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Công cụ SEO - Bộ công cụ tối ưu hóa website",
  description:
    "Khám phá bộ công cụ SEO chuyên nghiệp: nghiên cứu từ khóa, kiểm tra backlink, phân tích đối thủ và theo dõi thứ hạng.",
  keywords: [
    "công cụ SEO",
    "nghiên cứu từ khóa",
    "kiểm tra backlink",
    "phân tích đối thủ",
    "theo dõi thứ hạng",
  ],
};

export default function ToolsPage() {
  const tools = [
    {
      title: "Nghiên cứu từ khóa",
      description: "Tìm kiếm và phân tích từ khóa hiệu quả để tăng traffic",
      href: "/tools/keyword-research",
      icon: "🔍",
      features: [
        "Tìm từ khóa long-tail",
        "Phân tích độ khó",
        "Gợi ý từ khóa liên quan",
      ],
    },
    {
      title: "Kiểm tra Backlink",
      description: "Phân tích và theo dõi backlink để xây dựng authority",
      href: "/tools/backlink-checker",
      icon: "🔗",
      features: [
        "Kiểm tra backlink dofollow/nofollow",
        "Phân tích domain authority",
        "Theo dõi backlink mới",
      ],
    },
    {
      title: "Phân tích đối thủ",
      description: "Nghiên cứu chiến lược SEO của đối thủ cạnh tranh",
      href: "/tools/competitor-analysis",
      icon: "📊",
      features: [
        "Phân tích từ khóa đối thủ",
        "So sánh backlink profile",
        "Đánh giá content strategy",
      ],
    },
    {
      title: "Kiểm tra Website",
      description: "Audit toàn diện website để tối ưu hóa SEO",
      href: "/tools/site-audit",
      icon: "🔧",
      features: [
        "Kiểm tra technical SEO",
        "Phân tích content quality",
        "Đề xuất cải thiện",
      ],
    },
    {
      title: "Theo dõi thứ hạng",
      description: "Giám sát vị trí website trên Google",
      href: "/tools/rank-tracker",
      icon: "📈",
      features: [
        "Theo dõi thứ hạng từ khóa",
        "Báo cáo thay đổi",
        "Phân tích xu hướng",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Công cụ SEO chuyên nghiệp
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bộ công cụ SEO toàn diện giúp bạn tối ưu hóa website, nghiên cứu từ
            khóa, phân tích đối thủ và theo dõi thứ hạng trên Google một cách
            hiệu quả.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {tool.title}
              </h2>
              <p className="text-gray-600 mb-4">{tool.description}</p>

              <ul className="mb-6 space-y-2">
                {tool.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={tool.href}
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sử dụng công cụ
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tại sao chọn công cụ SEO của chúng tôi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nhanh chóng
              </h3>
              <p className="text-gray-600">
                Kết quả phân tích được trả về trong vài giây
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chính xác
              </h3>
              <p className="text-gray-600">
                Dữ liệu được cập nhật liên tục và đáng tin cậy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dễ sử dụng
              </h3>
              <p className="text-gray-600">
                Giao diện thân thiện, không cần kiến thức kỹ thuật
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
