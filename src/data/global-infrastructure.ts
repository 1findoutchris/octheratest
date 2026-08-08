export type NetworkPoint = {
  // Positioned as percentages over the map canvas.
  x: number;
  y: number;
};

/** Illustrative network points for the global infrastructure visual — not a claim of regional licensing or availability. */
export const NETWORK_POINTS: NetworkPoint[] = [
  { x: 18, y: 32 },
  { x: 27, y: 55 },
  { x: 47, y: 24 },
  { x: 50, y: 46 },
  { x: 58, y: 62 },
  { x: 68, y: 30 },
  { x: 78, y: 50 },
  { x: 84, y: 68 },
  { x: 33, y: 70 },
  { x: 90, y: 28 },
];

export const GLOBAL_CAPABILITIES: string[] = [
  "Multi-currency ready",
  "Multi-language architecture",
  "Responsive across devices",
  "Scalable infrastructure",
  "Regional customization",
];
