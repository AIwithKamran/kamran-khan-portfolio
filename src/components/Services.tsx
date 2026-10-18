import { services } from "@/data/content";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section-pad bg-foam">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
                Services
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] text-ink">
                What I build as an AI developer.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft lg:justify-self-end">
              From model pipelines to product surfaces — AI/ML systems, LLM apps,
              websites, and full-stack tools that people can use on day one.
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <article className="service-row" data-cursor="hot">
                <span className="font-display text-sm font-bold tracking-wider text-teal">
                  0{i + 1}
                </span>
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.35rem)] font-bold tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="max-w-md leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
