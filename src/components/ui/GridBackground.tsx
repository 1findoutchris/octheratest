import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 grid-pattern mask-fade-b opacity-60",
        className
      )}
    />
  );
}

export function GlowOrb({
  className,
  color = "cyan",
}: {
  className?: string;
  color?: "cyan" | "violet" | "amber";
}) {
  const colorMap = {
    cyan: "bg-cyan",
    violet: "bg-violet",
    amber: "bg-amber",
  };
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full opacity-30 blur-[120px]",
        colorMap[color],
        className
      )}
    />
  );
}
