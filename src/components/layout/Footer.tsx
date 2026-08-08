import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_COLUMNS } from "@/data/footer";
import { SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-soft/60 bg-obsidian">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-mist">{SITE_TAGLINE}.</p>
            {SOCIAL_LINKS.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist transition-colors hover:text-cyan-soft"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist-dim">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist transition-colors hover:text-frost"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-soft/60 pt-8 sm:flex-row">
          <p className="text-xs text-mist-dim">
            &copy; {year} Octhera. All rights reserved.
          </p>
          <p className="text-xs text-mist-dim">Powering the Future of Gaming.</p>
        </div>
      </Container>
    </footer>
  );
}
