import Link from "next/link";
import Image from "next/image";
import siteConfig from "../data/siteConfig";

export default function Hero({
  title = "Murali Krishna Hospital",
  ctaText = "Book Appointment Now",
  ctaHref = "/contact",
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, var(--bg-page), #ffffff)",
      }}
    >
      {/* Background Soft Medical Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(14,165,233,0.15), rgba(13,148,136,0.10))",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 w-1/4 h-1/4 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(to top right, rgba(14,165,233,0.12), rgba(139,92,246,0.08))",
          }}
        ></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-[85vh] flex items-center py-10 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 max-w-2xl mx-auto lg:mx-0">
              {/* Emergency Badge */}
              {/* <div
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8 border"
                style={{
                  backgroundColor: "rgba(14,165,233,0.08)",
                  borderColor: "var(--border-default)",
                  color: "var(--color-primary)",
                }}
              >
                <span className="text-sm font-semibold">
                  🏥 24/7 Emergency Services Available
                </span>
              </div> */}

              {/* Heading */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
                style={{ color: "var(--text-default)" }}
              >
                Your Health is <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "var(--gradient-primary)",
                  }}
                >
                  Our Priority
                </span>
              </h1>

              {/* Subheading */}
              <p
                className="mt-4 text-lg md:text-xl font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                Trusted Healthcare in Machilipatnam Since 2005
              </p>

              {/* Description */}
              <p
                className="mt-6 text-lg leading-relaxed max-w-3xl"
                style={{ color: "var(--text-muted)" }}
              >
                {siteConfig.companyName} provides comprehensive medical care with
                experienced doctors, modern facilities, and compassionate
                service. Located {siteConfig.defaultCity},
                we offer quality treatment for all age groups with personalized
                attention.
              </p>

              {/* Hospital Timings */}
              <div
                className="mt-8 p-6 rounded-xl max-w-md shadow-sm border"
                style={{
                  backgroundColor: "var(--bg-section)",
                  borderColor: "var(--border-default)",
                }}
              >
                <h3
                  className="font-semibold text-lg mb-4"
                  style={{ color: "var(--text-default)" }}
                >
                  Hospital Timings (Open All Days)
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="text-center p-3 rounded-lg border"
                    style={{
                      backgroundColor: "var(--bg-page)",
                      borderColor: "var(--border-default)",
                    }}
                  >
                    <div
                      className="text-xs mb-1"
                      style={{ color: "var(--text-subtle)" }}
                    >
                      Morning
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "var(--text-default)" }}
                    >
                      10 AM – 1 PM
                    </div>
                  </div>

                  <div
                    className="text-center p-3 rounded-lg border"
                    style={{
                      backgroundColor: "var(--bg-page)",
                      borderColor: "var(--border-default)",
                    }}
                  >
                    <div
                      className="text-xs mb-1"
                      style={{ color: "var(--text-subtle)" }}
                    >
                      Evening
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "var(--text-default)" }}
                    >
                      6 PM – 9 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md">
                {/* Primary Button */}
                <Link
                  href={ctaHref}
                  className="
                    px-8 py-4 rounded-xl
                    font-semibold text-base
                    flex items-center justify-center
                    transition-all duration-300
                    shadow-lg hover:shadow-xl
                  "
                  style={{
                    background: "var(--gradient-primary)",
                    color: "var(--text-highlighted)",
                  }}
                >
                  {ctaText}
                </Link>

                {/* Secondary Button */}
                <Link
                  href="/services"
                  className="
                    px-8 py-4 rounded-xl
                    font-semibold text-base
                    flex items-center justify-center
                    transition-all duration-300
                    border shadow-sm hover:shadow-md
                  "
                  style={{
                    backgroundColor: "var(--bg-section)",
                    borderColor: "var(--border-default)",
                    color: "var(--color-primary)",
                  }}
                >
                  View All Services
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE COLUMN (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://ik.imagekit.io/oj4o1nw9x/clinicimage3.jpg"
                    alt="Murali Krishna Hospital - Modern Medical Facility"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Doctor Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="rounded-xl p-6 shadow-lg border"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.92)",
                      borderColor: "var(--border-default)",
                    }}
                  >
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "var(--text-default)" }}
                    >
                      Dr. K Murali Krishna
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      General Practitioner & Hospital Director
                    </p>
                    <p
                      className="mt-2 text-sm font-medium"
                      style={{ color: "var(--color-primary)" }}
                    >
                      20+ Years Medical Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END IMAGE */}
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ color: "var(--bg-section)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
    </section>
  );
}
