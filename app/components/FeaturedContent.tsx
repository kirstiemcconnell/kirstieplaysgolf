"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Reel = {
  video?: string; // mp4 in /public/reels, plays inline in the tile on tap
  cover?: string; // cover image in /public/reels (vertical 9:16 looks best)
  views: string;
  likes: string;
  comments: string;
  shares?: string;
  description: string;
  // NOTE: stats are entered manually from Instagram Insights, update as needed.
};

// Reels. `video` enables inline playback once the mp4 is added to /public/reels.
// `url` is kept as a reference to the source post. Covers paired by content.
const reels: Reel[] = [
  {
    video: "/reels/reel-1.mp4",
    cover: "/reels/reel-1.jpg",
    views: "334k",
    likes: "9,788",
    comments: "177",
    shares: "6,680",
    description:
      "High-performing reel wearing a partner's product, which brought LOTS of comments and messages about the outfit.",
  },
  {
    // https://www.instagram.com/p/DaEbmhySyiJ/
    video: "/reels/reel-2.mp4",
    cover: "/reels/reel-2.jpg",
    views: "6.7k",
    likes: "275",
    comments: "37",
    shares: "5",
    description:
      "My most regular 'play a hole with me' style content, which drives my highest on-post engagement from my followers.",
  },
  {
    // https://www.instagram.com/p/DXSo3mDkoKf/
    video: "/reels/reel-5.mp4",
    cover: "/reels/reel-5.jpg",
    views: "45.9k",
    likes: "1,192",
    comments: "53",
    shares: "867",
    description:
      "Easily sharable posts are quick to make, but get lots of eyes on your brand.",
  },
  {
    // https://www.instagram.com/p/DYDe7Chyvax/
    video: "/reels/reel-4.mp4",
    cover: "/reels/reel-4.jpg",
    views: "408k",
    likes: "13.7k",
    comments: "96",
    shares: "10.1k",
    description:
      "One of my higher-performing posts. Funny and relatable, which builds that perfect audience niche.",
  },
  {
    // https://www.instagram.com/p/DZ55uqCyh1C/
    video: "/reels/reel-3.mp4",
    cover: "/reels/reel-3.jpg",
    views: "6.1k",
    likes: "218",
    comments: "31",
    shares: "6",
    description:
      "Play a full 9 holes with me. I don't make these often, but they're great for building trust and authenticity, not hiding behind only my best shots.",
  },
  {
    // https://www.instagram.com/p/DVzVDnHkrts/
    video: "/reels/reel-6.mp4",
    cover: "/reels/reel-6.jpg",
    views: "69.4k",
    likes: "1,139",
    comments: "140",
    shares: "123",
    description: "These authentic moments often perform the best.",
  },
];

export default function FeaturedContent() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-16">
          <p className="overline mb-4">My Content</p>
          <h2 className="font-display text-2xl md:text-3xl">
            The kind of content I make.
          </h2>
          <p className="text-sm text-muted mt-4">
            A recent selection that gives a real feel for my style, not just
            the highlights.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5"
        >
          {reels.map((reel, i) => (
            <figure key={i} className="flex flex-col">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-forest">
                {playing === i && reel.video ? (
                  <>
                    <video
                      src={reel.video}
                      className="absolute inset-0 w-full h-full object-cover bg-black"
                      controls
                      autoPlay
                      playsInline
                      onEnded={() => setPlaying(null)}
                    />
                    <button
                      type="button"
                      onClick={() => setPlaying(null)}
                      className="absolute top-2 left-2 z-10 w-7 h-7 rounded-full bg-black/55 backdrop-blur-sm text-white flex items-center justify-center text-base leading-none hover:bg-black/75 transition-colors"
                      aria-label="Stop video"
                    >
                      &times;
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => reel.video && setPlaying(i)}
                    className="group block w-full h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blush disabled:cursor-default"
                    disabled={!reel.video}
                    aria-label={
                      reel.video ? `Play reel: ${reel.description}` : reel.description
                    }
                  >
                    {reel.cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={reel.cover}
                        alt={reel.description}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#243524] to-[#1c281d] flex items-center justify-center">
                        <span className="overline !text-white/50 text-center px-2">
                          {reel.views ? "Reel" : "Reel coming soon"}
                        </span>
                      </div>
                    )}

                    {/* Views pill */}
                    {reel.views && (
                      <span className="absolute top-2 right-2 rounded-full bg-black/55 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5">
                        ▶ {reel.views}
                      </span>
                    )}

                    {/* Bottom gradient + engagement stats */}
                    {reel.views && (
                      <>
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/65 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-2 flex items-center gap-2.5 text-white text-[10px] font-medium">
                          <span className="flex items-center gap-0.5">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2 5 5.3 5c2 0 3.4 1.2 4.2 2.3l1.2 1.6 1.2-1.6C12.7 6.2 14.1 5 16.1 5 19.4 5 21 8.4 19.6 11.7 17.5 16.4 12 21 12 21z"/></svg>
                            {reel.likes}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.4 1.3 4.5 3.4 5.9-.1 1-.6 2.3-1.4 3.1 1.5-.2 3.3-.8 4.5-1.6.5.1 1 .2 1.5.2h2c5.5 0 10-3.6 10-8s-4.5-8-10-8z"/></svg>
                            {reel.comments}
                          </span>
                          {reel.shares && (
                            <span className="flex items-center gap-0.5">
                              <svg viewBox="0 0 24 24" className="w-3 h-3" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/></svg>
                              {reel.shares}
                            </span>
                          )}
                        </div>
                      </>
                    )}

                    {/* Play button */}
                    {reel.video && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 ml-0.5 fill-forest"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                    )}
                  </button>
                )}
              </div>
              <figcaption className="mt-2.5 text-xs leading-snug text-muted">
                {reel.description}
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <Reveal className="text-center mt-12 md:mt-16">
          <a
            href="https://instagram.com/kirstieplaysgolf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-full bg-blush text-forest font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            See more on my page
          </a>
        </Reveal>
      </div>
    </section>
  );
}
