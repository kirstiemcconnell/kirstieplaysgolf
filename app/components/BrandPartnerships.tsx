import Reveal from "./Reveal";
import PhoneSlot from "./PhoneSlot";

type QuadGroup = {
  heading: string;
  slots: { video?: string; cover?: string }[]; // two phones per group
};

type Partnership = {
  brand: string;
  category: string;
  badge: string;
  description: string;
  deliverables: string[];
  pitch?: string;
  performance?: string;
  image?: string; // brand visual in /public (portrait 4:5 looks best)
  quad?: QuadGroup[]; // 2x2 phone frames instead of a single image
  phones?: { video?: string; cover?: string }[]; // phone frames in a 3-wide grid as the media
  phonesAutoplay?: boolean; // play the phone videos as muted loops instead of tap-to-play
  stats?: { value: string; label: string }[]; // stats banner in the text column
  stories?: { heading: string; slots: { image?: string; video?: string }[] }; // story strip (image or muted autoplay video)
  dms?: { heading: string; slots: { image?: string }[] }; // message-screenshot strip
  centerMedia?: boolean; // vertically center the media column against the text
};

// Small heading with a short rule underneath it.
function GroupHeading({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center mb-3" : "mb-3"}>
      <p className="overline">{children}</p>
      <span
        className={`block w-8 h-px bg-warm-grey mt-1.5 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

const partnerships: Partnership[] = [
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
    quad: [
      {
        heading: "Product focused videos",
        slots: [
          {
            video: "/partnerships/fairway-1.mp4",
            cover: "/partnerships/fairway-1.jpg",
          },
          {
            video: "/partnerships/fairway-2.mp4",
            cover: "/partnerships/fairway-2.jpg",
          },
        ],
      },
      {
        heading: "Ongoing product visibility",
        slots: [
          {
            video: "/partnerships/fairway-3.mp4",
            cover: "/partnerships/fairway-3.jpg",
          },
          {
            video: "/partnerships/fairway-4.mp4",
            cover: "/partnerships/fairway-4.jpg",
          },
        ],
      },
    ],
    stories: {
      heading: "Ongoing visibility in story posts",
      // middle slot left empty as a placeholder for an upcoming video
      slots: [
        { image: "/partnerships/fairway-story-1.jpg" },
        { video: "/partnerships/fairway-story-2.mp4" },
        { image: "/partnerships/fairway-story-3.jpg" },
      ],
    },
  },
  {
    brand: "Gray + Haast",
    category: "Golf apparel",
    badge: "Gifting Partnership",
    description:
      "No scripts, no dedicated posts. Just real gear, worn for a real golf day, across multiple clips.",
    deliverables: [],
    phones: [
      { video: "/partnerships/gray/vid1.mp4", cover: "/partnerships/gray/pic1.jpg" },
      { video: "/reels/reel-1.mp4", cover: "/reels/reel-1.jpg" },
      { video: "/partnerships/gray/vid4.mp4", cover: "/partnerships/gray/pic4.jpg" },
      { video: "/partnerships/gray/vid3.mp4", cover: "/partnerships/gray/pic3.jpg" },
      { video: "/partnerships/gray-1.mp4", cover: "/partnerships/gray-1.jpg" },
      { video: "/partnerships/gray/vid2.mp4", cover: "/partnerships/gray/pic2.jpg" },
    ],
    stats: [
      { value: "4", label: "Outfits sent" },
      { value: "4", label: "Days filmed" },
      { value: "29", label: "Videos posted to date" },
      { value: "515k+", label: "Total views" },
    ],
    dms: {
      heading: "Real community engagement",
      slots: [
        { image: "/partnerships/gray/dm-2.jpg" },
        { image: "/partnerships/gray/dm-4.jpg" },
        { image: "/partnerships/gray/dm-1.jpg" },
        { image: "/partnerships/gray/dm-3.jpg" },
      ],
    },
    centerMedia: true,
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
    phones: [
      { video: "/partnerships/trust/phone-1.mp4" },
      { video: "/partnerships/trust/phone-2.mp4" },
      { video: "/partnerships/trust/phone-3.mp4" },
      { video: "/partnerships/trust/phone-4.mp4" },
      { video: "/partnerships/trust/phone-5.mp4" },
      { video: "/partnerships/trust/phone-6.mp4" },
    ],
    phonesAutoplay: true,
    stories: {
      heading: "Ongoing visibility in story posts",
      slots: [
        { video: "/partnerships/trust/story-2.mp4" },
        { image: "/partnerships/trust/story-3.jpg" },
        { image: "/partnerships/trust/story-1.jpg" },
      ],
    },
  },
];

export default function BrandPartnerships() {
  return (
    <section id="brands" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10 md:mb-14">
          <p className="overline mb-4">Brand Partnerships</p>
          <h2 className="font-display text-2xl md:text-4xl">
            Partnerships customised for your business
          </h2>
        </Reveal>

        <div className="border-t border-warm-grey/50" />

        <div>
          {partnerships.map((p, i) => {
            const imageFirst = i % 2 === 1; // alternate sides on desktop
            return (
              <Reveal
                key={p.brand}
                className={`grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-8 items-start py-16 md:py-24 ${
                  i > 0 ? "border-t border-warm-grey/50" : ""
                }`}
              >
                {/* Text */}
                <div
                  className={`order-1 md:row-start-1 ${
                    imageFirst ? "md:col-start-2" : "md:col-start-1"
                  }`}
                >
                  <p className="text-xs text-muted uppercase tracking-wide">
                    {p.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-4xl mt-1 mb-4">
                    {p.brand}
                  </h3>
                  <span className="inline-block rounded-full bg-sage/50 text-forest text-xs px-3 py-1 mb-5">
                    {p.badge}
                  </span>
                  <p className="text-[15px] md:text-base leading-relaxed mb-5">
                    {p.description}
                  </p>
                  {p.deliverables.length > 0 && (
                    <ul className="space-y-1.5 text-sm text-forest/90 mb-6">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="text-sage">-</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.pitch && (
                    <p className="font-display text-lg md:text-xl text-forest/80">
                      &ldquo;{p.pitch}&rdquo;
                    </p>
                  )}
                  {p.stats && (
                    <div className="grid grid-cols-4">
                      {p.stats.map((st) => (
                        <div
                          key={st.label}
                          className="px-2 text-center border-l border-warm-grey/60 first:border-l-0"
                        >
                          <div className="font-display text-xl md:text-2xl text-forest">
                            {st.value}
                          </div>
                          <p className="overline mt-1 leading-tight">{st.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {p.dms && (
                    <div className="mt-6">
                      <GroupHeading align="left">{p.dms.heading}</GroupHeading>
                      {/* Two columns; the shorter column's last card grows so
                          both columns end at the same baseline. */}
                      <div className="flex items-stretch gap-3">
                        {[
                          p.dms.slots.slice(0, Math.ceil(p.dms.slots.length / 2)),
                          p.dms.slots.slice(Math.ceil(p.dms.slots.length / 2)),
                        ].map((col, ci) => (
                          <div key={ci} className="flex-1 flex flex-col gap-3">
                            {col.map((slot, si) => (
                              <div
                                key={si}
                                className={`bg-white p-1.5 rounded-xl border border-warm-grey/40 shadow-md ${
                                  si === col.length - 1 ? "flex-grow" : ""
                                }`}
                              >
                                {slot.image ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={slot.image}
                                    alt={`${p.brand} audience message`}
                                    className="w-full rounded-lg"
                                  />
                                ) : (
                                  <div className="w-full aspect-[4/5] rounded-lg bg-gradient-to-br from-peach via-sage/30 to-sage/50" />
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {p.performance && (
                    <p className="overline mt-4 text-muted">{p.performance}</p>
                  )}
                </div>

                {/* Media */}
                <div
                  className={`order-2 md:row-start-1 ${
                    imageFirst ? "md:col-start-1" : "md:col-start-2"
                  } ${p.stories ? "md:row-span-2" : ""} ${
                    p.centerMedia ? "md:self-center" : ""
                  }`}
                >
                  {p.quad ? (
                    <div className="space-y-6">
                      {p.quad.map((group) => (
                        <div key={group.heading}>
                          <GroupHeading>{group.heading}</GroupHeading>
                          <div className="grid grid-cols-2 gap-3 max-w-[250px] mx-auto">
                            {group.slots.map((slot, si) => (
                              <PhoneSlot
                                key={si}
                                video={slot.video}
                                cover={slot.cover}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : p.phones ? (
                    <div className="flex flex-wrap justify-center gap-[30px] max-w-[450px] mx-auto">
                      {p.phones.map((slot, si) => (
                        <PhoneSlot
                          key={si}
                          className="w-[130px]"
                          video={slot.video}
                          cover={slot.cover}
                          autoplay={p.phonesAutoplay}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt={`${p.brand} partnership content`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-peach via-sage/30 to-sage/50 flex flex-col items-center justify-center text-center px-6">
                          <span className="font-display text-xl text-forest/70">
                            {p.brand}
                          </span>
                          <span className="overline text-forest/40 mt-2">
                            Brand visual coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Story strip: on mobile it sits after the phones; on desktop
                    it drops back into the text column, below the copy. */}
                {p.stories && (
                  <div
                    className={`order-3 md:row-start-2 ${
                      imageFirst ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  >
                    <GroupHeading align="left">
                      {p.stories.heading}
                    </GroupHeading>
                    <div className="grid grid-cols-3 gap-5 md:gap-6">
                      {p.stories.slots.map((slot, si) =>
                        slot.video ? (
                          <video
                            key={si}
                            src={slot.video}
                            className="w-full aspect-[3/4] object-cover rounded-lg"
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-hidden="true"
                          />
                        ) : slot.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={si}
                            src={slot.image}
                            alt={`${p.brand} story post`}
                            className="w-full aspect-[3/4] object-cover rounded-lg"
                          />
                        ) : (
                          <div
                            key={si}
                            className="w-full aspect-[3/4] rounded-lg bg-gradient-to-br from-peach via-sage/30 to-sage/50"
                          />
                        )
                      )}
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="border-t border-warm-grey/50" />

        <Reveal className="pt-16 md:pt-24 text-center max-w-xl mx-auto">
          <p className="font-display text-lg md:text-xl text-forest/80">
            Every partnership looks a little different. Get in touch to see
            how we can collaborate!
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 px-7 py-3 rounded-full bg-blush text-forest font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </Reveal>
      </div>
    </section>
  );
}
