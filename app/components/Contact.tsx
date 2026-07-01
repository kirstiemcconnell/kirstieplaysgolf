"use client";

import { useState } from "react";
import Reveal from "./Reveal";

// Get a free key at https://web3forms.com (just enter the email you want
// submissions sent to). Paste it here — it's safe to expose client-side.
const WEB3FORMS_ACCESS_KEY = "bfc37862-b4df-4c55-bf0e-ce4766ea0e83";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New partnership enquiry — kirstieplaysgolf");
    formData.append("from_name", "kirstieplaysgolf site");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <Reveal>
          <p className="overline mb-4">Contact</p>
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-[15px] text-forest/80 mb-12">
            I&apos;d love to create some genuine, authentic content for your
            brand! Please get in touch to discuss collaboration options.
          </p>
        </Reveal>

        <Reveal>
          {status === "success" ? (
            <div className="rounded-2xl border border-sage/60 bg-sage/20 px-6 py-10 text-center">
              <p className="font-display text-xl md:text-2xl mb-2">
                Thank you!
              </p>
              <p className="text-sm text-forest/80">
                Your message is on its way. I&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-4">
              {/* Honeypot spam trap */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="overline block mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-warm-grey/60 bg-cream px-4 py-2.5 text-sm focus:outline-none focus:border-forest"
                  />
                </div>
                <div>
                  <label className="overline block mb-2" htmlFor="brand">Brand / Company</label>
                  <input
                    id="brand"
                    name="brand"
                    type="text"
                    className="w-full rounded-lg border border-warm-grey/60 bg-cream px-4 py-2.5 text-sm focus:outline-none focus:border-forest"
                  />
                </div>
              </div>

              <div>
                <label className="overline block mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-warm-grey/60 bg-cream px-4 py-2.5 text-sm focus:outline-none focus:border-forest"
                />
              </div>

              <div>
                <label className="overline block mb-2" htmlFor="message">Message / campaign idea</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-warm-grey/60 bg-cream px-4 py-2.5 text-sm focus:outline-none focus:border-forest"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-blush text-forest font-medium px-6 py-3 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send"}
              </button>

              {status === "error" && (
                <p className="text-sm text-center text-forest/70">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          )}
        </Reveal>

        <Reveal>
          <div className="mt-10 pt-10 border-t border-warm-grey/40 space-y-2 text-sm text-muted">
            <p>
              Or email directly:{" "}
              <a href="mailto:kirstie.mcconnell@outlook.com" className="text-forest underline">
                kirstie.mcconnell@outlook.com
              </a>
            </p>
            <p>
              <a
                href="https://instagram.com/kirstieplaysgolf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline"
              >
                @kirstieplaysgolf on Instagram
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
