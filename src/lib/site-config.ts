// Central place for site-wide constants so they can be updated in one spot.
// SITE_URL should be replaced with the real production domain once confirmed.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.octhera.com";

export const SITE_NAME = "Octhera";

export const SITE_TAGLINE = "Powering the Future of Gaming";

export const SITE_DESCRIPTION =
  "Octhera provides B2B gaming technology, turnkey platforms, white-label solutions, game aggregation and API infrastructure for modern gaming operators.";

// Set to real, confirmed Octhera social profiles when available. Leave empty to omit from footer/metadata.
export const SOCIAL_LINKS: { label: string; href: string }[] = [];

// Placeholder — replace with Octhera's confirmed business contact address before launch.
export const CONTACT_EMAIL = "info@octhera.com";
