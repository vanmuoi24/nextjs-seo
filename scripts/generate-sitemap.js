const fs = require("fs");
const path = require("path");

// 1. Base URL của web bạn
const base = "https://diencongnghiep.store";

// 2. Danh sách các trang của bạn
const pages = [
  "",
  "/services",
  "/services/dienlanh",
  "/services/diendandung",
  "/services/diencongnghiep",
  "/about",
  "/contact",
  "/project",
  "/tools",
];

// 3. Sinh XML
const urls = pages
  .map(
    (p) =>
      `<url>
  <loc>${base}${p}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`
  )
  .join("");

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

// 4. Ghi ra public/sitemap.xml
const outPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outPath, xml);

console.log("✅ sitemap.xml generated at public/sitemap.xml");
