import { useMemo, useState } from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { ProjectOverview } from "../../types/api";
import ProjectDetailModal from "../shared/ProjectDetailModal";
import { useProjectDetail } from "../../hooks/useProjectDetail";
import { usePremiumCardGlow } from "../../hooks/usePremiumCardGlow";

type AllProjectsSectionProps = {
  projects?: ProjectOverview[];
  isLoading?: boolean;
};

const fallbackProjects: ProjectOverview[] = [
  {
    id: "influencer-agency-platform",
    slug: "influencer-agency-platform",
    title: "Influencer Agency Platform",
    category: "Business Workflow Platform",
    project_type: "Full-Stack Web Application",
    summary:
      "A Django-based platform for influencer agency business workflow management.",
    description:
      "A full-stack web application built and deployed using Django and Railway.",
    tech_stack: ["Django", "Railway", "Authentication", "Data Management"],
    live_url: "https://web-production-7525e.up.railway.app/",
    github_url: null,
    is_featured: false,
    sort_order: 4,
  },
];

export default function AllProjectsSection({
  projects,
  isLoading = false,
}: AllProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const {
    project: selectedProject,
    isLoading: isDetailLoading,
    error: detailError,
    loadProject,
    clearProject,
  } = useProjectDetail();

  const { handleMouseMove } = usePremiumCardGlow();

  const displayProjects =
    projects && projects.length > 0 ? projects : fallbackProjects;

  const additionalProjects = displayProjects.filter(
    (project) => !project.is_featured,
  );

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(additionalProjects.map((project) => project.category)),
    );

    return ["All", ...uniqueCategories];
  }, [additionalProjects]);

  const filteredProjects =
    activeCategory === "All"
      ? additionalProjects
      : additionalProjects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute left-0 top-24 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/15" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
              Additional Works
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              More systems, tools, and decision-support applications.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-xl shadow-slate-950/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none lg:ml-auto lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
              Project Range
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base">
              A wider collection of shipped projects across business workflows,
              public service portals, and data-driven decision support systems.
            </p>
          </div>
        </div>

        {!isLoading && categories.length > 1 && (
          <div
            data-hide-scrollbar
            className="mt-8 flex gap-2 overflow-x-auto rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm shadow-slate-950/[0.03] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm",
                    isActive
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-950/10 dark:bg-white dark:text-zinc-950"
                      : "text-slate-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {isLoading ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-[2rem] border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                onClick={() => loadProject(project.slug)}
                onMouseMove={handleMouseMove}
                className="premium-card-glow group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.07] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06] sm:p-7"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-100 transition duration-300 group-hover:scale-125 dark:bg-cyan-400/10" />

                <div className="relative flex flex-1 flex-col">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                      {project.category}
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                    {project.project_type}
                  </p>

                  <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech_stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-zinc-950 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-cyan-100"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-cyan-400/40"
                      >
                        <Code2 className="h-4 w-4" />
                        Source Code
                      </a>
                    )}

                    {!project.live_url && !project.github_url && (
                      <div className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-400">
                        <ArrowUpRight className="h-4 w-4" />
                        Private Project
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}

            {filteredProjects.length === 0 && (
              <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 text-center shadow-xl shadow-slate-950/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none md:col-span-2">
                <p className="font-display text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white">
                  No projects found.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                  Try selecting another project category.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isLoading={isDetailLoading}
        error={detailError}
        onClose={clearProject}
      />
    </section>
  );
}
