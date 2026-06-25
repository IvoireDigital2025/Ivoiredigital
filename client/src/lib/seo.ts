import { useEffect } from "react";

export const BUSINESS = {
  name: "Ivoire Digital",
  email: "contact@ivoiredigital.com",
  city: "Dallas",
  region: "TX",
  country: "US",
  url: "https://ivoiredigital.com",
};

export const DFW_CITIES = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Plano",
  "Irving",
  "Frisco",
  "McKinney",
  "Garland",
  "Denton",
  "Richardson",
  "Allen",
  "Grand Prairie",
];

interface SeoOptions {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, keywords, path, jsonLd }: SeoOptions) {
  useEffect(() => {
    const url = BUSINESS.url + (path ?? "");
    document.title = title;
    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", `${BUSINESS.url}/og-image.png`);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", `${BUSINESS.url}/og-image.png`);
    upsertLink("canonical", url);

    const id = "seo-jsonld";
    document.getElementById(id)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [title, description, keywords, path, JSON.stringify(jsonLd)]);
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS.name,
    url: BUSINESS.url,
    email: BUSINESS.email,
    description:
      "AI and digital marketing agency based in Dallas–Fort Worth, serving business owners across the United States.",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      ...DFW_CITIES.map((c) => ({ "@type": "City", name: c })),
    ],
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: BUSINESS.url + path,
    provider: {
      "@type": "ProfessionalService",
      name: BUSINESS.name,
      url: BUSINESS.url,
      email: BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        addressCountry: BUSINESS.country,
      },
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      ...DFW_CITIES.map((c) => ({ "@type": "City", name: c })),
    ],
  };
}
