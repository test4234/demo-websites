"use client";

import Image from "next/image";
import Link from "next/link";
import siteConfig from "../data/siteConfig";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
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
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-800">
              Contact Information
            </h4>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center">
                  📍
                </div>
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-sky-300 transition-colors hover:underline"
                >
                  {siteConfig.address}
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  📞
                </div>
                <div>
                  <div className="text-xs text-gray-400">Helpline</div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-lg font-semibold text-white hover:text-red-300 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  ⏰
                </div>
                <div className="text-sm">
                  <div>
                    Morning:{" "}
                    <span className="font-medium text-white">
                      10 AM – 1 PM
                    </span>
                  </div>
                  <div>
                    Evening:{" "}
                    <span className="font-medium text-white">
                      6 PM – 9 PM
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Open all days</div>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS + INFO SIDE BY SIDE ON MOBILE */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              
              {/* QUICK LINKS */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-gray-800">
                  Quick Links
                </h4>

                <ul className="space-y-2 text-sm">
                  {[
                    { label: "About", href: "/about" },
                    { label: "Services", href: "/services" },
                    { label: "Doctors", href: "/doctors" },
                    { label: "Gallery", href: "/gallery" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-sky-300 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMPORTANT INFO */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-gray-800">
                  Info
                </h4>

                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-300 hover:text-sky-300 transition-colors"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-300 hover:text-sky-300 transition-colors"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/disclaimer"
                      className="text-gray-300 hover:text-sky-300 transition-colors"
                    >
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* EMERGENCY CTA */}
            <div className="mt-8 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-4 border border-red-500/20">
              <div className="text-sm font-medium text-white mb-2">
                Emergency?
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Emergency Call Now
              </a>
            </div>
          </div>
        </div>

        {/* COLLAPSIBLE DISCLAIMER */}
        <div className="border-t border-gray-800 pt-6 mb-8">
          <button
            onClick={() => setShowDisclaimer(!showDisclaimer)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gray-800/40 border border-gray-700/50 text-sm font-medium text-white hover:bg-gray-800/60 transition"
          >
            <span className="flex items-center gap-2">
              ℹ️ Medical Disclaimer
            </span>
            <span>{showDisclaimer ? "−" : "+"}</span>
          </button>

          {showDisclaimer && (
            <div className="mt-3 text-xs text-gray-400 leading-relaxed px-4">
              The medical information provided on this website is for general
              awareness only. For accurate diagnosis and treatment, please
              consult our doctors directly or visit Murali Krishna Hospital. In
              case of emergency, call immediately. Emergency services are
              available 24/7.
            </div>
          )}
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
