"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import siteConfig from "../data/siteConfig";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* NAV ITEMS */
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Doctors", href: "/doctors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  /* ACTIVE LINK */
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* TOGGLE */
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  /* LOCK SCROLL */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.95)"
          : "var(--bg-section)",
        borderColor: "var(--border-default)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* ✅ MAIN FLEX ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center">

          {/* ✅ LOGO ALWAYS LEFT */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-14 w-36 md:h-16 md:w-44">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.companyName}
                  fill
                  priority
                  className="object-contain object-left"

                />
              </div>
            </Link>
          </div>

          {/* ✅ DESKTOP NAV ALWAYS RIGHT */}
          <nav className="hidden md:flex ml-auto items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition"
                  style={{
                    color: active
                      ? "var(--color-primary)"
                      : "var(--text-muted)",
                    backgroundColor: active
                      ? "rgba(14,165,233,0.12)"
                      : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA */}
<a
  href={`tel:${siteConfig.phone}`}
  className="ml-4 px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition"
  style={{
    background: "var(--gradient-primary)",
    color: "var(--text-highlighted)",
  }}
>
  Book Appointment
</a>

          </nav>

          {/* ✅ MOBILE MENU BUTTON ALWAYS RIGHT */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-lg"
            style={{
              backgroundColor: "var(--bg-page)",
              border: `1px solid var(--border-default)`,
            }}
            aria-label="Toggle Menu"
          >
            <span
              className="text-xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "var(--border-default)",
            backgroundColor: "var(--bg-section)",
          }}
        >
          <nav className="flex flex-col px-6 py-6 gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg text-base font-medium"
                  style={{
                    color: active
                      ? "var(--color-primary)"
                      : "var(--text-muted)",
                    backgroundColor: active
                      ? "rgba(14,165,233,0.12)"
                      : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* MOBILE CTA */}
<a
  href={`tel:${siteConfig.phone}`}
  className="mt-4 w-full text-center px-4 py-3 rounded-lg font-semibold shadow-md"
  style={{
    background: "var(--gradient-primary)",
    color: "var(--text-highlighted)",
  }}
  onClick={(e) => {
    e.preventDefault(); // stop instant navigation
    closeMenu(); // close menu first

    // ✅ wait 200ms then open dialer
    setTimeout(() => {
      window.location.href = `tel:${siteConfig.phone}`;
    }, 200);
  }}
>
  Book Appointment
</a>


          </nav>
        </div>
      )}
    </header>
  );
}
