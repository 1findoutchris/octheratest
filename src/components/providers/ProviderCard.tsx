import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Provider } from "@/data/providers";
import { formatGameCount } from "@/lib/providers";
import { ProviderLogo } from "@/components/providers/ProviderLogo";
import { StatusBadge } from "@/components/providers/StatusBadge";
import { CategoryBadge } from "@/components/providers/CategoryBadge";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Link
      href={`/providers/${provider.slug}`}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-30px_rgb(from_var(--octhera-primary)_r_g_b/0.35)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-3">
        <ProviderLogo
          name={provider.name}
          logo={provider.logo}
          className="h-14 w-14 shrink-0 text-lg transition-transform duration-500 group-hover:scale-105"
        />
        <StatusBadge status={provider.status} />
      </div>

      <div className="relative flex flex-col gap-2">
        <h3 className="font-display text-xl font-bold text-text">{provider.name}</h3>
        <p className="text-sm font-medium text-primary-soft">{formatGameCount(provider)}</p>
      </div>

      <div className="relative flex flex-wrap gap-2">
        {provider.categories.map((category) => (
          <CategoryBadge key={category}>{category}</CategoryBadge>
        ))}
      </div>

      <span className="relative mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-soft transition-colors group-hover:text-primary">
        View Provider
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
