import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/buy";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy Now — PhantomSecure" },
      { name: "description", content: "Order your Phantom Secure encrypted device today." },
      { property: "og:title", content: "Buy Now — PhantomSecure" },
      { property: "og:description", content: "Order your Phantom Secure encrypted device today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/buy" },
      { property: "og:site_name", content: "PhantomSecure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/buy" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
