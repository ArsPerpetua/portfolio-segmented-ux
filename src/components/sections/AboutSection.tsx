import {
  BrainCircuit,
  Code2,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";
import type { Profile } from "../../types/api";

type AboutSectionProps = {
  profile?: Profile | null;
};

const strengths = [
  {
    title: "End-to-End Builder",
    description:
      "I can move between interface, API, database, and deployment without losing sight of the actual user problem.",
    icon: Code2,
  },
  {
    title: "AI With Practical Context",
    description:
      "I am interested in AI when it helps people make decisions, reduce manual work, or understand data more clearly.",
    icon: BrainCircuit,
  },
  {
    title: "Clear Engineering Habits",
    description:
      "I prefer simple architecture, readable code, and systems that other people can maintain after the first release.",
    icon: Layers3,
  },
];

export default function AboutSection({ profile }: AboutSectionProps) {
  const fullName = profile?.full_name ?? "Dicksa Ananda Cristian Tue";
  const headline = profile?.headline ?? "Full-Stack Engineer & AI Specialist.";
  const academicProof =
    profile?.academic_proof ??
    "Top 1 Computer Science Graduate, Cumlaude, GPA: 3.94/4.00";

  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
      <div className="absolute left-0 top-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
              About Me
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              I build software that connects clean interfaces, reliable systems, and practical AI use cases.
            </h2>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
              <div className="relative h-80 overflow-hidden bg-slate-950 sm:h-96">
                <img
                  src="/images/profile-portrait.jpg"
                  alt={`${fullName} professional portrait`}
                  className="h-full w-full object-cover object-[center_16%] brightness-[0.98] contrast-105 saturate-[0.55]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/28 to-slate-950/5" />
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-2xl font-semibold tracking-[-0.045em] text-white">
                    {fullName}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {headline}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                      Academic Signal
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-950 dark:text-white">
                      {academicProof}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-7">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                <Sparkles className="h-5 w-5" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
                Personal Narrative
              </p>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base sm:leading-8">
                    <p>
                        I enjoy building software from both sides: the experience people see and
                        the system that keeps it working behind the scenes. That is why my work
                        usually touches frontend, backend, database design, and deployment.
                    </p>

                    <p>
                        I am especially interested in projects where software helps people work
                        with more clarity: tracking issues, managing documents, organizing
                        reports, or turning raw data into something easier to act on.
                    </p>

                    <p>
                        This portfolio is also built as a small product system. The frontend reads
                        from a backend API, the content changes by visitor segment, and user
                        interactions can be tracked through an asynchronous analytics flow.
                    </p>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {strengths.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.07] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06] sm:p-6"
                  >
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-100 transition duration-300 group-hover:scale-125 dark:bg-cyan-400/10" />

                    <div className="relative flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-600">
                                0{index + 1}
                            </span>

                            <h3 className="mt-1 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                                {item.title}
                            </h3>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                          {item.description}
                        </p>
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