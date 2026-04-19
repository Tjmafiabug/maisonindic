import Link from "next/link";
import { Globe, Share2, Mail } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Categories", href: "/categories" },
  { label: "Our Process", href: "/process" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#1C1917] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div
              className="text-white text-2xl tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              MAISON INDIC
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-body)" }}>
              India&apos;s premier end-to-end sourcing partner for global e-commerce brands.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#A16207] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Connect
            </p>
            <div className="space-y-3 mb-8">
              <a href="mailto:hello@maisonindic.com" className="flex items-center gap-3 text-white/60 text-sm hover:text-[#A16207] transition-colors">
                <Mail size={14} />
                hello@maisonindic.com
              </a>
            </div>
            <div className="flex gap-4">
              {[{ icon: Globe, label: "Website" }, { icon: Share2, label: "Social" }].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#A16207] hover:text-[#A16207] transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            © 2025 Maison Indic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-white/25 text-xs hover:text-white/50 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
