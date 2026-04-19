"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, lineReveal, staggerContainer, staggerFast, vp } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Develop",
    short: "Brief → Sample",
    desc: "We start with your product brief — sketches, references, or finished specs. Our team works with skilled artisans and pattern makers to develop samples that match your vision. Multiple revision rounds, no extra cost.",
    details: [
      "Product design & specification development",
      "Artisan matching & sample creation",
      "Material sourcing & swatch approval",
      "Revision rounds until approved",
    ],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&h=600&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Acquire",
    short: "Factory → Order",
    desc: "Once samples are approved, we identify the right manufacturer from our vetted network of socially compliant factories. We negotiate pricing, manage purchase orders, and handle all supplier communication.",
    details: [
      "Factory selection from vetted network",
      "Price negotiation & PO management",
      "Social compliance verification",
      "Production scheduling & capacity planning",
    ],
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&h=600&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Strengthen",
    short: "QC → Approval",
    desc: "Our Meta Quality Management (MQM) system ensures 100% inspection coverage on every production run. In-line checks during production and final AQL inspections before shipment.",
    details: [
      "In-line production quality checks",
      "AQL final inspection at factory",
      "Lab testing (where required)",
      "Defect reporting & resolution",
    ],
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&h=600&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Thrive",
    short: "Ship → Deliver",
    desc: "Approved goods are packed, labeled, and shipped via our preferred freight partners. We manage customs documentation, track shipments in real-time, and ensure on-time delivery to your warehouse.",
    details: [
      "Export packaging & labeling",
      "Freight forwarding & customs docs",
      "Real-time shipment tracking",
      "Last-mile delivery coordination",
    ],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&h=600&auto=format&fit=crop",
  },
];

export default function ProcessPage() {
  const reduced = useReducedMotion();

  const motion_fadeUp = reduced ? {} : fadeUp;
  const motion_fadeLeft = reduced ? {} : fadeLeft;
  const motion_fadeRight = reduced ? {} : fadeRight;
  const motion_lineReveal = reduced ? {} : lineReveal;
  const motion_stagger = reduced ? {} : staggerContainer;
  const motion_staggerFast = reduced ? {} : staggerFast;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#1C1917]">
        <div className="max-w-6xl mx-auto">
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
              How It Works
            </motion.p>
            <motion.h1
              variants={motion_fadeUp}
              className="text-white leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6vw, 7rem)",
                fontWeight: 300,
              }}
            >
              Our Process
            </motion.h1>
            <motion.div
              variants={motion_lineReveal}
              className="w-16 h-px bg-[#A16207] mb-8 origin-left"
            />
            <motion.p
              variants={motion_fadeUp}
              className="text-white/50 max-w-xl text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              From brief to delivery — we own every step so you don&apos;t have to.
              Four phases, zero gaps, one accountable partner.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Step indicator strip */}
      <motion.div
        variants={motion_stagger}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        className="bg-[#1C1917] border-t border-white/10 px-6 md:px-16 lg:px-24 pb-16"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-px bg-white/10">
          {steps.map((step) => (
            <motion.a
              key={step.num}
              href={`#step-${step.num}`}
              variants={motion_fadeUp}
              className="bg-[#1C1917] px-6 py-5 group hover:bg-white/5 transition-colors duration-300"
            >
              <span className="block text-[#A16207] text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-body)" }}>
                {step.num}
              </span>
              <span className="block text-white/60 text-sm group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                {step.title}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Steps */}
      {steps.map((step, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={step.num}
            id={`step-${step.num}`}
            className={`py-24 px-6 md:px-16 lg:px-24 overflow-hidden ${isEven ? "bg-[#FAF8F5]" : "bg-white"}`}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <motion.div
                variants={isEven ? motion_fadeLeft : motion_fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className={isEven ? "" : "md:order-2"}
              >
                <motion.div
                  variants={motion_stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                >
                  <motion.div variants={motion_fadeUp} className="flex items-center gap-4 mb-8">
                    <span
                      className="text-[#A16207]"
                      style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 300, lineHeight: 1 }}
                    >
                      {step.num}
                    </span>
                    <div className="w-px h-10 bg-[#D6D3D1]" />
                    <span className="text-[#78716C] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                      {step.short}
                    </span>
                  </motion.div>
                  <motion.h2
                    variants={motion_fadeUp}
                    className="text-[#1C1917] leading-tight mb-6"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.5rem, 4vw, 4rem)",
                      fontWeight: 300,
                    }}
                  >
                    {step.title}
                  </motion.h2>
                  <motion.div
                    variants={motion_lineReveal}
                    className="w-12 h-px bg-[#A16207] mb-6 origin-left"
                  />
                  <motion.p
                    variants={motion_fadeUp}
                    className="text-[#78716C] text-sm leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.desc}
                  </motion.p>
                  <motion.ul variants={motion_staggerFast} className="space-y-3">
                    {step.details.map((d) => (
                      <motion.li
                        key={d}
                        variants={motion_fadeUp}
                        className="flex items-start gap-3 text-[#1C1917] text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#A16207] flex-shrink-0 mt-2" />
                        {d}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={isEven ? motion_fadeRight : motion_fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className={`overflow-hidden ${isEven ? "" : "md:order-1"}`}
              >
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-[420px] object-cover object-center"
                  whileHover={reduced ? {} : { scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <motion.section
        variants={motion_stagger}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        className="py-24 px-6 md:px-16 lg:px-24 bg-[#1C1917]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            variants={motion_fadeUp}
            className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-6 font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start the Process
          </motion.p>
          <motion.h2
            variants={motion_fadeUp}
            className="text-white leading-tight mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 300,
            }}
          >
            Ready to source
            <br />
            <em>the right way?</em>
          </motion.h2>
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
              className="border border-white/30 text-white text-xs tracking-widest uppercase px-8 py-4 hover:border-white hover:bg-white/10 transition-colors duration-200"
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
