import { skillGroups } from "@/lib/data";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiDrizzle,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJenkins,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

type SkillIcon = { Icon: IconType; color: string };

const SKILL_ICONS: Record<string, SkillIcon[]> = {
  "React.js": [{ Icon: SiReact, color: "#61DAFB" }],
  "Next.js": [{ Icon: SiNextdotjs, color: "#FFFFFF" }],
  TypeScript: [{ Icon: SiTypescript, color: "#3178C6" }],
  "Redux Toolkit": [{ Icon: SiRedux, color: "#764ABC" }],
  "Tailwind CSS": [{ Icon: SiTailwindcss, color: "#06B6D4" }],
  "Material UI": [{ Icon: SiMui, color: "#007FFF" }],
  "Shadcn UI": [{ Icon: SiShadcnui, color: "#FFFFFF" }],
  HTML5: [{ Icon: SiHtml5, color: "#E34F26" }],
  "Node.js": [{ Icon: SiNodedotjs, color: "#339933" }],
  MongoDB: [{ Icon: SiMongodb, color: "#47A248" }],
  "Prisma ORM": [{ Icon: SiPrisma, color: "#5A67D8" }],
  "Drizzle ORM": [{ Icon: SiDrizzle, color: "#C5F74F" }],
  Docker: [{ Icon: SiDocker, color: "#2496ED" }],
  Nginx: [{ Icon: SiNginx, color: "#009639" }],
  Jenkins: [{ Icon: SiJenkins, color: "#D24939" }],
  "Git & GitHub": [
    { Icon: SiGit, color: "#F05032" },
    { Icon: SiGithub, color: "#FFFFFF" },
  ],
};

function SkillPill({ skill }: { skill: string }) {
  const icons = SKILL_ICONS[skill];
  return (
    <div className="glass group mx-3 inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-lg hover:shadow-cyan-500/10">
      <span className="flex items-center gap-1">
        {icons?.map(({ Icon, color }, idx) => (
          <Icon key={idx} size={18} style={{ color }} />
        ))}
      </span>
      <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
        {skill}
      </span>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction = "left",
  duration = 40,
}: {
  skills: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  return (
    <div className="group/marquee relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />
      <div
        className={`flex w-max ${animationClass} group-hover/marquee:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <SkillPill key={`${skill}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const allSkills = skillGroups.flatMap((g) => g.skills);
  const half = Math.ceil(allSkills.length / 2);
  const rowA = allSkills.slice(0, half);
  const rowB = allSkills.slice(half);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for"
        description="A React-first stack, backed by the backend and DevOps chops to ship features end to end."
      />

      <div className="space-y-4">
        <MarqueeRow skills={rowA} direction="left" duration={45} />
        <MarqueeRow skills={rowB} direction="right" duration={38} />
      </div>
    </section>
  );
}
