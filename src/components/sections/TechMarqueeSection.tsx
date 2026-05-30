const marqueeItems = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Golang",
  "PostgreSQL",
  "REST API",
  "Clean Architecture",
  "AI Systems",
  "Computer Vision",
  "Workflow Automation",
  "B2B SaaS",
  "Gov-Tech",
  "Segmented UX",
];

export default function TechMarqueeSection() {
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white/70 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-zinc-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-zinc-950" />

      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-marquee items-center gap-3 pr-3">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm shadow-slate-950/[0.03] transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-zinc-950/70 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.04]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-zinc-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="flex min-w-max animate-marquee items-center gap-3 pr-3" aria-hidden="true">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item}-copy-${index}`}
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm shadow-slate-950/[0.03] transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-zinc-950/70 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.04]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-zinc-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}