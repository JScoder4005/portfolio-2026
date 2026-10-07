import { about, education } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28">
      <SectionHeading eyebrow="About" title="Building interfaces that hold up in production" />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-5 md:col-span-3">
          {about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="leading-relaxed text-white/70">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 text-white/80">
              <GraduationCap size={20} className="text-violet-400" />
              <span className="text-sm font-medium">Education</span>
            </div>
            <div className="mt-4 space-y-4">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <div className="font-medium text-white">{edu.degree}</div>
                  <div className="text-sm text-white/60">{edu.school}</div>
                  <div className="mt-1 font-mono text-xs text-white/40">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
