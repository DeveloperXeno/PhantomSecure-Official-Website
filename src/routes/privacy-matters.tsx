import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/whether";

export const Route = createFileRoute("/privacy-matters")({
  head: () => ({
    meta: [
      { title: "Privacy Matters — PhantomSecure" },
      {
        name: "description",
        content:
          "Why private communication matters and how Phantom Secure keeps your business information confidential.",
      },
      { property: "og:title", content: "Privacy Matters — PhantomSecure" },
      {
        property: "og:description",
        content:
          "Why private communication matters and how Phantom Secure keeps your business information confidential.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/privacy-matters" },
      { property: "og:site_name", content: "PhantomSecure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/privacy-matters" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
