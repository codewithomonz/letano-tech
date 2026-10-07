// Copy for the Services and Why Us sections.
// Edit text here, not inside the components.
//
// Writing pattern used on purpose (for Google and AI answer engines):
//  - every block opens with a plain definition or direct answer of about 40-60 words
//  - the business name "Letano Tech" appears inside each answer, so a quoted
//    passage still makes sense when it is lifted out of the page
//  - no invented statistics, ratings or testimonials
//
// Lines marked [CONFIRM] are claims about your business that only you can verify.

export type IconName = "web" | "mobile" | "desktop" | "seo" | "it";

export const servicesSection = {
  heading:
    "App development, SEO and IT support for small businesses and individuals",
  intro:
    "Letano Tech is a software development and IT services team based in Benin City, Nigeria. We build web applications, mobile apps and desktop software, optimize websites for Google and AI search, and provide IT support for small businesses and individuals anywhere in the world.",
};

export const serviceCards: {
  id: string;
  icon: IconName;
  name: string;
  summary: string;
  bestFor: string;
  cta: string;
}[] = [
  {
    id: "web-apps",
    icon: "web",
    name: "Web application development",
    summary:
      "Web application development is the design and build of software that runs in a browser, such as customer portals, dashboards, booking systems and online stores. Letano Tech builds web apps for small businesses and individuals, designed around what your users need to finish and built to load quickly on mobile networks.",
    bestFor: "Businesses that need customers to book, order or log in online.",
    cta: "Plan a web app",
  },
  {
    id: "mobile-apps",
    icon: "mobile",
    name: "Mobile app development",
    summary:
      "Mobile app development is the design and build of apps that run on phones and tablets. Letano Tech builds iOS and Android apps, either from one shared codebase or as separate native apps depending on the product, and handles design, development, store submission and updates after launch.",
    bestFor: "Products that need to reach customers on their phones.",
    cta: "Plan a mobile app",
  },
  {
    id: "desktop-apps",
    icon: "desktop",
    name: "Desktop software development",
    summary:
      "Desktop software development is the build of programs that install on a computer, such as internal business tools and point-of-sale systems. Letano Tech builds desktop apps for Windows, macOS and Linux, including apps that keep working when the internet connection drops.", // [CONFIRM] offline capability
    bestFor: "Shops, clinics and offices that need reliable software on site.",
    cta: "Plan a desktop app",
  },
  {
    id: "seo",
    icon: "seo",
    name: "SEO services",
    summary:
      "SEO, or search engine optimization, is the work of making a website easier to find on Google and in AI answers. Letano Tech audits your site, fixes technical problems that block indexing, writes content that answers real customer searches, and reports on ranking changes every month.", // [CONFIRM] monthly reports
    bestFor: "Businesses that want customers to find them on Google.",
    cta: "Request an SEO audit",
  },
  {
    id: "it-support",
    icon: "it",
    name: "IT support for small businesses",
    summary:
      "IT support for small businesses means keeping computers, networks, email, backups and software accounts working. Letano Tech provides one point of contact when something breaks, plus a monthly check that finds problems early, for businesses and individuals without an in-house IT team.", // [CONFIRM] monthly check
    bestFor: "Small teams without an in-house IT person.",
    cta: "Ask about IT support",
  },
];

export const whyUs = {
  heading:
    "Letano Tech compared with a freelancer, agency, in-house hire or AI builder",
  intro:
    "Letano Tech differs from a freelancer, a large agency, an in-house hire or an AI builder because one team covers web, mobile and desktop development, SEO and IT support. You get one contact and visible starting prices instead of managing several suppliers.", // [CONFIRM] visible starting prices
  reasons: [
    {
      title: "One contact for the build, the ranking and the support",
      body: "You talk to the same team about the app, your Google ranking and your IT support, so nobody points at another supplier when something breaks.",
    },
    {
      title: "Starting prices you can see",
      body: "Starting prices and what each one includes are listed on this page, so you can judge the cost before you book a call.", // [CONFIRM]
    },
    {
      title: "Built for real conditions",
      body: "We design apps to load fast on mobile networks and, where it matters, to keep working offline.", // [CONFIRM]
    },
  ],
  columns: [
    "Freelancer",
    "Large agency",
    "In-house hire",
    "AI or no-code builder",
    "Letano Tech",
  ],
  rows: [
    {
      criterion: "Web, mobile and desktop apps",
      cells: [
        "Usually one or two",
        "Yes",
        "Depends on the hire",
        "Mostly web",
        "Yes",
      ],
    },
    {
      criterion: "SEO and IT support",
      cells: [
        "Rarely included",
        "Usually extra",
        "Separate hires",
        "Not included",
        "Yes, same team",
      ],
    },
    {
      criterion: "Cost to start",
      cells: [
        "Low to medium",
        "High",
        "Salary plus overhead",
        "Low",
        "Fixed starting prices",
      ],
    },
    {
      criterion: "Someone to call when it breaks",
      cells: [
        "Depends on availability",
        "Account manager",
        "Yes",
        "Support tickets",
        "One contact",
      ],
    },
    {
      criterion: "Custom features, such as offline mode",
      cells: ["Yes", "Yes", "Yes", "Limited", "Yes"],
    },
    {
      criterion: "Best when you need",
      cells: [
        "A small, one-off task",
        "A large project with a large budget",
        "Full-time work on one product",
        "A simple prototype",
        "Software, SEO and IT support together",
      ],
    },
  ],
  note: "A general comparison of typical arrangements. Individual freelancers and agencies vary.",
  // Update this whenever you change prices or claims. Fresh dates help search and AI engines trust the page.
  updated: { label: "October 2026", iso: "2026-10" },
};
