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
        "group relative overflow-hidden rounded-2xl border border-ink-soft bg-obsidian-2/60 p-8 transition-all duration-500",
        "hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_30px_80px_-30px_rgba(46,230,200,0.35)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-cyan/30 to-violet/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
