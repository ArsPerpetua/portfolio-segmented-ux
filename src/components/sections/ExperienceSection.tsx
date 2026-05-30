import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import type { Experience } from "../../types/api";

type ExperienceSectionProps = {
  experiences?: Experience[];
  isLoading?: boolean;
};

const fallbackExperiences: Experience[] = [
  {
    id: "freelance-fullstack-ai-engineer",
    role: "Freelance Full-Stack Developer & AI Engineer",
    organization: "Independent / Client Projects",
    period: "Jan 2024 - Present",
    description:
      "Developing production-ready web applications, REST APIs, workflow automation platforms, and AI-powered systems for government and private clients.",
    highlights: [
      "Built scalable REST APIs, authentication systems, and workflow automation platforms.",
      "Designed and optimized relational databases using PostgreSQL and MySQL.",
      "Developed AI-powered applications and decision support systems for real-world use cases.",
      "Integrated deployment workflows using Railway and Vercel.",
    ],
    sort_order: 1,
  },
];

export default function ExperienceSection({
  experiences,
  isLoading = false,
}: ExperienceSectionProps) {
  const displayExperiences =
    experiences && experiences.length > 0 ? experiences : fallbackExperiences;

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute left-0 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/10" />

      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
              Professional Experience
            </p>

            <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Practical delivery across full-stack systems, AI products, and workflow automation.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-950/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none lg:ml-auto lg:max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
              Execution Focus
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
              A track record of translating requirements into working software, from
              REST APIs and relational databases to AI-powered applications and
              government workflow systems.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="mt-12 space-y-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-[2rem] border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
              />
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <div className="relative">
              <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 dark:bg-white/10 lg:block" />

              <div className="space-y-5">
                {displayExperiences.map((experience, index) => {
                  const isPrimary = index === 0;

                  return (
                    <article
                      key={experience.id}
                      className="relative grid gap-4 lg:grid-cols-[6.5rem_1fr]"
                    >
                      <div className="hidden lg:block">
                        <div className="sticky top-28">
                          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm shadow-slate-950/[0.04] dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400">
                            <span className="text-xs font-semibold">
                              0{index + 1}
                            </span>
                          </div>

                          <p className="mt-4 max-w-[6rem] text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-600">
                            {experience.period}
                          </p>
                        </div>
                      </div>

                      <div
                        className={[
                          "group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.07] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06] sm:p-7 lg:p-8 xl:p-9",
                          isPrimary ? "lg:min-h-[22rem]" : "",
                        ].join(" ")}
                      >
                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-100 transition duration-300 group-hover:scale-125 dark:bg-cyan-400/10" />

                        <div className="relative">
                          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex gap-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                                <BriefcaseBusiness className="h-5 w-5" />
                              </div>

                              <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300 lg:hidden">
                                  {experience.period}
                                </p>

                                <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.045em] text-slate-950 dark:text-white lg:text-3xl">
                                  {experience.role}
                                </h3>

                                <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-zinc-400">
                                  {experience.organization}
                                </p>
                              </div>
                            </div>

                            <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-400 lg:hidden">
                              0{index + 1}
                            </span>
                          </div>

                          <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base sm:leading-8">
                            {experience.description}
                          </p>

                          <div
                            className={[
                              "mt-7 grid gap-3",
                              isPrimary ? "md:grid-cols-2" : "md:grid-cols-2",
                            ].join(" ")}
                          >
                            {experience.highlights
                              .slice(0, isPrimary ? 6 : 4)
                              .map((highlight) => (
                                <div
                                  key={highlight}
                                  className="flex gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-zinc-950/70 lg:p-4.5"
                                >
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-300" />

                                  <p className="text-sm leading-6 text-slate-600 dark:text-zinc-300 lg:leading-7">
                                    {highlight}
                                  </p>
                                </div>
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
        )}
      </div>
    </section>
  );
}