import { profile } from "@/data/content";
import { HeroCanvas } from "./HeroCanvas";

function BrandLetters({ text }: { text: string }) {
  return (
    <h1 className="m-0 font-display whitespace-nowrap text-[clamp(1.85rem,8.8vw,9.2rem)] font-extrabold tracking-[-0.05em] text-ink">
      <span className="sr-only">{text}</span>
      <span className="brand-line" aria-hidden="true">
        {text.split("").map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="brand-letter"
            style={{ animationDelay: `${0.04 + i * 0.045}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </h1>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32"
    >
      <div className="hero-stage" aria-hidden="true">
        <div className="hero-wash" />
        <div className="hero-grid" />
        <HeroCanvas />
        <div className="grain" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-[clamp(1.25rem,4vw,3.5rem)]">
        <BrandLetters text={profile.name} />

        <p className="rise rise-d1 mt-7 max-w-2xl font-display text-[clamp(1.55rem,3.2vw,2.45rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-ink">
          I build AI/ML systems, websites, and apps that ship — not just demos.
        </p>

        <p className="rise rise-d2 mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
          AI Developer focused on LLM &amp; RAG products, ML/DL pipelines, and
          full-stack experiences businesses can actually use.
        </p>

        <div className="rise rise-d3 mt-9 flex flex-wrap gap-3">
          <a href="#contact" className="cta cta-primary">
            Start a project
            <span aria-hidden="true">→</span>
          </a>
          <a href="#services" className="cta cta-ghost">
            See what I offer
          </a>
        </div>
      </div>
    </section>
  );
}
