import type { Achievement, Profile, ProjectOverview } from "../../types/api";

type ProofBarSectionProps = {
  profile?: Profile | null;
  projects?: ProjectOverview[];
  achievements?: Achievement[];
};

function extractGpa(academicProof?: string) {
  if (!academicProof) {
    return "3.94";
  }

  const match = academicProof.match(/3\.94\/?4?\.?0?0?/);

  if (!match) {
    return "3.94";
  }

  return "3.94";
}

export default function ProofBarSection({
  profile,
  projects,
  achievements,
}: ProofBarSectionProps) {
  const projectCount = projects && projects.length > 0 ? projects.length : 7;
  const achievementCount =
    achievements && achievements.length > 0 ? achievements.length : 3;

  const proofItems = [
    {
      value: "Top 1",
      label: "Computer Science Graduate",
    },
    {
      value: extractGpa(profile?.academic_proof),
      label: "GPA / 4.00",
    },
    {
      value: `${projectCount}+`,
      label: "Portfolio Projects",
    },
    {
      value: `${achievementCount}`,
      label: "Recognitions",
    },
  ];

  return (
    <section className="px-5 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 rounded-[2rem] border border-slate-200 bg-white/80 p-3 shadow-xl shadow-slate-950/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none md:grid-cols-4">
          {proofItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] bg-slate-50 p-5 dark:bg-zinc-950/70"
            >
              <p className="font-display text-3xl font-semibold tracking-[-0.055em] text-slate-950 dark:text-white">
                {item.value}
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}