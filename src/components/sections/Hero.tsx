"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-top md:bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2874&auto=format&fit=crop)`,
        }}
      >
        <div className="absolute inset-0 bg-[#1C1917]/65" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 max-w-6xl w-full"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-6 font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          India&apos;s Premier Sourcing Partner
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-white leading-[1.05] mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 8rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          India&apos;s House
          <br />
          <em>of Sourcing</em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          From concept to delivery — apparel, home textiles,
          furniture &amp; decor. End-to-end, every time.
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap">
          <Button asChild size="lg" variant="gold" className="rounded-none text-sm tracking-widest uppercase">
            <Link href="/catalogue">View Catalogue</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none text-sm tracking-widest uppercase border-white/40 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact">Let&apos;s Talk →</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-white/30" />
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </div>
  );
}
