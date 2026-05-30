import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import type { Profile } from "../../types/api";
import type { PortfolioSegment } from "../../types/portfolio";

type ContactSectionProps = {
  activeSegment: PortfolioSegment;
  profile?: Profile | null;
};

const contactCopy: Record<
  PortfolioSegment,
  {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    focus: string;
  }
> = {
  enterprise: {
    eyebrow: "Enterprise Collaboration",
    title: "Let’s build reliable systems for workflow, reporting, and automation.",
    description:
      "I help organizations turn manual operations into structured, measurable, and scalable digital systems.",
    primaryCta: "Discuss Enterprise System",
    focus: "Workflow Automation · Reporting · Internal Systems",
  },
  startup: {
    eyebrow: "Startup Collaboration",
    title: "Let’s ship your MVP, SaaS product, or AI-powered feature.",
    description:
      "I help teams move from idea to product with modern frontend, scalable backend, and practical AI implementation.",
    primaryCta: "Discuss Product Build",
    focus: "MVP · SaaS · AI Integration · Product Engineering",
  },
  freelance: {
    eyebrow: "Freelance Collaboration",
    title: "Let’s create a polished website, dashboard, or custom web app.",
    description:
      "I create polished digital products with clean interfaces, responsive layouts, and practical automation features.",
    primaryCta: "Start a Project",
    focus: "Web Apps · Landing Pages · Dashboards · Automation",
  },
};

export default function ContactSection({
  activeSegment,
  profile,
}: ContactSectionProps) {
  const copy = contactCopy[activeSegment];

  const email = profile?.email ?? "diksaanandaa@gmail.com";
  const location = profile?.location ?? "Indonesia";
  const availability =
    profile?.availability ?? "Available for remote collaboration";
  const shortName = profile?.short_name ?? "Dicksa Ananda";
  const headline = profile?.headline ?? "Full-Stack Engineer & AI Specialist.";
  const github = profile?.github;
  const linkedin = profile?.linkedin;

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 pb-28 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28"
    >
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/15" />
      <div className="absolute bottom-20 left-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/[0.05] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative border-b border-slate-200 p-6 dark:border-white/10 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-100/70 dark:bg-cyan-400/10" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                  {copy.eyebrow}
                </p>

                <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  {copy.title}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-zinc-300">
                  {copy.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:shadow-cyan-500/10 dark:hover:bg-cyan-100"
                  >
                    <Mail className="h-4 w-4" />
                    {copy.primaryCta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href="/cv.pdf"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:shadow-none dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10"
                  >
                    <BriefcaseBusiness className="h-4 w-4" />
                    Download CV
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-zinc-950/70">
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                      API
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                      Backend Ready
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-zinc-950/70">
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                      AI
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                      Smart Systems
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-zinc-950/70">
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                      UX
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                      Polished UI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-zinc-950/70">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                  <Sparkles className="h-5 w-5" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
                  Current Focus
                </p>

                <p className="mt-3 text-base font-semibold leading-7 text-slate-950 dark:text-white">
                  {copy.focus}
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-zinc-950/70">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                  <Mail className="h-5 w-5" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className="mt-3 block break-all text-base font-semibold leading-7 text-slate-950 transition hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300"
                >
                  {email}
                </a>
              </div>

              {(github || linkedin) && (
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-zinc-950/70">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                    <Code2 className="h-5 w-5" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
                    Social Profiles
                  </p>

                  <div className="mt-4 grid gap-3">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-cyan-400/40"
                      >
                        <Code2 className="h-4 w-4" />
                        GitHub
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}

                    {linkedin && (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-cyan-400/40"
                      >
                        <BriefcaseBusiness className="h-4 w-4" />
                        LinkedIn
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-zinc-950/70">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-emerald-400/10 dark:text-emerald-200">
                  <MapPin className="h-5 w-5" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
                  Location & Availability
                </p>

                <p className="mt-3 text-base font-semibold leading-7 text-slate-950 dark:text-white">
                  {location}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                  {availability}
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl">
                {shortName}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                {headline} Built with React, TypeScript, Tailwind, Golang, and
                PostgreSQL.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              <a
                href="#projects"
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-300 dark:hover:border-cyan-400/40 dark:hover:text-white"
              >
                Work
              </a>

              <a
                href="#experience"
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-300 dark:hover:border-cyan-400/40 dark:hover:text-white"
              >
                Experience
              </a>

              <a
                href="#tech-stack"
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-300 dark:hover:border-cyan-400/40 dark:hover:text-white"
              >
                Tech Stack
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {shortName}. All rights reserved.</p>
            <p>Segmented portfolio powered by headless architecture.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}