export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

/**
 * PLACEHOLDER DATA — replace with Octhera's verified figures before launch.
 * Each `value` is animated as a count-up when the section enters the viewport.
 */
export const PLATFORM_STATS: Stat[] = [
  { value: 1000, suffix: "+", label: "Games available through aggregation" },
  { value: 50, suffix: "+", label: "Integrated content providers" },
  { value: 24, suffix: "/7", label: "Platform monitoring & support" },
  { value: 99.9, suffix: "%", label: "Infrastructure uptime target" },
];
