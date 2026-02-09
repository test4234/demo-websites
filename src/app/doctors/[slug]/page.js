// src/app/doctors/[slug]/page.js

import doctors from "../../../data/doctors";
import visitingDoctors from "../../../data/visitingDoctors";
import Image from "next/image";
import Link from "next/link";

import { Clock, Award, UserCheck, ArrowLeft } from "lucide-react";

/* ------------------------------------------
   Doctor Profile Page (Dynamic Route)
------------------------------------------ */

export default async function DoctorProfile({ params }) {
  // ✅ FIX: params must be awaited in Next.js 15+
  const { slug } = await params;

  // ✅ Combine all doctors
  const allDoctors = [...doctors, ...visitingDoctors];

  // Find doctor by slug
  const doctor = allDoctors.find((d) => d.slug === slug);

  // If doctor not found
  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Doctor Not Found
        </h1>
        <p className="text-text-muted mb-6">
          The doctor profile you are looking for does not exist.
        </p>

        <Link
          href="/doctors"
          className="px-6 py-3 rounded-xl bg-primary text-white font-semibold"
        >
          Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/doctors"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Doctors
        </Link>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-72">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Name */}
            <h1 className="text-3xl font-extrabold text-text-primary">
              {doctor.name}
            </h1>

            {/* Specialty */}
            <p className="text-lg font-semibold text-accent mt-2">
              {doctor.specialty}
            </p>

            {/* Experience */}
            <p className="mt-3 text-text-muted">{doctor.experience}</p>

            {/* Qualifications */}
            {doctor.qualifications && (
              <div className="flex items-center gap-2 mt-4">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-text-muted">
                  {doctor.qualifications}
                </span>
              </div>
            )}

            {/* Bio */}
            <p className="mt-6 leading-relaxed text-text-muted whitespace-pre-line">
              {doctor.bio}
            </p>

            {/* Timings */}
            {doctor.timings && (
              <div className="mt-8">
                <h2 className="flex items-center gap-2 font-bold text-text-primary mb-3">
                  <Clock className="w-5 h-5 text-accent" />
                  Consultation Hours
                </h2>

                <div className="space-y-2">
                  {doctor.timings.map((t, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-lg border bg-secondary text-sm"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Expertise */}
            {doctor.expertise && (
              <div className="mt-8">
                <h2 className="flex items-center gap-2 font-bold text-text-primary mb-3">
                  <UserCheck className="w-5 h-5 text-accent" />
                  Expertise
                </h2>

                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full border bg-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Fee */}
            {doctor.consultationFee && (
              <p className="mt-8 font-bold text-lg">
                Consultation Fee: ₹{doctor.consultationFee}
              </p>
            )}

            {/* Booking Button */}
            <div className="mt-8">
              <Link
                href={doctor.bookingLink || "/contact"}
                className="inline-block px-8 py-4 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
