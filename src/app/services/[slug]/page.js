// src/app/services/[slug]/page.js

import services from "../../../data/services";
import { buildMeta } from "../../../lib/seo";
import LeadForm from "../../../components/AppointmentForm";
import siteConfig from "../../../data/siteConfig";

import {
  Clock,
  Shield,
  Users,
  Award,
  AlertCircle,
  CheckCircle,
  Phone,
  MapPin,
} from "lucide-react";

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

  /* ================= NOT FOUND ================= */
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary px-6 py-24">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-accent" />
          </div>

          <h1 className="text-3xl font-extrabold text-text-primary mb-4">
            Service Not Found
          </h1>

          <p className="text-text-muted mb-8 leading-relaxed">
            The requested medical service could not be found. Please check the
            URL or browse our services directory.
          </p>

          <a
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
          >
            View All Services
          </a>
        </div>
      </div>
    );
  }

  /* ================= PAGE ================= */
  return (
    <div className="min-h-screen bg-secondary">
      {/* ================= HEADER ================= */}
      <header className="border-b border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            {/* Left Content */}
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-semibold text-text-muted mb-6">
                <span>⚕️</span>
                <span className="uppercase tracking-wide">
                  {service.category || "Medical Service"}
                </span>

                {service.category === "emergency" && (
                  <span className="ml-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold animate-pulse">
                    24/7 AVAILABLE
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-6 tracking-tight">
                {service.title}
              </h1>

              {/* Short Description */}
              {service.short && (
                <p className="text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed mb-8">
                  {service.short}
                </p>
              )}

              {/* Highlights */}
              {service.features?.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl text-sm text-text-muted"
                    >
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {feature}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency Box */}
            {service.category === "emergency" && (
              <div className="lg:w-[380px]">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <AlertCircle className="w-7 h-7 text-accent" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-text-primary">
                        Emergency Service
                      </h3>
                      <p className="text-text-muted text-sm">
                        Available 24/7
                      </p>
                    </div>
                  </div>

                  <p className="text-text-muted mb-6 leading-relaxed">
                    Walk-in emergency care is available immediately. No
                    appointment required.
                  </p>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
                  >
                    <Phone className="w-5 h-5" />
                    Call Emergency Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* MAIN */}
            <div className="lg:col-span-8 space-y-10">
              {/* Service Details */}
              <div className="bg-card border border-border rounded-2xl p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Service Details
                </h2>

                <div className="prose max-w-none text-text-muted">
                  {service.content || (
                    <p>
                      {service.title} at {siteConfig.companyName} provides
                      professional medical care with modern facilities and an
                      experienced healthcare team.
                    </p>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-card border border-border rounded-2xl p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-text-primary mb-8">
                  Benefits of Our {service.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Users className="w-6 h-6 text-accent" />,
                      title: "Expert Medical Team",
                      desc: "Experienced doctors and healthcare staff",
                    },
                    {
                      icon: <Shield className="w-6 h-6 text-accent" />,
                      title: "Safe & Hygienic",
                      desc: "Strict safety and hygiene protocols",
                    },
                    {
                      icon: <Clock className="w-6 h-6 text-accent" />,
                      title: "Timely Care",
                      desc: "Fast support and efficient scheduling",
                    },
                    {
                      icon: <Award className="w-6 h-6 text-accent" />,
                      title: "Quality Assurance",
                      desc: "Trusted care and proven treatment standards",
                    },
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
                        {b.icon}
                      </div>

                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">
                          {b.title}
                        </h3>
                        <p className="text-text-muted text-sm">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Appointment Form */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                  <div className="p-8 border-b border-border text-center">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      Request Appointment
                    </h3>
                    <p className="text-text-muted text-sm">
                      For {service.title}
                    </p>
                  </div>

                  <div className="p-2">
                    <LeadForm />
                  </div>

                  <div className="px-8 pb-8 pt-6 text-sm text-text-muted">
                    Priority response for this service.
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-text-primary mb-6">
                    Service Information
                  </h3>

                  <div className="space-y-5 text-sm">
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <p className="text-text-muted">
                        {service.category === "emergency"
                          ? "24/7 Emergency Care Available"
                          : "Hospital Hours: 10 AM – 1 PM, 6 PM – 9 PM"}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <p className="text-text-muted">
                        Murali Krishna Hospital, Bala Bhavan Road,
                        Machilipatnam
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-text-primary font-medium hover:text-accent transition"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
