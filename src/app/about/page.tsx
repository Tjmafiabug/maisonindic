"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, lineReveal, staggerContainer, vp } from "@/lib/motion";

const values = [
  {
    num: "01",
    title: "End-to-End Ownership",
    desc: "From product brief to doorstep delivery — we own every step. No hand-offs, no gaps, no surprises.",
  },
  {
    num: "02",
    title: "Low MOQs, High Standards",
    desc: "We believe quality shouldn't require huge commitments. Our network supports small batches without compromising craft.",
  },
  {
    num: "03",
    title: "Transparent Partnership",
    desc: "Real-time visibility into production, QC, and logistics. You always know where your order stands.",
  },
  {
    num: "04",
    title: "Artisan Network",
    desc: "Direct relationships with India's finest craftspeople — weavers, woodworkers, ceramic artists, and garment makers.",
  },
];

const stats = [
  { value: "50+", label: "Brands Served" },
  { value: "15+", label: "Years Expertise" },
  { value: "4", label: "Categories" },
  { value: "100%", label: "MQM Coverage" },
];

export default function AboutPage() {
  const reduced = useReducedMotion();
  const motion_fadeUp = reduced ? {} : fadeUp;
  const motion_fadeLeft = reduced ? {} : fadeLeft;
  const motion_fadeRight = reduced ? {} : fadeRight;
  const motion_lineReveal = reduced ? {} : lineReveal;
  const motion_stagger = reduced ? {} : staggerContainer;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-16 lg:px-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={motion_stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.p
              variants={motion_fadeUp}
              className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Story
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
              Built to Bridge
              <br />
              <em>Two Worlds</em>
            </motion.h1>
            <motion.div
              variants={motion_lineReveal}
              className="w-16 h-px bg-[#A16207] mb-10 origin-left"
            />
            <motion.p
              variants={motion_fadeUp}
              className="text-[#78716C] text-lg leading-relaxed max-w-2xl"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Maison Indic was founded on a single belief: that global brands deserve a sourcing partner
              who treats their product as their own. We bridge the gap between ambitious e-commerce brands
              and India&apos;s extraordinary manufacturing ecosystem.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <motion.section
        variants={motion_stagger}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        className="py-12 px-6 md:px-16 lg:px-24 bg-white border-y border-[#E8E4DF]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8E4DF]">
          {stats.map((s) => (
            <motion.div key={s.label} variants={motion_fadeUp} className="px-8 first:pl-0 last:pr-0 text-center md:text-left">
              <p
                className="text-[#1C1917] mb-1"
                style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 300 }}
              >
                {s.value}
              </p>
              <p className="text-[#78716C] text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Story section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={motion_fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="overflow-hidden"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
              alt="Indian textile artisan"
              className="w-full h-[500px] object-cover object-center"
              whileHover={reduced ? {} : { scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.div>
          <motion.div
            variants={motion_stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.p
              variants={motion_fadeUp}
              className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Vision
            </motion.p>
            <motion.h2
              variants={motion_fadeUp}
              className="text-[#1C1917] leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3vw, 3rem)",
                fontWeight: 300,
              }}
            >
              India&apos;s craft deserves
              <br />
              <em>a global stage</em>
            </motion.h2>
            <motion.div
              variants={motion_lineReveal}
              className="w-12 h-px bg-[#A16207] mb-6 origin-left"
            />
            <motion.div variants={motion_fadeUp} className="space-y-5 text-[#78716C] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <p>
                India is home to some of the world&apos;s most skilled artisans — weavers in Jaipur,
                woodworkers in Jodhpur, ceramic artists in Khurja, and garment makers across the subcontinent.
                Yet too many brands struggle to access this talent efficiently.
              </p>
              <p>
                We built Maison Indic to change that. With 15+ years of collective expertise in sourcing,
                quality management, and global logistics, our team operates as a true extension of yours —
                embedded in India, thinking globally.
              </p>
              <p>
                Today we serve 50+ brands across four categories, with 100% MQM coverage on every shipment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#1C1917]">
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
              What We Stand For
            </motion.p>
            <motion.h2
              variants={motion_fadeUp}
              className="text-white leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                fontWeight: 300,
              }}
            >
              Our Values
            </motion.h2>
          </motion.div>

          <motion.div
            variants={motion_stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10"
          >
            {values.map((v) => (
              <motion.div
                key={v.num}
                variants={motion_fadeUp}
                className="bg-[#1C1917] p-10 group hover:bg-white/5 transition-colors duration-300"
              >
                <div className="text-[#A16207] text-sm tracking-widest mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  {v.num}
                </div>
                <h3 className="text-white text-2xl mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  {v.title}
                </h3>
                <div className="w-8 h-px bg-[#A16207] mb-4 group-hover:w-16 transition-all duration-500" />
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        variants={motion_stagger}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={motion_fadeUp}
            className="text-[#1C1917] leading-tight mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 300,
            }}
          >
            Ready to source
            <br />
            <em>from India?</em>
          </motion.h2>
          <motion.p
            variants={motion_fadeUp}
            className="text-[#78716C] mb-10 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tell us what you need. We&apos;ll handle the rest.
          </motion.p>
          <motion.div variants={motion_fadeUp} className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-[#A16207] text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#92400E] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get in Touch
            </Link>
            <Link
              href="/catalogue"
              className="border border-[#1C1917] text-[#1C1917] text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#1C1917] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Catalogue
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
