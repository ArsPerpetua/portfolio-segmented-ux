import { AlertTriangle, Server } from "lucide-react";

type ApiStatusBannerProps = {
  errors: Array<string | null | undefined>;
};

export default function ApiStatusBanner({ errors }: ApiStatusBannerProps) {
  const activeErrors = errors.filter(Boolean);

  if (activeErrors.length === 0) {
    return null;
  }

  return (
    <div className="fixed left-4 right-4 top-24 z-50 mx-auto max-w-3xl rounded-3xl border border-amber-200 bg-amber-50/95 p-4 shadow-2xl shadow-amber-950/10 backdrop-blur-xl dark:border-amber-400/20 dark:bg-amber-400/10 dark:shadow-none">
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200">
          <AlertTriangle className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-amber-700 dark:text-amber-200" />

            <p className="text-sm font-semibold text-amber-950 dark:text-amber-100">
              Backend API is not fully available.
            </p>
          </div>

          <p className="mt-1 text-sm leading-6 text-amber-800 dark:text-amber-100/80">
            The portfolio is currently showing fallback data for some sections.
            Make sure the Golang API is running on{" "}
            <span className="font-semibold">http://localhost:8080</span>.
          </p>
        </div>
      </div>
    </div>
  );
}