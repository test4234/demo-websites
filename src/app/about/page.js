// src/app/about/page.js

import siteConfig from "../../data/siteConfig";
import { buildMeta } from "../../lib/seo";
import LeadSection from "../../sections/LeadSection";

import {
  Stethoscope,
  Clock,
  Shield,
  Heart,
  MapPin,
  Award,
  CheckCircle,
  Building,
  Phone,
} from "lucide-react";

/* ----------------------------
   Page Metadata
----------------------------- */
export async function generateMetadata() {
  const meta = buildMeta({
    title: "About Murali Krishna Hospital",
    description: `About ${siteConfig.companyName} – Trusted Healthcare in Machilipatnam. Learn about our medical services, facilities, and patient care philosophy.`,
    path: "/about",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

/* ----------------------------
   Static UI Data
----------------------------- */
const stats = [
  { value: "18+", label: "Years of Service", icon: "📅" },
  { value: "15K+", label: "Patients Treated", icon: "👨‍👩‍👧‍👦" },
  { value: "50+", label: "Medical Staff", icon: "👨‍⚕️" },
  { value: "24/7", label: "Emergency Support", icon: "🚑" },
];

const servicesList = [
  "General Medicine & Consultation",
  "Emergency Care Support",
  "Inpatient & Outpatient Services",
  "Diagnostics & Lab Tests",
  "Minor Procedures",
  "Pharmacy & Medicines",
  "Preventive Healthcare",
  "Pediatric & Geriatric Care",
];

const facilities = [
  {
    icon: <Shield className="w-7 h-7 text-[var(--color-primary)]" />,
    title: "Safe & Hygienic",
    description: "Strict infection control protocols and clean premises.",
  },
  {
    icon: <Clock className="w-7 h-7 text-[var(--color-primary)]" />,
    title: "Timely Care",
    description: "Minimal waiting time and well-organized consultation flow.",
  },
  {
    icon: <Heart className="w-7 h-7 text-[var(--color-primary)]" />,
    title: "Compassionate Support",
    description: "Patient-first approach with empathy and trust.",
  },
  {
    icon: <Award className="w-7 h-7 text-[var(--color-primary)]" />,
    title: "Affordable Treatment",
    description: "Transparent pricing with reliable medical care.",
  },
];

/* ----------------------------
   About Page Component
----------------------------- */
export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* ================= HEADER ================= */}
      <section className="relative py-14 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 mb-6">
            <Building className="w-4 h-4 text-[var(--color-primary)]" />
            Hospital Overview
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Compassionate Healthcare at{" "}
            <span className="text-[var(--color-primary)]">
              {siteConfig.companyName}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located on Bala Bhavan Road, Machilipatnam, we provide trusted medical
            care with compassion, safety, and reliability for all age groups.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* Commitment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Dedicated to{" "}
                <span className="text-[var(--color-primary)]">
                  Patient-Centered Care
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Murali Krishna Hospital has served Machilipatnam for over 18 years
                with dependable healthcare services trusted by families.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our doctors, nurses, and visiting specialists work together to
                provide quality treatment with clear communication and comfort.
              </p>

              {/* Doctor Team Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-50">
                    <Stethoscope className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Our Medical Team
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Led by Dr. K Murali Krishna with visiting specialists
                      available weekly/monthly for expert consultations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Services Box */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-8 text-white shadow-xl"
                style={{
                  background: "var(--gradient-primary)",
                }}
              >
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5" />
                  Services Offered
                </h3>

                <div className="space-y-3 text-sm">
                  {servicesList.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 opacity-80" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/20 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Consultation Hours: 10 AM – 1 PM | 6 PM – 9 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Our Commitment to Quality Care
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
              <h3 className="text-xl font-bold text-gray-900">
                Hospital Location
              </h3>
            </div>

            <p className="text-gray-600 mb-6">{siteConfig.address}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Emergency Call */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-6 py-3 rounded-xl font-semibold text-white text-center"
                style={{
                  background: "rgba(239,68,68,0.95)",
                }}
              >
                Call Emergency: {siteConfig.phone}
              </a>

              {/* Google Maps */}
              {siteConfig.mapLink && (
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition text-center font-semibold"
                >
                  View on Google Maps →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT ================= */}
      <LeadSection />
    </div>
  );
}
