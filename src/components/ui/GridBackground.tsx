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
  color = "primary",
}: {
  className?: string;
  color?: "primary" | "secondary" | "accent";
}) {
  const colorMap = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
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
