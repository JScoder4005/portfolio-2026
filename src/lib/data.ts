import { getTotalExperienceLabel, getProjectCount } from "./resume-utils";

export const profile = {
	name: 'Uday Kumar M',
	title: 'Full Stack Developer',
	subtitle: 'React.js · Next.js · Node.js · TypeScript',
	tagline: `Full stack developer with ${getTotalExperienceLabel()} years building performant, type-safe web applications — from pixel-accurate React interfaces to Next.js server actions and Node.js APIs.`,
	location: 'Bengaluru, India',
	email: 'breath_of_shadoww@proton.me',
	phone: '+91 9738284005',
	github: 'https://github.com/JScoder4005',
	linkedin: 'https://www.linkedin.com/in/uday-kumar-m-3b122b244/',
	resumeUrl: '/resume.pdf',
};

export const stats = [
  { label: "Years of experience", value: getTotalExperienceLabel() },
  { label: "UI performance gained", value: "60%" },
  { label: "Fewer client API calls", value: "35%" },
  { label: "Production apps shipped", value: String(getProjectCount()) },
];

export const about = [
  "I'm a full stack developer specialized in the React ecosystem — React.js, Next.js, and TypeScript on the front end, backed by Node.js, MongoDB, and Prisma/Drizzle on the back end.",
  "Currently building government and defense-grade web applications at Globals ITES, where I focus on type-safe architecture, real-time data visualization, and shaving milliseconds off render paths.",
  "I care about interfaces that feel instant and codebases that stay maintainable as they grow — reusable components, strict typing, and CI/CD pipelines that don't get in the way.",
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Material UI", "Shadcn UI", "HTML5"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "MongoDB", "Prisma ORM", "Drizzle ORM"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "Nginx", "Jenkins", "Git & GitHub"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Globals ITES",
    period: "Oct 2023 — Present",
    points: [
      "Joined as a Full Stack Developer and was promoted to Senior Software Engineer for consistently shipping type-safe, production-ready systems.",
      "Built and shipped 5 production web applications for government and defense clients using React.js, Next.js, TypeScript, and Python services.",
      "Led delivery of two multi-service operations platforms — a distributed operations console and a real-time network ops dashboard — from architecture to on-prem deployment.",
      "Developed reusable component libraries that improved modularity and cut feature delivery time across projects.",
      "Optimized rendering paths and re-render behavior, improving UI performance by up to 60% across applications.",
      "Introduced strict TypeScript typing on new dashboards, improving maintainability by 40%.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Radiuscard",
    period: "Apr 2022 — Oct 2023",
    points: [
      "Built the Flexi Loan Application end to end as a full stack engineer, delivering both the customer-facing UI and the backing services.",
      "Owned form flows, validation, and API integration for the loan application journey.",
      "Collaborated with product, design, and ops to iterate on the flow and reduce drop-offs at each step.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent",
    period: "Mar 2020 — Mar 2022",
    points: [
      "Shipped custom web applications for independent clients across small business, service, and personal branding use cases.",
      "Handled the full delivery cycle: requirements gathering, UI, backend integration, deployment, and handover.",
      "Worked primarily with the React / Next.js ecosystem, with lightweight backends and cloud hosting.",
    ],
  },
];

export const projects = [
  {
    name: "Distributed Operations Platform",
    context: "Globals ITES",
    icon: "c2" as const,
    type: "work" as const,
    liveUrl: null as string | null,
    repoUrl: null as string | null,
    description:
      "Multi-service operations console for real-time monitoring, orchestration, and state visualization across a fleet of remote workers.",
    highlights: [
      "Multi-service architecture (frontend, primary backend, worker backend, payload service) orchestrated via Docker Compose",
      "Real-time state and telemetry pipeline over WebSockets keeping the dashboard in sync with live worker state",
      "TypeScript across services for strict type safety and safer refactors",
      "Mutual-TLS between services with a self-signed CA for secure on-prem deployments",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Python", "Docker", "WebSocket"],
  },
  {
    name: "Real-Time Network Ops Dashboard",
    context: "Globals ITES",
    icon: "c2" as const,
    type: "work" as const,
    liveUrl: null as string | null,
    repoUrl: null as string | null,
    description:
      "Operations dashboard for real-time network traffic analytics, anomaly review, and operator-driven mitigation controls.",
    highlights: [
      "Live traffic visualization: volume, geographic source distribution, and layer-wise protocol breakdown",
      "Operator control panel for rate limiting, IP/ASN blocking, and mitigation rule updates from a single console",
      "Time-series analytics views for pattern review and post-incident reporting",
      "Alerting pipeline with routing for on-call operator handoff",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Python", "Docker", "WebSocket"],
  },
  {
    name: "Cyber Situational Overview Dashboard",
    context: "AERO INDIA 2025",
    icon: "cyber" as const,
    type: "work" as const,
    liveUrl: null as string | null,
    repoUrl: null as string | null,
    description:
      "Real-time cyber threat monitoring dashboard built with TypeScript for strong type safety, visualizing live threats and alerts on an interactive map.",
    highlights: [
      "Built with TypeScript end-to-end, improving maintainability by 40%",
      "Real-time threat analysis charts (Shadcn Charts) improved monitoring efficiency by 40%",
      "Integrated Google Maps API for live geospatial threat visualization",
      "Efficient, filterable data tables powered by TanStack Table",
    ],
    tech: ["TypeScript", "React.js", "Shadcn UI", "TanStack Table", "Google Maps API"],
  },
  {
    name: "Labor Department Web Application",
    context: "Govt of Karnataka",
    icon: "govt" as const,
    type: "work" as const,
    liveUrl: null as string | null,
    repoUrl: null as string | null,
    description:
      "Bilingual citizen-facing portal for the Karnataka Labor Department, with secure identity verification via Aadhaar e-KYC.",
    highlights: [
      "Built reusable, modular components to speed up feature development",
      "Improved UI performance by 60%, cutting load times significantly",
      "Centralized state management with Redux & Redux Toolkit",
      "Shipped bilingual UI using i18n internationalization",
      "Integrated Aadhaar e-KYC for seamless, secure authentication",
    ],
    tech: ["React.js", "Redux Toolkit", "i18n", "REST APIs"],
  },
  {
    name: "Online Water Connection (OWC)",
    context: "BWSSB",
    icon: "water" as const,
    type: "work" as const,
    liveUrl: null as string | null,
    repoUrl: null as string | null,
    description:
      "Citizen self-service portal for applying and managing water connections online, with server-driven data fetching and automated deployment.",
    highlights: [
      "Increased UI performance by 60% by minimizing unnecessary re-renders",
      "Built Next.js server actions, cutting client-side API calls by 35%",
      "Robust form validation and error handling with Zod + React Hook Form",
      "Automated CI/CD deployment pipeline using Jenkins and Nginx",
    ],
    tech: ["Next.js", "Server Actions", "Zod", "React Hook Form", "Jenkins", "Nginx"],
  },
  {
    name: "AI Content Creator Toolkit",
    context: "Open Source",
    icon: "ai" as const,
    type: "oss" as const,
    liveUrl: null as string | null,
    repoUrl: "https://github.com/JScoder4005/ai-content-creator-toolkit",
    description:
      "Automates content workflows for creators-who-code using Claude AI, Obsidian, and n8n — vault setup, Claude skills, and the ContentPilot dashboard.",
    highlights: [
      "Bundled vault setup script for instant Obsidian-based creator workflows",
      "Custom Claude skills for content ideation, scripting, and repurposing",
      "ContentPilot dashboard to orchestrate n8n automation flows end-to-end",
      "Documented, reusable structure aimed at technical content creators",
    ],
    tech: ["Python", "Claude AI", "Obsidian", "n8n"],
  },
  {
    name: "FitTrack",
    context: "Open Source",
    icon: "fitness" as const,
    type: "oss" as const,
    liveUrl: null as string | null,
    repoUrl: "https://github.com/JScoder4005/fittrack",
    description:
      "Full-stack fitness goal tracker with authenticated user accounts, persistent goals, and progress dashboards.",
    highlights: [
      "Next.js 16 app router with server components for fast, SEO-friendly pages",
      "NextAuth v5 authentication backed by a PostgreSQL user store",
      "Typed data layer with Prisma v7 for safe schema evolution",
      "Modern UI with Tailwind CSS v4 + shadcn/ui components",
    ],
    tech: ["Next.js 16", "TypeScript", "Prisma", "NextAuth", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
  },
  {
    name: "PrepDeck",
    context: "Open Source",
    icon: "prep" as const,
    type: "oss" as const,
    liveUrl: null as string | null,
    repoUrl: "https://github.com/JScoder4005/mern-prep-dashboard",
    description:
      "Interview prep dashboard rendered from a markdown notes vault, with animated sections and containerized delivery.",
    highlights: [
      "Next.js 16 RSC rendering over a markdown-based knowledge vault",
      "Animated section transitions with GSAP and 3D flourishes via Three.js",
      "Dockerized dev + prod images, wired to a GitHub Actions CI pipeline",
      "Tailwind-driven design system for consistent reading experience",
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "GSAP", "Three.js", "Docker", "GitHub Actions"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    school: "Bengaluru North University",
    period: "2017 — 2020",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
