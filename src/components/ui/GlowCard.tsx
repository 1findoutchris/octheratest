"use client";

import { cn } from "@/lib/utils";

export function GlowCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-8 transition-all duration-500",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-30px_rgb(from_var(--octhera-primary)_r_g_b/0.35)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
