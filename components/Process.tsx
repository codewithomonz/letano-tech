"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ParallaxImage from "./ParallaxImage";
import { processSection, processSteps } from "@/lib/process";

type StepData = (typeof processSteps)[number];

function Step({
  step,
  index,
  open,
  onToggle,
}: {
  step: StepData;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  // Lights up the number once the step reaches the middle of the screen.
  const reached = useInView(ref, { margin: "0px 0px -50% 0px", once: true });
  const panelId = `step-panel-${step.id}`;

  return (
    <li ref={ref} className="relative pb-10 pl-16 last:pb-0">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 grid size-10 place-items-center rounded-full border font-display text-base font-semibold transition-colors duration-500 ${
          reached
            ? "border-navy bg-navy text-white"
            : "border-navy-deep/25 bg-white text-navy-deep"
        }`}
      >
        {index + 1}
      </span>

      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-4 rounded-md text-left font-display text-xl font-semibold tracking-tight text-navy-deep sm:text-2xl"
        >
          <span>
            <span className="sr-only">Step {index + 1}: </span>
            {step.title}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`shrink-0 text-navy-deep/60 transition-transform duration-300 group-hover:text-navy-deep motion-reduce:transition-none ${
              open ? "rotate-180" : ""
            }`}
          >
            <path d="M5 8l5 5 5-5" />
          </svg>
        </button>
      </h3>

      <p className="mt-2 max-w-xl leading-relaxed text-navy-deep/75">
        {step.summary}
      </p>

      {/* The text stays in the page when closed, so search engines can read it. */}
      <div
        id={panelId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <dl className="mt-5 grid max-w-xl gap-4 rounded-xl border border-navy-deep/10 bg-white p-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-navy-deep">What you do</dt>
              <dd className="mt-1 leading-relaxed text-navy-deep/75">
                {step.youDo}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-deep">What you get</dt>
              <dd className="mt-1 leading-relaxed text-navy-deep/75">
                {step.youGet}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </li>
  );
}

export default function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(processSteps[0].id);

  // The vertical line fills as you scroll down through the steps.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 55%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });
  const scaleY = reduce ? scrollYProgress : smooth;

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="on-light bg-frost py-20 text-navy-deep sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 self-start lg:sticky lg:top-28 lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="process-heading"
                tone="light"
                title={processSection.heading}
                intro={processSection.intro}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ParallaxImage
                src={processSection.image}
                alt={processSection.imageAlt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                ratio="aspect-[16/10] lg:aspect-[4/3]"
                className="ring-navy-deep/10"
              />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ol ref={listRef} className="relative">
              <span
                aria-hidden="true"
                className="absolute bottom-5 left-5 top-5 w-px bg-navy-deep/15"
              />
              <motion.span
                aria-hidden="true"
                style={{ scaleY }}
                className="absolute bottom-5 left-5 top-5 w-px origin-top bg-navy"
              />
              {processSteps.map((s, i) => (
                <Step
                  key={s.id}
                  step={s}
                  index={i}
                  open={openId === s.id}
                  onToggle={() => setOpenId(openId === s.id ? null : s.id)}
                />
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}