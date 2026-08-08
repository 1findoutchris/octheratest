export const PROVIDER_CATEGORIES = [
  "Slots",
  "Live Casino",
  "Crash Games",
  "Instant Games",
  "Sportsbook",
  "Virtual Sports",
  "Esports",
  "Table Games",
  "Lottery",
  "Bingo",
  "Poker",
  "Other",
] as const;

export type ProviderCategory = (typeof PROVIDER_CATEGORIES)[number];

/** Business-facing availability of a provider's content to operators. */
export type ProviderStatus = "Available" | "Coming Soon" | "Unavailable";

/** Technical state of Octhera's integration with the provider. */
export type IntegrationStatus = "Connected" | "In Progress" | "Planned";

export type GameTypeCount = {
  type: ProviderCategory;
  /** Verified game count for this category, or null if not yet confirmed. */
  count: number | null;
};

/**
 * Placeholder for a single game within a provider's catalog. The catalog is
 * intentionally empty for every provider right now — see the note below —
 * but the shape exists so a future API/CMS/backend feed can populate it
 * without changing any component.
 */
export type Game = {
  id: string;
  name: string;
  slug: string;
  categories: ProviderCategory[];
};

export type Provider = {
  id: string;
  name: string;
  slug: string;
  /** Path under /public/providers/, or null to render a text-based placeholder mark. */
  logo: string | null;
  description: string;
  /** Verified total game count, or null when not yet confirmed. */
  gameCount: number | null;
  /** Display label used when gameCount is known, e.g. "1,000+". Ignored when gameCount is null. */
  gameCountLabel: string | null;
  categories: ProviderCategory[];
  gameTypes: GameTypeCount[];
  featured: boolean;
  status: ProviderStatus;
  integrationStatus: IntegrationStatus;
  website?: string;
  /** Verified markets only — omit rather than guess. */
  markets?: string[];
  /** Scalable slot for a future game catalog feed (API/DB/JSON/provider feed). Empty until real data exists. */
  games: Game[];
};

/**
 * PLACEHOLDER PROVIDER DATA.
 *
 * No confirmed Octhera provider integrations, logos or game counts exist in
 * this repository. The entries below exist only to demonstrate the
 * directory's UI/UX (cards, filters, search, sort, per-provider pages) and
 * use clearly generic names rather than real, identifiable gaming
 * companies — publishing real company names here without a confirmed
 * relationship would misrepresent an integration/partnership that may not
 * exist.
 *
 * This is the single source of truth for the provider directory. Replace
 * this array with the real provider list (and flip logos/gameCount/
 * gameTypes to verified values) and every page/component updates
 * automatically — no other files need to change.
 */
export const PROVIDERS: Provider[] = [
  {
    id: "provider-01",
    name: "Provider Alpha",
    slug: "provider-alpha",
    logo: null,
    description:
      "Placeholder provider entry demonstrating a multi-category slots and live casino content catalog.",
    gameCount: null,
    gameCountLabel: null,
    categories: ["Slots", "Live Casino"],
    gameTypes: [
      { type: "Slots", count: null },
      { type: "Live Casino", count: null },
    ],
    featured: true,
    status: "Available",
    integrationStatus: "Connected",
    games: [],
  },
  {
    id: "provider-02",
    name: "Provider Beta",
    slug: "provider-beta",
    logo: null,
    description:
      "Placeholder provider entry demonstrating a live casino and game show focused catalog.",
    gameCount: null,
    gameCountLabel: null,
    categories: ["Live Casino", "Table Games"],
    gameTypes: [
      { type: "Live Casino", count: null },
      { type: "Table Games", count: null },
    ],
    featured: true,
    status: "Available",
    integrationStatus: "Connected",
    games: [],
  },
  {
    id: "provider-03",
    name: "Provider Gamma",
    slug: "provider-gamma",
    logo: null,
    description:
      "Placeholder provider entry demonstrating a crash and instant games catalog.",
    gameCount: null,
    gameCountLabel: null,
    categories: ["Crash Games", "Instant Games"],
    gameTypes: [
      { type: "Crash Games", count: null },
      { type: "Instant Games", count: null },
    ],
    featured: true,
    status: "Available",
    integrationStatus: "In Progress",
    games: [],
  },
  {
    id: "provider-04",
    name: "Provider Delta",
    slug: "provider-delta",
    logo: null,
    description:
      "Placeholder provider entry demonstrating a sportsbook and virtual sports catalog.",
    gameCount: null,
    gameCountLabel: null,
    categories: ["Sportsbook", "Virtual Sports"],
    gameTypes: [
      { type: "Sportsbook", count: null },
      { type: "Virtual Sports", count: null },
    ],
    featured: false,
    status: "Available",
    integrationStatus: "Connected",
    games: [],
  },
  {
    id: "provider-05",
    name: "Provider Epsilon",
    slug: "provider-epsilon",
    logo: null,
    description: "Placeholder provider entry demonstrating an esports markets catalog.",
    gameCount: null,
    gameCountLabel: null,
    categories: ["Esports"],
    gameTypes: [{ type: "Esports", count: null }],
    featured: false,
    status: "Coming Soon",
    integrationStatus: "Planned",
    games: [],
  },
  {
    id: "provider-06",
    name: "Provider Zeta",
    slug: "provider-zeta",
    logo: null,
    description:
      "Placeholder provider entry demonstrating a slots-focused catalog with a broad title count.",
    gameCount: null,
    gameCountLabel: null,
    categories: ["Slots"],
    gameTypes: [{ type: "Slots", count: null }],
    featured: true,
    status: "Available",
    integrationStatus: "Connected",
    games: [],
  },
  {
    id: "provider-07",
    name: "Provider Eta",
    slug: "provider-eta",
    logo: null,
    description: "Placeholder provider entry demonstrating a lottery and bingo catalog.",
    gameCount: null,
    gameCountLabel: null,
    categories: ["Lottery", "Bingo"],
    gameTypes: [
      { type: "Lottery", count: null },
      { type: "Bingo", count: null },
    ],
    featured: false,
    status: "Available",
    integrationStatus: "In Progress",
    games: [],
  },
  {
    id: "provider-08",
    name: "Provider Theta",
    slug: "provider-theta",
    logo: null,
    description: "Placeholder provider entry demonstrating a poker network catalog.",
    gameCount: null,
    gameCountLabel: null,
    categories: ["Poker"],
    gameTypes: [{ type: "Poker", count: null }],
    featured: false,
    status: "Unavailable",
    integrationStatus: "Planned",
    games: [],
  },
];
