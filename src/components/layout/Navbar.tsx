"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Categories", href: "/categories" },
  { label: "Process", href: "/process" },
  { label: "Catalogue", href: "/catalogue" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    setScrolled(window.scrollY > 40);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#D6D3D1]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-base tracking-[0.25em] transition-colors duration-300",
              scrolled ? "text-[#1C1917]" : "text-white"
            )}
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            MAISON INDIC
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs tracking-[0.15em] uppercase transition-colors duration-200 hover:text-[#A16207]",
                  scrolled ? "text-[#78716C]" : "text-white/70",
                  pathname === link.href && "text-[#A16207]"
                )}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/catalogue"
              className={cn(
                "text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors duration-200",
                scrolled
                  ? "border-[#A16207] text-[#A16207] hover:bg-[#A16207] hover:text-white"
                  : "border-white/50 text-white hover:border-white hover:bg-white/10"
              )}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Get Catalogue
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "md:hidden transition-colors",
              scrolled ? "text-[#1C1917]" : "text-white"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1C1917] flex flex-col pt-20 px-8">
          <nav className="flex flex-col gap-8 mt-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-2xl hover:text-[#A16207] transition-colors",
                  pathname === link.href ? "text-[#A16207]" : "text-white/80"
                )}
                style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/catalogue"
              onClick={() => setMenuOpen(false)}
              className="mt-4 border border-[#A16207] text-[#A16207] text-xs tracking-widest uppercase px-6 py-3 text-center w-fit"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get Catalogue
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
