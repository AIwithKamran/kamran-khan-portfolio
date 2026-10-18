import { services } from "@/data/content";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section-pad bg-foam">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
            Services
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.03em] text-ink">
            Digital presence with AI that helps your restaurant run.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            One partner for a modern site and the smart layers on top — assistants,
            automation, and insights that save staff time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <article className="border-t border-line pt-6">
                <span className="font-display text-sm text-copper">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
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
