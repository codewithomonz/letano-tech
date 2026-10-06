// // Single source of truth for copy and site facts.
// // Edit text here, not inside components.

// export const site = {
//   name: "Letano Tech",
//   // Set NEXT_PUBLIC_SITE_URL in .env.local and in Vercel once you have the domain.
//   url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
//   title: "Letano Tech | App Development, SEO & IT Support, Benin City",
//   description:
//     "Letano Tech builds web, mobile and desktop apps, improves your search ranking and supports your IT. Fixed-price projects for small businesses and founders.",
//   locality: "Benin City",
//   region: "Edo",
//   country: "NG",
//   // TODO: add your Google Business Profile link, LinkedIn and GitHub URLs.
//   // These tell Google and AI engines that all these profiles are the same business.
//   sameAs: [] as string[],
// };

// export const navLinks = [
//   { label: "Services", href: "#services" },
//   { label: "Work", href: "#work" },
//   { label: "Pricing", href: "#pricing" },
//   { label: "FAQ", href: "#faq" },
//   { label: "Contact", href: "#contact" },
// ];

// export const hero = {
//   heading:
//     "One team to build your software, get it found, and keep it running.",
//   subheading:
//     "Letano Tech builds web, mobile and desktop apps for small businesses and individuals, improves how your business ranks on Google, and supports the systems behind it.",
//   primaryCta: { label: "Book a 30-minute call", href: "#contact" },
//   secondaryCta: { label: "See starting prices", href: "#pricing" },
//   trust:
//     "Based in Benin City, Nigeria. Working with small businesses and individuals worldwide.",
// };

// // Used for JSON-LD now, and reused by the Services section later.
// export const services = [
//   {
//     name: "Web application development",
//     description:
//       "Customer portals, dashboards, booking systems and online marketplaces, built to load quickly on mobile networks.",
//   },
//   {
//     name: "Mobile app development",
//     description:
//       "iOS and Android apps, from design and development to store submission and updates after launch.",
//   },
//   {
//     name: "Desktop software development",
//     description:
//       "Desktop software for Windows, macOS and Linux, including internal tools and point-of-sale systems that work offline.",
//   },
//   {
//     name: "SEO services",
//     description:
//       "Site audits, technical fixes, content and Google Business Profile setup, with monthly ranking reports.",
//   },
//   {
//     name: "IT support for small businesses",
//     description:
//       "Computers, networks, email, backups and software accounts, with one contact when something breaks.",
//   },
// ];

// Single source of truth for copy and site facts.
// Edit text here, not inside components.

export const site = {
  name: "Letano Tech",
  // Set NEXT_PUBLIC_SITE_URL in .env.local and in Vercel once you have the domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Letano Tech | App Development, SEO & IT Support, Benin City",
  description:
    "Letano Tech builds web, mobile and desktop apps, improves your search ranking and supports your IT. Fixed-price projects for small businesses and founders.",
  locality: "Benin City",
  region: "Edo",
  country: "NG",
  // TODO: add your Google Business Profile link, LinkedIn and GitHub URLs.
  // These tell Google and AI engines that all these profiles are the same business.
  sameAs: [] as string[],
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  // Put your generated image at public/images/hero-bg.webp (any of .webp/.jpg/.png works,
  // just keep this path in sync with the file name).
  backgroundImage: "/images/hero-bg.png",
  heading:
    "One team to build your software, get it found, and keep it running.",
  subheading:
    "Letano Tech builds web, mobile and desktop apps for small businesses and individuals, improves how your business ranks on Google, and supports the systems behind it.",
  primaryCta: { label: "Book a 30-minute call", href: "#contact" },
  secondaryCta: { label: "See starting prices", href: "#pricing" },
  trust:
    "Based in Benin City, Nigeria. Working with small businesses and individuals worldwide.",
};

// Used for JSON-LD now, and reused by the Services section later.
export const services = [
  {
    name: "Web application development",
    description:
      "Customer portals, dashboards, booking systems and online marketplaces, built to load quickly on mobile networks.",
  },
  {
    name: "Mobile app development",
    description:
      "iOS and Android apps, from design and development to store submission and updates after launch.",
  },
  {
    name: "Desktop software development",
    description:
      "Desktop software for Windows, macOS and Linux, including internal tools and point-of-sale systems that work offline.",
  },
  {
    name: "SEO services",
    description:
      "Site audits, technical fixes, content and Google Business Profile setup, with monthly ranking reports.",
  },
  {
    name: "IT support for small businesses",
    description:
      "Computers, networks, email, backups and software accounts, with one contact when something breaks.",
  },
];
