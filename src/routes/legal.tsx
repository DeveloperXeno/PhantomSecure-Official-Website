import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/legal";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal Compliance — PhantomSecure" },
      {
        name: "description",
        content:
          "Legal compliance, terms of use and acceptable use policies for Phantom Secure services.",
      },
      { property: "og:title", content: "Legal Compliance — PhantomSecure" },
      {
        property: "og:description",
        content:
          "Legal compliance, terms of use and acceptable use policies for Phantom Secure services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/legal" },
      { property: "og:site_name", content: "PhantomSecure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/legal" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
