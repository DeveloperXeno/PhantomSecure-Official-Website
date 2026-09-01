import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PhantomSecure" },
      {
        name: "description",
        content:
          "More than a decade protecting businesses and executives around the globe with a spotless track record.",
      },
      { property: "og:title", content: "About — PhantomSecure" },
      {
        property: "og:description",
        content:
          "More than a decade protecting businesses and executives around the globe with a spotless track record.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/about" },
      { property: "og:site_name", content: "PhantomSecure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/about" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
