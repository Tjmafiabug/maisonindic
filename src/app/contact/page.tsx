"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, lineReveal, staggerContainer, staggerFast, vp } from "@/lib/motion";

const categoryOptions = [
  "Apparels",
  "Home Textiles",
  "Home Decor",
  "Home Furniture",
  "Multiple Categories",
  "Not Sure Yet",
];

type FormState = "idle" | "submitting" | "success";

export default function ContactPage() {
  const reduced = useReducedMotion();
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const motion_fadeUp = reduced ? {} : fadeUp;
  const motion_fadeLeft = reduced ? {} : fadeLeft;
  const motion_fadeRight = reduced ? {} : fadeRight;
  const motion_lineReveal = reduced ? {} : lineReveal;
  const motion_stagger = reduced ? {} : staggerContainer;
  const motion_staggerFast = reduced ? {} : staggerFast;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  const inputClass = (name: string) =>
    `w-full border px-4 py-3.5 text-sm text-[#1C1917] placeholder:text-[#78716C]/40 focus:outline-none transition-all duration-200 bg-white ${
      focused === name ? "border-[#A16207]" : "border-[#D6D3D1]"
    }`;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-16 lg:px-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={motion_stagger} initial="hidden" animate="visible">
            <motion.p
              variants={motion_fadeUp}
              className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Let&apos;s Talk
            </motion.p>
            <motion.h1
              variants={motion_fadeUp}
              className="text-[#1C1917] leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6vw, 7rem)",
                fontWeight: 300,
              }}
            >
              Start a
              <br />
              <em>Conversation</em>
            </motion.h1>
            <motion.div
              variants={motion_lineReveal}
              className="w-16 h-px bg-[#A16207] origin-left"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 pb-28 px-6 md:px-16 lg:px-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Sidebar */}
          <motion.div
            variants={motion_stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="md:col-span-1"
          >
            <motion.p
              variants={motion_fadeUp}
              className="text-[#78716C] text-sm leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tell us what you need — category, volume, timeline. We typically respond within one business day.
            </motion.p>

            <motion.div variants={motion_staggerFast} className="space-y-8">
              <motion.div variants={motion_fadeUp}>
                <p className="text-[#1C1917] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                  Email
                </p>
                <a
                  href="mailto:hello@maisonindic.com"
                  className="flex items-center gap-2 text-[#78716C] text-sm hover:text-[#A16207] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Mail size={14} />
                  hello@maisonindic.com
                </a>
              </motion.div>
              <motion.div variants={motion_fadeUp}>
                <p className="text-[#1C1917] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                  Response Time
                </p>
                <p className="text-[#78716C] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  Within 1 business day
                </p>
              </motion.div>
              <motion.div variants={motion_fadeUp}>
                <p className="text-[#1C1917] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                  Serving
                </p>
                <p className="text-[#78716C] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  Global e-commerce brands
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={motion_fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="md:col-span-2"
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-start gap-6 py-16"
                >
                  <CheckCircle size={40} className="text-[#A16207]" />
                  <div>
                    <h3
                      className="text-[#1C1917] mb-2"
                      style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300 }}
                    >
                      Message received
                    </h3>
                    <p className="text-[#78716C] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      We&apos;ll be in touch within one business day.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#1C1917] text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                        Name <span className="text-[#A16207]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className={inputClass("name")}
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="Your name"
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label className="block text-[#1C1917] text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        className={inputClass("company")}
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="Your company"
                        onFocus={() => setFocused("company")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#1C1917] text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                        Email <span className="text-[#A16207]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className={inputClass("email")}
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="your@email.com"
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label className="block text-[#1C1917] text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                        Category Interest
                      </label>
                      <div className="relative">
                        <select
                          name="category"
                          className={`${inputClass("category")} appearance-none cursor-pointer pr-10`}
                          style={{ fontFamily: "var(--font-body)" }}
                          onFocus={() => setFocused("category")}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="">Select a category</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#78716C" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1C1917] text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                      Message <span className="text-[#A16207]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className={inputClass("message")}
                      style={{ fontFamily: "var(--font-body)", resize: "none" }}
                      placeholder="Tell us about your sourcing needs — product type, volume, timeline, any specific requirements..."
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div className="flex items-center gap-6">
                    <motion.button
                      type="submit"
                      disabled={formState === "submitting"}
                      whileHover={reduced ? {} : { scale: 1.02 }}
                      whileTap={reduced ? {} : { scale: 0.98 }}
                      className="bg-[#A16207] text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#92400E] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {formState === "submitting" ? "Sending…" : "Send Message"}
                    </motion.button>
                    <p className="text-[#78716C] text-xs" style={{ fontFamily: "var(--font-body)" }}>
                      * Required fields
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
