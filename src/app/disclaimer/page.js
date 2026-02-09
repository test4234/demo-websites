// src/app/disclaimer/page.js
import siteConfig from "../../data/siteConfig";

/**
 * DISCLAIMER PAGE
 * Provides transparency regarding healthcare information,
 * services, and website limitations.
 */

export const metadata = {
  title: `Disclaimer | ${siteConfig.companyName}`,
  description:
    "Medical disclaimer outlining limitations related to healthcare information, services, and website content.",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-secondary pb-20">
      {/* ================= HEADER ================= */}
      <header className="relative pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-accent/40" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.35em]">
              Important Notice
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary leading-tight tracking-tight">
            Medical Disclaimer
          </h1>

          <p className="mt-4 max-w-2xl text-base md:text-lg text-text-muted leading-relaxed">
            This disclaimer explains the limitations of medical information
            provided through the {siteConfig.companyName} website.
          </p>
        </div>

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="42"
                height="42"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 42 0 L 0 0 0 42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Disclaimer Card */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-8 md:p-10">
          <div
            className="
              prose prose-base md:prose-lg max-w-none
              prose-headings:text-text-primary
              prose-headings:font-extrabold
              prose-headings:tracking-tight
              prose-h2:text-xl md:prose-h2:text-2xl
              prose-h2:border-l-4
              prose-h2:border-accent
              prose-h2:pl-5
              prose-h2:mt-10
              prose-h2:mb-4
              prose-p:text-text-muted
              prose-p:leading-relaxed
              prose-p:mb-6
            "
          >
            <h2>General Information</h2>
            <p>
              This website is provided for general informational purposes only.
              While <strong>{siteConfig.companyName}</strong> makes every effort
              to keep information accurate and up to date, no guarantees are
              made regarding completeness or reliability.
            </p>

            <h2>Medical Information Disclaimer</h2>
            <p>
              The health and medical information on this website is intended for
              awareness only. It should not be considered professional medical
              advice, diagnosis, or treatment. Patients are advised to consult
              qualified doctors directly for evaluation.
            </p>

            <h2>Emergency Situations</h2>
            <p>
              In case of a medical emergency, please contact the hospital
              immediately or visit the emergency department. Do not rely solely
              on website content for urgent medical decisions.
            </p>

            <h2>Services & Limitations</h2>
            <p>
              {siteConfig.companyName} provides general healthcare services,
              emergency care, inpatient and outpatient support, diagnostics, and
              medical treatments. Outcomes may vary depending on patient
              condition and clinical requirements.
            </p>

            <h2>No Guarantees or Commitments</h2>
            <p>
              Information on this website does not constitute a binding medical
              guarantee or contractual commitment. Any healthcare service,
              appointment, or treatment requires direct consultation with
              hospital professionals.
            </p>

            <h2>Images & Representations</h2>
            <p>
              Images used on this website may include representative visuals for
              informational and design purposes. Actual facilities and services
              may differ based on availability.
            </p>

            <h2>External Links & Third-Party Platforms</h2>
            <p>
              This website may include links to third-party platforms such as
              Google Maps. {siteConfig.companyName} does not control or assume
              responsibility for the content, privacy policies, or availability
              of these services.
            </p>

            {/* Footer Info */}
            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-text-muted/70">
                Document Ref:{" "}
                {siteConfig.companyName.substring(0, 3).toUpperCase()}-MED-2026
              </p>

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                Last Updated: January 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
