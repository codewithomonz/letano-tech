"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ParallaxImage from "./ParallaxImage";
import {
  currencies,
  offers,
  pricingSection,
  type Currency,
} from "@/lib/Pricing";

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`mt-0.5 shrink-0 ${className}`}
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("usd");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="on-light border-t border-navy-deep/10 bg-white py-20 text-navy-deep sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                id="pricing-heading"
                tone="light"
                title={pricingSection.heading}
                intro={pricingSection.intro}
              />
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <div
                role="group"
                aria-label="Show prices in"
                className="relative inline-flex rounded-full border border-navy-deep/15 bg-frost p-1"
              >
                {currencies.map((c) => {
                  const active = currency === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setCurrency(c.id)}
                      className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                        active ? "text-white" : "text-navy-deep/70 hover:text-navy-deep"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="currency-pill"
                          className="absolute inset-0 rounded-full bg-navy-deep"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative">{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <ParallaxImage
              src={pricingSection.image}
              alt={pricingSection.imageAlt}
              sizes="(min-width: 1024px) 40vw, 100vw"
              ratio="aspect-[16/10]"
              className="ring-navy-deep/10"
            />
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {offers.map((o, i) => {
            const f = o.featured;
            return (
              <li key={o.id} id={o.id}>
                <Reveal delay={i * 0.1} className="h-full">
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                      f
                        ? "border-navy-deep bg-navy-deep text-white lg:p-10"
                        : "border-navy-deep/10 bg-frost text-navy-deep"
                    }`}
                  >
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {o.name}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        f ? "text-frost/80" : "text-navy-deep/75"
                      }`}
                    >
                      {o.answer}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span
                        className={`text-sm ${f ? "text-mist" : "text-navy-deep/70"}`}
                      >
                        From
                      </span>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={currency}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="font-display text-4xl font-semibold tracking-tight"
                        >
                          {o.price[currency]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <p
                      className={`mt-1 text-sm ${f ? "text-mist" : "text-navy-deep/70"}`}
                    >
                      {o.cadence}
                    </p>

                    <a
                      href="#contact"
                      className={`mt-6 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                        f
                          ? "bg-marigold text-navy-deep hover:bg-white"
                          : "bg-navy-deep text-white hover:bg-navy"
                      }`}
                    >
                      {o.cta}
                    </a>

                    <ul
                      className={`mt-7 space-y-3 border-t pt-6 text-sm ${
                        f ? "border-white/15" : "border-navy-deep/10"
                      }`}
                    >
                      {o.includes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <Check className={f ? "text-marigold" : "text-navy"} />
                          <span className={f ? "text-frost/90" : "text-navy-deep/80"}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p
                      className={`mt-auto pt-6 text-sm ${
                        f ? "text-mist" : "text-navy-deep/70"
                      }`}
                    >
                      <strong
                        className={`font-semibold ${f ? "text-white" : "text-navy-deep"}`}
                      >
                        Best for:
                      </strong>{" "}
                      {o.bestFor}
                    </p>
                  </motion.article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 border-t border-navy-deep/10 pt-10">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {pricingSection.guaranteesHeading}
            </h3>
          </Reveal>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pricingSection.guarantees.map((g, i) => (
              <li key={g.title}>
                <Reveal delay={i * 0.08}>
                  <Check className="text-navy" />
                  <h4 className="mt-3 font-semibold text-navy-deep">{g.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-navy-deep/75">
                    {g.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-navy-deep/65">
            {pricingSection.note} Prices last updated{" "}
            <time dateTime={pricingSection.updated.iso}>
              {pricingSection.updated.label}
            </time>
            .
          </p>
        </div>
      </div>
    </section>
  );
}