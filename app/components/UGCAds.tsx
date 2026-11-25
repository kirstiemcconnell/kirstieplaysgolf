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
    caption: "Ad creative posted on the brand's own Instagram",
    // video: "/ugc/benchmark-golf.mp4",
    // cover: "/ugc/benchmark-golf.jpg",
  },
  {
    heading: "Coming soon",
    caption: "Ad creative made for an upcoming brand campaign",
    // video: "/ugc/upcoming-ad.mp4",
    // cover: "/ugc/upcoming-ad.jpg",
  },
];

const offer = [
  "Vertical video built for paid social",
  "Scripted or natural, filmed on the course",
  "Delivered for the brand to post and run as ads",
];

export default function UGCAds() {
  return (
    <section id="ugc" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <Reveal>
          <p className="overline mb-4">UGC for Ads</p>
          <h2 className="font-display text-2xl md:text-3xl mb-4">
            Content made for your channels, not just mine
          </h2>
          <p className="text-sm text-muted mb-6">
            As well as partnerships on my own account, I create ad content
            for golf brands to post and promote themselves. Real golf,
            filmed the way I film everything else.
          </p>
          <ul className="space-y-2.5">
            {offer.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-forest/80">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blush shrink-0" />
                {item}
              </li>
            ))}
          </ul>
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
