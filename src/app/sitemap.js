// src/app/sitemap.js

import siteConfig from "../data/siteConfig";
import services from "../data/services";

export default async function sitemap() {
  const base =
    typeof siteConfig.siteUrl === "string"
      ? siteConfig.siteUrl.replace(/\/$/, "")
      : "";

  if (!base) return [];

  // ✅ Include all main pages
  const pages = [
    "",
    "about",
    "services",
    "doctors",
    "products",
    "gallery",
    "videos",
    "blog",
    "contact",
    "privacy",
    "terms",
    "disclaimer",
  ];

  const seen = new Set();
  const urls = [];

  // Helper
  const safeLastModified = (dateValue) => {
    if (!dateValue) return undefined;
    return new Date(dateValue).toISOString();
  };

  // ✅ Static pages
  pages.forEach((p) => {
    const url = `${base}/${p}`;
    if (seen.has(url)) return;

    seen.add(url);

    urls.push({
      url,
      lastModified: safeLastModified(siteConfig.siteLastUpdated),
    });
  });

  // ✅ Services
  services.forEach((s) => {
    if (!s?.slug) return;

    const url = `${base}/services/${s.slug}`;
    if (seen.has(url)) return;

    seen.add(url);

    urls.push({
      url,
      lastModified: safeLastModified(s.lastModified || s.updatedAt),
    });
  });

  return urls;
}
