"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""}`}
      suppressHydrationWarning
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-[clamp(1.25rem,4vw,3.5rem)] py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink">
          KK
          <span className="text-saffron">/</span>
          AI
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${profile.email}`} className="cta cta-primary text-sm">
          Hire me
        </a>
      </div>
    </header>
  );
}
