import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./ServiceIcon";
import { serviceCards, servicesSection } from "@/lib/section";

// Bento layout on large screens: two wide cards, then three equal cards.
// One column on phones, two on tablets (the last card spans both).
const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "md:col-span-2 lg:col-span-4",
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="on-light bg-frost py-20 text-navy-deep sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="services-heading"
            tone="light"
            title={servicesSection.heading}
            intro={servicesSection.intro}
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-12">
          {serviceCards.map((s, i) => (
            <li key={s.id} id={s.id} className={SPANS[i]}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-navy-deep/10 bg-white p-6 shadow-[0_1px_2px_rgb(11_31_74/0.06)] transition-colors hover:border-navy/40 sm:p-8">
                  <ServiceIcon name={s.icon} className="text-navy" />
                  <h3
                    className={`mt-6 font-display font-semibold tracking-tight text-navy-deep ${
                      i < 2 ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {s.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy-deep/75">
                    {s.summary}
                  </p>
                  <p className="mt-5 border-t border-navy-deep/10 pt-4 text-sm text-navy-deep/70">
                    <strong className="font-semibold text-navy-deep">
                      Best for:
                    </strong>{" "}
                    {s.bestFor}
                  </p>
                  <a
                    href="#contact"
                    className="mt-auto self-start pt-5 text-sm font-semibold text-navy underline decoration-navy/30 underline-offset-4 transition-colors hover:decoration-navy"
                  >
                    {s.cta}
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}