import { cn } from "@/lib/utils";
import type { IntegrationStatus, ProviderStatus } from "@/data/providers";

const STATUS_STYLES: Record<ProviderStatus, string> = {
  Available: "border-primary/30 bg-primary/10 text-primary-soft",
  "Coming Soon": "border-accent/30 bg-accent/10 text-accent",
  Unavailable: "border-border bg-white/[0.03] text-muted",
};

const INTEGRATION_STYLES: Record<IntegrationStatus, string> = {
  Connected: "border-primary/30 bg-primary/10 text-primary-soft",
  "In Progress": "border-secondary/30 bg-secondary/10 text-secondary-soft",
  Planned: "border-border bg-white/[0.03] text-muted",
};

export function StatusBadge({ status, className }: { status: ProviderStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        STATUS_STYLES[status],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function IntegrationBadge({
  status,
  className,
}: {
  status: IntegrationStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        INTEGRATION_STYLES[status],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
