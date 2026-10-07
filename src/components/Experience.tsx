import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="relative mt-4">
        <div
          aria-hidden
          className="pointer-events-none absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/30 to-transparent md:left-6"
        />

        <ol className="space-y-10">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pl-14 md:pl-16">
              <Reveal delay={i * 0.08}>
                <div
                  aria-hidden
                  className="absolute left-5 top-6 -translate-x-1/2 md:left-6"
                >
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/40" />
                    <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 ring-4 ring-black/40" />
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 sm:p-7 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20">
                        <Briefcase size={18} className="text-indigo-300" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{job.role}</h3>
                        <p className="text-sm text-white/60">{job.company}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-white/40">{job.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm leading-relaxed text-white/70"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
