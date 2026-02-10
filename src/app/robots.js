// src/app/robots.js

import siteConfig from "../data/siteConfig";

export default function robots() {
  // ✅ Detect Preview / Development Deployments
  const isPreview =
    siteConfig.siteUrl?.includes("vercel.app") ||
    process.env.VERCEL_ENV !== "production";

  // ✅ Safe Base URL (remove trailing slash)
  const base =
    typeof siteConfig.siteUrl === "string"
      ? siteConfig.siteUrl.replace(/\/$/, "")
      : "";

  /* -----------------------------------------
     🚫 PREVIEW MODE → Block Google Indexing
  ------------------------------------------ */
  if (isPreview) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/", // ❌ Block everything
        },
      ],
    };
  }

  /* -----------------------------------------
     ✅ PRODUCTION MODE → Allow Indexing
  ------------------------------------------ */
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        // Optional safety blocks
        disallow: ["/api/", "/admin/"],
      },
    ],

    // ✅ Sitemap only in production
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
