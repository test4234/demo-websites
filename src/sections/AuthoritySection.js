// src/sections/AuthoritySection.js

import Link from "next/link";
import Image from "next/image";

import doctors from "../data/doctors";
import visitingDoctors from "../data/visitingDoctors";

import { ArrowRight, Calendar, Award } from "lucide-react";

export default function AuthoritySection() {
  const mainDoctor = doctors?.[0];

  // ✅ Auto Tags Based on Qualification + Specialty
  const generateTags = (doctor) => {
    if (!doctor) return [];

    const tags = [];

    if (doctor.qualifications?.includes("MD")) tags.push("MD Doctor");
    if (doctor.specialty?.includes("Physician")) tags.push("Physician");
    if (doctor.availability) tags.push("Daily Consultation");

    return tags;
  };

  const doctorTags = generateTags(mainDoctor);

  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--text-default)" }}
          >
            Trusted Care From <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Expert Doctors
            </span>
          </h2>

          <p
            className="mt-6 text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Our chief doctor is available daily, supported by visiting specialist
            doctors for advanced care.
          </p>
        </div>

        {/* ================= MAIN DOCTOR ================= */}
        {mainDoctor && (
          <div
            className="
              grid grid-cols-1 md:grid-cols-2
              rounded-3xl border shadow-sm overflow-hidden
            "
            style={{
              backgroundColor: "var(--bg-section)",
              borderColor: "var(--border-default)",
            }}
          >
            {/* ✅ IMAGE LEFT */}
            <div className="relative w-full h-[420px] md:h-full">
              <Image
                src={mainDoctor.image}
                alt={mainDoctor.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Right */}
            <div className="p-8 md:p-12">
              {/* Name */}
              <h3
                className="text-3xl font-bold"
                style={{ color: "var(--text-default)" }}
              >
                {mainDoctor.name}
              </h3>

              {/* Specialty */}
              <p
                className="mt-2 text-lg font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                {mainDoctor.specialty}
              </p>

              {/* Qualifications */}
              {mainDoctor.qualifications && (
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <Award className="w-4 h-4 text-accent" />
                  <span style={{ color: "var(--text-muted)" }}>
                    {mainDoctor.qualifications}
                  </span>
                </div>
              )}

              {/* Short Bio */}
              <p
                className="mt-5 text-base leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {mainDoctor.short}
              </p>

              {/* Timings */}
              {mainDoctor.timings && (
                <div className="mt-7">
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "var(--text-default)" }}
                  >
                    Daily Consultation Hours:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {mainDoctor.timings.map((time, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 rounded-full text-sm border"
                        style={{
                          backgroundColor: "var(--bg-page)",
                          borderColor: "var(--border-default)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= VISITING DOCTORS PREVIEW ================= */}
              <div className="mt-10">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-accent" />
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-default)" }}
                  >
                    Visiting Specialists Available
                  </p>
                </div>

                {/* No Images */}
                <div className="flex items-center gap-3 flex-wrap">
                  {visitingDoctors.slice(0, 3).map((doc, i) => (
                    <div
                      key={i}
                      className="
                        px-4 py-2 rounded-full
                        text-sm font-medium
                        border bg-white
                      "
                      style={{
                        borderColor: "var(--border-default)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {doc.name}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href="/doctors"
                    className="
                      inline-flex items-center gap-2
                      px-7 py-3 rounded-full
                      font-semibold text-white
                      shadow-md hover:shadow-lg transition
                    "
                    style={{
                      background: "var(--gradient-primary)",
                    }}
                  >
                    Meet All Our Specialists
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
