import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/why";

export const Route = createFileRoute("/privacy-articles")({
  head: () => ({
    meta: [
      { title: "Privacy Articles — PhantomSecure" },
      {
        name: "description",
        content:
          "News and articles on digital privacy, encryption standards and secure communications.",
      },
      { property: "og:title", content: "Privacy Articles — PhantomSecure" },
      {
        property: "og:description",
        content:
          "News and articles on digital privacy, encryption standards and secure communications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/privacy-articles" },
      { property: "og:site_name", content: "PhantomSecure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/privacy-articles" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
