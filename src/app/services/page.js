// src/app/services/page.js

import services from "../../data/services";
import { buildMeta } from "../../lib/seo";
import ServiceCard from "../../components/ServiceCard";
import siteConfig from "../../data/siteConfig";
import Link from "next/link";
import { Stethoscope, AlertCircle, Phone } from "lucide-react";

/**
 * HOSPITAL SERVICES DIRECTORY
 * Clean medical services listing for Murali Krishna Hospital.
 */
export async function generateMetadata() {
  const meta = buildMeta({
    title: "Hospital Medical Services | Murali Krishna Hospital",
    description: `Comprehensive medical services including emergency care, general medicine, diagnostics, inpatient support, and specialized treatments at ${siteConfig.companyName} in ${siteConfig.defaultCity}.`,
    path: "/services",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* =====================================================
           PAGE HEADER
      ===================================================== */}
      <header className="border-b border-border py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Stethoscope className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-text-muted">
              Comprehensive Healthcare
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight mb-6">
            Our Medical{" "}
            <span className="text-accent">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            {siteConfig.companyName} provides reliable healthcare services
            including emergency care, diagnostics, outpatient support, and
            preventive treatments for patients in{" "}
            <span className="font-semibold text-text-primary">
              {siteConfig.defaultCity}
            </span>{" "}
            and nearby communities.
          </p>
        </div>
      </header>

      {/* =====================================================
           SERVICES GRID
      ===================================================== */}
      <section className="py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <div key={service.slug} className="relative">
                {/* Emergency Tag */}
                {service.category === "emergency" && (
                  <div className="absolute -top-3 right-4 z-10">
                    <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-accent text-accent-foreground shadow-sm">
                      🚑 24/7 Emergency
                    </span>
                  </div>
                )}

                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
           CTA BAR — APPOINTMENT SUPPORT
      ===================================================== */}
      <section className="py-16 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Text */}
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                Need Medical Assistance?
              </h2>
              <p className="text-text-muted leading-relaxed">
                Contact us for appointments, medical inquiries, or urgent care.
                Our healthcare team is always ready to help.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-center hover:opacity-90 transition"
              >
                Book Appointment
              </Link>

              <a
                href={`tel:${siteConfig.phone}`}
                className="px-8 py-4 rounded-xl border border-border bg-secondary text-text-primary font-semibold inline-flex items-center justify-center gap-2 hover:bg-card transition"
              >
                <Phone className="w-5 h-5 text-accent" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
