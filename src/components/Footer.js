import Image from "next/image";
import Link from "next/link";
import siteConfig from "../data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* BRAND & ABOUT */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-4 bg-sky-500/10 rounded-full blur-lg"></div>
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.companyName}
                  width={160}
                  height={45}
                  className="relative z-10"
                />
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              A trusted healthcare facility in {siteConfig.defaultCity} providing 
              quality medical care with compassion, safety, and reliability for 
              patients of all age groups since 2005.
            </p>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1.5 bg-sky-500/20 text-sky-300 text-xs font-medium rounded-full border border-sky-500/30">
                🏥 24/7 Emergency
              </span>
              <span className="px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-medium rounded-full border border-teal-500/30">
                ⭐ Trusted Care
              </span>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">
              Contact Information
            </h4>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-3 text-gray-300 mb-2">
                  <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <a
                      href={siteConfig.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-300 transition-colors hover:underline"
                    >
                      {siteConfig.address}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 text-gray-300 mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Helpline Number</div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-lg font-semibold text-white hover:text-red-300 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Hospital Timings</div>
                    <div className="text-sm">
                      <div>Morning: <span className="font-medium text-white">10 AM – 1 PM</span></div>
                      <div>Evening: <span className="font-medium text-white">6 PM – 9 PM</span></div>
                      <div className="text-xs text-gray-400 mt-0.5">Open all days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { label: "About Hospital", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Doctor Team", href: "/doctors" },
                { label: "Pharmacy Products", href: "/products" },
                { label: "Hospital Gallery", href: "/gallery" },
                { label: "Book Appointment", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-sky-300 transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SOCIAL */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="text-sm text-gray-400 mb-3">Follow Health Updates</div>
              <a
                href={siteConfig.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 text-sky-300 rounded-lg hover:bg-sky-500/20 transition-colors border border-sky-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l5-5-5-5v10z" clipRule="evenodd" />
                </svg>
                Health Tips & Updates
              </a>
            </div>
          </div>

          {/* IMPORTANT LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">
              Important Information
            </h4>

            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-sky-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-sky-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-sky-300 transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
              </li>
            </ul>

            {/* EMERGENCY CTA */}
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-4 border border-red-500/20">
              <div className="text-sm font-medium text-white mb-2">Emergency?</div>
              <div className="text-xs text-gray-300 mb-3">Call immediately for emergency assistance</div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Emergency Call Now
              </a>
            </div>
          </div>
        </div>

        {/* ================= DISCLAIMER ================= */}
        <div className="border-t border-gray-800 pt-8 mb-10">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.771-.833-2.542 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white mb-2">Medical Disclaimer</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  The medical information provided on this website is for general awareness only. 
                  For accurate diagnosis and treatment, please consult our doctors directly or 
                  visit Murali Krishna Hospital. In case of emergency, call immediately. 
                  Emergency services are available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} {siteConfig.companyName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}