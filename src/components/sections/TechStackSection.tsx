import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  PanelsTopLeft,
  ServerCog,
} from "lucide-react";
import { techStackBySegment } from "../../data/portfolioContent";
import type { SkillGroup } from "../../types/api";
import type { PortfolioSegment } from "../../types/portfolio";

type TechStackSectionProps = {
  activeSegment: PortfolioSegment;
  skills?: SkillGroup[];
  isLoading?: boolean;
};

const sectionCopy: Record<
  PortfolioSegment,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  enterprise: {
    eyebrow: "Enterprise Capability",
    title: "Reliable systems for structured teams and measurable operations.",
    description:
      "A stack focused on backend reliability, workflow visibility, and AI-assisted decision making for real organizational needs.",
  },
  startup: {
    eyebrow: "Startup Capability",
    title: "Fast product execution without sacrificing technical foundations.",
    description:
      "A stack built for MVP development, rapid iteration, SaaS foundations, and scalable backend architecture.",
  },
  freelance: {
    eyebrow: "Freelance Capability",
    title: "Polished web delivery with practical automation and smart features.",
    description:
      "A stack focused on beautiful interfaces, useful internal tools, and custom features that create immediate client value.",
  },
};

const skillIcons = {
  frontend: PanelsTopLeft,
  backend: ServerCog,
  database: Database,
  "deployment-infrastructure": Cloud,
  "ai-assisted-development": BrainCircuit,
  "software-engineering": Code2,
};

function mapSkillsToCards(skills: SkillGroup[]) {
  return skills.map((group) => ({
    id: group.id,
    title: group.category,
    description: getSkillDescription(group.id),
    items: group.skills,
    icon: skillIcons[group.id as keyof typeof skillIcons] ?? Code2,
  }));
}

function getSkillDescription(id: string) {
  const descriptions: Record<string, string> = {
    frontend:
      "Crafting responsive, polished, and production-ready user interfaces.",
    backend:
      "Building APIs, business logic, authentication, and workflow systems.",
    database:
      "Designing relational data models for reliable and scalable applications.",
    "deployment-infrastructure":
      "Deploying and maintaining applications across modern cloud platforms.",
    "ai-assisted-development":
      "Using AI tools to accelerate engineering workflows and improve delivery.",
    "software-engineering":
      "Applying architecture, integration, and SDLC principles to real projects.",
  };

  return (
    descriptions[id] ??
    "Practical technologies used to build real software products."
  );
}

export default function TechStackSection({
  activeSegment,
  skills,
  isLoading = false,
}: TechStackSectionProps) {
  const fallbackTechGroups = techStackBySegment[activeSegment];
  const techGroups =
    skills && skills.length > 0 ? mapSkillsToCards(skills) : fallbackTechGroups;

  const copy = sectionCopy[activeSegment];

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute left-0 top-24 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/15" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
              {copy.eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-xl shadow-slate-950/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none lg:ml-auto lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
              Capability Focus
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base">
              {copy.description}
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-[2rem] border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {techGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.07] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06] sm:p-7"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-100 transition duration-300 group-hover:scale-125 dark:bg-cyan-400/10" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-600">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-2xl">
                      {group.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                      {group.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}