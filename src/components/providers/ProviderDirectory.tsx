"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Provider, ProviderCategory } from "@/data/providers";
import {
  filterProvidersByCategory,
  getActiveCategories,
  searchProviders,
  sortProviders,
  type ProviderSort,
} from "@/lib/providers";
import { ProviderCard } from "@/components/providers/ProviderCard";
import { cn } from "@/lib/utils";

const SORT_OPTIONS: { value: ProviderSort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Provider Name A–Z" },
  { value: "most-games", label: "Most Games" },
  { value: "game-type", label: "Game Type" },
];

export function ProviderDirectory({ providers }: { providers: Provider[] }) {
  const categories = useMemo(() => getActiveCategories(), []);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProviderCategory | "All">("All");
  const [sort, setSort] = useState<ProviderSort>("featured");

  const results = useMemo(() => {
    const byCategory = filterProvidersByCategory(providers, activeCategory);
    const bySearch = searchProviders(byCategory, query);
    return sortProviders(bySearch, sort);
  }, [providers, activeCategory, query, sort]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <div className="relative w-full sm:max-w-sm">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search providers..."
            aria-label="Search providers"
            className="w-full rounded-full border border-border bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-text placeholder:text-muted focus:border-primary/50 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="mask-fade-x -mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            <FilterPill active={activeCategory === "All"} onClick={() => setActiveCategory("All")}>
              All Providers
            </FilterPill>
            {categories.map((category) => (
              <FilterPill
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </FilterPill>
            ))}
          </div>

          <label className="flex shrink-0 items-center gap-2 text-sm text-muted">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as ProviderSort)}
              className="rounded-full border border-border bg-white/[0.03] px-3 py-2 text-sm text-text focus:border-primary/50 focus:outline-none"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value} className="bg-surface text-text">
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-white/[0.02] py-16 text-center text-sm text-muted">
          No providers match your search or filters.
        </div>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-300",
        active
          ? "border-primary/40 bg-primary/10 text-primary-soft"
          : "border-border bg-white/[0.02] text-muted hover:border-primary/30 hover:text-text"
      )}
    >
      {children}
    </button>
  );
}
