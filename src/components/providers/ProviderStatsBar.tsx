import { getProviderDirectoryStats } from "@/lib/providers";

export function ProviderStatsBar() {
  const stats = getProviderDirectoryStats();

  const items = [
    { label: "Providers", value: stats.totalProviders.toString() },
    { label: "Categories", value: stats.totalCategories.toString() },
    ...(stats.hasVerifiedGameCounts
      ? [{ label: "Games", value: `${stats.totalVerifiedGames.toLocaleString("en-US")}+` }]
      : []),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-14">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1 text-center">
          <p className="font-display text-3xl font-bold text-gradient-accent sm:text-4xl">
            {item.value}
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
