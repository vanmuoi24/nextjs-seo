import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEOHead({
  title = "Thợ Điên",
  description = "Ứng dụng SEO chuyên nghiệp giúp tối ưu hóa website cho công cụ tìm kiếm",
  keywords = "SEO, tối ưu hóa, công cụ tìm kiếm, Google, website",
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  ogUrl,
  twitterCard = "summary_large_image",
  canonical,
  noindex = false,
  nofollow = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("SEO App") ? title : `${title} | SEO App`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content={`${noindex ? "noindex" : "index"}, ${
          nofollow ? "nofollow" : "follow"
        }`}
      />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:site_name" content="SEO App" />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="SEO App Team" />
      <meta name="language" content="Vietnamese" />
      <meta name="geo.region" content="VN" />
      <meta name="geo.country" content="Vietnam" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SEO App",
            description: description,
            url: ogUrl || "https://your-domain.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://your-domain.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </Head>
  );
}
