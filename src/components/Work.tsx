import { experience, projects } from "@/data/content";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
            Work
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.1rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] text-ink">
            Shipping AI into workflows that already exist.
          </h2>
        </Reveal>

        <div className="mt-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className="job-row" data-cursor="hot">
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold tracking-tight text-ink">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-ink-soft">{job.role}</p>
                  <p className="mt-3 text-sm text-muted">
                    {job.period}
                    <span className="mx-2 text-line">|</span>
                    {job.location}
                  </p>
                  <div className="job-accent" aria-hidden />
                </div>
                <ul className="space-y-2.5 text-ink-soft">
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

        <Reveal className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-line pt-10">
            <h3 className="font-display text-[clamp(1.6rem,3vw,2.3rem)] font-bold tracking-tight text-ink">
              Selected projects
            </h3>
            <p className="max-w-sm text-sm text-muted">
              From productivity tools to RAG pipelines — practical builds, not slideware.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="project-band h-full" data-cursor="hot">
                <span className="font-display text-xs font-bold tracking-[0.14em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">
                  {project.title}
                </h4>
                <p className="mt-3 leading-relaxed text-ink-soft">
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
