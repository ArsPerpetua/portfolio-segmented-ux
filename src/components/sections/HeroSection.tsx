import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { personalProfile, segmentOptions } from "../../data/portfolioContent";
import type { Profile, SegmentOption } from "../../types/api";
import type { PortfolioSegment } from "../../types/portfolio";

type HeroSectionProps = {
  activeSegment: PortfolioSegment;
  onSegmentChange: (
    segment: PortfolioSegment,
    source: "hero_segment_control" | "floating_segment_switcher",
  ) => void;
  profile?: Profile | null;
  segments?: SegmentOption[];
  isProfileLoading?: boolean;
  isSegmentsLoading?: boolean;
};

const segmentIcons = {
  enterprise: Building2,
  startup: Layers3,
  freelance: Sparkles,
};

const segmentSignals: Record<
  PortfolioSegment,
  {
    label: string;
    value: string;
  }[]
> = {
  enterprise: [
    { label: "Focus", value: "Workflow Systems" },
    { label: "Backend", value: "Golang API" },
    { label: "Data", value: "PostgreSQL" },
  ],
  startup: [
    { label: "Focus", value: "MVP & SaaS" },
    { label: "Frontend", value: "React + TS" },
    { label: "AI", value: "Product Features" },
  ],
  freelance: [
    { label: "Focus", value: "Custom Apps" },
    { label: "Delivery", value: "Polished UI" },
    { label: "Outcome", value: "Client Value" },
  ],
};

export default function HeroSection({
  activeSegment,
  profile,
  segments,
  isProfileLoading = false,
  isSegmentsLoading = false,
}: HeroSectionProps) {
  const displaySegments =
    segments && segments.length > 0
      ? segments
      : segmentOptions.map((segment) => ({
          id: segment.id,
          label: segment.label,
          short_label: segment.shortLabel,
          headline: segment.headline,
          description: segment.description,
        }));

  const selectedSegment =
    displaySegments.find((segment) => segment.id === activeSegment) ??
    displaySegments[0];

  const ActiveIcon = segmentIcons[activeSegment];

  const fullName = profile?.full_name ?? personalProfile.fullName;
  const headline = profile?.headline ?? personalProfile.headline;
  const academicProof = profile?.academic_proof ?? personalProfile.academicProof;
  const subtitle = profile?.summary ?? personalProfile.subtitle;

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-16 lg:px-8 lg:pb-20 lg:pt-18"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/14 md:h-96 md:w-96" />
      <div className="absolute right-0 top-24 -z-10 hidden h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/12 lg:block" />

      <div className="mx-auto max-w-7xl">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:items-center lg:gap-10">
          <div className="min-w-0 max-w-3xl">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-[0.68rem] font-semibold text-cyan-700 shadow-sm shadow-slate-950/[0.03] backdrop-blur-xl dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100 dark:shadow-none sm:px-3.5 sm:py-2 sm:text-[0.72rem]">
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500 dark:text-emerald-300" />
              <span className="break-words">{academicProof}</span>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
                {fullName}
              </p>

              {(isProfileLoading || isSegmentsLoading) && (
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400 dark:shadow-none">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 dark:bg-cyan-300" />
                  Syncing API
                </span>
              )}
            </div>

            <h1 className="max-w-full break-words font-display text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 dark:text-white min-[420px]:text-[2.45rem] sm:text-6xl sm:leading-[0.98] lg:text-[4.85rem] xl:text-[5.15rem]">
              {headline}
            </h1>

            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-slate-600 dark:text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:shadow-white/10 dark:hover:bg-zinc-100 sm:h-12 sm:w-auto sm:px-6"
              >
                View Featured Work
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-950/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:shadow-none dark:hover:border-cyan-400/35 dark:hover:bg-white/[0.06] sm:h-12 sm:w-auto sm:px-6"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2.5 shadow-2xl shadow-slate-950/[0.08] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/30 sm:rounded-[2.4rem] sm:p-3">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950 sm:rounded-[1.9rem]">
                <div className="relative">
                <img
                  src="/images/profile-portrait.jpg"
                  alt={`${fullName} professional portrait`}
                  className="relative h-[19.5rem] w-full object-cover object-[center_16%] brightness-[0.9] contrast-105 saturate-[0.52] transition duration-500 hover:scale-[1.02] min-[420px]:h-[22rem] sm:h-[29rem] lg:h-[28rem]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.2)_40%,rgba(2,6,23,0.72)_78%,rgba(2,6,23,0.95)_100%)]" />
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(16,185,129,0.12),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.12),rgba(15,23,42,0.02))]" />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[0.64rem] font-semibold tracking-[0.01em] text-white backdrop-blur-xl sm:left-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-xs">
                  Available
                </div>

                <div className="absolute inset-x-0 bottom-0 hidden p-5 sm:block sm:p-7">
                  <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
                    <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[0.66rem] font-semibold text-white backdrop-blur-xl sm:px-3 sm:py-1.5 sm:text-xs">
                      Full-Stack Engineer
                    </span>

                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[0.66rem] font-semibold text-cyan-100 backdrop-blur-xl sm:px-3 sm:py-1.5 sm:text-xs">
                      AI Specialist
                    </span>
                  </div>

                  <p className="max-w-[14rem] break-words font-display text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white min-[420px]:max-w-[16rem] min-[420px]:text-[1.65rem] sm:max-w-none sm:text-3xl">
                    {fullName}
                  </p>

                  <p className="mt-2 max-w-[15rem] text-[0.84rem] leading-5.5 text-zinc-300 min-[420px]:max-w-[16rem] min-[420px]:text-[0.92rem] min-[420px]:leading-6 sm:max-w-md sm:text-sm">
                    Building scalable software systems, AI-powered products, and
                    workflow automation with a product-minded engineering approach.
                  </p>
                </div>
                </div>

                <div className="space-y-4 bg-slate-950 px-4 pb-5 pt-4 sm:hidden">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 text-[0.68rem] font-semibold text-white backdrop-blur-xl">
                      Full-Stack Engineer
                    </span>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[0.68rem] font-semibold text-cyan-100 backdrop-blur-xl">
                      AI Specialist
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="break-words font-display text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                      {fullName}
                    </p>

                    <p className="text-[0.88rem] leading-6 text-zinc-300">
                      Building scalable software systems, AI-powered products, and
                      workflow automation with a product-minded engineering approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/[0.06] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/25 sm:mt-10 sm:rounded-[2rem] sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200 sm:h-12 sm:w-12">
                <ActiveIcon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
                  Current Journey
                </p>

                <p className="mt-2 font-display text-[1.6rem] font-semibold leading-tight tracking-[-0.045em] text-slate-950 dark:text-white sm:text-2xl">
                  {selectedSegment.headline}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[0.95rem] leading-7 text-slate-600 dark:text-zinc-300 sm:text-sm">
                {selectedSegment.description}
              </p>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                {segmentSignals[activeSegment].map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 dark:border-white/10 dark:bg-zinc-950/70 sm:block sm:p-3"
                  >
                    <div className="flex items-center justify-between gap-3 sm:block">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-500 sm:text-[0.65rem] sm:tracking-[0.18em]">
                      {signal.label}
                    </p>

                    <p className="text-[0.84rem] font-semibold leading-5 text-slate-950 dark:text-white sm:mt-1 sm:text-xs">
                      {signal.value}
                    </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
