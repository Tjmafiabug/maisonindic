"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Develop",
    desc: "Product design, specification development, and sample creation with our network of skilled artisans.",
  },
  {
    num: "02",
    title: "Acquire",
    desc: "Factory selection, negotiation, and procurement through our vetted network of socially compliant manufacturers.",
  },
  {
    num: "03",
    title: "Strengthen",
    desc: "Quality control via our Meta Quality Management (MQM) system — ensuring every unit meets spec before it ships.",
  },
  {
    num: "04",
    title: "Thrive",
    desc: "End-to-end logistics, IP protection, eco-packaging, and on-time global delivery to your door.",
  },
];

export function Process() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#1C1917]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              How It Works
            </p>
            <h2
              className="text-white leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: 300,
              }}
            >
              Our Process
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            From brief to delivery — we own every step so you don&apos;t have to.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1C1917] p-8 group hover:bg-[#78716C]/10 transition-colors duration-300"
            >
              <div
                className="text-[#A16207] text-sm mb-8 tracking-widest"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {step.num}
              </div>
              <h3
                className="text-white text-2xl mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {step.title}
              </h3>
              <div className="w-8 h-px bg-[#A16207] mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
