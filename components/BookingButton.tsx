"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Full booking link, for example a Cal.com link:
//   NEXT_PUBLIC_BOOKING_URL=https://cal.com/your-name/30min?embed=true&theme=light
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

const buttonClass =
  "inline-flex items-center justify-center rounded-md bg-marigold px-6 py-3.5 text-base font-semibold text-navy-deep transition-colors hover:bg-frost";

export default function BookingButton({
  fallbackHref,
  label = "Book a 15-minute call",
}: {
  /** Used when no booking link is set: an email link or the form anchor. */
  fallbackHref: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // While the booking window is open: lock page scroll, close on Escape,
  // move focus into the window, and return focus to the button afterwards.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    const opener = openerRef.current;
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open]);

  if (!bookingUrl) {
    return (
      <a href={fallbackHref} className={buttonClass}>
        {label}
      </a>
    );
  }

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={buttonClass}
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-navy-deep/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Book a 30-minute call with Letano Tech"
              className="relative h-[min(85dvh,720px)] w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
              initial={{ y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 24, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close booking window"
                className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-navy-deep text-white transition-colors hover:bg-navy"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" />
                </svg>
              </button>
              {/* The calendar loads only after the visitor clicks, so it never slows the page. */}
              <iframe
                src={bookingUrl}
                title="Booking calendar for Letano Tech"
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}