import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  FileText,
  Lock,
  TicketCheck,
} from "lucide-react";
import { projectsBySegment } from "../../data/portfolioContent";
import type { Project } from "../../types/api";
import type { PortfolioSegment } from "../../types/portfolio";
import { usePremiumCardGlow } from "../../hooks/usePremiumCardGlow";

type FeaturedProjectsSectionProps = {
  activeSegment: PortfolioSegment;
  projects?: Project[];
  isLoading?: boolean;
};

const sectionCopy: Record<
  PortfolioSegment,
  {
    eyebrow: string;
    title: string;
    description: string;
    signal: string;
  }
> = {
  enterprise: {
    eyebrow: "Enterprise Proof",
    title: "Systems built for operational clarity and organizational scale.",
    description:
      "Projects focused on structured workflows, reporting, automation, and reliable internal operations.",
    signal: "Operational Impact",
  },
  startup: {
    eyebrow: "Startup Proof",
    title: "Product-oriented builds with speed, AI, and scalable foundations.",
    description:
      "Selected works that show SaaS thinking, rapid execution, and AI features shaped into real products.",
    signal: "Product Velocity",
  },
  freelance: {
    eyebrow: "Freelance Proof",
    title: "Clean, practical, and polished applications for real users.",
    description:
      "Projects positioned around interface quality, custom delivery, automation, and useful product experiences.",
    signal: "Client Delivery",
  },
};

const projectIcons = {
  docuflow: FileText,
  "it-ticketing-kemenkum-ntb": TicketCheck,
  ecovision: BrainCircuit,
};

export default function FeaturedProjectsSection({
  activeSegment,
  projects,
  isLoading = false,
}: FeaturedProjectsSectionProps) {
  const fallbackProjects = projectsBySegment[activeSegment];

  const displayProjects =
    projects && projects.length > 0
      ? projects.map((project) => ({
          id: project.slug,
          title: project.title,
          tag: project.project_type || project.category,
          description: project.segment_description,
          highlights: project.segment_highlights,
          liveUrl: project.live_url,
          githubUrl: project.github_url,
          icon:
            projectIcons[project.slug as keyof typeof projectIcons] ??
            ArrowUpRight,
        }))
      : fallbackProjects.map((project) => ({
          ...project,
          liveUrl: null,
          githubUrl: null,
        }));

  const copy = sectionCopy[activeSegment];

  const { handleMouseMove } = usePremiumCardGlow();

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />
      <div className="absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
              {copy.eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-xl shadow-slate-950/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none lg:ml-auto lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
              Dynamic Narrative
            </p>

            <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white">
              {copy.signal}
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base">
              {copy.description}
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[28rem] animate-pulse rounded-[2rem] border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project, index) => {
              const Icon = project.icon;
              const primaryUrl = project.liveUrl ?? project.githubUrl;

              return (
                <article
                  key={project.id}
                  onMouseMove={handleMouseMove}
                  className="premium-card-glow group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.08] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06]"
                >
                  <div className="relative h-56 overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-zinc-900">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.24),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.06),transparent)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent)]" />

                    <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-cyan-400/30" />
                    <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-slate-300/60 dark:border-cyan-400/20" />
                    <div className="absolute bottom-14 right-14 h-12 w-12 rounded-full border border-slate-300/60 dark:border-emerald-400/20" />

                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg shadow-slate-950/10 dark:bg-zinc-950 dark:text-cyan-200 dark:shadow-cyan-500/10">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-zinc-400">
                            0{index + 1}
                          </p>

                          <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white">
                            {project.title}
                          </p>
                        </div>

                        {primaryUrl ? (
                          <a
                            href={primaryUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition group-hover:-translate-y-1 group-hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:group-hover:border-cyan-400/40 dark:group-hover:text-cyan-200 sm:flex"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : (
                          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-500 sm:flex">
                            <Lock className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                      {project.tag}
                    </span>

                    <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-zinc-950 dark:text-zinc-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-cyan-100"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-cyan-400/40"
                        >
                          <Code2 className="h-4 w-4" />
                          Source
                        </a>
                      )}

                      {!project.liveUrl && !project.githubUrl && (
                        <div className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-400">
                          <Lock className="h-4 w-4" />
                          Private Build
                        </div>
                      )}
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