"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import galleryImages from "../data/galleryImages";

/**
 * ✅ Production Ready Gallery Slider
 * - Smooth fade animation (no awkward sliding lock)
 * - Correct aspect ratio for hospital/gallery photos
 * - Clean overlay captions
 * - Navigation works on mobile + desktop
 */

export default function GallerySlider() {
  const [current, setCurrent] = useState(0);

  /* ===============================
      Navigation Logic
  =============================== */
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  /* ===============================
      Auto Slide
  =============================== */
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className="text-4xl md:text-6xl font-extrabold"
            style={{ color: "var(--text-default)" }}
          >
            Hospital{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Gallery
            </span>
          </h2>

          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Explore our modern facilities, patient-friendly environment, and
            advanced medical care spaces.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">
          {/* Slider Box */}
          <div
            className="
              relative w-full
              h-[320px] sm:h-[420px] lg:h-[520px]
              rounded-3xl overflow-hidden
              border shadow-lg
            "
            style={{
              borderColor: "var(--border-default)",
              backgroundColor: "var(--bg-section)",
            }}
          >
            {/* Smooth Fade Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                {/* Image */}
                <Image
                  src={galleryImages[current].src}
                  alt={galleryImages[current].title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {galleryImages[current].title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl">
                    {galleryImages[current].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons (Always Visible) */}
            <button
              onClick={prevSlide}
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                w-11 h-11 flex items-center justify-center
                rounded-full bg-white/25 hover:bg-white/40
                backdrop-blur-md text-white
                transition
              "
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                w-11 h-11 flex items-center justify-center
                rounded-full bg-white/25 hover:bg-white/40
                backdrop-blur-md text-white
                transition
              "
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* ================= DOT INDICATORS ================= */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current ? "w-10" : "w-3"
                }`}
                style={{
                  backgroundColor:
                    idx === current
                      ? "var(--color-primary)"
                      : "var(--border-default)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
