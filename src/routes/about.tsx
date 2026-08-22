import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Phantom Secure" },
      {
        name: "description",
        content:
          "More than a decade protecting businesses and executives around the globe with a spotless track record.",
      },
      { property: "og:title", content: "About — Phantom Secure" },
      {
        property: "og:description",
        content:
          "More than a decade protecting businesses and executives around the globe with a spotless track record.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantom-secure-xyz.lovable.app/about" },
      { property: "og:site_name", content: "Phantom Secure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantom-secure-xyz.lovable.app/about" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
