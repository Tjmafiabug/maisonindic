"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, lineReveal, staggerContainer, staggerFast, vp } from "@/lib/motion";

const categories = [
  {
    label: "Apparels",
    count: "200+ Products",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&h=600&auto=format&fit=crop",
    href: "/categories#apparels",
  },
  {
    label: "Home Textiles",
    count: "150+ Products",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&h=600&auto=format&fit=crop",
    href: "/categories#home-textiles",
  },
  {
    label: "Home Decor",
    count: "300+ Products",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&h=600&auto=format&fit=crop",
    href: "/categories#home-decor",
  },
  {
    label: "Home Furniture",
    count: "100+ Products",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&h=600&auto=format&fit=crop",
    href: "/categories#home-furniture",
  },
];

const highlights = [
  { label: "Low MOQ", desc: "Start from as few as 50 units per SKU" },
  { label: "Custom Specs", desc: "Every product tailored to your brief" },
  { label: "QC Covered", desc: "100% MQM inspection before shipment" },
  { label: "Fast Sampling", desc: "Samples in 2–3 weeks for most categories" },
];

export default function CataloguePage() {
  const reduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const motion_fadeUp = reduced ? {} : fadeUp;
  const motion_fadeLeft = reduced ? {} : fadeLeft;
  const motion_fadeRight = reduced ? {} : fadeRight;
  const motion_lineReveal = reduced ? {} : lineReveal;
  const motion_stagger = reduced ? {} : staggerContainer;
  const motion_staggerFast = reduced ? {} : staggerFast;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Left */}
          <motion.div
            variants={motion_stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={motion_fadeUp}
              className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Product Catalogue
            </motion.p>
            <motion.h1
              variants={motion_fadeUp}
              className="text-[#1C1917] leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 5vw, 6rem)",
                fontWeight: 300,
              }}
            >
              Everything
              <br />
              <em>We Source</em>
            </motion.h1>
            <motion.div
              variants={motion_lineReveal}
              className="w-16 h-px bg-[#A16207] mb-6 origin-left"
            />
            <motion.p
              variants={motion_fadeUp}
              className="text-[#78716C] text-base leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              750+ products across four categories — all sourceable with low MOQs,
              custom specifications, and full end-to-end support.
            </motion.p>
          </motion.div>

          {/* Right — Download form */}
          <motion.div
            variants={motion_fadeRight}
            initial="hidden"
            animate="visible"
            className="border border-[#D6D3D1] bg-white p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="flex flex-col gap-4"
                >
                  <CheckCircle size={36} className="text-[#A16207]" />
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 300 }} className="text-[#1C1917]">
                    On its way
                  </h3>
                  <p className="text-[#78716C] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Check your inbox — we&apos;ll send the catalogue shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0 }}>
                  <p className="text-[#A16207] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    Full Catalogue PDF
                  </p>
                  <h3
                    className="text-[#1C1917] mb-4"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 300 }}
                  >
                    Request the Complete Catalogue
                  </h3>
                  <p className="text-[#78716C] text-sm mb-8" style={{ fontFamily: "var(--font-body)" }}>
                    Enter your email and we&apos;ll send you our full product catalogue with pricing guides and MOQ details.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      name="email"
                      required
                      className={`w-full border px-4 py-3.5 text-sm text-[#1C1917] placeholder:text-[#78716C]/40 focus:outline-none transition-all duration-200 bg-white ${
                        focused ? "border-[#A16207]" : "border-[#D6D3D1]"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="your@email.com"
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    />
                    <motion.button
                      type="submit"
                      whileHover={reduced ? {} : { scale: 1.02 }}
                      whileTap={reduced ? {} : { scale: 0.98 }}
                      className="w-full bg-[#A16207] text-white text-xs tracking-widest uppercase py-4 hover:bg-[#92400E] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Request Catalogue
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <motion.section
        variants={motion_stagger}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        className="py-16 px-6 md:px-16 lg:px-24 bg-[#1C1917]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {highlights.map((h) => (
            <motion.div key={h.label} variants={motion_fadeUp} className="bg-[#1C1917] p-8">
              <p className="text-[#A16207] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                {h.label}
              </p>
              <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Categories grid */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={motion_stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="mb-16"
          >
            <motion.p
              variants={motion_fadeUp}
              className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-4 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Browse by Category
            </motion.p>
            <motion.h2
              variants={motion_fadeUp}
              className="text-[#1C1917] leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                fontWeight: 300,
              }}
            >
              Four Categories
            </motion.h2>
          </motion.div>

          <motion.div
            variants={motion_staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {categories.map((cat) => (
              <motion.div key={cat.label} variants={motion_fadeUp}>
                <Link href={cat.href} className="group relative overflow-hidden block">
                  <motion.img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-64 object-cover object-center"
                    whileHover={reduced ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                  <div className="absolute inset-0 bg-[#1C1917]/40 group-hover:bg-[#1C1917]/55 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                      {cat.label}
                    </h3>
                    <p className="text-white/60 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                      {cat.count}
                    </p>
                    <div className="w-0 group-hover:w-12 h-px bg-[#A16207] mt-3 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <motion.section
        variants={motion_stagger}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        className="py-20 px-6 md:px-16 lg:px-24 bg-white border-t border-[#E8E4DF]"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div variants={motion_fadeLeft}>
            <h3
              className="text-[#1C1917] mb-2"
              style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300 }}
            >
              Don&apos;t see what you need?
            </h3>
            <p className="text-[#78716C] text-sm" style={{ fontFamily: "var(--font-body)" }}>
              We source custom products too. Tell us what you&apos;re looking for.
            </p>
          </motion.div>
          <motion.div variants={motion_fadeRight}>
            <Link
              href="/contact"
              className="inline-block border border-[#A16207] text-[#A16207] text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#A16207] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
