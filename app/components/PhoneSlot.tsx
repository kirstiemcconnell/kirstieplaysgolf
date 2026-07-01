"use client";

import { useState } from "react";
import PhoneFrame from "./PhoneFrame";

/* A phone frame that plays a video inline on tap. Shows the cover (or a
   placeholder) with a play button until tapped. */
export default function PhoneSlot({
  video,
  cover,
  className = "",
  autoplay = false,
}: {
  video?: string;
  cover?: string;
  className?: string;
  autoplay?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  // Autoplay mode: loop silently, no cover/controls/tap.
  if (autoplay && video) {
    return (
      <PhoneFrame className={className}>
        <video
          src={video}
          className="absolute inset-0 w-full h-full object-cover bg-black"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </PhoneFrame>
    );
  }

  return (
    <PhoneFrame className={className}>
      {playing && video ? (
        <>
          <video
            src={video}
            className="absolute inset-0 w-full h-full object-cover bg-black"
            controls
            autoPlay
            playsInline
            onEnded={() => setPlaying(false)}
          />
          <button
            type="button"
            onClick={() => setPlaying(false)}
            className="absolute top-1.5 left-1.5 z-30 w-6 h-6 rounded-full bg-black/55 backdrop-blur-sm text-white flex items-center justify-center text-sm leading-none hover:bg-black/75 transition-colors"
            aria-label="Stop video"
          >
            &times;
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => video && setPlaying(true)}
          disabled={!video}
          className="group absolute inset-0 w-full h-full disabled:cursor-default"
          aria-label={video ? "Play video" : "Video coming soon"}
        >
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#243524] to-[#1c281d]" />
          )}
          {video && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-9 h-9 rounded-full bg-white/85 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 ml-0.5 fill-forest"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          )}
        </button>
      )}
    </PhoneFrame>
  );
}
