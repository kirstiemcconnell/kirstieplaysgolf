"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stats", label: "Stats" },
  { href: "#work", label: "Work" },
  { href: "#brands", label: "Brands" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-sm shadow-sm border-b border-warm-grey/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a
          href="#"
          className={`font-display text-lg md:text-xl transition-colors ${
            scrolled ? "text-forest" : "text-white"
          }`}
        >
          @kirstieplaysgolf
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:opacity-70 ${
                scrolled ? "text-forest" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-blush text-forest px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>
        <a
          href="#contact"
          className="md:hidden rounded-full bg-blush text-forest px-4 py-1.5 text-sm font-medium"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
