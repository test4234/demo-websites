import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <article
      className="
        flex flex-col h-full rounded-2xl
        overflow-hidden border shadow-sm
        hover:shadow-md transition
      "
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
          className="object-cover"
          sizes="(max-width:768px) 100vw, 350px"
        />

        {/* ✅ PRICE BADGE */}
        {service.price && (
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
              style={{
                backgroundColor: "rgba(14,165,233,0.12)",
                color: "var(--color-primary)",
                border: "1px solid var(--border-default)",
              }}
            >
              Package: {service.price}
            </span>
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Title */}
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: "var(--text-default)" }}
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          {service.short}
        </p>

        {/* ================= HIGHLIGHTS ================= */}
        {service.highlights?.length > 0 && (
          <div className="mb-5">
            <p
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--text-default)" }}
            >
              Key Points:
            </p>

            <ul className="space-y-1 text-sm text-text-muted list-disc list-inside">
              {service.highlights.slice(0, 4).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ================= FOOTER ================= */}
        <div className="mt-auto pt-4 border-t flex items-center justify-between"
          style={{ borderColor: "var(--border-default)" }}
        >
          {/* Availability */}
          {service.availability && (
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(34,197,94,0.10)",
                color: "rgba(34,197,94,0.95)",
              }}
            >
              {service.availability}
            </span>
          )}

          {/* Link */}
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
