import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
  Loader2,
  Sparkles,
  Target,
  X,
} from "lucide-react";
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
      label: "Operational Workflow",
      problem:
        "Internal issue reporting can become difficult to follow when requests are handled manually, scattered across chats, or tracked without a clear status flow.",
      solution:
        "I built a web-based ticketing flow to help users submit issues, track progress, and give the internal team better visibility over support requests.",
      impact:
        "The system helps reduce manual tracking, improves issue visibility, and makes internal support work easier to monitor.",
      process: [
        "Mapped the support flow into clear request stages and ownership.",
        "Structured the interface so updates, priorities, and progress were visible.",
        "Focused the build on operational clarity instead of only feature count.",
      ],
      outcomes: [
        "Clearer request lifecycle",
        "Better internal coordination",
        "More traceable reporting flow",
      ],
    };
  }

  if (title.includes("docuflow") || title.includes("document")) {
    return {
      label: "Workflow Product",
      problem:
        "Document workflows can become slow when prioritization, ownership, and status updates are not visible in one shared place.",
      solution:
        "I built a dashboard-oriented document workflow experience with clearer project status, prioritization, and collaboration structure.",
      impact:
        "The product direction supports better visibility for teams that need to manage document-heavy operational work.",
      process: [
        "Defined the workflow around status, ownership, and prioritization.",
        "Designed the product surface for teams handling dense operational tasks.",
        "Balanced usability with a modular system structure for future growth.",
      ],
      outcomes: [
        "Stronger workflow visibility",
        "Faster document coordination",
        "More scalable product foundation",
      ],
    };
  }

  if (title.includes("ecovision") || title.includes("vision")) {
    return {
      label: "AI Product Experience",
      problem:
        "Waste classification and visual recognition tasks are hard to scale when the process depends only on manual observation.",
      solution:
        "I developed an AI-oriented application concept focused on image-based classification and interactive decision support.",
      impact:
        "The project demonstrates how computer vision can be shaped into a practical product experience, not only a model experiment.",
      process: [
        "Framed the AI capability as a usable product feature, not a standalone model.",
        "Connected classification results to a clearer decision-support interaction.",
        "Focused on making complex AI output understandable for end users.",
      ],
      outcomes: [
        "Applied AI in a practical UX flow",
        "More understandable model output",
        "Stronger bridge from research to product",
      ],
    };
  }

  if (title.includes("influencer") || title.includes("agency")) {
    return {
      label: "Business Platform",
      problem:
        "Agency workflows can become messy when campaign data, influencer information, and operational tracking are handled separately.",
      solution:
        "I built a web platform to help organize agency-related workflows in one structured application.",
      impact:
        "The project shows how business operations can be moved into a clearer web-based system with authentication and data management.",
      process: [
        "Consolidated operational data into one structured web platform.",
        "Built the system around business workflow needs instead of generic CRUD only.",
        "Prioritized maintainability so the platform could support repeated use.",
      ],
      outcomes: [
        "Centralized campaign operations",
        "Cleaner data management",
        "More structured internal workflow",
      ],
    };
  }

  return {
    label: "Applied Engineering",
    problem:
      "This project started from a practical need to turn a manual or unclear process into a more structured digital experience.",
    solution: `I built ${projectTitle} as a ${
      category ?? "software project"
    } with attention to usability, data structure, and maintainable implementation.`,
    impact:
      "The project shows my ability to translate requirements into a working application with a clear user flow and technical foundation.",
    process: [
      "Clarified the user flow and implementation scope.",
      "Built the product around practical usage and maintainable structure.",
      "Translated requirements into a focused, shippable solution.",
    ],
    outcomes: [
      "Clearer user flow",
      "Maintainable implementation",
      "Practical business value",
    ],
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

    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    const originalOverscrollBehavior = document.documentElement.style.overscrollBehavior;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalBodyPaddingRight = document.body.style.paddingRight;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      document.documentElement.style.overscrollBehavior = originalOverscrollBehavior;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const caseStudy = project
    ? buildCaseStudyCopy(project.title, project.category)
    : null;
  const stackPreview = project?.tech_stack.slice(0, 4) ?? [];

  const modalContent = (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-hidden overscroll-contain bg-slate-950/50 px-4 py-4 backdrop-blur-sm sm:items-center sm:px-6 sm:py-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        data-hide-scrollbar
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/20 dark:border-white/10 dark:bg-zinc-950 dark:shadow-cyan-500/10 sm:max-h-[88vh] sm:rounded-[2rem] sm:p-8"
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
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03] sm:p-7">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />

              <div className="relative">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                    {project.category}
                  </span>
                  <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                    {caseStudy.label}
                  </span>
                </div>

                <h3 className="max-w-3xl pr-12 font-display text-3xl font-semibold tracking-[-0.055em] text-slate-950 dark:text-white sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                  {project.project_type}
                </p>

                <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-slate-600 dark:text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-950/70">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                      Scope
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                      {project.category}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-950/70">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                      Stack
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                      {project.tech_stack.length} core technologies
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-950/70">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                      Access
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                      {project.live_url ? "Live demo available" : "Private delivery"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                      <Target className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                      The Challenge
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                      <Layers3 className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                      My Approach
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                    {caseStudy.solution}
                  </p>

                  <div className="mt-4 grid gap-2">
                    {caseStudy.process.map((step) => (
                      <div
                        key={step}
                        className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-zinc-950/70"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                        <p className="text-sm leading-6 text-slate-600 dark:text-zinc-300">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                      Outcome
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                    {caseStudy.impact}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {caseStudy.outcomes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
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

                  {stackPreview.length > 0 && (
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-950/70">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                        Core Building Blocks
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                        {stackPreview.join(", ")} formed the main technical backbone for this project.
                      </p>
                    </div>
                  )}
                </div>
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

              {!project.live_url && !project.github_url && (
                <div className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-400">
                  <ArrowUpRight className="h-4 w-4" />
                  Private Case Study
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
