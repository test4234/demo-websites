// src/app/privacy/page.js

import siteConfig from "../../data/siteConfig";
import Link from "next/link";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.companyName}`,
  description: `Privacy policy explaining how ${siteConfig.companyName} handles patient enquiries, contact details, and website interactions.`,
};

export default function Privacy() {
  return (
    <div className="bg-secondary min-h-screen pb-24">
      {/* ================= HEADER ================= */}
      <header className="relative pt-20 pb-14 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Small Accent Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-accent/50" />
            <span className="text-accent text-[11px] font-black uppercase tracking-[0.35em]">
              Privacy & Patient Trust
            </span>
          </div>

          {/* Page Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary leading-tight tracking-tight">
            Privacy <br />
            <span className="text-text-muted/50 italic font-light">
              Policy.
            </span>
          </h1>
        </div>

        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
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
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div
          className="
            prose prose-base md:prose-lg max-w-none
            prose-headings:text-text-primary
            prose-headings:font-extrabold
            prose-headings:tracking-tight
            prose-h2:text-2xl
            prose-h2:border-l-4
            prose-h2:border-accent
            prose-h2:pl-5
            prose-h2:mt-14
            prose-h2:mb-6
            prose-p:text-text-muted
            prose-p:leading-relaxed
            prose-li:text-text-muted
            prose-ul:pl-6
          "
        >
          <p>
            <strong>{siteConfig.companyName}</strong> (“we”, “our”, or “us”)
            values your privacy and is committed to protecting the information
            you share with us. This Privacy Policy explains how limited personal
            information is collected, used, and safeguarded when you interact
            with our hospital website.
          </p>

          <h2>Scope of This Website</h2>
          <p>
            This website is designed to provide information about our healthcare
            services, emergency support, outpatient consultations, and hospital
            facilities in and around {siteConfig.defaultCity}. The website does
            not require user registration or login accounts.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect only the information that you voluntarily provide when
            you:
          </p>
          <ul>
            <li>Submit an appointment request or enquiry form</li>
            <li>Call the hospital using the phone number displayed</li>
            <li>Send us an email enquiry</li>
            <li>Contact us through available support links</li>
          </ul>

          <p>
            This information may include your name, phone number, email address,
            and basic details related to your healthcare enquiry.
          </p>

          <h2>How Your Information Is Used</h2>
          <p>
            The information you share is used strictly for patient communication
            purposes, including:
          </p>
          <ul>
            <li>Responding to appointment requests</li>
            <li>Providing support related to hospital services</li>
            <li>Assisting with medical enquiries</li>
            <li>Coordinating follow-up communication when needed</li>
          </ul>

          <p>
            We do not use your information for automated marketing, profiling,
            or unrelated promotional activities.
          </p>

          <h2>No User Accounts or Public Data Storage</h2>
          <p>
            This website does not create user accounts, store passwords, or
            maintain patient dashboards. Submitted enquiry information is used
            only for direct communication and is not made public.
          </p>

          <h2>Cookies & Tracking</h2>
          <p>
            This website does not use advertising trackers or behavioral
            profiling cookies to collect personal data. Any basic technical data
            generated during website access is handled by the hosting provider
            as part of standard server operations.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The website may include links to third-party services such as Google
            Maps, phone dialers, or email clients. Once you interact with these
            services, their respective privacy policies apply. We do not control
            how third-party platforms handle your data.
          </p>

          <h2>Medical Confidentiality</h2>
          <p>
            We encourage users not to submit sensitive medical details through
            online forms. For detailed diagnosis or treatment discussions,
            please consult our doctors directly at the hospital.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties. Information is disclosed only if required by law or when
            necessary to provide legitimate healthcare support requested by you.
          </p>

          <h2>Data Security</h2>
          <p>
            Reasonable measures are taken to protect communication data from
            unauthorized access. However, no online communication method can be
            guaranteed to be completely secure, and users are encouraged to
            share only necessary information.
          </p>

          <h2>Your Consent</h2>
          <p>
            By using this website or contacting us through any provided channel,
            you consent to this Privacy Policy and the handling of your
            information as described above.
          </p>

          <h2>Contact Details</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you may
            contact us at{" "}
            <Link
              href={`mailto:${siteConfig.email}`}
              className="text-accent font-semibold hover:underline"
            >
              {siteConfig.email}
            </Link>
            .
          </p>

          {/* Footer Note */}
          <div className="mt-20 pt-10 border-t border-border flex justify-between items-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/60">
              Document Ref: PRIVACY-2026
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
              Last Updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
