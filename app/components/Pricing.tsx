import Reveal from "./Reveal";

const packages = [
  {
    name: "Single Post",
    desc: "1× dedicated reel or story set. Usage rights included. 1 revision round.",
    price: "Enquire",
  },
  {
    name: "Campaign Bundle",
    desc: "2–3 reels + supporting stories. Coordinated across a period.",
    price: "Enquire",
  },
  {
    name: "Ongoing Partnership",
    desc: "Monthly retainer. Ongoing organic integration + agreed dedicated posts.",
    price: "Enquire",
  },
  {
    name: "Custom",
    desc: "Gifting partnerships, affiliate, ambassador. Any combination, let's talk.",
    price: "Let's talk",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-16">
          <p className="overline mb-4">Pricing</p>
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Flexible packages, built around your brand.
          </h2>
          <p className="text-sm text-muted">
            Rates are shared on enquiry. Every campaign is scoped to fit
            your goals and budget.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 border flex flex-col ${
                pkg.highlight
                  ? "bg-forest text-white border-forest"
                  : "bg-cream border-warm-grey/50"
              }`}
            >
              <h3 className="font-display text-xl mb-3">{pkg.name}</h3>
              <p
                className={`text-sm leading-relaxed flex-1 ${
                  pkg.highlight ? "text-white/80" : "text-forest/80"
                }`}
              >
                {pkg.desc}
              </p>
              <p
                className={`overline mt-6 ${
                  pkg.highlight ? "text-sage" : "text-muted"
                }`}
              >
                {pkg.price}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
