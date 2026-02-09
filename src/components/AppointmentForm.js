"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";

import appointmentSlots from "../data/appointmentSlots";
import siteConfig from "../data/siteConfig";

/**
 * ✅ Simple Appointment Form (Production Ready)
 * - Only Name + Phone + Slot + Message
 * - No Doctors or Services Dropdown
 * - Mobile Responsive
 */

export default function AppointmentForm({ hideHeader = false }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!name || !phone || !selectedSlot) {
      setError("Please fill all required fields.");
      setIsSubmitting(false);
      return;
    }

    const whatsappText = `
🏥 Appointment Request - ${siteConfig.companyName}

Patient Name: ${name}
Phone Number: ${phone}

Preferred Slot: ${selectedSlot}

Message: ${message || "None"}
    `;

    const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappLink, "_blank");

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 400);
  };

  /* ================= SUCCESS ================= */
  if (submitted) {
    return (
      <div
        className="rounded-3xl border p-8 sm:p-12 text-center"
        style={{
          backgroundColor: "var(--bg-section)",
          borderColor: "var(--border-default)",
        }}
      >
        <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-6" />

        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          Request Received!
        </h3>

        <p className="text-sm sm:text-base text-text-muted mb-6">
          Your WhatsApp message is ready. Send it and our team will confirm your
          appointment shortly.
        </p>

        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 rounded-xl border font-semibold hover:bg-gray-50 transition"
          style={{ borderColor: "var(--border-default)" }}
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border shadow-lg overflow-hidden"
      style={{
        backgroundColor: "var(--bg-section)",
        borderColor: "var(--border-default)",
      }}
    >
      {/* Accent Bar */}
      <div
        className="h-2 w-full"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="p-6 sm:p-10">
        {/* HEADER */}
        {!hideHeader && (
          <div className="mb-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Book Appointment
            </h3>
            <p className="mt-2 text-sm sm:text-base text-text-muted">
              Fill in your details and confirm instantly via WhatsApp.
            </p>
          </div>
        )}

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 px-4 py-3 rounded-xl text-sm border flex items-center gap-2"
              style={{
                backgroundColor: "rgba(239,68,68,0.08)",
                borderColor: "rgba(239,68,68,0.3)",
                color: "rgb(220,38,38)",
              }}
            >
              <Zap className="w-4 h-4" />
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <InputField
            icon={<User className="w-4 h-4" />}
            label="Patient Name"
            value={name}
            onChange={setName}
            placeholder="Enter your name"
          />

          {/* Phone */}
          <InputField
            icon={<Phone className="w-4 h-4" />}
            label="WhatsApp Number"
            value={phone}
            onChange={setPhone}
            placeholder="+91 XXXXX XXXXX"
          />

          {/* Slot */}
          <SelectField
            icon={<Clock className="w-4 h-4" />}
            label="Preferred Slot"
            value={selectedSlot}
            onChange={setSelectedSlot}
            options={appointmentSlots.map((s) => s.label)}
            full
          />

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <MessageSquare className="w-4 h-4 text-accent" />
              Message (Optional)
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Briefly describe symptoms..."
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
              style={{ borderColor: "var(--border-default)" }}
            />
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-white transition hover:opacity-90"
          style={{ background: "var(--gradient-primary)" }}
        >
          {isSubmitting ? "Sending..." : "Confirm via WhatsApp"}
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}

/* ================= FIELD COMPONENTS ================= */

function InputField({ icon, label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-semibold mb-2">
        <span className="text-accent">{icon}</span>
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
        style={{ borderColor: "var(--border-default)" }}
        required
      />
    </div>
  );
}

function SelectField({ icon, label, value, onChange, options, full }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="flex items-center gap-2 text-sm font-semibold mb-2">
        <span className="text-accent">{icon}</span>
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
        style={{ borderColor: "var(--border-default)" }}
        required
      >
        <option value="">Select Slot...</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
