// src/app/terms/page.js

import siteConfig from "../../data/siteConfig";
import Link from "next/link";

import {
  FileText,
  Shield,
  AlertCircle,
  ClipboardCheck,
  Scale,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: `Terms & Conditions | Murali Krishna Hospital`,
  description: `Legal terms and conditions governing the use of the ${siteConfig.companyName} website and engagement of hospital and healthcare services in ${siteConfig.defaultCity}.`,
};

export default function Terms() {
  const sections = [
    { id: "website-use", title: "Website Use", icon: <FileText className="w-5 h-5" /> },
    { id: "appointments", title: "Appointments & Enquiries", icon: <ClipboardCheck className="w-5 h-5" /> },
    { id: "scope", title: "Scope of Healthcare Services", icon: <Scale className="w-5 h-5" /> },
    { id: "emergency", title: "Emergency Situations", icon: <AlertCircle className="w-5 h-5" /> },
    { id: "liability", title: "Limitations of Liability", icon: <Shield className="w-5 h-5" /> },
    { id: "content", title: "Website Content", icon: <FileText className="w-5 h-5" /> },
    { id: "governing-law", title: "Governing Law", icon: <Scale className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      {/* ================= HEADER ================= */}
      <header className="border-b border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Scale className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-text-muted">
              Legal Information
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight mb-6">
            Terms &{" "}
            <span className="text-accent">Conditions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website or
            engaging with healthcare services at{" "}
            <span className="font-semibold text-text-primary">
              {siteConfig.companyName}
            </span>
            .
          </p>

          {/* Last Updated */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-text-muted">
              Last Updated: January 2026
            </span>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* ================= SIDEBAR ================= */}
            <aside className="lg:col-span-3">
              <div className="sticky top-28">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-bold text-text-primary">
                      Contents
                    </h3>
                  </div>

                  {/* Navigation */}
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="
                          group flex items-center gap-3
                          px-4 py-3 rounded-xl
                          text-text-muted
                          hover:text-accent
                          hover:bg-secondary
                          border border-transparent
                          hover:border-border
                          transition
                        "
                      >
                        <div className="text-text-muted group-hover:text-accent transition">
                          {section.icon}
                        </div>

                        <span className="text-sm font-medium">
                          {section.title}
                        </span>

                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    ))}
                  </nav>

                  {/* Contact Info */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="text-sm font-semibold text-text-primary mb-4">
                      Need Help?
                    </h4>

                    <div className="space-y-3 text-sm">
                      <Link
                        href={`mailto:${siteConfig.email}`}
                        className="flex items-center gap-3 text-text-muted hover:text-accent transition"
                      >
                        <Mail className="w-4 h-4" />
                        {siteConfig.email}
                      </Link>

                      <Link
                        href={`tel:${siteConfig.phone}`}
                        className="flex items-center gap-3 text-text-muted hover:text-accent transition"
                      >
                        <Phone className="w-4 h-4" />
                        {siteConfig.phone}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* ================= MAIN ================= */}
            <div className="lg:col-span-9">
              <div className="bg-card border border-border rounded-2xl p-10 shadow-sm">
                {/* Intro Notice */}
                <div className="mb-14 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-accent" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">
                      Important Notice
                    </h2>

                    <p className="text-text-muted leading-relaxed text-lg">
                      By accessing this website or contacting{" "}
                      {siteConfig.companyName}, you agree to the following terms
                      and conditions governing the use of our services.
                    </p>
                  </div>
                </div>

                {/* Sections */}
                <div className="space-y-16">
                  {sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-32"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-accent">
                          {section.icon}
                        </div>

                        <h2 className="text-2xl font-bold text-text-primary">
                          {section.title}
                        </h2>
                      </div>

                      {/* Paragraph Content */}
                      <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                        {section.id === "website-use" && (
                          <>
                            <p>
                              This website is provided for general informational
                              purposes about hospital services, contact details,
                              and patient support.
                            </p>
                            <p>
                              Accessing this website does not create a
                              doctor-patient relationship. Medical services
                              require direct consultation.
                            </p>
                          </>
                        )}

                        {section.id === "appointments" && (
                          <>
                            <p>
                              Appointment requests submitted through this
                              website are subject to confirmation by{" "}
                              {siteConfig.companyName}.
                            </p>
                            <p>
                              All treatments are provided only after proper
                              evaluation and patient consent.
                            </p>
                          </>
                        )}

                        {section.id === "scope" && (
                          <>
                            <p>
                              Our services include general medicine, emergency
                              care, diagnostics, inpatient and outpatient
                              support.
                            </p>
                            <p>
                              Availability of services may vary depending on
                              clinical requirements and patient needs.
                            </p>
                          </>
                        )}

                        {section.id === "emergency" && (
                          <>
                            <p>
                              In case of emergency, contact the hospital
                              immediately or visit the emergency department.
                            </p>
                            <p className="font-semibold text-text-primary">
                              Website information should not be relied upon for
                              urgent decisions.
                            </p>
                          </>
                        )}

                        {section.id === "liability" && (
                          <>
                            <p>
                              Treatment outcomes may vary based on patient
                              condition, history, and response to care.
                            </p>
                            <p>
                              The hospital is not liable for complications
                              arising beyond reasonable medical control.
                            </p>
                          </>
                        )}

                        {section.id === "content" && (
                          <>
                            <p>
                              Website content may be updated or modified without
                              prior notice.
                            </p>
                            <p>
                              Images may be representative and not always depict
                              exact facilities unless stated.
                            </p>
                          </>
                        )}

                        {section.id === "governing-law" && (
                          <>
                            <p>
                              These terms are governed by Indian law. Any
                              disputes fall under courts in{" "}
                              {siteConfig.defaultCity}, Andhra Pradesh.
                            </p>
                            <p>
                              Continued use of services constitutes acceptance
                              of updated terms.
                            </p>
                          </>
                        )}
                      </div>
                    </section>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 pt-10 border-t border-border">
                  <div className="bg-secondary border border-border rounded-2xl p-8 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        Need Clarification?
                      </h3>

                      <p className="text-text-muted mb-5 leading-relaxed">
                        For questions regarding these terms, please contact our
                        administration team.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href={`mailto:${siteConfig.email}`}
                          className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
                        >
                          Email Us
                        </Link>

                        <Link
                          href="/contact"
                          className="px-6 py-3 rounded-xl bg-card border border-border text-text-primary font-semibold hover:text-accent transition"
                        >
                          Contact Page
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END MAIN */}
          </div>
        </div>
      </section>
    </div>
  );
}
