import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/message";

export const Route = createFileRoute("/encrypted-messaging")({
  head: () => ({
    meta: [
      { title: "Encrypted Messaging — Phantom Secure" },
      {
        name: "description",
        content:
          "Lawful private messaging built on established encryption standards, with message content not retained on our messaging infrastructure.",
      },
      { property: "og:title", content: "Encrypted Messaging — Phantom Secure" },
      {
        property: "og:description",
        content:
          "Lawful private messaging built on established encryption standards, with message content not retained on our messaging infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/encrypted-messaging" },
      { property: "og:site_name", content: "Phantom Secure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://phantomsecure.xyz/encrypted-messaging" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
//encrypted page for the phantomsecure website and fixed parts   of it.
