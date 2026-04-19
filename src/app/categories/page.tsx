"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, lineReveal, staggerContainer, staggerFast, vp } from "@/lib/motion";

const categories = [
  {
    id: "apparels",
    label: "Apparels",
    tagline: "Ethnic wear, contemporary fashion & custom garments",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&h=900&auto=format&fit=crop",
    desc: "From block-printed kurtas to contemporary silhouettes, our apparel network spans India's finest garment hubs — Jaipur, Surat, and Ludhiana. We manage sampling, grading, and production with full QC oversight.",
    items: ["Ethnic & Fusion Wear", "Contemporary Fashion", "Custom Garments", "Sustainable Fabrics", "Export-Quality Basics"],
  },
  {
    id: "home-textiles",
    label: "Home Textiles",
    tagline: "Bedding, curtains, rugs & woven fabrics",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&h=900&auto=format&fit=crop",
    desc: "India's textile heritage runs deep. We connect you with master weavers and mill operators to deliver bedding, rugs, curtains, and upholstery fabrics at scale — with custom dyeing and weave options.",
    items: ["Bed Linen & Duvet Covers", "Handwoven Rugs", "Curtains & Drapes", "Cushion Covers & Throws", "Upholstery Fabrics"],
  },
  {
    id: "home-decor",
    label: "Home Decor",
    tagline: "Handcrafted accents, ceramics & artisan pieces",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&h=900&auto=format&fit=crop",
    desc: "Handmade in India's artisan clusters — from blue pottery in Jaipur to brass work in Moradabad. Each piece carries centuries of craft tradition, curated and quality-checked for global retail.",
    items: ["Ceramics & Pottery", "Brass & Metal Art", "Candles & Fragrance", "Wall Art & Mirrors", "Seasonal & Gifting"],
  },
  {
    id: "home-furniture",
    label: "Home Furniture",
    tagline: "Solid wood, cane & custom furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&h=900&auto=format&fit=crop",
    desc: "Jodhpur's woodworking tradition is world-renowned. We source solid wood, cane, and mango furniture built to export spec — with custom finishes, upholstery options, and flat-pack engineering on request.",
    items: ["Solid Wood Furniture", "Cane & Rattan", "Upholstered Pieces", "Storage & Shelving", "Custom & Bespoke"],
  },
];

export default function CategoriesPage() {
  const reduced = useReducedMotion();
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const motion_fadeUp = reduced ? {} : fadeUp;
  const motion_fadeLeft = reduced ? {} : fadeLeft;
  const motion_fadeRight = reduced ? {} : fadeRight;
  const motion_lineReveal = reduced ? {} : lineReveal;
  const motion_stagger = reduced ? {} : staggerContainer;
  const motion_staggerFast = reduced ? {} : staggerFast;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#FAF8F5]">
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
              What We Source
            </motion.p>
            <motion.h1
              variants={motion_fadeUp}
              className="text-[#1C1917] leading-tight mb-10"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6vw, 7rem)",
                fontWeight: 300,
              }}
            >
              Four Categories,
              <br />
              <em>Infinite Possibilities</em>
            </motion.h1>

            {/* Jump nav */}
            <motion.nav
              variants={motion_staggerFast}
              className="flex flex-wrap gap-3"
            >
              {categories.map((cat) => (
                <motion.a
                  key={cat.id}
                  href={`#${cat.id}`}
                  variants={motion_fadeUp}
                  onMouseEnter={() => setActiveNav(cat.id)}
                  onMouseLeave={() => setActiveNav(null)}
                  className="relative text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    borderColor: activeNav === cat.id ? "#A16207" : "#D6D3D1",
                    color: activeNav === cat.id ? "#A16207" : "#78716C",
                  }}
                >
                  {cat.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((cat, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-24 px-6 md:px-16 lg:px-24 overflow-hidden ${isEven ? "bg-white" : "bg-[#FAF8F5]"}`}
          >
            <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
              {/* Text — left on even, right on odd */}
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
                  <motion.p
                    variants={motion_fadeUp}
                    className="text-[#A16207] text-xs tracking-[0.3em] uppercase mb-4 font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    0{idx + 1}
                  </motion.p>
                  <motion.h2
                    variants={motion_fadeUp}
                    className="text-[#1C1917] leading-tight mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.5rem, 4vw, 4rem)",
                      fontWeight: 300,
                    }}
                  >
                    {cat.label}
                  </motion.h2>
                  <motion.p
                    variants={motion_fadeUp}
                    className="text-[#78716C] text-sm italic mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cat.tagline}
                  </motion.p>
                  <motion.div
                    variants={motion_lineReveal}
                    className="w-12 h-px bg-[#A16207] mb-6 origin-left"
                  />
                  <motion.p
                    variants={motion_fadeUp}
                    className="text-[#78716C] text-sm leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cat.desc}
                  </motion.p>
                  <motion.ul variants={motion_staggerFast} className="space-y-2">
                    {cat.items.map((item) => (
                      <motion.li
                        key={item}
                        variants={motion_fadeUp}
                        className="flex items-center gap-3 text-[#1C1917] text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#A16207] flex-shrink-0" />
                        {item}
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
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-[500px] object-cover object-center"
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
            Ready to Start?
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
            Browse our full catalogue
            <br />
            <em>or get in touch</em>
          </motion.h2>
          <motion.div variants={motion_fadeUp} className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/catalogue"
              className="bg-[#A16207] text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#92400E] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Catalogue
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white text-xs tracking-widest uppercase px-8 py-4 hover:border-white hover:bg-white/10 transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
