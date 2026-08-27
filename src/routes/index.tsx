import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phantom Secure — Lawful Private Communication" },
      {
        name: "description",
        content:
          "Encrypted devices for lawful private communication, built with established encryption standards and worldwide support.",
      },
      {
        property: "og:title",
        content: "Phantom Secure — Lawful Private Communication",
      },
      {
        property: "og:description",
        content:
          "Encrypted devices for lawful private communication, built with established encryption standards and worldwide support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://phantom-secure-xyz.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://phantom-secure-xyz.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Phantom Secure",
          url: "https://phantom-secure-xyz.lovable.app/",
          description:
            "Archived replica of the Phantom Secure encrypted communications website, reproduced for education purposes.",
          publisher: {
            "@type": "Organization",
            name: "Phantom Secure (archive)",
            url: "https://phantom-secure-xyz.lovable.app/",
          },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
