// Copy for the FAQ section. Edit text here, not inside the component.
//
// Every answer opens with a direct reply and names "Letano Tech", so it still
// makes sense when Google or an AI assistant quotes it on its own.
// Answers are plain text on purpose: they are also sent to search engines as
// FAQ structured data, and the visible text must match it exactly.
// Lines marked [CONFIRM] are promises only you can verify.

export const faqSection = {
  heading: "Frequently asked questions about working with Letano Tech",
  intro:
    "These are the questions clients ask most often before starting a project with Letano Tech, covering cost, timelines, ownership and support. If your question is not here, send a message or book a call and we will answer it directly.",
  image: "/images/faq.png",
  imageAlt:
    "A calm help desk with a tablet showing abstract chat bubbles and a notebook",
  askLabel: "Ask your own question",
};

export const faqs: { q: string; a: string }[] = [
  {
    q: "How much does it cost to build a website or app?",
    a: "The cost depends on the number of screens, the features, the platforms and any integrations. Letano Tech lists starting prices for a website sprint, an app MVP sprint and a monthly care plan in the pricing section, and fixes the final price in writing after a scoping call.",
  },
  {
    q: "How long does it take to build a web or mobile app?",
    a: "The timeline depends on the scope. A website takes less time than an app with accounts, payments and several screens. Letano Tech gives you a timeline in the written scope before any work starts, and shows working software every week so you can follow progress.", // [CONFIRM] weekly demos
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. Letano Tech is based in Benin City, Nigeria and works remotely with small businesses and individuals worldwide, using video calls, email and WhatsApp. Prices are available in US dollars and Nigerian naira.", // [CONFIRM]
  },
  {
    q: "Who owns the code and the accounts for my project?",
    a: "You do. Once the project is paid for, Letano Tech hands over the source code, the hosting and domain accounts and the documentation, so you can move to another developer at any time.", // [CONFIRM]
  },
  {
    q: "Can you take over or fix an app another developer started?",
    a: "Often yes. Letano Tech reviews the existing code first, then tells you in writing whether to repair it, rebuild parts of it or start again, and what each option would cost. You decide before any work begins.",
  },
  {
    q: "Can I hire you for SEO or IT support without building a new app?",
    a: "Yes. Letano Tech offers SEO audits and monthly IT support as separate services for existing websites and small businesses, whether or not we built the site. Start with an SEO audit or a support plan and add development later if you need it.",
  },
  {
    q: "What happens after my website or app launches?",
    a: "Letano Tech fixes bugs found in the first 30 days at no charge. After that you can add a monthly care plan that covers updates, security patches, backups, a monthly SEO report and IT support hours, or you can manage everything yourself.", // [CONFIRM]
  },
  {
    q: "Can you guarantee my website will rank first on Google?",
    a: "No one can honestly guarantee a first-place ranking, because Google's results change constantly. Letano Tech sets up the technical SEO, structured data and content that give your site its best chance, and reports on ranking changes every month so you can see what is working.", // [CONFIRM] monthly reports
  },
];
