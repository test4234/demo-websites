// src/app/page.js

import Hero from "../components/Hero";
import GallerySlider from "../components/GallerySlider";

import AuthoritySection from "../sections/AuthoritySection";
import ServicesSection from "../sections/ServicesSection";
import LeadSection from "../sections/LeadSection";

import siteConfig from "../data/siteConfig";
import Script from "next/script";

/* -----------------------------------------
   PAGE METADATA (SEO + WHATSAPP SAFE)
------------------------------------------ */
export async function generateMetadata() {
  return {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.description,

    openGraph: {
      title: siteConfig.seo.ogTitle,
      description: siteConfig.seo.ogDescription,
      url: siteConfig.siteUrl,
      siteName: siteConfig.companyName,
      type: "website",
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.companyName,
        },
      ],
    },

    alternates: {
      canonical: "/",
    },
  };
}

/* -----------------------------------------
   HOME PAGE
------------------------------------------ */
export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Authority / Trust */}
      <AuthoritySection />

      {/* Services */}
      <ServicesSection />

      {/* Gallery Slider */}
      <GallerySlider />

      {/* Lead / CTA */}
      <LeadSection />

      {/* ✅ Schema Markup (Next.js Safe) */}
      <Script
        id="home-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: siteConfig.companyName,
            url: siteConfig.siteUrl,
          }),
        }}
      />
    </>
  );
}
