import { services, site } from "@/lib/content";

// Structured data for Google and AI engines. Rendered on the server.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#business`,
        name: site.name,
        url: site.url,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.locality,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        areaServed: "Worldwide",
        ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${site.name} services`,
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
            },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}