"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function AnimatedStat({ value, suffix, label, description }: StatProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animatedValue = useSpring(0, { mass: 0.8, stiffness: 60, damping: 15 });
  const display = useTransform(animatedValue, (v) =>
    new Intl.NumberFormat("en-US").format(Math.round(v))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) animatedValue.set(value);
  }, [inView, animatedValue, value]);

  return (
    <div ref={ref} className="py-12 px-8 border-b md:border-b-0 md:border-r border-[#D6D3D1] last:border-0">
      <div className="flex items-end gap-1 mb-3">
        <motion.span
          className="text-[#1C1917]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          {display}
        </motion.span>
        <span
          className="text-[#A16207] pb-2"
          style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300 }}
        >
          {suffix}
        </span>
      </div>
      <p
        className="text-[#1C1917] text-sm font-semibold tracking-widest uppercase mb-2"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
      <p className="text-[#78716C] text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
        {description}
      </p>
    </div>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Brands Served", description: "E-commerce brands scaling through Indian sourcing" },
  { value: 4, suffix: "", label: "Categories", description: "Apparels, textiles, decor & furniture under one roof" },
  { value: 100, suffix: "%", label: "MQM Coverage", description: "Every order tracked via our proprietary quality system" },
  { value: 15, suffix: "+", label: "Years Expertise", description: "Deep manufacturing network across India" },
];

export function Stats() {
  return (
    <section className="bg-[#FAF8F5] border-y border-[#D6D3D1]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <AnimatedStat key={i} {...stat} />
        ))}
      </div>
    </section>
  );
}
