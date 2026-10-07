import Image from "next/image";
import { contact, footerBlurb, isFilled, socials } from "@/lib/contact";
import { serviceCards } from "@/lib/section";
import { site } from "@/lib/content";

const company = [
  { label: "Why Letano Tech", href: "#why-us" },
  { label: "Our work", href: "#work" },
  { label: "How we work", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const link =
  "text-mist underline-offset-4 transition-colors hover:text-frost hover:underline";

export default function Footer() {
  const shownSocials = socials.filter((s) => isFilled(s.href));

  return (
    <footer className="border-t border-line bg-navy-deep text-sm">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" aria-label="Letano Tech, back to top" className="inline-block rounded-md">
              <Image
                src="/images/logo.png"
                alt="Letano Tech"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-mist">{footerBlurb}</p>
            {shownSocials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {shownSocials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} rel="noopener" className={link}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="font-display text-base font-semibold text-frost">Services</h2>
            <ul className="mt-4 space-y-3">
              {serviceCards.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={link}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="font-display text-base font-semibold text-frost">Company</h2>
            <ul className="mt-4 space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className={link}>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-base font-semibold text-frost">Contact</h2>
            <address className="mt-4 space-y-3 not-italic text-mist">
              <p>{contact.location}</p>
              {isFilled(contact.email) && (
                <p>
                  <a href={`mailto:${contact.email}`} className={link}>
                    {contact.email}
                  </a>
                </p>
              )}
              {isFilled(contact.phone) && (
                <p>
                  <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className={link}>
                    {contact.phone}
                  </a>
                </p>
              )}
              {contact.whatsapp && (
                <p>
                  <a href={`https://wa.me/${contact.whatsapp}`} className={link}>
                    WhatsApp
                  </a>
                </p>
              )}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a href="#top" className="group inline-flex items-center gap-2 transition-colors hover:text-frost">
            Back to top
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}