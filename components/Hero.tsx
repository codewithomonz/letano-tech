"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { hero } from "@/lib/content";
import HeroInterface from "./Herointerface";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const rise: Variants = {
  hidden: { y: 14 },
  show: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-navy-deep pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      {/* Background: photo + layered gradients. Decorative, so alt is empty. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={hero.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-[62%_center]"
        />

        {/* 1. Brand tint: pulls the photo's colors toward the site's blue */}
        <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />

        {/* 2. Readability veil: flat on small screens, left-to-right on wide screens
               so the headline sits on the darkest part */}
        <div className="absolute inset-0 bg-navy-deep/50 lg:hidden" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-navy-deep via-navy-deep/0 to-navy-deep/10 lg:block" />

        {/* 3. Top fade keeps the header legible; bottom fade blends into the next section */}
        <div className="absolute inset-0 bg-linear-to-b from-navy-deep/80 via-transparent to-navy-deep" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <motion.div variants={list} initial="hidden" animate="show">
          <motion.h1
            id="hero-heading"
            variants={rise}
            className="font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-136 text-lg leading-relaxed text-mist"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-marigold px-6 py-3.5 text-base font-semibold text-navy-deep transition-colors hover:bg-frost"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-line px-6 py-3.5 text-base font-medium text-frost transition-colors hover:border-mist"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p variants={rise} className="mt-8 text-sm text-mist">
            {hero.trust}
          </motion.p>
        </motion.div>

        <HeroInterface />
      </div>
    </section>
  );
}