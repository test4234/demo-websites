// src/app/contact/page.js

import siteConfig from "../../data/siteConfig";
import { buildMeta } from "../../lib/seo";
import LeadForm from "../../components/AppointmentForm";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Users,
  AlertCircle,
  Calendar,
  Shield,
} from "lucide-react";

/* -----------------------------------------
   PAGE METADATA
------------------------------------------ */
export async function generateMetadata() {
  const meta = buildMeta({
    title: "Contact Murali Krishna Hospital",
    description: `Contact ${siteConfig.companyName} for appointments, emergency care, and trusted medical support in ${siteConfig.defaultCity}.`,
    path: "/contact",
  });

  return {
    title: meta.title,
    description: meta.description,
  };
}

/* -----------------------------------------
   CONTACT PAGE
------------------------------------------ */
export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* ================= HERO ================= */}
      <header className="py-10 md:py-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 mb-6">
            <Phone className="w-4 h-4 text-[var(--color-primary)]" />
            Contact & Support
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Health{" "}
            <span className="text-[var(--color-primary)]">Support System</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reach out to{" "}
            <span className="font-semibold text-gray-900">
              {siteConfig.companyName}
            </span>{" "}
            for appointments, emergency services, and trusted healthcare support
            across {siteConfig.defaultCity}.
          </p>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* ================= LEFT ================= */}
            <div className="lg:col-span-6 space-y-10">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Hospital Location
                      </h4>
                      <p className="text-sm text-gray-500">Visit our facility</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {siteConfig.address}
                  </p>

                  {siteConfig.mapLink && (
                    <a
                      href={siteConfig.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-[var(--color-primary)] font-medium hover:underline"
                    >
                      Get Directions →
                    </a>
                  )}
                </div>

                {/* Phone */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Helpline
                      </h4>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-xl font-bold text-gray-900 hover:text-[var(--color-primary)] transition"
                  >
                    {siteConfig.phone}
                  </a>

                  <p className="text-sm text-gray-600 mt-2">
                    For urgent medical assistance
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Official Email
                      </h4>
                      <p className="text-sm text-gray-500">
                        General inquiries only
                      </p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-gray-900 hover:text-[var(--color-primary)] transition"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="text-lg font-bold text-gray-900">
                    OP Timings & Doctor Schedule
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 text-center">
                    <p className="text-xs text-gray-500">Morning OP</p>
                    <p className="font-bold text-gray-900">10 AM – 1 PM</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 text-center">
                    <p className="text-xs text-gray-500">Evening OP</p>
                    <p className="font-bold text-gray-900">6 PM – 9 PM</p>
                  </div>
                </div>

                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 mt-5 text-[var(--color-primary)] font-medium hover:underline"
                >
                  <Users className="w-4 h-4" />
                  View Visiting Specialists →
                </Link>
              </div>

              {/* WhatsApp */}
              {siteConfig.whatsapp && (
                <div
                  className="rounded-2xl p-8 text-white shadow-lg"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Support
                  </h3>

                  <p className="text-white/90 leading-relaxed mb-6">
                    Message us for appointment requests, medical inquiries, and
                    patient assistance.
                  </p>

                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition"
                  >
                    Message Hospital Support →
                  </a>
                </div>
              )}

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="p-5 border-b border-gray-100 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="font-bold text-gray-900">Hospital Map</h3>
                </div>

                <div className="h-80 bg-gray-50">
                  {siteConfig.mapEmbed ? (
                    <iframe
                      title="Hospital Location"
                      src={siteConfig.mapEmbed}
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      Map Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <aside className="lg:col-span-6">
              <div className="lg:sticky lg:top-28">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <div className="text-center mb-8">
                    <Calendar className="w-10 h-10 mx-auto text-[var(--color-primary)] mb-3" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Book Appointment
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      Fill your details and our hospital team will confirm shortly.
                    </p>
                  </div>

                  {/* Privacy Note */}
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 mb-6 flex gap-3">
                    <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                    <p className="text-sm text-gray-600">
                      Your medical details are kept confidential and secure.
                    </p>
                  </div>

                  {/* Appointment Form */}
                  <LeadForm hideHeader />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
