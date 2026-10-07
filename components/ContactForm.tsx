"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { sendContact, type ContactState } from "@/app/action/contact";
import { serviceCards } from "@/lib/section";
import { contactSection } from "@/lib/contact";

const initial: ContactState = { status: "idle", message: "" };
const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

const field =
  "mt-1.5 w-full rounded-md border bg-white px-4 py-3 text-base text-navy-deep placeholder:text-navy-deep/45 transition-colors focus:border-navy";
const ok = "border-navy-deep/20";
const bad = "border-red-700";

function FormInner({ onAgain }: { onAgain: () => void }) {
  const [state, action, pending] = useActionState(sendContact, initial);
  const startedRef = useRef<HTMLInputElement>(null);

  // Records when the form appeared, so instant bot submissions can be rejected.
  useEffect(() => {
    if (startedRef.current) startedRef.current.value = String(Date.now());
  }, []);

  // A Turnstile token works once, so ask for a fresh one after a failed send.
  useEffect(() => {
    if (state.status === "error") window.turnstile?.reset();
  }, [state]);

  if (state.status === "success") {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex min-h-[22rem] flex-col items-start justify-center"
      >
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <circle cx="28" cy="28" r="26" className="stroke-navy" strokeWidth="2" />
          <motion.path
            d="M17 29l8 8 14-16"
            className="stroke-navy"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          />
        </svg>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
          Message sent
        </h3>
        <p className="mt-2 max-w-md leading-relaxed text-navy-deep/75">
          {state.message}
        </p>
        <button
          type="button"
          onClick={onAgain}
          className="mt-6 text-sm font-semibold text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const v = state.values;
  const e = state.errors;

  return (
    <form action={action} noValidate className="space-y-5" aria-busy={pending}>
      {/* Hidden spam trap: people never see or fill this. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input ref={startedRef} type="hidden" name="startedAt" defaultValue="" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-semibold">
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={v?.name}
            aria-invalid={Boolean(e?.name)}
            aria-describedby={e?.name ? "cf-name-error" : undefined}
            className={`${field} ${e?.name ? bad : ok}`}
          />
          {e?.name && (
            <p id="cf-name-error" className="mt-1.5 text-sm font-medium text-red-700">
              {e.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-email" className="text-sm font-semibold">
            Email address
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={v?.email}
            aria-invalid={Boolean(e?.email)}
            aria-describedby={e?.email ? "cf-email-error" : undefined}
            className={`${field} ${e?.email ? bad : ok}`}
          />
          {e?.email && (
            <p id="cf-email-error" className="mt-1.5 text-sm font-medium text-red-700">
              {e.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="cf-service" className="text-sm font-semibold">
          What do you need?
        </label>
        <select
          id="cf-service"
          name="service"
          defaultValue={v?.service ?? ""}
          className={`${field} ${ok}`}
        >
          <option value="">Not sure yet</option>
          {serviceCards.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="text-sm font-semibold">
          Your message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          defaultValue={v?.message}
          placeholder="What do you want to build or fix, and who is it for?"
          aria-invalid={Boolean(e?.message)}
          aria-describedby={e?.message ? "cf-message-error" : undefined}
          className={`${field} resize-y ${e?.message ? bad : ok}`}
        />
        {e?.message && (
          <p id="cf-message-error" className="mt-1.5 text-sm font-medium text-red-700">
            {e.message}
          </p>
        )}
      </div>

      {turnstileKey && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
          />
          <div className="cf-turnstile" data-sitekey={turnstileKey} data-theme="light" />
        </>
      )}

      {state.status === "error" && state.message && (
        <motion.p
          role="alert"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-md border border-red-700/30 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
        >
          {state.message}
        </motion.p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy-deep px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending && (
          <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" className="opacity-25" />
            <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )}
        {pending ? "Sending" : "Send message"}
      </button>
    </form>
  );
}

export default function ContactForm() {
  // Changing the key rebuilds the form, which clears it for "Send another message".
  const [key, setKey] = useState(0);

  return (
    <div className="on-light rounded-2xl bg-frost p-6 text-navy-deep sm:p-8">
      <h3 className="font-display text-2xl font-semibold tracking-tight">
        {contactSection.formTitle}
      </h3>
      <p className="mb-6 mt-2 text-navy-deep/75">{contactSection.formIntro}</p>
      <FormInner key={key} onAgain={() => setKey((k) => k + 1)} />
    </div>
  );
}