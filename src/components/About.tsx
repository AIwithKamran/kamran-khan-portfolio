import { certifications, profile, skills, stack } from "@/data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad bg-bg-deep">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
              About
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.03em] text-ink">
              Data-driven AI, built for impact.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              I&apos;m a third-year AI student at CUST and an AI developer focused on
              turning raw data into insights and scalable systems — from classical ML
              to generative and agentic AI with LangChain and FastAPI.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              Outside coursework I build tools that improve productivity and apply
              automation to academic and business problems. For restaurants and local
              businesses, that means clear websites plus AI that actually helps operations.
            </p>
            <p className="mt-6 text-sm text-muted">
              {profile.education.degree} · {profile.education.school}
            </p>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={80}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Core skills
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Stack
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-ink-soft">
                {stack.map((item) => (
                  <li key={item} className="after:ml-3 after:text-line after:content-['/'] last:after:content-none">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Certifications
              </h3>
              <ul className="mt-4 space-y-2 text-ink-soft">
                {certifications.map((cert) => (
                  <li key={cert} className="leading-snug">
                    {cert}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
