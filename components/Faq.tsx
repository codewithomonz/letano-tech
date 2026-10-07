import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ParallaxImage from "./ParallaxImage";
import { faqSection, faqs } from "@/lib/faq";

export default function Faq() {
  // FAQ structured data. The text matches what is visible on the page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="on-light border-t border-navy-deep/10 bg-frost py-20 text-navy-deep sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 self-start lg:sticky lg:top-28 lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="faq-heading"
                tone="light"
                title={faqSection.heading}
                intro={faqSection.intro}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ParallaxImage
                src={faqSection.image}
                alt={faqSection.imageAlt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                ratio="aspect-[16/10]"
                className="ring-navy-deep/10"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="#contact"
                className="inline-block text-sm font-semibold text-navy underline decoration-navy/30 underline-offset-4 transition-colors hover:decoration-navy"
              >
                {faqSection.askLabel}
              </a>
            </Reveal>
          </div>

          {/* Native <details> elements: the answers are always in the page for search engines. */}
          <div className="border-t border-navy-deep/10 lg:col-span-7">
            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                delay={Math.min(i, 4) * 0.05}
                className="border-b border-navy-deep/10"
              >
                <details open={i === 0} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-md py-5 text-left transition-colors hover:text-navy [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                      {f.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-navy-deep/20 transition-colors group-open:border-navy group-open:bg-navy group-open:text-white"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
                      >
                        <path d="M3 5l4 4 4-4" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-answer max-w-2xl pb-6 pr-12 leading-relaxed text-navy-deep/75">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}