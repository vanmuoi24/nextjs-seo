import { SEOData } from "@/types/seo";

export const generateMetaTags = (seoData: SEOData) => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    canonical,
    noindex,
    nofollow,
  } = seoData;

  const metaTags = {
    title: title,
    description: description,
    keywords: keywords.join(", "),
    robots: `${noindex ? "noindex" : "index"}, ${
      nofollow ? "nofollow" : "follow"
    }`,
    "og:title": ogTitle || title,
    "og:description": ogDescription || description,
    "og:image": ogImage || "/og-image.jpg",
    "og:url": ogUrl,
    "og:type": "website",
    "og:site_name": "SEO App",
    "twitter:card": "summary_large_image",
    "twitter:title": ogTitle || title,
    "twitter:description": ogDescription || description,
    "twitter:image": ogImage || "/og-image.jpg",
  };

  return metaTags;
};

export const generateStructuredData = (type: string, data: any) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return JSON.stringify(baseStructuredData);
};

export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return generateStructuredData("BreadcrumbList", {
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
};

export const generateFAQStructuredData = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return generateStructuredData("FAQPage", {
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
};

export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate: string;
  image?: string;
  url: string;
}) => {
  return generateStructuredData("Article", {
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    image: article.image,
    url: article.url,
  });
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const generateCanonicalUrl = (
  path: string,
  baseUrl: string = "https://your-domain.com"
): string => {
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

export const validateSEO = (seoData: SEOData): string[] => {
  const errors: string[] = [];

  if (!seoData.title || seoData.title.length < 30) {
    errors.push("Title should be at least 30 characters long");
  }

  if (seoData.title && seoData.title.length > 60) {
    errors.push("Title should be less than 60 characters");
  }

  if (!seoData.description || seoData.description.length < 120) {
    errors.push("Description should be at least 120 characters long");
  }

  if (seoData.description && seoData.description.length > 160) {
    errors.push("Description should be less than 160 characters");
  }

  if (!seoData.keywords || seoData.keywords.length === 0) {
    errors.push("Keywords should not be empty");
  }

  if (seoData.keywords && seoData.keywords.length > 10) {
    errors.push("Keywords should not exceed 10 items");
  }

  return errors;
};
