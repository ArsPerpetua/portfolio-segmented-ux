import {
  BrainCircuit,
  Building2,
  GaugeCircle,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { PortfolioSegment } from "../../types/portfolio";

type ValuePropositionSectionProps = {
  activeSegment: PortfolioSegment;
};

const valueContent: Record<
  PortfolioSegment,
  {
    eyebrow: string;
    title: string;
    description: string;
    signal: string;
    cards: {
      title: string;
      description: string;
      icon: typeof Building2;
    }[];
  }
> = {
  enterprise: {
    eyebrow: "For Enterprise Teams",
    title:
      "I focus on systems that make internal work easier to track, maintain, and improve.",
    description:
      "Enterprise work is rarely just about adding features. The bigger challenge is understanding the process, reducing manual steps, and making information easier to follow.",
    signal: "Less manual work, clearer operational flow.",
    cards: [
      {
        title: "Process Before Interface",
        description:
          "I try to understand the real flow first: who submits, who reviews, who tracks, and where the bottlenecks happen.",
        icon: Building2,
      },
      {
        title: "Maintainable Backend",
        description:
          "I structure APIs, database tables, and repositories so the system can be extended without becoming confusing.",
        icon: ShieldCheck,
      },
      {
        title: "Useful Visibility",
        description:
          "Good software should help teams see what is happening, not just store data in another place.",
        icon: GaugeCircle,
      },
    ],
  },
  startup: {
    eyebrow: "For Startup Teams",
    title:
      "I help turn early product ideas into usable software without making the system messy too early.",
    description:
      "For startup work, I care about shipping quickly, but also keeping enough structure so the product can change as the idea becomes clearer.",
    signal: "Fast enough to launch, structured enough to iterate.",
    cards: [
      {
        title: "MVP With Direction",
        description:
          "I build the first version around the core user flow, not around unnecessary features that slow the product down.",
        icon: Layers3,
      },
      {
        title: "Practical AI Features",
        description:
          "I prefer AI features that users can understand and benefit from, not AI labels added only for trend value.",
        icon: BrainCircuit,
      },
      {
        title: "Ready for Change",
        description:
          "The codebase should make it easier to test new ideas, replace parts, and improve the product over time.",
        icon: GaugeCircle,
      },
    ],
  },
  freelance: {
    eyebrow: "For Client Projects",
    title:
      "I build clean web products that look credible and solve a real client need.",
    description:
      "Client projects need more than good visuals. They need clear navigation, reliable forms, useful dashboards, and a handoff that does not leave the client confused.",
    signal: "Polished delivery with practical business value.",
    cards: [
      {
        title: "Clean User Experience",
        description:
          "I pay attention to spacing, hierarchy, responsiveness, and small interaction details that make a site feel professional.",
        icon: Sparkles,
      },
      {
        title: "Simple Automation",
        description:
          "I look for repetitive steps that can be turned into forms, dashboards, reports, or small internal tools.",
        icon: GaugeCircle,
      },
      {
        title: "Easy to Understand",
        description:
          "A good client project should be maintainable, explainable, and not depend on unnecessary complexity.",
        icon: ShieldCheck,
      },
    ],
  },
};

export default function ValuePropositionSection({
  activeSegment,
}: ValuePropositionSectionProps) {
  const content = valueContent[activeSegment];

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/15" />
      <div className="absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {content.title}
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-xl shadow-slate-950/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none lg:ml-auto lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-500">
              Segment Signal
            </p>

            <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white">
              {content.signal}
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base">
              {content.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.07] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06] sm:p-7"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-100 transition duration-300 group-hover:scale-125 dark:bg-cyan-400/10" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400/10 dark:text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}