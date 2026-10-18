import { profile } from "@/data/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-[clamp(1.25rem,4vw,3.5rem)] py-5">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink">
          {profile.name.split(" ")[0]}
          <span className="text-copper">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
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
