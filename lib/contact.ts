export const isFilled = (value: string) =>
  value.trim() !== "" && !value.trim().startsWith("[");

export const contactSection = {
  heading: "Contact Letano Tech to plan your app, website or IT support",
  intro:
    "To start a project with Letano Tech, send a short message or book a 15-minute call. Tell us what you want to build or fix, and we reply within one business day with a recommended next step. You can also email, call or message us on WhatsApp.", // [CONFIRM] reply time
  image: "/images/contact.png",
  bookingTitle: "Prefer to talk?",
  bookingBody:
    "Pick a time that suits you for a 15-minute call. We listen, ask questions and tell you honestly whether and how we can help.",
  formTitle: "Send a message",
  formIntro:
    "Tell us what you want to build or fix. A few sentences is enough.",
};

export const contact = {
  email: "letanotech@gmail.com",
  phone: "+2349168189258",
  // Digits only, with country code and no plus sign, for example 2348012345678.
  whatsapp: "2349168189258",
  whatsappDisplay: "2349168189258",
  location: "Benin City, Edo State, Nigeria",
  hours: "Monday to Friday, 7am to 6pm WAT",
};

// Only entries with a URL are shown.
export const socials: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/codewithomonz/" },
  { label: "GitHub", href: "https://github.com/codewithomonz" },
  {
    label: "Google Business Profile",
    href: "https://share.google/fuXYIGZXM1EMh07rA",
  },
];

export const footerBlurb =
  "Letano Tech builds web, mobile and desktop apps, improves search visibility and provides IT support for small businesses and individuals worldwide. Based in Benin City, Nigeria.";
