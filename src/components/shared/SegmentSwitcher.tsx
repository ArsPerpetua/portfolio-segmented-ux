import { useEffect, useState } from "react";
import { segmentOptions } from "../../data/portfolioContent";
import type { PortfolioSegment } from "../../types/portfolio";

type SegmentSwitcherProps = {
  activeSegment: PortfolioSegment;
  onSegmentChange: (
    segment: PortfolioSegment,
    source: "hero_segment_control" | "floating_segment_switcher",
  ) => void;
};

export default function SegmentSwitcher({
  activeSegment,
  onSegmentChange,
}: SegmentSwitcherProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      const hero = document.getElementById("hero");

      if (!hero) {
        setIsVisible(window.scrollY > 500);
        return;
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight - 120;
      setIsVisible(window.scrollY > heroBottom);
    }

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      className={[
        "fixed inset-x-4 bottom-4 z-50 transition-all duration-300 lg:inset-x-0 lg:flex lg:justify-center",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto w-fit rounded-full border border-white/10 bg-zinc-950/88 p-1 shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <div className="flex items-center gap-1">
          {segmentOptions.map((segment) => {
            const isActive = activeSegment === segment.id;

            return (
              <button
                key={segment.id}
                onClick={() =>
                  onSegmentChange(segment.id, "floating_segment_switcher")
                }
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-5",
                  isActive
                    ? "bg-white text-zinc-950 shadow-md shadow-white/10"
                    : "text-zinc-400 hover:bg-white/[0.06] hover:text-white",
                ].join(" ")}
              >
                {segment.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}