import {
  BrainCircuit,
  DatabaseZap,
  Layers3,
  ServerCog,
  Workflow,
} from "lucide-react";

const architectureItems = [
  {
    title: "Segmented Frontend",
    description:
      "React interface that adapts messaging, project order, and capability framing based on visitor intent.",
    items: ["React", "TypeScript", "Tailwind", "Segmented UX"],
    icon: Layers3,
  },
  {
    title: "Headless Backend",
    description:
      "REST API layer designed to serve portfolio content dynamically while keeping the frontend clean.",
    items: ["Golang", "Gin", "REST API", "Clean Architecture"],
    icon: Workflow,
  },
  {
    title: "Relational Data Layer",
    description:
      "PostgreSQL stores projects, segment narratives, analytics events, and structured profile data.",
    items: ["PostgreSQL", "Migrations", "Seed Data", "Query Filters"],
    icon: DatabaseZap,
  },
  {
    title: "Async Analytics",
    description:
      "Segment clicks are queued instantly and processed through a non-blocking worker flow.",
    items: ["Goroutines", "Channels", "Telemetry", "Async Write"],
    icon: BrainCircuit,
  },
];

const blueprintNodes = [
  {
    label: "Frontend Experience",
    value: "React + Vite",
    description: "Segmented UX, dark mode, responsive UI",
    icon: Layers3,
  },
  {
    label: "API Gateway",
    value: "Golang + Gin",
    description: "REST endpoints, controllers, repositories",
    icon: ServerCog,
  },
  {
    label: "Data System",
    value: "PostgreSQL",
    description: "Projects, profile, skills, analytics",
    icon: DatabaseZap,
  },
];

export default function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />
      <div className="absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
              Architecture Readiness
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              A portfolio built like a real product, not a static landing page.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-xl shadow-slate-950/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none lg:ml-auto lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
              Engineering Signal
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base">
              This portfolio demonstrates frontend polish, backend architecture,
              database modeling, and asynchronous analytics as one connected
              product system.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/[0.05] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-zinc-950/70 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.14),transparent_30%)]" />
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-cyan-400/20" />
              <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full border border-emerald-400/20" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">
                  System Blueprint
                </p>

                <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
                  Headless portfolio pipeline with async telemetry.
                </h3>

                <div className="mt-8 grid gap-4">
                  {blueprintNodes.map((node, index) => {
                    const Icon = node.icon;

                    return (
                      <div key={node.label} className="relative">
                        {index > 0 && (
                          <div className="absolute -top-4 left-6 h-4 w-px overflow-hidden bg-slate-200 dark:bg-white/10">
                            <div className="h-1/2 w-full animate-flow-y bg-cyan-500 dark:bg-cyan-300" />
                          </div>
                        )}

                        <div className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.03] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-400/30">
                          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-slate-100 transition duration-300 group-hover:scale-125 dark:bg-cyan-400/10" />

                          <div className="relative flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                              <Icon className="h-5 w-5" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                                    {node.label}
                                  </p>

                                  <p className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                                    {node.value}
                                  </p>
                                </div>

                                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-300" />
                              </div>

                              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                                {node.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 relative rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-400/20 dark:bg-emerald-400/10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white dark:bg-emerald-400/10 dark:text-emerald-200">
                      <BrainCircuit className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                        Non-blocking Worker
                      </p>

                      <p className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                        Segment analytics processed asynchronously.
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                        User interactions are queued instantly, then written to
                        the database without slowing down the interface.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid content-start gap-4">
              {architectureItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-950/[0.05] dark:border-white/10 dark:bg-zinc-950/70 dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.04] sm:p-6"
                  >
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white transition duration-300 group-hover:scale-125 dark:bg-cyan-400/10" />

                    <div className="relative flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                            {item.title}
                          </h3>

                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-600">
                            0{index + 1}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.items.slice(0, 4).map((stack) => (
                            <span
                              key={stack}
                              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}