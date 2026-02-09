// src/app/robots.js
import siteConfig from "../data/siteConfig";

export default function robots() {
  const base =
    typeof siteConfig.siteUrl === "string"
      ? siteConfig.siteUrl.replace(/\/$/, "")
      : "";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        // ✅ Optional safety blocks
        disallow: ["/api/", "/admin/"],
      },
    ],

    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
