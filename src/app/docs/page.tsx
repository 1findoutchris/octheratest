import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Technical documentation for integrating with Octhera's B2B gaming technology platform.",
};

export default function DocsPage() {
  return (
    <main className="flex-1 pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-text">Documentation</h1>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          This page is a placeholder. Integration guides, API references and technical
          documentation for Octhera&rsquo;s platform will be published here.
        </p>
      </Container>
    </main>
  );
}
