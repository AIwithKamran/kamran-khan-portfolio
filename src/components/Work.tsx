import { experience, projects } from "@/data/content";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
            Work
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.03em] text-ink">
            Experience shipping AI into real workflows.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-0">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 70}>
              <article className="grid gap-4 border-t border-line py-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:gap-10">
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-ink">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-ink-soft">{job.role}</p>
                  <p className="mt-3 text-sm text-muted">
                    {job.period} · {job.location}
                  </p>
                </div>
                <ul className="space-y-2 text-ink-soft">
                  {job.points.map((point) => (
                    <li key={point} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] tracking-tight text-ink">
            Selected projects
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <article className="flex h-full flex-col border-t border-line pt-5">
                <h4 className="font-display text-xl tracking-tight text-ink">
                  {project.title}
                </h4>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
                  {project.description}
                </p>
                <p className="mt-5 text-sm text-muted">{project.tags.join(" · ")}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
