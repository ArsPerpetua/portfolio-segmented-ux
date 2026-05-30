import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-950 antialiased transition-colors duration-500 dark:bg-zinc-950 dark:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] dark:opacity-20" />

        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-400/10" />

        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-slate-50 dark:from-zinc-950 dark:via-transparent dark:to-zinc-950" />
      </div>

      {children}
    </main>
  );
}