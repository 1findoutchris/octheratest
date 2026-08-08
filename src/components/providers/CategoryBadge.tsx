import { cn } from "@/lib/utils";

export function CategoryBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
