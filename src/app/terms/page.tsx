import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the Octhera website and B2B gaming technology services.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-frost">Terms of Use</h1>
        <p className="mt-6 text-sm leading-relaxed text-mist">
          This page is a placeholder. Octhera&rsquo;s full terms of use, governing this
          website and engagement with our B2B services, will be published here.
        </p>
      </Container>
    </main>
  );
}
