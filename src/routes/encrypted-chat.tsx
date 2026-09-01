import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/chat";

export const Route = createFileRoute("/encrypted-chat")({
  head: () => ({
    meta: [
      { title: "Encrypted Chat (PRIVÉ) — PhantomSecure" },
      {
        name: "description",
        content:
          "PRIVÉ sets the standard in secure chat and user protection with device-to-device encryption.",
      },
      { property: "og:title", content: "Encrypted Chat (PRIVÉ) — PhantomSecure" },
      {
        property: "og:description",
        content:
          "PRIVÉ sets the standard in secure chat and user protection with device-to-device encryption.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://phantomsecure.xyz/encrypted-chat" },
      { property: "og:site_name", content: "PhantomSecure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/encrypted-chat" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
