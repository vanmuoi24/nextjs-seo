export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
}

export interface PageSEO extends SEOData {
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  lastModified?: Date;
  author?: string;
  publishedDate?: Date;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface KeywordData {
  keyword: string;
  volume: number;
  difficulty: number;
  cpc: number;
  trend: "up" | "down" | "stable";
}

export interface BacklinkData {
  url: string;
  domain: string;
  anchor: string;
  dofollow: boolean;
  domainRating: number;
  pageRating: number;
  date: Date;
}

export interface RankData {
  keyword: string;
  position: number;
  url: string;
  searchVolume: number;
  date: Date;
}
