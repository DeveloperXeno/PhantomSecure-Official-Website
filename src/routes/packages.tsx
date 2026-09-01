import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/package";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Phantom Secure" },
      {
        name: "description",
        content:
          "Encrypted device packages for individuals and businesses of every size, with full support included.",
      },
      { property: "og:title", content: "Packages & Pricing — Phantom Secure" },
      {
        property: "og:description",
        content:
          "Encrypted device packages for individuals and businesses of every size, with full support included.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/packages" },
      { property: "og:site_name", content: "Phantom Secure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/packages" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
