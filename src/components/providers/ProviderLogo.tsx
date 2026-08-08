import Image from "next/image";
import { cn } from "@/lib/utils";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function ProviderLogo({
  name,
  logo,
  className,
}: {
  name: string;
  logo: string | null;
  className?: string;
}) {
  if (logo) {
    return (
      <div className={cn("relative flex items-center justify-center", className)}>
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="160px"
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border border-border bg-white/[0.03] font-display font-bold text-muted",
        className
      )}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}
