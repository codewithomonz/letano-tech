// Copy and prices for the Pricing section. Edit here, not inside the component.
//
// IMPORTANT: every price below is a placeholder. Replace "[add price]" with your
// real starting prices in both currencies. Lines marked [CONFIRM] are promises
// only you can verify. Update `updated` whenever you change a price.

export type Currency = "usd" | "ngn";

export const currencies: { id: Currency; label: string }[] = [
  { id: "usd", label: "USD ($)" },
  { id: "ngn", label: "NGN (₦)" },
];

export const pricingSection = {
  heading: "Starting prices for websites, apps and ongoing support",
  intro:
    "Letano Tech offers three fixed-scope packages: a website sprint, an app MVP sprint and a monthly care plan. Each one lists a starting price, what it includes and what we guarantee in writing. Larger or custom projects are quoted after a short call.", // [CONFIRM]
  image: "/images/pricing.png",
  imageAlt:
    "A tidy desk with a laptop, a notebook and a plant, ready for a client project",
  note: "Starting prices for a typical scope. Your final price is fixed in writing before work begins.",
  updated: { label: "October 2026", iso: "2026-10" },
  guaranteesHeading: "Guarantees on every project",
  guarantees: [
    {
      title: "Fixed scope and price in writing",
      body: "You approve the scope and the price before any work starts.",
    },
    {
      title: "A working demo every week",
      body: "You see progress as it happens and can change direction early.", // [CONFIRM]
    },
    {
      title: "You own the code",
      body: "The source code and accounts are handed over once the project is paid for.", // [CONFIRM]
    },
    {
      title: "30 days of free bug fixes",
      body: "Bugs found in the first 30 days after launch are fixed at no charge.", // [CONFIRM]
    },
  ],
};

export const offers: {
  id: string;
  name: string;
  answer: string;
  cadence: string;
  price: Record<Currency, string>;
  includes: string[];
  bestFor: string;
  cta: string;
  featured?: boolean;
}[] = [
  {
    id: "website-sprint",
    name: "Website Sprint",
    answer:
      "A website sprint is a fixed-scope project that takes a business website from brief to launch. Letano Tech designs it, builds it for phones and computers, sets up the SEO basics and your Google Business Profile link, and launches it for a price agreed in writing.",
    cadence: "one-time project",
    price: { usd: "[add price]", ngn: "[add price]" },
    includes: [
      "Design and build of a set number of pages, agreed up front",
      "Mobile-friendly layout and fast loading",
      "SEO basics: titles, descriptions, sitemap and structured data",
      "Contact form and analytics",
      "Launch and a handover walkthrough",
    ],
    bestFor:
      "Businesses that need a professional website without a long project.",
    cta: "Start a website sprint",
  },
  {
    id: "app-mvp-sprint",
    name: "App MVP Sprint",
    answer:
      "An app MVP sprint builds the first working version of a web or mobile app, limited to the features that matter most. Letano Tech scopes the product with you, designs the screens, builds the core features and deploys it, so you can test it with real users.",
    cadence: "one-time project",
    price: { usd: "[add price]", ngn: "[add price]" },
    includes: [
      "Scoping session and a written feature list",
      "Screen design for the core user flow",
      "Development of the agreed core features",
      "Deployment to the web or the app stores",
      "Source code and documentation handover",
    ],
    bestFor: "Founders and businesses testing a product idea.",
    cta: "Start an MVP sprint",
    featured: true,
  },
  {
    id: "care-plan",
    name: "Care Plan",
    answer:
      "A care plan is a monthly service that keeps your website or app running, secure and visible. Letano Tech handles updates, backups, a monthly SEO report and IT support hours for one flat fee, so small problems get fixed before they cost you customers.",
    cadence: "per month",
    price: { usd: "[add price]", ngn: "[add price]" },
    includes: [
      "Software updates and security patches",
      "Regular backups",
      "A monthly SEO report",
      "A set number of IT support hours each month",
      "Priority response when something breaks",
    ],
    bestFor: "Anyone who wants their site or app looked after after launch.",
    cta: "Start a care plan",
  },
];
