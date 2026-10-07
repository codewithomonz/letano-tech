"use server";

// Contact form handler. Runs on the server only, so keys are never exposed.
//
// Environment variables (put them in .env.local and in Vercel):
//   RESEND_API_KEY            your Resend API key
//   CONTACT_TO_EMAIL          where enquiries are delivered
//   CONTACT_FROM_EMAIL        e.g. "Letano Tech <hello@your-domain.com>" (verified domain in Resend)
//   TURNSTILE_SECRET_KEY      optional, enables Cloudflare Turnstile spam protection

export type FieldName = "name" | "email" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<FieldName, string>>;
  values?: { name: string; email: string; service: string; message: string };
};

// Removes control characters (keeps tabs and line breaks) and limits length.
function clean(value: FormDataEntryValue | null, max: number) {
  return (
    String(value ?? "")
      // eslint-disable-next-line no-control-regex
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
      .trim()
      .slice(0, max)
  );
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // 1. Spam trap: real visitors never fill the hidden "company" field.
  if (clean(formData.get("company"), 200) !== "") {
    return {
      status: "success",
      message: "Thank you. Your message has been sent.",
    };
  }

  const values = {
    name: clean(formData.get("name"), 100),
    email: clean(formData.get("email"), 200),
    service: clean(formData.get("service"), 100),
    message: clean(formData.get("message"), 5000),
  };

  // 2. Spam trap: a form submitted within 3 seconds of loading is a bot.
  const startedAt = Number(formData.get("startedAt"));
  if (startedAt && Date.now() - startedAt < 3000) {
    return {
      status: "error",
      message:
        "That was very quick. Please check your message and send it again.",
      values,
    };
  }

  // 3. Validate.
  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (values.message.length < 10)
    errors.message = "Please write at least a sentence about what you need.";
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
    };
  }

  // 4. Cloudflare Turnstile (only when a secret key is configured).
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = clean(formData.get("cf-turnstile-response"), 4096);
    try {
      const res = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: token,
          }),
        },
      );
      const data = (await res.json()) as { success?: boolean };
      if (!data.success) {
        return {
          status: "error",
          message: "The spam check failed. Please try again.",
          values,
        };
      }
    } catch {
      return {
        status: "error",
        message: "We could not run the spam check. Please try again.",
        values,
      };
    }
  }

  // 5. Send the email through Resend.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Letano Tech <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error(
      "Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.",
    );
    return {
      status: "error",
      message:
        "The form is not available right now. Please contact us by email or WhatsApp instead.",
      values,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: oneLine(
          `New enquiry from ${values.name}: ${values.service || "General"}`,
        ),
        // Plain text only, so nothing a visitor types can be run as HTML.
        text: `Name: ${oneLine(values.name)}\nEmail: ${values.email}\nService: ${
          values.service || "Not sure yet"
        }\n\n${values.message}`,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
      return {
        status: "error",
        message:
          "Your message could not be sent. Please try again, or contact us by email or WhatsApp.",
        values,
      };
    }
  } catch (err) {
    console.error("Resend request failed:", err);
    return {
      status: "error",
      message:
        "Your message could not be sent. Please try again, or contact us by email or WhatsApp.",
      values,
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your message has been sent. We will reply by email, usually within one business day.", // [CONFIRM] reply time
  };
}
