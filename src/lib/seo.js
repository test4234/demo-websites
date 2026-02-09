/**
 * SEO helpers used across pages to build metadata and JSON-LD.
 * Keep it simple: build title, description, open graph and canonical.
 */

import siteConfig from "../data/siteConfig";

export function buildMeta({ title, description, keywords = [], path = "/", image }) {
  const fullTitle = title ? `${title} | ${siteConfig.companyName}` : siteConfig.seo.defaultTitle;
  const url = new URL(path, siteConfig.siteUrl).toString();

  return {
    title: fullTitle,
    description: description || siteConfig.description,
    keywords: Array.from(new Set([...(keywords || []), ...siteConfig.seo.keywords])).join(", "),
    openGraph: {
      title: fullTitle,
      description: description || siteConfig.description,
      url,
      images: image ? [{ url: new URL(image, siteConfig.siteUrl).toString() }] : [],
    },
    canonical: url,
  };
}

/** Basic JSON-LD for Organization + Website. Additional schema (FAQ, Blog) can be appended in pages. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    logo: new URL(siteConfig.logo, siteConfig.siteUrl).toString(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "IN",
      },
    ],
  };
}