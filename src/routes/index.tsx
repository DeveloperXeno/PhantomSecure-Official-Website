import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PhantomSecure | Encrypted BlackBerry Devices & Private Messaging" },
      {
        name: "description",
        content:
          "PhantomSecure (phantomsecure.xyz) supplies encrypted BlackBerry devices with device-to-device encryption, no message storage and private networks for lawful confidential communication.",
      },
      {
        property: "og:title",
        content: "PhantomSecure | Encrypted BlackBerry Devices & Private Messaging",
      },
      {
        property: "og:description",
        content:
          "Encrypted BlackBerry devices with device-to-device encryption, no message storage and private networks for lawful confidential communication.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PhantomSecure" },
      { property: "og:url", content: "https://phantomsecure.xyz/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PhantomSecure" },
      {
        name: "twitter:description",
        content:
          "Encrypted BlackBerry devices for lawful, confidential communication.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "https://phantomsecure.xyz/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "PhantomSecure",
          alternateName: "Phantom Secure",
          url: "https://phantomsecure.xyz/",
          description:
            "PhantomSecure supplies encrypted BlackBerry devices and private messaging for lawful confidential communication.",
          publisher: {
            "@type": "Organization",
            name: "PhantomSecure",
            url: "https://phantomsecure.xyz/",
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
