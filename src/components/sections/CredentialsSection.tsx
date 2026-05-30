import { Award, GraduationCap, Sparkles } from "lucide-react";
import type { Achievement, Education } from "../../types/api";

type CredentialsSectionProps = {
  education?: Education[];
  achievements?: Achievement[];
  isLoading?: boolean;
};

const fallbackEducation: Education[] = [
  {
    id: "universitas-bumigora-computer-science",
    institution: "Universitas Bumigora",
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    period: "2021 - 2025",
    gpa: "3.94 / 4.00",
    highlights: [
      "Graduated as Top 1 Computer Science student.",
      "Earned Bachelor of Computer Science degree (S.Kom).",
      "Focused on software engineering, AI-powered systems, and scalable web applications.",
    ],
    sort_order: 1,
  },
];

const fallbackAchievements: Achievement[] = [
  {
    id: "best-graduate-computer-science",
    title: "Best Graduate - Rank 1 Computer Science",
    description:
      "Graduated as the top Computer Science student with GPA 3.94 / 4.00.",
    year: "2025",
    category: "Academic",
    sort_order: 1,
  },
  {
    id: "international-research-presenter-icoris-2025",
    title: "International Research Presenter - ICORIS 2025",
    description:
      "Presented research at ICORIS 2025 as part of international academic contribution.",
    year: "2025",
    category: "Research",
    sort_order: 2,
  },
  {
    id: "top-10-dbs-coding-camp",
    title: "Top 10% Graduate - DBS Coding Camp",
    description: "Achieved Top 10% distinction among 3,000+ participants.",
    year: "2025",
    category: "Program Distinction",
    sort_order: 3,
  },
];

export default function CredentialsSection({
  education,
  achievements,
  isLoading = false,
}: CredentialsSectionProps) {
  const displayEducation =
    education && education.length > 0 ? education : fallbackEducation;

  const displayAchievements =
    achievements && achievements.length > 0
      ? achievements
      : fallbackAchievements;

  const primaryEducation = displayEducation[0];

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />
      <div className="absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
              Academic Proof & Recognition
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              Academic excellence, validated by real execution.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-zinc-300 lg:ml-auto lg:text-lg lg:leading-8">
            A concise credential layer that supports the portfolio’s engineering
            narrative: strong academic performance, research exposure, and
            practical distinction.
          </p>
        </div>

        {isLoading ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="h-96 animate-pulse rounded-[2rem] border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]" />
            <div className="h-96 animate-pulse rounded-[2rem] border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]" />
          </div>
        ) : (
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {primaryEducation && (
              <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-8">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-100/70 dark:bg-cyan-400/10" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                      <GraduationCap className="h-5 w-5" />
                    </div>

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-300">
                      Education
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl">
                    {primaryEducation.institution}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
                    {primaryEducation.degree} · {primaryEducation.field}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-5 dark:bg-zinc-950/70">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                        Period
                      </p>

                      <p className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                        {primaryEducation.period}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5 dark:bg-zinc-950/70">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                        GPA
                      </p>

                      <p className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                        {primaryEducation.gpa}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    {primaryEducation.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3">
                        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-300" />

                        <p className="text-sm leading-6 text-slate-600 dark:text-zinc-300">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )}

            <div className="grid gap-4">
              {displayAchievements.map((achievement, index) => (
                <article
                  key={achievement.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.07] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-100 transition duration-300 group-hover:scale-125 dark:bg-cyan-400/10" />

                  <div className="relative flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                      <Award className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-300">
                          {achievement.category}
                        </span>

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-600">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-2xl">
                        {achievement.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                        {achievement.description}
                      </p>

                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">
                        {achievement.year}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}