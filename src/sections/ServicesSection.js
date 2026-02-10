import ServiceCard from "../components/ServiceCard";
import services from "../data/services";
import siteConfig from "../data/siteConfig";
import { Stethoscope } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      className="py-10 md:py-10"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold"
            style={{
              backgroundColor: "var(--bg-section)",
              borderColor: "var(--border-default)",
              color: "var(--color-primary)",
            }}
          >
            <Stethoscope className="w-4 h-4" />
            Comprehensive Medical Care
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: "var(--text-default)" }}
          >
            Our Healthcare{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Services
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="mt-5 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {siteConfig.companyName} provides emergency care, general medicine,
            diagnostics, and specialized treatments — delivering trusted
            healthcare with compassion and expertise.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.slug} className="relative">
              {/* Emergency Tag */}
              {service.category === "emergency" && (
                <span
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border shadow-sm"
                  style={{
                    backgroundColor: "rgba(239,68,68,0.08)",
                    borderColor: "rgba(239,68,68,0.25)",
                    color: "rgba(239,68,68,0.95)",
                  }}
                >
                  24/7 Emergency
                </span>
              )}

              <ServiceCard service={service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
