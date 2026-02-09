// src/app/doctors/page.js

import doctors from "../../data/doctors";
import visitingDoctors from "../../data/visitingDoctors";
import DoctorCard from "../../components/DoctorCard";
import siteConfig from "../../data/siteConfig";

import { buildMeta } from "../../lib/seo";
import { Users } from "lucide-react";

/* ---------------- METADATA ---------------- */
export async function generateMetadata() {
  const meta = buildMeta({
    title: "Doctors & Specialists",
    description: `Meet the chief doctor and visiting specialist doctors at ${siteConfig.companyName}, Machilipatnam.`,
    path: "/doctors",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

/* ---------------- PAGE ---------------- */
export default function DoctorsPage() {
  // ✅ Combine all doctors into one list
  const allDoctors = [...doctors, ...visitingDoctors];

  return (
    <div className="min-h-screen bg-secondary">
      {/* ================= HEADER (Old Design Restored) ================= */}
      <header className="relative py-10 md:py-10 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-text-muted">
              Medical Team
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-6">
            Meet Our{" "}
            <span className="text-accent">Doctors</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto">
            Our experienced chief doctor and visiting specialists provide trusted
            healthcare at{" "}
            <strong className="text-text-primary">
              {siteConfig.companyName}
            </strong>
            .
          </p>
        </div>
      </header>

      {/* ================= DOCTORS GRID (Unified) ================= */}
      <section className="py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {allDoctors.map((doc) => (
              <DoctorCard key={doc.slug} doctor={doc} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
