// src/app/products/[slug]/page.js

import products from "../../../data/products";
import siteConfig from "../../../data/siteConfig";

import Image from "next/image";
import Link from "next/link";

import {
  Shield,
  AlertCircle,
  Clock,
  CheckCircle,
  Truck,
  Phone,
  MessageCircle,
  ArrowLeft,
  ShoppingBag,
} from "lucide-react";

/* -----------------------------------------
   STATIC PARAMS
------------------------------------------ */
export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

/* -----------------------------------------
   PRODUCT PAGE
------------------------------------------ */
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  /* -----------------------------------------
     NOT FOUND
  ------------------------------------------ */
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center py-24 bg-secondary">
        <div className="text-center max-w-md px-6">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-text-muted mb-8">
            This pharmacy product does not exist.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  /* -----------------------------------------
     SEO SCHEMA
  ------------------------------------------ */
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: `${siteConfig.siteUrl}${product.image}`,
    description: product.description || product.short,
    brand: {
      "@type": "Brand",
      name: product.brand || siteConfig.companyName,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.siteUrl}/products/${product.slug}`,
    },
  };

  /* -----------------------------------------
     HELPERS
  ------------------------------------------ */
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(price);

  const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(
    `🏥 Pharmacy Order - ${siteConfig.companyName}

Product: ${product.name}
Price: ₹${product.price}

Please confirm availability.`
  )}`;

  return (
    <div className="min-h-screen bg-secondary">
      {/* ✅ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="py-14 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-10"
            style={{ color: "var(--color-primary)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* ================= IMAGE ================= */}
            <div
              className="rounded-3xl border overflow-hidden shadow-lg"
              style={{
                backgroundColor: "white",
                borderColor: "var(--border-default)",
              }}
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* ================= DETAILS ================= */}
            <div>
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                {product.name}
              </h1>

              {/* Short */}
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                {product.short}
              </p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-sm text-text-muted mb-1">Price</p>
                <p className="text-5xl font-extrabold text-text-primary">
                  ₹{formatPrice(product.price)}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-white shadow-md hover:opacity-90 transition"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border font-bold hover:bg-gray-50 transition"
                  style={{
                    borderColor: "var(--border-default)",
                    color: "var(--text-default)",
                  }}
                >
                  <Phone className="w-5 h-5 text-accent" />
                  Call Pharmacy
                </a>
              </div>

              {/* Delivery */}
              <div className="mt-10 space-y-3 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-accent" />
                  Free delivery in Machilipatnam
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Same-day delivery before 6 PM
                </div>

                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  100% genuine products
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-border rounded-3xl p-10 shadow-sm">
              <h2 className="text-2xl font-bold mb-5">
                Product Description
              </h2>

              <p className="text-text-muted leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-10 space-y-3">
                {[
                  "Hospital verified supply",
                  "Safe packaging & quality assured",
                  "Available for general wellness use",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-text-muted">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Important Note */}
            <div className="bg-white border border-border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-bold">
                  Important Information
                </h3>
              </div>

              <ul className="space-y-2 text-sm text-text-muted">
                <li>• Consult doctor before use</li>
                <li>• Store in a cool dry place</li>
                <li>• Check expiry before purchase</li>
                <li>• Keep away from children</li>
              </ul>
            </div>

            {/* Pharmacy Hours */}
            <div className="bg-white border border-border rounded-3xl p-8">
              <h3 className="text-lg font-bold mb-4">
                Pharmacy Timings
              </h3>

              <p className="text-sm text-text-muted flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                10 AM – 1 PM | 6 PM – 9 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
