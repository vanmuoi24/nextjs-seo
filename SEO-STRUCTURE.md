# Cấu trúc SEO cho Website Next.js

## Tổng quan

Dự án đã được cấu trúc lại theo chuẩn SEO với các thành phần sau:

## Cấu trúc thư mục

```
seo-app/
├── app/
│   ├── layout.tsx          # Layout chính với metadata SEO
│   ├── page.tsx            # Trang chủ với nội dung SEO-friendly
│   ├── sitemap.ts          # Sitemap động
│   ├── tools/
│   │   └── page.tsx        # Trang công cụ SEO
│   └── about/
│       └── page.tsx        # Trang giới thiệu
├── components/
│   ├── SEO/
│   │   └── SEOHead.tsx     # Component quản lý meta tags
│   └── Layout/
│       ├── Header.tsx     # Header với navigation SEO-friendly
│       └── Footer.tsx     # Footer với structured data
├── lib/
│   └── seo.ts              # Utilities cho SEO
├── types/
│   └── seo.ts              # TypeScript types cho SEO
├── utils/
│   └── seo.ts              # Helper functions cho SEO
├── public/
│   └── robots.txt          # Robots.txt file
└── next.config.ts          # Cấu hình Next.js tối ưu SEO
```

## Tính năng SEO đã implement

### 1. Metadata & Meta Tags

- ✅ Title templates với fallback
- ✅ Meta descriptions tối ưu
- ✅ Keywords targeting
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Robots meta tags

### 2. Structured Data

- ✅ Website schema
- ✅ Organization schema
- ✅ Breadcrumb schema
- ✅ FAQ schema
- ✅ Article schema

### 3. Technical SEO

- ✅ Sitemap.xml tự động
- ✅ Robots.txt
- ✅ Image optimization
- ✅ Performance headers
- ✅ Security headers
- ✅ Redirects

### 4. Content SEO

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text cho images
- ✅ Internal linking
- ✅ Mobile-responsive design

## Cách sử dụng

### 1. Thêm metadata cho trang mới

```typescript
// app/new-page/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiêu đề trang",
  description: "Mô tả trang",
  keywords: ["từ khóa 1", "từ khóa 2"],
};
```

### 2. Sử dụng SEOHead component

```typescript
import SEOHead from "@/components/SEO/SEOHead";

export default function Page() {
  return (
    <>
      <SEOHead
        title="Tiêu đề tùy chỉnh"
        description="Mô tả tùy chỉnh"
        keywords="từ khóa, seo, tối ưu"
      />
      {/* Nội dung trang */}
    </>
  );
}
```

### 3. Thêm structured data

```typescript
import { generateStructuredData } from "@/utils/seo";

const structuredData = generateStructuredData("Article", {
  headline: "Tiêu đề bài viết",
  author: "Tác giả",
  datePublished: "2024-01-01",
});
```

## Best Practices đã áp dụng

### 1. Performance

- Image optimization với Next.js Image
- Lazy loading
- Code splitting
- Compression

### 2. Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

### 3. Mobile SEO

- Responsive design
- Touch-friendly interface
- Fast loading on mobile

### 4. Content Strategy

- Keyword research integration
- Content hierarchy
- Internal linking structure
- User experience focus

## Monitoring & Analytics

### 1. SEO Tools Integration

- Google Search Console ready
- Google Analytics integration
- Schema markup validation

### 2. Performance Monitoring

- Core Web Vitals optimization
- Page speed optimization
- Mobile performance

## Cập nhật và bảo trì

### 1. Regular Updates

- Sitemap tự động cập nhật
- Meta tags dynamic
- Content freshness signals

### 2. SEO Monitoring

- Rank tracking integration
- Backlink monitoring
- Competitor analysis tools

## Lưu ý quan trọng

1. **Domain**: Thay đổi `https://your-domain.com` thành domain thực tế
2. **Verification codes**: Cập nhật Google, Yandex, Yahoo verification codes
3. **Images**: Thêm og-image.jpg vào thư mục public
4. **Analytics**: Tích hợp Google Analytics và Search Console
5. **Content**: Tạo nội dung chất lượng, unique và hữu ích

## Kết luận

Cấu trúc SEO này đã được tối ưu hóa cho:

- ✅ Technical SEO
- ✅ On-page SEO
- ✅ Content SEO
- ✅ Performance SEO
- ✅ Mobile SEO
- ✅ Local SEO (có thể mở rộng)

Website của bạn giờ đây đã sẵn sàng để đạt thứ hạng cao trên Google!
