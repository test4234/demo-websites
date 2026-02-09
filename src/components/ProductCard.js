"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, Shield } from "lucide-react";
import siteConfig from "../data/siteConfig";

/**
 * ✅ ProductCard (Fixed Image Layout)
 * - Images now fill properly
 * - No tiny locked icons
 * - Clean responsive pharmacy UI
 */

export default function ProductCard({ product }) {
  /* ---------------- WhatsApp Order Link ---------------- */
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    `🏥 Pharmacy Order - ${siteConfig.companyName}

📦 Product: ${product.name}
💰 Price: ₹${product.price}

Please share your Name + Address + Phone Number.`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const isPrescriptionRequired = Boolean(product.prescription);

  /* ---------------- PRICE FORMAT ---------------- */
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <article
      className="
        group bg-white rounded-3xl overflow-hidden
        border border-[var(--border-default)]
        shadow-sm hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
        flex flex-col h-full
      "
    >
      {/* ================= IMAGE ================= */}
      <div
        className="
          relative w-full h-64
          flex items-center justify-center
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,165,233,0.10), rgba(255,255,255,1))",
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
          sizes="(max-width:768px) 100vw, 33vw"
        />

        {/* Prescription Badge */}
        {isPrescriptionRequired && (
          <span
            className="
              absolute top-4 right-4
              px-3 py-1 rounded-full text-xs font-bold
              flex items-center gap-1
            "
            style={{
              backgroundColor: "rgba(245,158,11,0.95)",
              color: "white",
            }}
          >
            <Shield className="w-3 h-3" />
            Rx Required
          </span>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-col flex-1 p-6">
        {/* Name */}
        <h3
          className="text-lg font-bold mb-2 line-clamp-2"
          style={{ color: "var(--text-default)" }}
        >
          {product.name}
        </h3>

        {/* Short Description */}
        <p
          className="text-sm leading-relaxed line-clamp-2 mb-5"
          style={{ color: "var(--text-muted)" }}
        >
          {product.short}
        </p>

        {/* Price */}
        <div className="mt-auto pt-4 border-t border-[var(--border-default)]">
          <p className="text-sm text-text-muted mb-1">Price</p>
          <p className="text-2xl font-extrabold text-text-primary">
            ₹{formatPrice(product.price)}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            {/* View */}
            <Link
              href={`/products/${product.slug}`}
              className="
                flex-1 px-4 py-3 rounded-xl
                border font-semibold text-sm
                flex items-center justify-center gap-2
                transition hover:bg-gray-50
              "
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              <Eye className="w-4 h-4" />
              View
            </Link>

            {/* WhatsApp Buy */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 px-4 py-3 rounded-xl
                font-semibold text-sm
                flex items-center justify-center gap-2
                text-white transition hover:opacity-90
              "
              style={{
                background: "var(--gradient-primary)",
              }}
            >
              <ShoppingCart className="w-4 h-4" />
              Order
            </a>
          </div>

          {/* Rx Note */}
          {isPrescriptionRequired && (
            <p className="mt-4 text-xs text-yellow-700 flex items-center gap-2">
              <Shield className="w-3 h-3" />
              Prescription must be shared before delivery.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
