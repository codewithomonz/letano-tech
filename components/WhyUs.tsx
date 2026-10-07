import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { whyUs } from "@/lib/section";

export default function WhyUs() {
  const last = whyUs.columns.length - 1;

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="on-light border-t border-navy-deep/10 bg-white py-20 text-navy-deep sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              id="why-us-heading"
              tone="light"
              title={whyUs.heading}
              intro={whyUs.intro}
            />
          </Reveal>

          <ul className="lg:col-span-7">
            {whyUs.reasons.map((r, i) => (
              <li
                key={r.title}
                className="border-t border-navy-deep/10 pb-6 pt-6 first:border-t-0 first:pt-0"
              >
                <Reveal delay={i * 0.08}>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-navy-deep">
                    {r.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-navy-deep/75">
                    {r.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-14">
          <div
            role="region"
            aria-label="Comparison of options, scrolls sideways on small screens"
            tabIndex={0}
            className="overflow-x-auto rounded-xl border border-navy-deep/15"
          >
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Letano Tech compared with a freelancer, a large agency, an
                in-house hire and an AI or no-code builder
              </caption>
              <thead>
                <tr className="bg-frost">
                  <th
                    scope="col"
                    className="sticky left-0 bg-frost px-5 py-4 font-medium text-navy-deep/70"
                  >
                    What matters
                  </th>
                  {whyUs.columns.map((c, i) => (
                    <th
                      key={c}
                      scope="col"
                      className={`px-5 py-4 font-display text-base font-semibold ${
                        i === last
                          ? "border-t-2 border-marigold bg-navy-deep text-white"
                          : "text-navy-deep"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {whyUs.rows.map((r) => (
                  <tr key={r.criterion} className="border-t border-navy-deep/10">
                    <th
                      scope="row"
                      className="sticky left-0 bg-white px-5 py-4 align-top font-medium text-navy-deep"
                    >
                      {r.criterion}
                    </th>
                    {r.cells.map((c, i) => (
                      <td
                        key={i}
                        className={`px-5 py-4 align-top ${
                          i === last
                            ? "bg-navy/[0.07] font-semibold text-navy-deep"
                            : "text-navy-deep/75"
                        }`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-navy-deep/65">
            {whyUs.note} Last updated{" "}
            <time dateTime={whyUs.updated.iso}>{whyUs.updated.label}</time>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}