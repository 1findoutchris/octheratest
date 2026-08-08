import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionKicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink-soft bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-soft",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(46,230,200,0.7)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <SectionKicker>{kicker}</SectionKicker>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-frost sm:text-5xl lg:text-6xl",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
