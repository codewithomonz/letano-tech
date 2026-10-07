import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ImageSlot from "./ImageSlot";
import ContactForm from "./ContactForm";
import BookingButton from "./BookingButton";
import { contact, contactSection, isFilled } from "@/lib/contact";

type IconName = "mail" | "phone" | "chat" | "pin" | "clock";

const icons: Record<IconName, React.ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4V5z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

function Detail({
  icon,
  label,
  value,
  href,
}: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}) {
  const linked = href && isFilled(value);
  return (
    <li className="flex items-start gap-4">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-marigold"
      >
        {icons[icon]}
      </svg>
      <div>
        <p className="text-sm text-mist">{label}</p>
        {linked ? (
          <a
            href={href}
            className="font-medium text-frost underline decoration-frost/30 underline-offset-4 transition-colors hover:decoration-frost"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium text-frost">{value}</p>
        )}
      </div>
    </li>
  );
}

export default function Contact() {
  const emailHref = isFilled(contact.email)
    ? `mailto:${contact.email}?subject=${encodeURIComponent("Booking a call with Letano Tech")}`
    : "#contact-form";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-navy-deep py-20 sm:py-28"
    >
      {/* Background photo with the same layered treatment as the hero. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <ImageSlot src={contactSection.image} alt="" sizes="100vw" />
        <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-navy-deep/85" />
        <div className="absolute inset-0 bg-linear-to-b from-navy-deep via-transparent to-navy-deep" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="contact-heading"
                title={contactSection.heading}
                intro={contactSection.intro}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <address className="mt-10 not-italic">
                <ul className="space-y-5">
                  <Detail
                    icon="mail"
                    label="Email"
                    value={contact.email}
                    href={`mailto:${contact.email}`}
                  />
                  <Detail
                    icon="phone"
                    label="Phone"
                    value={contact.phone}
                    href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  />
                  <Detail
                    icon="chat"
                    label="WhatsApp"
                    value={contact.whatsappDisplay}
                    href={
                      contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : undefined
                    }
                  />
                  <Detail icon="pin" label="Location" value={contact.location} />
                  <Detail icon="clock" label="Working hours" value={contact.hours} />
                </ul>
              </address>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-line bg-navy/30 p-6 backdrop-blur-sm">
                <h3 className="font-display text-xl font-semibold tracking-tight text-frost">
                  {contactSection.bookingTitle}
                </h3>
                <p className="mb-5 mt-2 leading-relaxed text-mist">
                  {contactSection.bookingBody}
                </p>
                <BookingButton fallbackHref={emailHref} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div id="contact-form" className="scroll-mt-24">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}