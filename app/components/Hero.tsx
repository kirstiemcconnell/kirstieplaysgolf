/* Hero: Pearpop-style dark green canvas with a looping background video
   of animated content cards on the right. Wordmark, tagline and CTA sit on
   the left. The section background matches the video's green (#092d03) so the
   text zone blends seamlessly with the footage. */

// Matches the solid green baked into hero.mp4 so the left edge is seamless.
const VIDEO_GREEN = "#092d03";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-svh flex flex-col"
      style={{ backgroundColor: VIDEO_GREEN }}
    >
      {/* Looping background video, cards animate on the right */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-right"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Left gradient so the copy always reads over the video green.
          Mobile needs a heavier cover (cards fill more of a narrow frame);
          desktop uses a lighter blend so more cards stay visible. */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: `linear-gradient(90deg, rgba(9,45,3,0.92) 0%, rgba(9,45,3,0.82) 55%, rgba(9,45,3,0.45) 80%, rgba(9,45,3,0) 100%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 pt-28 md:pt-24 pb-8 md:pb-0 flex-1 flex items-center">
        {/* Wordmark + tagline */}
        <div className="text-white max-w-[17rem] sm:max-w-sm md:max-w-xl">
          <h1 className="font-display whitespace-nowrap text-[clamp(1.6rem,4.2vw,3.6rem)] leading-tight">
            @kirstieplaysgolf
          </h1>
          <p className="!text-sage mt-6 md:mt-5 font-medium uppercase tracking-[0.07em] text-sm md:text-lg">
            Women&apos;s Golf &amp; Lifestyle Creator
          </p>
          <p className="mt-6 md:mt-4 text-white/70 text-base md:text-lg max-w-md">
            Turning a beginner&apos;s journey into 1.2M monthly views, and a
            community that&apos;s growing with it.
          </p>
          <a
            href="#contact"
            className="inline-block mt-12 md:mt-10 px-7 py-3 rounded-full bg-blush text-forest font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Work with me
          </a>
        </div>
      </div>

      {/* Profile strip below hero, keeps the personal touch */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 pb-10 flex items-center gap-5">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-white/80 overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="Kirstie on the golf course"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-white font-medium">Kirstie</p>
          <p className="text-white/60 text-sm">Gold Coast, Australia · she/her</p>
        </div>
      </div>
    </section>
  );
}
