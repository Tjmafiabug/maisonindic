"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "motion/react";
import useMeasure from "react-use-measure";

function MarqueeEffect({
  children,
  gap = 16,
  speed = 80,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const [ref, { width }] = useMeasure();
  const translation = useMotionValue(0);
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    const contentSize = width + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;
    const duration = Math.abs(to - from) / speed;

    const controls = animate(translation, [from, to], {
      ease: "linear",
      duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onRepeat: () => translation.set(from),
    });

    return controls.stop;
  }, [key, translation, speed, width, gap, reverse]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{ x: translation, gap: `${gap}px` }}
        ref={ref}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const items = [
  "Apparels",
  "Home Textiles",
  "Home Furniture",
  "Home Decor",
  "Low MOQ",
  "End-to-End Sourcing",
  "Quality Assured",
  "Global Delivery",
];

export function Marquee() {
  return (
    <div className="border-y border-[#D6D3D1] py-5 bg-[#FAF8F5] overflow-hidden">
      <MarqueeEffect gap={48} speed={60}>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span
              className="text-xs tracking-[0.25em] uppercase text-[#78716C]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {item}
            </span>
            <span className="text-[#A16207] text-xs">◆</span>
          </div>
        ))}
      </MarqueeEffect>
    </div>
  );
}
