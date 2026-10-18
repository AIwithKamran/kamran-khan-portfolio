import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-ink px-[clamp(1.25rem,4vw,3.5rem)] py-8 text-foam">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold tracking-tight">
          © 2026 {profile.name}
          <span className="text-saffron">.</span>
        </p>
        <p className="text-sm text-white/55">
          {profile.location} · Built for real businesses
        </p>
      </div>
    </footer>
  );
}
