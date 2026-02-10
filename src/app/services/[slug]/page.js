// src/app/services/[slug]/page.js

import services from "../../../data/services";
import { buildMeta } from "../../../lib/seo";
import siteConfig from "../../../data/siteConfig";

import { Phone, CheckCircle } from "lucide-react";

/* -----------------------------------------
   STATIC PARAMS
------------------------------------------ */
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* -----------------------------------------
   METADATA
------------------------------------------ */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  const meta = buildMeta({
    title: service.seo?.title || `${service.title} | ${siteConfig.companyName}`,
    description: service.seo?.description || service.short,
    keywords: service.seo?.keywords || [],
    path: `/services/${service.slug}`,
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

/* -----------------------------------------
   PAGE
------------------------------------------ */
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  /* NOT FOUND */
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <p className="text-text-muted text-lg">Service Not Found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* ================= SIMPLE SERVICE PAGE ================= */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-text-primary mb-4">
            {service.title}
          </h1>

          {/* Short Description */}
          {service.short && (
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              {service.short}
            </p>
          )}

          {/* Highlights */}
          {service.highlights?.length > 0 && (
            <div className="bg-white border border-border rounded-2xl p-6 mb-10">
              <h2 className="text-xl font-bold text-text-primary mb-4">
                Key Service Points
              </h2>

              <ul className="space-y-3">
                {service.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-muted"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Content */}
          <div className="bg-white border border-border rounded-2xl p-8 mb-10">
            <h2 className="text-xl font-bold text-text-primary mb-4">
              Service Details
            </h2>

            <p className="text-text-muted leading-relaxed">
              {service.content}
            </p>
          </div>

          {/* Call Button */}
          <div className="text-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-md hover:opacity-90 transition"
              style={{
                background: "var(--gradient-primary)",
              }}
            >
              <Phone className="w-5 h-5" />
              Call for Appointment
            </a>

            <p className="text-sm text-text-muted mt-3">
              Contact {siteConfig.companyName} for more information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
