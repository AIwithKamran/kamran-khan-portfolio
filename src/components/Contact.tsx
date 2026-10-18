import { profile } from "@/data/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-ink text-foam">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.03em]">
            Ready for a site — and AI that helps your guests and your staff.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Tell me about your restaurant or business. I&apos;ll reply with a clear
            next step, scope, and timeline.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal delay={80}>
            <a
              href={`mailto:${profile.email}?subject=Website%20%26%20AI%20project`}
              className="group block border-t border-white/15 pt-6 transition-colors hover:border-copper"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-white/50">
                Email
              </span>
              <span className="mt-2 block font-display text-2xl tracking-tight transition-colors group-hover:text-copper sm:text-3xl">
                {profile.email}
              </span>
            </a>
          </Reveal>

          <Reveal delay={140}>
            <a
              href={`tel:${profile.phone}`}
              className="group block border-t border-white/15 pt-6 transition-colors hover:border-copper"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-white/50">
                Mobile
              </span>
              <span className="mt-2 block font-display text-2xl tracking-tight transition-colors group-hover:text-copper sm:text-3xl">
                {profile.phone}
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={180} className="mt-12 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="cta bg-copper text-foam hover:bg-copper-deep">
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta border border-white/20 text-foam hover:border-foam"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta border border-white/20 text-foam hover:border-foam"
          >
            GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
