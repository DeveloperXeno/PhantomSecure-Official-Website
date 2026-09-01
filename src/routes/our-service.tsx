import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/service";

export const Route = createFileRoute("/our-service")({
  head: () => ({
    meta: [
      { title: "Our Service — Phantom Secure" },
      {
        name: "description",
        content:
          "Around-the-clock support, private communication networks and secured devices designed for lawful confidentiality.",
      },
      { property: "og:title", content: "Our Service — Phantom Secure" },
      {
        property: "og:description",
        content:
          "Around-the-clock support, private communication networks and secured devices designed for lawful confidentiality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/our-service" },
      { property: "og:site_name", content: "Phantom Secure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/our-service" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
