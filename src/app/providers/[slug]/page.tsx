import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridBackground, GlowOrb } from "@/components/ui/GridBackground";
import { ProviderLogo } from "@/components/providers/ProviderLogo";
import { StatusBadge, IntegrationBadge } from "@/components/providers/StatusBadge";
import { CategoryBadge } from "@/components/providers/CategoryBadge";
import { formatGameCount, formatGameTypeCount, getAllProviders, getProviderBySlug } from "@/lib/providers";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllProviders().map((provider) => ({ slug: provider.slug }));
}

export async function generateMetadata(props: PageProps<"/providers/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const provider = getProviderBySlug(slug);
  if (!provider) return {};

  const title = `${provider.name} Games & Integration`;
  const description = `Explore ${provider.name} gaming content and integration options through the Octhera gaming infrastructure.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/providers/${provider.slug}`,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `/providers/${provider.slug}`,
    },
  };
}

export default async function ProviderPage(props: PageProps<"/providers/[slug]">) {
  const { slug } = await props.params;
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  return (
    <main className="flex-1">
      <section className="relative overflow-x-clip pt-36 pb-16 sm:pt-44 sm:pb-20">
        <GridBackground />
        <GlowOrb color="primary" className="-left-40 top-10 h-[380px] w-[380px]" />
        <GlowOrb color="secondary" className="-right-32 top-1/3 h-[380px] w-[380px]" />

        <Container className="relative flex flex-col gap-10">
          <Link
            href="/providers"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All Providers
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <ProviderLogo name={provider.name} logo={provider.logo} className="h-20 w-20 shrink-0 text-2xl" />
              <div className="flex flex-col gap-3">
                <h1 className="font-display text-3xl font-bold text-text sm:text-4xl">
                  {provider.name}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {provider.categories.map((category) => (
                    <CategoryBadge key={category}>{category}</CategoryBadge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
              <StatusBadge status={provider.status} />
              <IntegrationBadge status={provider.integrationStatus} />
            </div>
          </div>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {provider.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Request: ${provider.name}`)}`} variant="primary">
              Request This Provider
            </Button>
            {provider.website && (
              <a
                href={provider.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-text"
              >
                Provider Website
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            )}
          </div>
        </Container>
      </section>

      <section className="relative pb-24 sm:pb-32">
        <Container className="flex flex-col gap-10">
          <div className="rounded-2xl border border-border bg-surface/60 p-7 sm:p-9">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted">
              Total Games
            </h2>
            <p className="mt-2 font-display text-3xl font-bold text-gradient-accent sm:text-4xl">
              {formatGameCount(provider)}
            </p>
          </div>

          <div>
            <h2 className="mb-5 font-display text-2xl font-bold text-text">Game Type Breakdown</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {provider.gameTypes.map((gameType) => (
                <div
                  key={gameType.type}
                  className="rounded-xl border border-border bg-white/[0.02] p-5"
                >
                  <p className="text-sm font-medium text-muted">{gameType.type}</p>
                  <p className="mt-1 font-display text-2xl font-bold text-text">
                    {formatGameTypeCount(gameType.count)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {provider.markets && provider.markets.length > 0 && (
            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-text">Available Markets</h2>
              <div className="flex flex-wrap gap-2">
                {provider.markets.map((market) => (
                  <CategoryBadge key={market}>{market}</CategoryBadge>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
