import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-[clamp(1.25rem,4vw,3.5rem)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {profile.name}. Built for real businesses.
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
