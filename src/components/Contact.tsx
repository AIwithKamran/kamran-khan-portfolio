import { profile } from "@/data/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="contact-stage section-pad">
      <div className="contact-slash" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.3rem,5.5vw,4.4rem)] font-bold tracking-[-0.04em]">
            Need an AI system, website, or app? Let&apos;s build it.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
            Tell me about your project. I&apos;ll reply with a clear next step,
            scope, and timeline.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal delay={80}>
            <a
              href={`mailto:${profile.email}?subject=Website%20%26%20AI%20project`}
              className="group block border-t border-white/20 pt-6"
              data-cursor="hot"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                Email
              </span>
              <span className="mt-3 block break-all font-display text-[clamp(1.2rem,2.5vw,1.85rem)] font-bold tracking-tight transition-colors group-hover:text-saffron">
                {profile.email}
              </span>
            </a>
          </Reveal>

          <Reveal delay={140}>
            <a
              href={`tel:${profile.phone}`}
              className="group block border-t border-white/20 pt-6"
              data-cursor="hot"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                Mobile
              </span>
              <span className="mt-3 block font-display text-[clamp(1.2rem,2.5vw,1.85rem)] font-bold tracking-tight transition-colors group-hover:text-saffron">
                {profile.phone}
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={180} className="mt-12 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="cta cta-saffron">
            Email me
            <span aria-hidden>→</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta border border-white/25 text-foam hover:border-saffron hover:text-saffron"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta border border-white/25 text-foam hover:border-saffron hover:text-saffron"
          >
            GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
