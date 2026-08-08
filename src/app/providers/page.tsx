import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GridBackground, GlowOrb } from "@/components/ui/GridBackground";
import { ProviderStatsBar } from "@/components/providers/ProviderStatsBar";
import { ProviderDirectory } from "@/components/providers/ProviderDirectory";
import { getAllProviders } from "@/lib/providers";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Game Providers",
  description:
    "Discover gaming content available through the Octhera provider ecosystem across slots, live casino, sportsbook, crash games, virtual sports and more.",
  alternates: {
    canonical: "/providers",
  },
  openGraph: {
    title: `Game Providers | ${SITE_NAME}`,
    description:
      "Discover gaming content available through the Octhera provider ecosystem across slots, live casino, sportsbook, crash games, virtual sports and more.",
    url: "/providers",
  },
};

export default function ProvidersPage() {
  const providers = getAllProviders();

  return (
    <main className="flex-1">
      <section className="relative overflow-x-clip pt-36 pb-20 sm:pt-44 sm:pb-24">
        <GridBackground />
        <GlowOrb color="primary" className="-left-40 top-10 h-[420px] w-[420px]" />
        <GlowOrb color="secondary" className="-right-32 top-1/3 h-[420px] w-[420px]" />

        <Container className="relative flex flex-col gap-14">
          <SectionHeading
            as="h1"
            align="center"
            kicker="Game Providers"
            title={
              <>
                One Integration.
                <br />
                <span className="text-gradient-accent">A World of Gaming Content.</span>
              </>
            }
            description="Discover gaming content available through the Octhera provider ecosystem across slots, live casino, sportsbook, crash games, virtual sports and more."
            className="mx-auto max-w-3xl"
          />
          <ProviderStatsBar />
        </Container>
      </section>

      <section className="relative pb-24 sm:pb-32">
        <Container>
          <ProviderDirectory providers={providers} />
        </Container>
      </section>
    </main>
  );
}
