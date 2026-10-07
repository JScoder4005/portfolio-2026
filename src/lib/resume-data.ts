// Single source of truth for résumé content. Dates are real Date objects so
// experience duration is computed at render time instead of hand-maintained.

export type ResumeProject = {
  name: string;
  bullets: string[];
};

export type ResumeExperience = {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | null; // null = present
  projects: ResumeProject[];
};

export type ResumeEducation = {
  degree: string;
  school: string;
  startDate: Date;
  endDate: Date;
};

export const resumeProfile = {
  name: "Uday Kumar M",
  title: "Senior Software Engineer | Full Stack | React.js · Next.js · TypeScript · Python",
  email: "breath_of_shadoww@proton.me",
  phone: "+91 9738284005",
  location: "Bengaluru-5600094",
  github: "https://github.com/JScoder4005",
  githubLabel: "github.com/JScoder4005",
  linkedin: "https://www.linkedin.com/in/uday-kumar-m-3b122b244/",
  linkedinLabel: "linkedin.com/in/uday-kumar-m",
};

export const resumeSummary =
  "Senior software engineer with 6+ years building performant, type-safe full-stack web applications. React.js / Next.js on the front end, Python and Node.js services on the back, deployed via Docker. Proven at delivering government and enterprise-grade systems end to end.";

export const resumeSkills = [
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Typescript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI",
  "Shadcn UI",
  "GIT AND GITHUB",
  "Docker",
  "Nginx",
  "Jenkins",
  "Prisma and Drizzle ORM",
];

export const resumeExperience: ResumeExperience[] = [
  {
    role: "Senior Software Engineer",
    company: "Globals ITES",
    startDate: new Date(2023, 9, 30), // Oct 30, 2023
    endDate: null, // Present
    projects: [
      {
        name: "Distributed Operations Platform",
        bullets: [
          "Architected a multi-service ops console (frontend, primary + worker backends, payload service) orchestrated via Docker Compose for on-prem deployments.",
          "Delivered a real-time WebSocket telemetry pipeline and mutual-TLS between services with a self-signed CA, keeping the dashboard in sync with live state.",
        ],
      },
      {
        name: "Real-Time Network Ops Dashboard",
        bullets: [
          "Shipped a live traffic and mitigation dashboard: volume, geo distribution, layer-wise protocol breakdown, plus operator controls for rate limiting and rule updates.",
          "Added time-series analytics for pattern review and post-incident reporting, with alert routing for on-call handoff.",
        ],
      },
      {
        name: "Cyber Situational Overview Dashboard — AERO INDIA 2025",
        bullets: [
          "Built the dashboard end to end in TypeScript with Shadcn Charts for real-time threat analysis and TanStack Table for filterable data grids.",
          "Integrated Google Maps API for live geospatial threat visualization.",
        ],
      },
      {
        name: "Government Citizen Portals — Karnataka Labor Dept & BWSSB (OWC)",
        bullets: [
          "Shipped bilingual (i18n) React/Next.js portals with Aadhaar e-KYC auth and Redux Toolkit state; improved UI performance ~60% via render optimizations.",
          "Built Next.js server actions cutting client-side API calls ~35%; deployed via Jenkins + Nginx CI/CD.",
        ],
      },
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Radiuscard",
    startDate: new Date(2022, 3, 1), // Apr 2022 (approx)
    endDate: new Date(2023, 9, 30), // Oct 2023
    projects: [
      {
        name: "Flexi Loan Application",
        bullets: [
          "Built the Flexi Loan Application end to end — customer-facing UI plus backing services, form flows, validation, and API integration for the loan journey.",
        ],
      },
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent",
    startDate: new Date(2020, 2, 1), // Mar 2020
    endDate: new Date(2022, 2, 1), // Mar 2022
    projects: [
      {
        name: "Client web applications",
        bullets: [
          "Shipped custom React / Next.js web apps for independent clients — full delivery cycle from requirements through deployment.",
        ],
      },
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  {
    degree: "Bachelor of Computer Applications",
    school: "Bengaluru North University",
    startDate: new Date(2017, 5, 1), // Jun 2017 (approx)
    endDate: new Date(2020, 5, 1), // Jun 2020 (approx)
  },
];
