import { profile } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="atmosphere" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-[clamp(1.25rem,4vw,3.5rem)]">
        <p className="rise font-display text-[clamp(3.4rem,11vw,8.5rem)] text-ink">
          {profile.name}
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="rise rise-delay-1 max-w-2xl font-display text-[clamp(1.65rem,3.4vw,2.6rem)] leading-[1.15] tracking-[-0.03em] text-ink">
              Websites and AI systems for restaurants that want to convert guests — not just look online.
            </h1>
            <p className="rise rise-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {profile.role} building LLM &amp; RAG products, ML pipelines, and clear digital
              experiences businesses can actually use.
            </p>
            <div className="rise rise-delay-3 mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="cta cta-primary">
                Start a project
              </a>
              <a href="#services" className="cta cta-ghost">
                See what I offer
              </a>
            </div>
          </div>

          <div className="rise rise-delay-4 space-y-4 border-t border-line pt-5 text-sm text-muted lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                Based in
              </span>
              <span className="mt-1 block text-base text-ink">{profile.location}</span>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                Focus
              </span>
              <span className="mt-1 block text-base text-ink">
                LLM · RAG · FastAPI · ML/DL
              </span>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-muted">
                Studying
              </span>
              <span className="mt-1 block text-base text-ink">
                {profile.education.status} · {profile.education.school.split("(")[0].trim()}
              </span>
            </p>
          </div>
        </div>

        <span className="rule mt-12" />
      </div>
    </section>
  );
}
