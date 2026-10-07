import { projects } from "@/lib/data";
import {
  Bot,
  BookOpen,
  Code2,
  Droplets,
  Dumbbell,
  ExternalLink,
  Landmark,
  Radar,
  Shield,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROJECT_ICONS = {
  cyber: Shield,
  govt: Landmark,
  water: Droplets,
  c2: Radar,
  ai: Bot,
  fitness: Dumbbell,
  prep: BookOpen,
} satisfies Record<string, typeof Shield>;

type Project = (typeof projects)[number];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const Icon = PROJECT_ICONS[project.icon];
  return (
    <Reveal delay={delay} className="h-full">
      <div className="glass group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-xl hover:shadow-violet-500/10">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500/20 to-indigo-500/20">
          <Icon size={16} className="text-cyan-300" />
        </div>

        <span className="font-mono text-xs text-white/40">{project.context}</span>
        <h3 className="mt-1 text-lg font-medium text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{project.description}</p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h, idx) => (
            <li key={idx} className="flex gap-2.5 text-xs leading-relaxed text-white/60">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/60"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 transition-colors hover:text-cyan-200"
            >
              View live
              <ExternalLink size={12} />
            </a>
          ) : project.repoUrl ? null : (
            <span className="inline-flex cursor-not-allowed items-center gap-1.5 text-xs font-medium text-white/30">
              Live link coming soon
              <ExternalLink size={12} />
            </span>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white"
            >
              <Code2 size={12} />
              Source
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const workProjects = projects.filter((p) => p.type === "work");
  const ossProjects = projects.filter((p) => p.type === "oss");

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Government and defense-grade applications shipped end to end — from architecture to CI/CD."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {workProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 0.1} />
        ))}
      </div>

      {ossProjects.length > 0 && (
        <div className="mt-20">
          <SectionHeading
            eyebrow="Side Projects · Open Source"
            title="Things I build for fun"
            description="Personal explorations and tools I ship publicly on GitHub."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {ossProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} delay={i * 0.1} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
