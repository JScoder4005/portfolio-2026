import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
