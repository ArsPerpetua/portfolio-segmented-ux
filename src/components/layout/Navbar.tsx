import { Download, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { personalProfile, segmentOptions } from "../../data/portfolioContent";
import type { Profile } from "../../types/api";
import type { PortfolioSegment } from "../../types/portfolio";

type NavbarProps = {
  activeSegment: PortfolioSegment;
  profile?: Profile | null;
};

const navItems = [
  {
    label: "Work",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function getInitialTheme() {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

  document.documentElement.classList.toggle("dark", shouldUseDark);

  return shouldUseDark;
}

export default function Navbar({ activeSegment, profile }: NavbarProps) {
  const [isDark, setIsDark] = useState(getInitialTheme);

  const selectedSegment =
    segmentOptions.find((segment) => segment.id === activeSegment) ??
    segmentOptions[0];

  const displayName = profile?.short_name ?? personalProfile.shortName;

  function toggleTheme() {
    setIsDark((currentTheme) => {
      const nextTheme = !currentTheme;

      document.documentElement.classList.toggle("dark", nextTheme);
      localStorage.setItem("theme", nextTheme ? "dark" : "light");

      return nextTheme;
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/85">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <a href="#" className="group flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-slate-950 text-[0.72rem] font-bold text-white shadow-sm shadow-slate-950/10 transition group-hover:-translate-y-0.5 dark:border-white/10 dark:bg-white dark:text-zinc-950 dark:shadow-black/20">
            DA
          </div>

          <div className="min-w-0">
            <p className="truncate font-display text-[1.08rem] font-semibold tracking-[-0.035em] text-slate-950 dark:text-white sm:text-[1.12rem]">
              {displayName}
            </p>

            <div className="mt-0.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <p className="truncate text-[0.78rem] font-medium text-slate-500 dark:text-zinc-400">
                {selectedSegment.label}
              </p>
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 shadow-sm shadow-slate-950/[0.03] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/20 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-white hover:text-slate-950 hover:shadow-sm hover:shadow-slate-950/[0.04] dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white dark:hover:shadow-none"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="group grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-950/[0.04] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:shadow-black/20 dark:hover:border-cyan-400/35 dark:hover:bg-white/[0.06]"
          >
            {isDark ? (
              <Sun className="h-4 w-4 transition group-hover:rotate-12" />
            ) : (
              <Moon className="h-4 w-4 transition group-hover:-rotate-12" />
            )}
          </button>

          <a
            href="/cv.pdf"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:shadow-white/10 dark:hover:bg-zinc-100 sm:px-5"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </nav>
    </header>
  );
}