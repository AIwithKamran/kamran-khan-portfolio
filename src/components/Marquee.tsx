import { stack } from "@/data/content";

const items = [
  ...stack,
  "AI / ML systems",
  "Websites",
  "Apps",
  "LLM & RAG",
];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
