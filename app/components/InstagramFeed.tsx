"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type MediaItem = {
  id: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
};

export default function InstagramFeed() {
  const [media, setMedia] = useState<MediaItem[] | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => {
        if (!res.ok) throw new Error("unavailable");
        return res.json();
      })
      .then((data) => setMedia(data.media ?? []))
      .catch(() => setUnavailable(true));
  }, []);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-16">
          <p className="overline mb-4">Live from Instagram</p>
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            @kirstieplaysgolf
          </h2>
          <p className="text-sm text-muted">
            Always up to date, pulled directly from the account.
          </p>
        </Reveal>

        {unavailable && (
          <p className="text-center text-sm text-muted">
            Live feed connecting soon.{" "}
            <a
              href="https://instagram.com/kirstieplaysgolf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View on Instagram
            </a>
            .
          </p>
        )}

        {media && media.length > 0 && (
          <Reveal stagger className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {media.slice(0, 9).map((item) => (
              <a
                key={item.id}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square block rounded-lg overflow-hidden bg-peach group"
              >
                <img
                  src={item.thumbnail_url || item.media_url}
                  alt={item.caption?.slice(0, 60) || "Instagram post"}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
