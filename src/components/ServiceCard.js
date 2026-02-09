import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * ✅ Service Card – Production Ready
 * - Uses Global CSS Tokens
 * - Fixed mapping logic
 * - Clean hospital UI (no heavy animations)
 */
export default function ServiceCard({ service }) {
  /* ===============================
     Category → Icon Map
  =============================== */
  const categoryIcons = {
    emergency: "🚑",
    general: "👨‍⚕️",
    diagnostic: "🔬",
    specialist: "🩺",
    inpatient: "🏥",
    pharmacy: "💊",
    default: "⚕️",
  };

  const icon = categoryIcons[service.category] || categoryIcons.default;

  /* ===============================
     Format Category Text
  =============================== */
  const categoryLabel = service.category
    ? service.category.charAt(0).toUpperCase() + service.category.slice(1)
    : "Medical";

  return (
    <article
      className="group flex flex-col h-full rounded-2xl overflow-hidden border transition-shadow duration-300"
      style={{
        backgroundColor: "var(--bg-section)",
        borderColor: "var(--border-default)",
      }}
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          priority={service.featured}
        />

        {/* Emergency Tag (Simple + Clean) */}
        {service.category === "emergency" && (
          <div className="absolute top-4 right-4">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-bold border shadow-sm"
              style={{
                backgroundColor: "rgba(239,68,68,0.10)",
                borderColor: "rgba(239,68,68,0.25)",
                color: "rgba(239,68,68,0.95)",
              }}
            >
              24/7
            </span>
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Title */}
        <h3
          className="text-lg md:text-xl font-bold mb-3 transition-colors"
          style={{
            color: "var(--text-default)",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm md:text-base leading-relaxed flex-1"
          style={{ color: "var(--text-muted)" }}
        >
          {service.short}
        </p>

        {/* ================= FEATURES ================= */}
        {service.features?.length > 0 && (
          <div
            className="mt-5 pt-4 border-t"
            style={{ borderColor: "var(--border-default)" }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-wide mb-3"
              style={{ color: "var(--text-subtle)" }}
            >
              Key Features
            </div>

            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs border"
                  style={{
                    backgroundColor: "var(--bg-page)",
                    borderColor: "var(--border-default)",
                    color: "var(--text-muted)",
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ================= FOOTER ================= */}
        <div
          className="mt-6 pt-4 border-t flex items-center justify-between"
          style={{ borderColor: "var(--border-default)" }}
        >
          {/* Availability */}
          <span
            className="text-xs font-medium"
            style={{ color: "var(--text-subtle)" }}
          >
            {service.availability === "24/7"
              ? "Available 24/7"
              : "Regular Hours"}
          </span>

          {/* Link */}
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition"
            style={{ color: "var(--color-primary)" }}
            aria-label={`View details about ${service.title}`}
          >
            View Details
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
