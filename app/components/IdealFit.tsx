import Reveal from "./Reveal";

const categories = [
  { icon: "⛳", label: "Golf equipment & accessories" },
  { icon: "👗", label: "Women's activewear & golf apparel" },
  { icon: "🏌️", label: "Golf courses & resorts / travel" },
  { icon: "🏋️", label: "Fitness, training & wellness" },
  { icon: "🍺", label: "Social / lifestyle brands" },
  { icon: "📱", label: "Golf apps & tech" },
  { icon: "🎽", label: "General sportswear" },
];

export default function IdealFit() {
  return (
    <section className="py-24 md:py-32 px-6 bg-peach/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <Reveal>
          <p className="overline mb-4">Ideal Brand Fit</p>
          <h2 className="font-display text-2xl md:text-4xl mb-6">
            Who this works for.
          </h2>
          <p className="text-[15px] leading-relaxed mb-8">
            My audience skews male (70%) but is growing rapidly on the
            women&apos;s side, reflecting exactly what&apos;s happening in
            the sport. The 25-44 bracket is the core, with strong
            representation in Australia, the US, and the UK. These are
            people who play regularly, invest in equipment, travel for golf,
            and follow the sport closely.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-medium text-sm mb-2">What makes a good partnership</p>
              <ul className="space-y-1.5 text-sm text-forest/90">
                <li className="flex gap-2"><span className="text-sage">-</span><span>Brands that genuinely align with a beginner/community-first perspective</span></li>
                <li className="flex gap-2"><span className="text-sage">-</span><span>Products Kirstie can authentically use or wear on a real golf day</span></li>
                <li className="flex gap-2"><span className="text-sage">-</span><span>Brands comfortable with content that&apos;s funny and human, not just aspirational</span></li>
                <li className="flex gap-2"><span className="text-sage">-</span><span>Willingness to let the creator lead on tone and format</span></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-sm mb-2">What won&apos;t work</p>
              <ul className="space-y-1.5 text-sm text-forest/70">
                <li className="flex gap-2"><span className="text-warm-grey">-</span><span>Ultra-premium/exclusive positioning that conflicts with the &ldquo;real golfer&rdquo; tone</span></li>
                <li className="flex gap-2"><span className="text-warm-grey">-</span><span>Brands requiring heavy scripting or rigid creative control</span></li>
                <li className="flex gap-2"><span className="text-warm-grey">-</span><span>Industries unrelated to golf, lifestyle, or sport</span></li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
          {categories.map((c) => (
            <div
              key={c.label}
              className="bg-white rounded-xl border border-warm-grey/40 p-5 flex items-center gap-3"
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="text-sm">{c.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
