"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

/**
 * One sample product (a small bakery's order manager) that changes shape between
 * a browser, a phone and a desktop window. It is decorative and labelled
 * "Sample interface". All sizes inside the screens use `em`, and the root font
 * size follows the stage width, so it scales cleanly from phone to desktop.
 */

type Mode = "web" | "mobile" | "desktop";
type Status = "Paid" | "Pending" | "Delivered";

const MODES: { id: Mode; label: string; caption: string }[] = [
  {
    id: "web",
    label: "Web",
    caption: "Web app: opens in any browser, with nothing to install.",
  },
  {
    id: "mobile",
    label: "Mobile",
    caption: "Mobile app: one product on iOS and Android.",
  },
  {
    id: "desktop",
    label: "Desktop",
    caption:
      "Desktop app: installs on Windows, macOS or Linux and keeps working offline.",
  },
];

const FRAME: Record<
  Mode,
  { width: string; height: string; borderRadius: number }
> = {
  web: { width: "96%", height: "94%", borderRadius: 14 },
  mobile: { width: "32%", height: "94%", borderRadius: 30 },
  desktop: { width: "94%", height: "90%", borderRadius: 10 },
};

const ORDERS: {
  id: string;
  who: string;
  what: string;
  amt: string;
  s: Status;
}[] = [
  { id: "1042", who: "Ada Eze", what: "Cake, 2 tiers", amt: "₦38,000", s: "Paid" },
  { id: "1041", who: "Tunde Bello", what: "Puff puff, 50", amt: "₦12,500", s: "Pending" },
  { id: "1040", who: "Grace Osas", what: "Chin chin, 5 packs", amt: "₦9,000", s: "Delivered" },
  { id: "1039", who: "Ikenna Obi", what: "Cupcakes, 24", amt: "₦24,000", s: "Delivered" },
];

const STATS = [
  ["Open orders", "12"],
  ["Today", "₦84,500"],
  ["Delivered", "31"],
] as const;

function Chip({ s }: { s: Status }) {
  const tone =
    s === "Pending"
      ? "bg-marigold/40 text-navy-deep"
      : s === "Paid"
        ? "bg-navy/10 text-navy"
        : "bg-navy text-frost";
  return (
    <span
      className={`whitespace-nowrap rounded-full px-[0.7em] py-[0.15em] text-[0.85em] font-medium ${tone}`}
    >
      {s}
    </span>
  );
}

function NewOrderButton() {
  return (
    <span className="rounded-md bg-marigold px-[0.9em] py-[0.4em] font-semibold text-navy-deep">
      New order
    </span>
  );
}

