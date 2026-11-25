import Reveal from "./Reveal";
import PhoneSlot from "./PhoneSlot";

type AdExample = {
  heading: string; // small label above the phone
  caption: string; // one line under the phone
  video?: string; // mp4 in /public/ugc
  cover?: string; // cover image in /public/ugc (vertical 9:16)
};

// Ad content made for brands to run on their own channels. This section is
// about the service, not performance, so no view counts are shown.
const ads: AdExample[] = [
  {
    heading: "Benchmark Golf",
    caption: "Day-in-the-life ad, live on Benchmark Golf's Instagram",
    video: "/ugc/benchmark-golf.mp4",
    cover: "/ugc/benchmark-golf.jpg",
  },
  {
    heading: "Soneven",
    caption: "Spring/summer haul, launching soon",
    video: "/ugc/soneven.mp4",
    cover: "/ugc/soneven.jpg",
  },
];

const offer = [
  {
    title: "Hooks that stop the scroll",
    body: "The same openers and pacing behind close to a million views a month on my own account, built around your product.",
  },
  {
    title: "A real golfer's point of view",
    body: "Women's golf from someone still learning the game, so it lands with the beginners and improvers your brand wants to reach.",
  },
  {
    title: "Formats that fit your funnel",
    body: "Hauls, day-in-the-life and on-course videos, scripted to your brief or kept natural.",
  },
  {
    title: "Ready to run",
    body: "Vertical 9:16 video, delivered for you to post organically or put paid spend behind.",
  },
];

export default function UGCAds() {
  return (
    <section id="ugc" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <Reveal>
          <p className="overline mb-4">UGC for Ads</p>
          <h2 className="font-display text-2xl md:text-4xl mb-4 text-balance">
            Golf ads that don&apos;t feel like ads
          </h2>
          <p className="text-[15px] leading-relaxed text-forest/80 mb-8">
            I create short-form video for golf and lifestyle brands to run on
            their own channels. It looks and sounds like my content, because
            it is: native to the feed, made by a creator golfers already
            trust.
          </p>
          <ul className="space-y-5">
            {offer.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blush shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-forest">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted mt-0.5">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block mt-8 px-7 py-3 rounded-full bg-blush text-forest font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Enquire about UGC
          </a>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 gap-4 md:gap-6">
          {ads.map((ad) => (
            <figure key={ad.heading} className="flex flex-col items-center">
              <p className="overline mb-3 text-center">{ad.heading}</p>
              <PhoneSlot
                video={ad.video}
                cover={ad.cover}
                className="w-full max-w-[220px]"
              />
              <figcaption className="text-xs text-muted text-center mt-3">
                {ad.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
