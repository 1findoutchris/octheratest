import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { getAllProviders } from "@/lib/providers";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/providers`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...getAllProviders().map((provider) => ({
      url: `${SITE_URL}/providers/${provider.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    { url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
