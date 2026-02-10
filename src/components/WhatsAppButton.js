"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Phone, X, AlertCircle, Clock } from "lucide-react";
import siteConfig from "@/data/siteConfig";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  const wrapperRef = useRef(null);

  // Sanitize numbers for links (remove anything except digits)
  const whatsappNumber = (siteConfig?.whatsapp || "").replace(/\D/g, "");
  const phoneNumber = (siteConfig?.phone || "").replace(/\D/g, "");

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setIsEmergency(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-close after 10 seconds if emergency mode is active
  useEffect(() => {
    if (isEmergency) {
      const timer = setTimeout(() => {
        setIsEmergency(false);
        setOpen(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isEmergency]);

  const handleEmergencyClick = () => {
    setIsEmergency(true);
    setOpen(false);
  };

  const handleNormalClose = () => {
    setOpen(false);
    setIsEmergency(false);
  };

  return (
<div
  ref={wrapperRef}
  className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none"
>
      {/* Emergency Mode Banner */}
      {isEmergency && (
        <div className="mb-4 animate-fade-in">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-4 shadow-2xl max-w-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-1">Emergency Assistance</h4>
                <p className="text-sm opacity-90 mb-3">Call immediately for urgent medical help</p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Emergency: {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Contact Menu */}
      <div
        className={`flex flex-col items-end gap-3 mb-3 transition-all duration-300 ease-out ${
          open 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        {/* Emergency Contact */}
        <div className={`flex items-center gap-3 transition-all duration-300 delay-[0ms] ${open ? "translate-x-0" : "translate-x-4"}`}>
          <span className="bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-lg shadow-sm border border-red-100 text-xs font-semibold text-red-700 whitespace-nowrap">
            🚑 Emergency
          </span>
          <button
            onClick={handleEmergencyClick}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg hover:scale-110 active:scale-95 transition-all hover:shadow-xl"
            aria-label="Emergency contact"
            type="button"
          >
            <AlertCircle className="w-6 h-6" />
          </button>
        </div>

        {/* WhatsApp Consultation */}
        <div className={`flex items-center gap-3 transition-all duration-300 delay-[75ms] ${open ? "translate-x-0" : "translate-x-4"}`}>
          <span className="bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-lg shadow-sm border border-emerald-100 text-xs font-semibold text-emerald-700 whitespace-nowrap">
            💬 WhatsApp
          </span>
          <a
            href={whatsappNumber ? `https://wa.me/${whatsappNumber}?text=Hello%20${siteConfig.companyName}%2C%20I%20need%20medical%20consultation` : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:scale-110 active:scale-95 transition-all hover:shadow-xl"
            aria-label="Start WhatsApp consultation"
            tabIndex={whatsappNumber ? 0 : -1}
            aria-disabled={whatsappNumber ? undefined : "true"}
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        {/* Phone Call */}
        <div className={`flex items-center gap-3 transition-all duration-300 delay-[150ms] ${open ? "translate-x-0" : "translate-x-4"}`}>
          <span className="bg-gradient-to-r from-sky-50 to-cyan-50 px-4 py-2 rounded-lg shadow-sm border border-sky-100 text-xs font-semibold text-sky-700 whitespace-nowrap">
            📞 Call Us
          </span>
          <a
            href={phoneNumber ? `tel:${phoneNumber}` : undefined}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg hover:scale-110 active:scale-95 transition-all hover:shadow-xl"
            aria-label="Call hospital"
            tabIndex={phoneNumber ? 0 : -1}
            aria-disabled={phoneNumber ? undefined : "true"}
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Hospital Timings Info (when open) */}
      {open && (
        <div className="mb-3 animate-fade-in">
          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl p-4 border border-sky-100 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-sky-200">
                <Clock className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Hospital Timings</h4>
                <p className="text-sm text-gray-600">Open All Days</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center p-2 bg-white rounded-lg border border-gray-100">
                <div className="text-xs text-gray-500">Morning</div>
                <div className="font-bold text-gray-900">10 AM – 1 PM</div>
              </div>
              <div className="text-center p-2 bg-white rounded-lg border border-gray-100">
                <div className="text-xs text-gray-500">Evening</div>
                <div className="font-bold text-gray-900">6 PM – 9 PM</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => open ? handleNormalClose() : setOpen(true)}
        className={`relative w-16 h-16 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 active:scale-90 z-10 ${
          open 
            ? "bg-gradient-to-r from-gray-700 to-gray-900 rotate-45" 
            : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
        }`}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-pressed={open}
        type="button"
      >
        {/* Pulsing Effect for Emergency Alert */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></span>
        )}

        {/* Pulsing Ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full border-2 border-emerald-400/50 animate-ping"></span>
        )}

        {open ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-8 h-8 text-white" />
            {/* Emergency Indicator Dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-pulse"></div>
          </div>
        )}
      </button>

      {/* Accessibility Note */}
      <div className="sr-only" aria-live="polite">
        {open ? "Contact options menu opened" : "Contact options menu closed"}
        {isEmergency && "Emergency contact options displayed"}
      </div>
    </div>
  );
}