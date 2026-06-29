import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <Reveal>
          <p className="overline mb-4">Contact</p>
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-[15px] text-forest/80 mb-12">
            If you think your brand could find a home in my content,
            I&apos;d love to hear from it.
          </p>
        </Reveal>

        <Reveal>
          {/* Update action with your Formspree endpoint or Netlify form name */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="text-left space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
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
              <label className="overline block mb-2" htmlFor="budget">Budget range</label>
              <select
                id="budget"
                name="budget"
                className="w-full rounded-lg border border-warm-grey/60 bg-cream px-4 py-2.5 text-sm focus:outline-none focus:border-forest"
              >
                <option>Under $500</option>
                <option>$500–$1,500</option>
                <option>$1,500–$5,000</option>
                <option>$5,000+</option>
                <option>Let&apos;s discuss</option>
              </select>
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
              className="w-full rounded-full bg-blush text-forest font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Send
            </button>
          </form>
        </Reveal>

        <Reveal>
          <div className="mt-10 pt-10 border-t border-warm-grey/40 space-y-2 text-sm text-muted">
            <p>
              Or email directly:{" "}
              <a href="mailto:hello@kirstieplaysgolf.com" className="text-forest underline">
                hello@kirstieplaysgolf.com
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
