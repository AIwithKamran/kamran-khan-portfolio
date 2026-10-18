import { certifications, profile, skills, stack } from "@/data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad bg-bg-deep">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              About
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] text-ink">
              Data in. Decisions out.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Third-year AI student at CUST and AI developer turning raw data into
              insights and scalable systems — classical ML through generative and
              agentic AI with LangChain and FastAPI.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              That also means shipping the product layer — websites and apps that
              put models in front of real users, not just notebooks.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md">
              <div className="border-t-2 border-saffron pt-4">
                <p className="font-display text-3xl font-bold tracking-tight text-ink">
                  LLM
                </p>
                <p className="mt-1 text-sm text-muted">RAG &amp; agents</p>
              </div>
              <div className="border-t-2 border-teal pt-4">
                <p className="font-display text-3xl font-bold tracking-tight text-ink">
                  ML/DL
                </p>
                <p className="mt-1 text-sm text-muted">Models that ship</p>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted">
              {profile.education.degree} · {profile.education.school}
            </p>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={80} className="reveal-left">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Core skills
              </h3>
              <ul className="mt-4 space-y-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-line py-2.5 font-display text-lg tracking-tight text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Stack
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {stack.join("  ·  ")}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Certifications
              </h3>
              <ul className="mt-4 space-y-2.5 text-ink-soft">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-3 leading-snug">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-saffron" aria-hidden />
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
