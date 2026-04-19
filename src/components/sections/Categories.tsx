"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  {
    label: "Apparels",
    sub: "Ethnic wear, contemporary fashion & custom garments",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&h=1200&auto=format&fit=crop",
  },
  {
    label: "Home Textiles",
    sub: "Bedding, curtains, rugs & woven fabrics",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&h=1200&auto=format&fit=crop",
  },
  {
    label: "Home Decor",
    sub: "Handcrafted accents, ceramics & artisan pieces",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&h=1200&auto=format&fit=crop",
  },
  {
    label: "Home Furniture",
    sub: "Solid wood, cane & custom furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&h=1200&auto=format&fit=crop",
  },
];

export function Categories() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF8F5]">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <p className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
          What We Source
        </p>
        <h2
          className="text-[#1C1917] leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 300,
          }}
        >
          Four Categories,
          <br />
          <em>Infinite Possibilities</em>
        </h2>
      </div>

      {/* Expanding gallery */}
      <div className="max-w-6xl mx-auto flex items-stretch gap-3 h-[480px]">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActive(idx)}
            onMouseLeave={() => setActive(null)}
            className={cn(
              "relative overflow-hidden transition-all duration-500 ease-out cursor-pointer",
              active === idx ? "flex-[3]" : "flex-1"
            )}
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
            {/* Dark overlay */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-300",
                active === idx ? "bg-[#1C1917]/50" : "bg-[#1C1917]/30"
              )}
            />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className={cn(
                  "transition-all duration-300",
                  active === idx ? "opacity-100 translate-y-0" : "opacity-90 translate-y-2"
                )}
              >
                <h3
                  className="text-white text-xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {cat.label}
                </h3>
                <p
                  className={cn(
                    "text-white/70 text-xs leading-relaxed transition-all duration-300 overflow-hidden",
                    active === idx ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  )}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cat.sub}
                </p>
              </div>
            </div>
            {/* Gold bottom rule on active */}
            <div
              className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-[#A16207] transition-all duration-300",
                active === idx ? "w-full" : "w-0"
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
