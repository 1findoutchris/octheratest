import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProviderCard } from "@/components/providers/ProviderCard";
import { getFeaturedProviders } from "@/lib/providers";

export function FeaturedProviders() {
  const providers = getFeaturedProviders();
  if (providers.length === 0) return null;

  return (
    <section id="providers" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Provider Ecosystem"
            title="Powered by Leading Game Providers"
            description="A growing set of gaming content integrations available through the Octhera platform, spanning slots, live casino, crash, sportsbook and more."
          />
          <Reveal delay={0.1}>
            <Link
              href="/providers"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-soft transition-colors hover:text-primary"
            >
              View All Providers
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider, i) => (
            <Reveal key={provider.id} delay={(i % 3) * 0.08}>
              <ProviderCard provider={provider} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
