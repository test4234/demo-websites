import { Clock, UserCheck } from "lucide-react";

export default function VisitingDoctorCard({ doctor }) {
  return (
    <article
      className="
        bg-white border rounded-2xl
        shadow-sm hover:shadow-md
        transition p-6
        flex flex-col
      "
      style={{ borderColor: "var(--border-default)" }}
    >
      {/* Doctor Name */}
      <h3 className="text-xl font-bold text-text-primary">
        {doctor.name}
      </h3>

      {/* Degree */}
      {doctor.degree && (
        <p className="mt-2 text-sm font-semibold text-accent">
          {doctor.degree}
        </p>
      )}

      {/* Specialty */}
      {doctor.specialty && (
        <p className="mt-1 text-sm text-text-muted">
          {doctor.specialty}
        </p>
      )}

      {/* Availability */}
      {doctor.availability && (
        <div className="mt-4 flex items-center gap-2 text-sm font-medium">
          <UserCheck className="w-4 h-4 text-accent" />
          {doctor.availability}
        </div>
      )}

      {/* Timings */}
      {doctor.timings && (
        <div className="mt-3 flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-accent" />
          Timings: {doctor.timings}
        </div>
      )}

      {/* Schedule */}
      {doctor.schedule && (
        <p className="mt-3 text-sm font-medium text-text-muted">
          {doctor.schedule}
        </p>
      )}
    </article>
  );
}
