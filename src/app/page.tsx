import { Hero } from "@/components/sections/hero/Hero";
import { PlatformStats } from "@/components/sections/PlatformStats";
import { Introduction } from "@/components/sections/Introduction";
import { Solutions } from "@/components/sections/Solutions";
import { Products } from "@/components/sections/Products";
import { GameAggregation } from "@/components/sections/aggregation/GameAggregation";
import { WhiteLabel } from "@/components/sections/whitelabel/WhiteLabel";
import { Platform } from "@/components/sections/platform/Platform";
import { Services } from "@/components/sections/Services";
import { WhyOcthera } from "@/components/sections/why/WhyOcthera";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedProviders } from "@/components/sections/FeaturedProviders";
import { GlobalInfrastructure } from "@/components/sections/global/GlobalInfrastructure";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <PlatformStats />
      <Introduction />
      <Solutions />
      <Products />
      <GameAggregation />
      <WhiteLabel />
      <Platform />
      <Services />
      <WhyOcthera />
      <HowItWorks />
      <FeaturedProviders />
      <GlobalInfrastructure />
      <FinalCta />
    </main>
  );
}
