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
          {/* ✅ Now Full Center Content */}
          <div className="flex justify-center">
            <div className="max-w-3xl text-center">
              {/* ✅ Logo Above Title */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Murali Krishna Hospitals Logo"
                  width={90}
                  height={90}
                  priority
                />
              </div>

              {/* ✅ Updated Heading */}
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
  <span
    className="text-transparent bg-clip-text"
    style={{
      backgroundImage: "var(--gradient-primary)",
    }}
  >
    Murali Krishna Hospitals
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
                className="mt-6 text-lg leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {siteConfig.companyName} provides comprehensive medical care with
                experienced doctors, modern facilities, and compassionate
                service. Located {siteConfig.defaultCity}, we offer quality
                treatment for all age groups with personalized attention.
              </p>

              {/* Hospital Timings */}
              <div
                className="mt-8 p-6 rounded-xl max-w-md mx-auto shadow-sm border"
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
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary Button */}
<a
  href={`tel:${siteConfig.phone}`}
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
  Call for Appointment
</a>


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
          </div>
          {/* ✅ End Center Layout */}
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
