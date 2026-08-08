import { PROVIDER_CATEGORIES, PROVIDERS, type Provider, type ProviderCategory } from "@/data/providers";

export type ProviderSort = "featured" | "name-asc" | "most-games" | "game-type";

export function getAllProviders(): Provider[] {
  return PROVIDERS;
}

export function getFeaturedProviders(): Provider[] {
  return PROVIDERS.filter((p) => p.featured);
}

export function getProviderBySlug(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}

/** Categories with at least one provider, in canonical PROVIDER_CATEGORIES order. */
export function getActiveCategories(): ProviderCategory[] {
  const used = new Set(PROVIDERS.flatMap((p) => p.categories));
  return PROVIDER_CATEGORIES.filter((c) => used.has(c));
}

export function getProvidersByCategory(category: ProviderCategory): Provider[] {
  return PROVIDERS.filter((p) => p.categories.includes(category));
}

export function getProvidersPerCategory(): Record<ProviderCategory, number> {
  const counts = Object.fromEntries(PROVIDER_CATEGORIES.map((c) => [c, 0])) as Record<
    ProviderCategory,
    number
  >;
  for (const provider of PROVIDERS) {
    for (const category of provider.categories) {
      counts[category] += 1;
    }
  }
  return counts;
}

/** Sums verified per-category game counts across providers. Null when no provider has a verified count for that category. */
export function getGamesPerCategory(): Record<ProviderCategory, number | null> {
  const totals = Object.fromEntries(PROVIDER_CATEGORIES.map((c) => [c, null])) as Record<
    ProviderCategory,
    number | null
  >;
  for (const provider of PROVIDERS) {
    for (const gameType of provider.gameTypes) {
      if (gameType.count == null) continue;
      totals[gameType.type] = (totals[gameType.type] ?? 0) + gameType.count;
    }
  }
  return totals;
}

export type ProviderDirectoryStats = {
  totalProviders: number;
  totalCategories: number;
  /** Sum of verified provider.gameCount values only. */
  totalVerifiedGames: number;
  /** True when at least one provider has a verified gameCount — gates whether the games stat should render at all. */
  hasVerifiedGameCounts: boolean;
};

export function getProviderDirectoryStats(): ProviderDirectoryStats {
  const verifiedCounts = PROVIDERS.map((p) => p.gameCount).filter(
    (count): count is number => count != null
  );
  return {
    totalProviders: PROVIDERS.length,
    totalCategories: getActiveCategories().length,
    totalVerifiedGames: verifiedCounts.reduce((sum, count) => sum + count, 0),
    hasVerifiedGameCounts: verifiedCounts.length > 0,
  };
}

export function searchProviders(providers: Provider[], query: string): Provider[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return providers;
  return providers.filter((p) => p.name.toLowerCase().includes(trimmed));
}

export function filterProvidersByCategory(
  providers: Provider[],
  category: ProviderCategory | "All"
): Provider[] {
  if (category === "All") return providers;
  return providers.filter((p) => p.categories.includes(category));
}

export function sortProviders(providers: Provider[], sort: ProviderSort): Provider[] {
  const list = [...providers];
  switch (sort) {
    case "name-asc":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "most-games":
      return list.sort((a, b) => {
        if (a.gameCount == null && b.gameCount == null) return a.name.localeCompare(b.name);
        if (a.gameCount == null) return 1;
        if (b.gameCount == null) return -1;
        return b.gameCount - a.gameCount;
      });
    case "game-type":
      return list.sort((a, b) => {
        const catA = a.categories[0] ?? "";
        const catB = b.categories[0] ?? "";
        return catA.localeCompare(catB) || a.name.localeCompare(b.name);
      });
    case "featured":
    default:
      return list.sort((a, b) => {
        if (a.featured === b.featured) return a.name.localeCompare(b.name);
        return a.featured ? -1 : 1;
      });
  }
}

/** Display label for a provider's total game count — never fabricates a number. */
export function formatGameCount(provider: Pick<Provider, "gameCount" | "gameCountLabel">): string {
  if (provider.gameCount != null && provider.gameCountLabel) {
    return `${provider.gameCountLabel} Games`;
  }
  return "Game catalog available on request";
}

/** Display label for a single category's game count within a provider's breakdown. */
export function formatGameTypeCount(count: number | null): string {
  return count != null ? count.toLocaleString("en-US") : "Available";
}
