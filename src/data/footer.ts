export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Turnkey", href: "#solutions" },
      { label: "White Label", href: "#white-label" },
      { label: "API Integration", href: "#solutions" },
      { label: "Game Aggregation", href: "#aggregation" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Sportsbook", href: "#products" },
      { label: "Casino", href: "#products" },
      { label: "Live Casino", href: "#products" },
      { label: "Slots", href: "#products" },
      { label: "Esports", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#why-octhera" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