function WebScreen() {
  return (
    <div className="flex h-full flex-col bg-frost text-navy">
      <div className="flex items-center gap-[0.9em] border-b border-navy/10 bg-navy/5 px-[1em] py-[0.7em]">
        <span className="flex gap-[0.4em]">
          {[0, 1, 2].map((i) => (
            <i key={i} className="block size-[0.75em] rounded-full bg-navy/25" />
          ))}
        </span>
        <span className="mx-auto w-[58%] truncate rounded-full bg-frost px-[1em] py-[0.3em] text-center text-[0.85em] text-navy/60">
          sweetcrumbs.ng/orders
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-[1em] p-[1.2em]">
        <div className="flex items-center justify-between">
          <b className="font-display text-[1.5em]">Orders</b>
          <NewOrderButton />
        </div>

        <div className="grid grid-cols-3 gap-[0.8em]">
          {STATS.map(([k, v]) => (
            <div key={k} className="rounded-[0.6em] border border-navy/10 p-[0.8em]">
              <div className="text-[0.85em] text-navy/60">{k}</div>
              <div className="font-display text-[1.4em] font-semibold">{v}</div>
            </div>
          ))}
        </div>

        <ul className="min-h-0 flex-1 divide-y divide-navy/10 overflow-hidden">
          {ORDERS.map((o) => (
            <li
              key={o.id}
              className="grid grid-cols-[3em_1fr_1.3fr_auto_5.5em] items-center gap-[0.8em] py-[0.55em]"
            >
              <span className="text-navy/50">#{o.id}</span>
              <span className="truncate font-medium">{o.who}</span>
              <span className="truncate text-navy/70">{o.what}</span>
              <span className="text-right">{o.amt}</span>
              <span className="justify-self-end">
                <Chip s={o.s} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col bg-frost text-navy">
      <div className="mx-auto mt-[0.6em] h-[0.9em] w-[28%] rounded-full bg-navy-deep" />

      <div className="px-[1em] pt-[0.9em]">
        <b className="font-display text-[1.6em]">Orders</b>
        <div className="mt-[0.2em] text-[0.9em] text-navy/60">12 open today</div>
      </div>

      <ul className="mt-[0.8em] flex min-h-0 flex-1 flex-col gap-[0.6em] overflow-hidden px-[0.8em]">
        {ORDERS.map((o) => (
          <li
            key={o.id}
            className="rounded-[0.8em] border border-navy/10 p-[0.7em]"
          >
            <div className="flex items-center justify-between gap-[0.5em]">
              <span className="truncate font-semibold">{o.who}</span>
              <Chip s={o.s} />
            </div>
            <div className="mt-[0.25em] flex justify-between gap-[0.5em] text-[0.9em] text-navy/60">
              <span className="truncate">{o.what}</span>
              <span>{o.amt}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-[0.5em] grid grid-cols-3 border-t border-navy/10 py-[0.7em] text-center text-[0.85em]">
        {["Orders", "Stock", "Me"].map((t, i) => (
          <span key={t} className={i === 0 ? "font-semibold" : "text-navy/50"}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function DesktopScreen() {
  return (
    <div className="flex h-full flex-col bg-frost text-navy">
      <div className="flex items-center justify-between bg-navy px-[1em] py-[0.6em] text-frost">
        <span className="text-[0.9em] font-medium">Sweet Crumbs Manager</span>
        <span className="flex items-center gap-[0.8em]" aria-hidden="true">
          <i className="block h-[0.12em] w-[0.8em] bg-frost/70" />
          <i className="block size-[0.7em] border border-frost/70" />
          <i className="block text-[0.9em] leading-none text-frost/70 not-italic">×</i>
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <ul className="w-[22%] shrink-0 space-y-[0.3em] border-r border-navy/10 bg-navy/5 p-[0.8em] text-[0.9em]">
          {["Orders", "Stock", "Customers", "Reports"].map((t, i) => (
            <li
              key={t}
              className={`rounded-[0.4em] px-[0.7em] py-[0.45em] ${
                i === 0 ? "bg-navy text-frost" : "text-navy/70"
              }`}
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex min-w-0 flex-1 flex-col gap-[0.8em] p-[1em]">
          <div className="flex items-center justify-between">
            <b className="font-display text-[1.4em]">Orders</b>
            <NewOrderButton />
          </div>
          <ul className="min-h-0 flex-1 divide-y divide-navy/10 overflow-hidden">
            {ORDERS.map((o) => (
              <li
                key={o.id}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-[0.8em] py-[0.55em]"
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium">{o.who}</span>
                  <span className="block truncate text-[0.85em] text-navy/60">
                    {o.what}
                  </span>
                </span>
                <span>{o.amt}</span>
                <Chip s={o.s} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-[0.6em] border-t border-navy/10 bg-navy/5 px-[1em] py-[0.45em] text-[0.85em]">
        <i className="block size-[0.7em] rounded-full bg-marigold" />
        <span className="truncate">
          Offline: 3 changes will sync when you reconnect
        </span>
      </div>
    </div>
  );
}

export default function HeroInterface() {
  const [mode, setMode] = useState<Mode>("web");
  const [auto, setAuto] = useState(true); // stops for good once the visitor picks a tab
  const [paused, setPaused] = useState(false); // pauses while hovering or focused
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();

  // Auto-cycle only when visible, not hovered, and motion is allowed.
  useEffect(() => {
    if (!auto || paused || reduce || !inView) return;
    const id = window.setInterval(() => {
      setMode((m) => {
        const i = MODES.findIndex((x) => x.id === m);
        return MODES[(i + 1) % MODES.length].id;
      });
    }, 4800);
    return () => window.clearInterval(id);
  }, [auto, paused, reduce, inView]);

  const current = MODES.find((m) => m.id === mode)!;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        role="img"
        aria-label={`Sample order-management app shown as a ${current.label.toLowerCase()} app`}
        className="@container relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-line bg-navy sm:aspect-[4/3]"
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ fontSize: "clamp(7px, 2.2cqw, 13px)" }}
          aria-hidden="true"
        >
          <motion.div
            initial={false}
            animate={FRAME[mode]}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 140, damping: 20, mass: 0.9 }
            }
            className="relative overflow-hidden border border-frost/25 bg-frost"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mode}
                className="h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.15 }}
              >
                {mode === "web" && <WebScreen />}
                {mode === "mobile" && <PhoneScreen />}
                {mode === "desktop" && <DesktopScreen />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <p className="sr-only">
        Letano Tech builds the same product as a web app, a mobile app or a
        desktop app.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div role="group" aria-label="Choose a platform" className="flex gap-2">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={mode === m.id}
              onClick={() => {
                setMode(m.id);
                setAuto(false);
              }}
              className={`rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                mode === m.id
                  ? "border-marigold bg-marigold text-navy-deep"
                  : "border-line text-mist hover:border-mist hover:text-frost"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-mist/80">Sample interface</p>
      </div>

      <p className="mt-3 min-h-11 text-sm leading-relaxed text-mist">
        {current.caption}
      </p>
    </motion.div>
  );
}