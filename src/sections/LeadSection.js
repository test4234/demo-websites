import LeadForm from "../components/AppointmentForm";
import siteConfig from "../data/siteConfig";
import { MapPin, Clock, Shield, AlertCircle, Phone } from "lucide-react";

/**
 * ✅ Lead Section (Fixed)
 * - No duplicate form container
 * - Perfect responsive layout
 * - Clean production-ready UI
 */

export default function LeadSection() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Book Your{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Appointment
              </span>
            </h2>

            <p className="mt-5 text-lg text-text-muted max-w-xl">
              Select your service, doctor, and preferred slot. Our team will
              confirm quickly via WhatsApp.
            </p>

            {/* Info Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Safe & Hygienic",
                  text: "Clean and secure hospital environment",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "Timely Care",
                  text: "Minimal waiting time & fast response",
                },
                {
                  icon: <AlertCircle className="w-5 h-5" />,
                  title: "24/7 Emergency",
                  text: "Immediate emergency support anytime",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: "Easy Contact",
                  text: "WhatsApp booking available instantly",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border p-5 flex gap-3"
                  style={{
                    backgroundColor: "var(--bg-section)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "var(--color-primary-soft)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs mt-1 text-text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency CTA */}
            <div className="mt-10 rounded-2xl border p-6 bg-red-50">
              <h4 className="font-bold text-lg text-red-600">
                Emergency Assistance
              </h4>
              <p className="mt-2 text-sm text-text-muted">
                Call immediately for urgent medical help:
              </p>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex mt-4 px-6 py-3 rounded-xl font-semibold bg-red-600 text-white hover:opacity-90 transition"
              >
                Emergency Call: {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            {/* ✅ No extra wrapper */}
            <LeadForm hideHeader />
          </div>
        </div>
      </div>
    </section>
  );
}
