import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function updateScrollProgress() {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    }

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-300 transition-[width] duration-150 ease-out dark:from-cyan-300 dark:via-emerald-300 dark:to-cyan-400"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
}