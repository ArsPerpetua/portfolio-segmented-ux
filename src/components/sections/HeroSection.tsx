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
      className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:px-8 lg:pb-20 lg:pt-18"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/14 md:h-96 md:w-96" />
      <div className="absolute right-0 top-24 -z-10 hidden h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/12 lg:block" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-2 text-[0.72rem] font-semibold text-cyan-700 shadow-sm shadow-slate-950/[0.03] backdrop-blur-xl dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100 dark:shadow-none">
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500 dark:text-emerald-300" />
              <span className="truncate">{academicProof}</span>
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

            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-slate-950 dark:text-white sm:text-6xl lg:text-[4.85rem] xl:text-[5.15rem]">
              {headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-zinc-300 sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:shadow-white/10 dark:hover:bg-zinc-100"
              >
                View Featured Work
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-950/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:shadow-none dark:hover:border-cyan-400/35 dark:hover:bg-white/[0.06]"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/[0.08] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/30">
              <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-950">
                <img
                  src="/images/profile-portrait.jpg"
                  alt={`${fullName} professional portrait`}
                  className="relative h-[27rem] w-full object-cover object-[center_16%] brightness-[0.9] contrast-105 saturate-[0.52] transition duration-500 hover:scale-[1.02] sm:h-[29rem] lg:h-[28rem]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.2)_40%,rgba(2,6,23,0.72)_78%,rgba(2,6,23,0.95)_100%)]" />
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(16,185,129,0.12),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.12),rgba(15,23,42,0.02))]" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl">
                  Available
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl">
                      Full-Stack Engineer
                    </span>

                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur-xl">
                      AI Specialist
                    </span>
                  </div>

                  <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                    {fullName}
                  </p>

                  <p className="mt-2 max-w-md text-sm leading-6 text-zinc-300">
                    Building scalable software systems, AI-powered products, and
                    workflow automation with a product-minded engineering approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/[0.06] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/25 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                <ActiveIcon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
                  Current Journey
                </p>

                <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.045em] text-slate-950 dark:text-white">
                  {selectedSegment.headline}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm leading-7 text-slate-600 dark:text-zinc-300">
                {selectedSegment.description}
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {segmentSignals[activeSegment].map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-zinc-950/70"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-500">
                      {signal.label}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-950 dark:text-white">
                      {signal.value}
                    </p>
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