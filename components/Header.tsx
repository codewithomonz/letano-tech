"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/content";
import Image from "next/image";

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="7" className="fill-marigold" />
      <path
        d="M9 7v14h10"
        fill="none"
        strokeWidth="3"
        strokeLinecap="square"
        className="stroke-navy-deep"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Background appears once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const ids = ["top", ...navLinks.map((l) => l.href.slice(1))];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "top" ? "" : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Mobile menu: lock scroll, close on Escape, close if the screen grows to desktop.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open
          ? "border-line bg-navy-deep/90 backdrop-blur-md"
          : "border-transparent"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          aria-label="Letano Tech, back to top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 rounded-md"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={160}
            height={40}
            priority
            className="h-9 w-auto sm:h-10"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Letano Tech
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-frost" : "text-mist hover:text-frost"
                      }`}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-px h-0.5 bg-marigold"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-marigold px-4 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-frost md:inline-block"
          >
            Book a call
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-md md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-5 bg-frost"
                animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-5 bg-frost"
                animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-navy-deep px-5 pb-10 pt-4 md:hidden"
          >
            <nav aria-label="Mobile">
              <ul>
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                    className="border-b border-line"
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-display text-2xl font-medium"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 block rounded-md bg-marigold px-6 py-4 text-center text-base font-semibold text-navy-deep"
            >
              Book a 30-minute call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}