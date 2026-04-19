"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const IMAGES = [
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=600&h=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=600&h=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600&h=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&h=800&auto=format&fit=crop",
];

const areaClasses = [
  "md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3",
  "md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4",
  "md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-6",
  "md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-5",
];

export function CatalogCTA() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-6 font-medium">
            Ready to Source?
          </p>
          <h2
            className="text-[#1C1917] leading-tight mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 300,
            }}
          >
            Browse Our
            <br />
            <em>Full Catalogue</em>
          </h2>
          <div className="w-12 h-px bg-[#A16207] mb-6" />
          <p className="text-[#78716C] text-base leading-relaxed mb-10 max-w-md" style={{ fontFamily: "var(--font-body)" }}>
            Thousands of products across four categories — all sourceable with low MOQs,
            custom specifications, and end-to-end support from our team.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild size="lg" variant="default" className="rounded-none tracking-widest uppercase text-xs">
              <Link href="/catalogue">Download Catalogue</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none tracking-widest uppercase text-xs border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-3 md:grid-rows-[50px_150px_50px_150px_50px]"
        >
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={cn("relative overflow-hidden aspect-[3/4] md:aspect-auto", areaClasses[i])}
            >
              <img
                src={src}
                alt=""
                className="size-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
