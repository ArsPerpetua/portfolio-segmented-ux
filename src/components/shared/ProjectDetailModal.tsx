import { useEffect } from "react";
import { Code2, ExternalLink, Loader2, X } from "lucide-react";
import type { ProjectOverview } from "../../types/api";

type ProjectDetailModalProps = {
  project: ProjectOverview | null;
  isLoading?: boolean;
  error?: string | null;
  onClose: () => void;
};

function buildCaseStudyCopy(projectTitle: string, category?: string) {
  const title = projectTitle.toLowerCase();

  if (title.includes("ticket")) {
    return {
      problem:
        "Internal issue reporting can become difficult to follow when requests are handled manually, scattered across chats, or tracked without a clear status flow.",
      solution:
        "I built a web-based ticketing flow to help users submit issues, track progress, and give the internal team better visibility over support requests.",
      impact:
        "The system helps reduce manual tracking, improves issue visibility, and makes internal support work easier to monitor.",
    };
  }

  if (title.includes("docuflow") || title.includes("document")) {
    return {
      problem:
        "Document workflows can become slow when prioritization, ownership, and status updates are not visible in one shared place.",
      solution:
        "I built a dashboard-oriented document workflow experience with clearer project status, prioritization, and collaboration structure.",
      impact:
        "The product direction supports better visibility for teams that need to manage document-heavy operational work.",
    };
  }

  if (title.includes("ecovision") || title.includes("vision")) {
    return {
      problem:
        "Waste classification and visual recognition tasks are hard to scale when the process depends only on manual observation.",
      solution:
        "I developed an AI-oriented application concept focused on image-based classification and interactive decision support.",
      impact:
        "The project demonstrates how computer vision can be shaped into a practical product experience, not only a model experiment.",
    };
  }

  if (title.includes("influencer") || title.includes("agency")) {
    return {
      problem:
        "Agency workflows can become messy when campaign data, influencer information, and operational tracking are handled separately.",
      solution:
        "I built a web platform to help organize agency-related workflows in one structured application.",
      impact:
        "The project shows how business operations can be moved into a clearer web-based system with authentication and data management.",
    };
  }

  return {
    problem:
      "This project started from a practical need to turn a manual or unclear process into a more structured digital experience.",
    solution: `I built ${projectTitle} as a ${
      category ?? "software project"
    } with attention to usability, data structure, and maintainable implementation.`,
    impact:
      "The project shows my ability to translate requirements into a working application with a clear user flow and technical foundation.",
  };
}

export default function ProjectDetailModal({
  project,
  isLoading = false,
  error,
  onClose,
}: ProjectDetailModalProps) {
  const isOpen = Boolean(project) || isLoading || Boolean(error);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const caseStudy = project
    ? buildCaseStudyCopy(project.title, project.category)
    : null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/50 px-4 pb-4 backdrop-blur-sm sm:items-center sm:pb-0"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/20 dark:border-white/10 dark:bg-zinc-950 dark:shadow-cyan-500/10 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close project detail"
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-cyan-400/40 dark:hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {isLoading && (
          <div className="flex min-h-72 flex-col items-center justify-center text-center">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-600 dark:text-cyan-300" />

            <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-zinc-300">
              Loading project detail...
            </p>
          </div>
        )}

        {!isLoading && error && (
          <div className="flex min-h-72 flex-col items-center justify-center text-center">
            <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
              Failed to load project.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-zinc-300">
              {error}
            </p>
          </div>
        )}

        {!isLoading && project && caseStudy && (
          <div>
            <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
              {project.category}
            </div>

            <h3 className="pr-12 font-display text-3xl font-semibold tracking-[-0.055em] text-slate-950 dark:text-white sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
              {project.project_type}
            </p>

            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-zinc-300">
              {project.description}
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                  Problem
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                  What I Built
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                  {caseStudy.solution}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                  Value
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                  {caseStudy.impact}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                Tech Stack
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-cyan-100"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Live Project
                </a>
              )}

              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-cyan-400/40"
                >
                  <Code2 className="h-4 w-4" />
                  View Source
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}