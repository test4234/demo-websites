import Image from "next/image";
import Link from "next/link";
import { Clock, Award, UserCheck } from "lucide-react";

/**
 * ✅ Universal DoctorCard (No Pricing)
 * - Works for Main + Visiting Doctors
 * - No Consultation Fee Display
 * - Clean CTA Button
 */

export default function DoctorCard({ doctor }) {
  return (
    <article
      className="
        bg-white rounded-2xl border
        shadow-sm hover:shadow-lg
        transition flex flex-col overflow-hidden
      "
      style={{ borderColor: "var(--border-default)" }}
    >
      {/* ================= IMAGE ================= */}
      <div className="relative w-full h-52">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 350px"
        />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-6 flex flex-col flex-1">
        {/* Name */}
        <h3
          className="text-xl font-bold"
          style={{ color: "var(--text-default)" }}
        >
          {doctor.name}
        </h3>

        {/* Specialty */}
        <p
          className="text-sm font-semibold mt-1"
          style={{ color: "var(--color-primary)" }}
        >
          {doctor.specialty}
        </p>

        {/* Experience */}
        {doctor.experience && (
          <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
            {doctor.experience}
          </p>
        )}

        {/* Qualifications */}
        {doctor.qualifications && (
          <div className="flex items-center gap-2 mt-3 text-sm">
            <Award className="w-4 h-4 text-accent" />
            <span style={{ color: "var(--text-muted)" }}>
              {doctor.qualifications}
            </span>
          </div>
        )}

        {/* Short Info */}
        <p
          className="mt-4 text-sm leading-relaxed line-clamp-3"
          style={{ color: "var(--text-muted)" }}
        >
          {doctor.short}
        </p>

        {/* Timings */}
        {doctor.timings && (
          <div className="mt-5">
            <div className="flex items-center gap-2 font-semibold text-sm mb-2">
              <Clock className="w-4 h-4 text-accent" />
              Consultation Hours
            </div>

            <div className="space-y-2">
              {doctor.timings.map((time, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-lg border text-sm"
                  style={{
                    borderColor: "var(--border-default)",
                    backgroundColor: "rgba(14,165,233,0.05)",
                  }}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expertise */}
        {doctor.expertise && (
          <div className="mt-5">
            <div className="flex items-center gap-2 font-semibold text-sm mb-2">
              <UserCheck className="w-4 h-4 text-accent" />
              Expertise
            </div>

            <div className="flex flex-wrap gap-2">
              {doctor.expertise.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs border"
                  style={{
                    borderColor: "var(--border-default)",
                    color: "var(--color-primary)",
                    backgroundColor: "rgba(14,165,233,0.08)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ================= CTA BUTTON ================= */}
        <div className="mt-auto pt-6">
<a
  href={`tel:${doctor.phone}`}
  className="
    block w-full text-center
    px-5 py-3 rounded-xl
    font-semibold text-white
    bg-primary hover:opacity-90
    transition
  "
>
  Call for Appointment →
</a>

        </div>
      </div>
    </article>
  );
}
