import Reveal from "./Reveal";
import InstagramEmbed from "./InstagramEmbed";

const partnerships = [
  {
    brand: "Fairway Angel",
    category: "Golf bags & accessories",
    badge: "Dedicated + Integrated",
    description:
      "An ongoing relationship that started with dedicated content and became a constant background presence across every video since.",
    deliverables: [
      "2× dedicated reels",
      "3× dedicated stories",
      "Ongoing organic product placement in every video",
      "Caption tag, no verbal mention required",
    ],
    pitch:
      "Your brand doesn't just appear once. It's in every video I've posted since.",
    videos: [""],
    performance: "",
  },
  {
    brand: "Gray + Haast",
    category: "Golf apparel",
    badge: "Gifting Partnership",
    description:
      "No scripts, no dedicated posts. Just real gear, worn for a real golf day, across multiple clips.",
    deliverables: [
      "Product worn authentically for a full golf day",
      "Featured across multiple clips from that day",
      "Caption tag across all content from the day",
      "Ongoing, recurring arrangement",
    ],
    pitch:
      "Real audience trust. My followers know I'm actually wearing your gear, not just holding it.",
    videos: [""],
    performance: "",
  },
  {
    brand: "Trust Golf Balls",
    category: "Golf equipment",
    badge: "Dedicated + Evergreen",
    description:
      "A launch moment that turned into an ongoing touchpoint. The product shows up, gets mentioned, and keeps earning visibility.",
    deliverables: [
      "Dedicated launch reels",
      "Product used in every subsequent video",
      'Verbal mention in content ("I\'m using Trust balls today")',
      "Ongoing caption tag",
    ],
    pitch:
      "Every time I post, your brand gets a touchpoint, even in content that has nothing to do with balls.",
    videos: [""],
    performance: "",
  },
];

export default function BrandPartnerships() {
  return (
    <section id="brands" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="overline mb-4">Brand Partnerships</p>
          <h2 className="font-display text-2xl md:text-4xl">
            Three partnerships, three different shapes.
          </h2>
        </Reveal>

        <div className="space-y-10">
          {partnerships.map((p) => (
            <Reveal
              key={p.brand}
              className="bg-white rounded-2xl border border-warm-grey/50 p-6 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-1/2">
                  <p className="text-xs text-muted uppercase tracking-wide">
                    {p.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl mt-1 mb-3">
                    {p.brand}
                  </h3>
                  <span className="inline-block rounded-full bg-sage/50 text-forest text-xs px-3 py-1 mb-4">
                    {p.badge}
                  </span>
                  <p className="text-sm md:text-[15px] leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <ul className="space-y-1.5 text-sm text-forest/90 mb-4">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-sage">-</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-display text-base md:text-lg text-forest/80">
                    &ldquo;{p.pitch}&rdquo;
                  </p>
                  {p.performance && (
                    <p className="overline mt-4 text-muted">{p.performance}</p>
                  )}
                </div>
                <div className="md:w-1/2 grid grid-cols-1 gap-4">
                  {p.videos.map((v, i) => (
                    <InstagramEmbed key={i} url={v} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center max-w-xl mx-auto">
          <p className="font-display text-lg md:text-xl text-forest/80">
            Every partnership looks a little different. If you have something
            in mind that doesn&apos;t fit neatly into a box, that&apos;s
            usually when it gets interesting.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
