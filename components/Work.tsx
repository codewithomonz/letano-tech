import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ParallaxImage from "./ParallaxImage";
import { projects, workSection } from "@/lib/work";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-navy-deep py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="work-heading"
            title={workSection.heading}
            intro={workSection.intro}
          />
        </Reveal>

        <div className="mt-14 space-y-20 sm:space-y-24">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={p.id}
                id={p.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal
                  className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
                >
                  <div className="group">
                    <ParallaxImage
                      src={p.image}
                      alt={p.imageAlt}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="ring-white/10 transition-shadow duration-300 group-hover:ring-marigold/60"
                    />
                  </div>
                </Reveal>

                <Reveal
                  delay={0.1}
                  className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}
                >
                  {p.placeholder && (
                    <p className="mb-3 inline-block rounded border border-marigold/60 px-2 py-0.5 text-xs font-medium text-marigold">
                      Sample project: replace with your own
                    </p>
                  )}
                  <p className="text-sm font-medium text-marigold">{p.type}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-frost sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mist">{p.summary}</p>

                  <dl className="mt-6 space-y-4">
                    <div className="border-t border-line pt-4">
                      <dt className="text-sm font-semibold text-frost">
                        The problem
                      </dt>
                      <dd className="mt-1 leading-relaxed text-mist">
                        {p.problem}
                      </dd>
                    </div>
                    <div className="border-t border-line pt-4">
                      <dt className="text-sm font-semibold text-frost">
                        Built with
                      </dt>
                      <dd className="mt-2">
                        <ul className="flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <li
                              key={s}
                              className="rounded border border-line px-2.5 py-1 text-xs text-frost"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div className="border-t border-line pt-4">
                      <dt className="text-sm font-semibold text-frost">
                        The result
                      </dt>
                      <dd className="mt-1 leading-relaxed text-mist">
                        {p.result}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href="#contact"
                    className="mt-6 inline-block text-sm font-semibold text-marigold underline decoration-marigold/40 underline-offset-4 transition-colors hover:decoration-marigold"
                  >
                    Discuss a similar project
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}