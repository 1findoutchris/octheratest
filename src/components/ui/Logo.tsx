import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <span
        aria-hidden
        className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary"
      >
        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-secondary blur-[6px] opacity-60" />
        <span className="relative h-2.5 w-2.5 rounded-[3px] bg-background" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-text">
        OCTHERA
      </span>
    </span>
  );
}
