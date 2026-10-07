import { Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[100px]" />

          <span className="font-mono text-xs font-medium uppercase tracking-widest text-cyan-400/80">
            Contact
          </span>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">solid</span> together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Open to full stack roles and freelance projects. Reach out and I&apos;ll get back to you soon.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
