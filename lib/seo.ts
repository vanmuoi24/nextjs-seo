export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const defaultSEO: SEOConfig = {
  title: "SEO App - Công cụ SEO chuyên nghiệp",
  description:
    "Công cụ SEO toàn diện giúp tối ưu hóa website, nghiên cứu từ khóa, phân tích đối thủ và theo dõi thứ hạng trên Google.",
  keywords: [
    "SEO",
    "tối ưu hóa công cụ tìm kiếm",
    "Google SEO",
    "nghiên cứu từ khóa",
    "backlink",
    "phân tích đối thủ",
    "theo dõi thứ hạng",
    "SEO tools",
    "công cụ SEO",
    "marketing online",
  ],
  ogImage: "/og-image.jpg",
  canonical: "https://your-domain.com",
};

export const generatePageSEO = (pageConfig: Partial<SEOConfig>): SEOConfig => {
  return {
    ...defaultSEO,
    ...pageConfig,
    keywords: pageConfig.keywords || defaultSEO.keywords,
  };
};

export const structuredData = {
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SEO App",
    description: "Công cụ SEO chuyên nghiệp",
    url: "https://your-domain.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://your-domain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SEO App",
    url: "https://your-domain.com",
    logo: "https://your-domain.com/logo.png",
    description: "Công cụ SEO chuyên nghiệp",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-123-456-789",
      contactType: "customer service",
      availableLanguage: "Vietnamese",
    },
  },
};
