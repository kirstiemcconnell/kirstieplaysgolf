import Reveal from "./Reveal";

const slides = [
  "/about-slider/1.jpg",
  "/about-slider/2.jpg",
  "/about-slider/3.jpg",
  "/about-slider/4.jpg",
  "/about-slider/5.jpg",
  "/about-slider/6.jpg",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-32 items-center">
        {/* About copy */}
        <div>
          <Reveal>
            <p className="overline mb-4">About</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display font-medium text-2xl md:text-4xl leading-snug mb-8">
              Hey, I&apos;m Kirstie!
            </h2>
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-[15px] md:text-base leading-relaxed text-forest/90">
              <p>
                I picked up my first set of clubs, second hand and knowing
                nothing, in October 2025. By January 2026 I was filming the
                whole beginner journey.
              </p>
              <p>
                What I didn&apos;t expect was the community: the women
                I&apos;ve met along the way and the online strangers cheering
                me on with tips and support. That&apos;s what keeps me posting.
              </p>
              <p>
                Behind the scenes I&apos;m not just winging it. A degree in
                international business and finance and five years in digital
                marketing are what&apos;s driven the rapid growth you see
                above.
              </p>
            </div>
          </Reveal>
        </div>

        {/* iPhone mockup, photos swipe down one at a time */}
        <Reveal className="justify-self-center md:justify-self-end">
          <div className="relative w-[168px] md:w-[212px]">
            {/* Side buttons */}
            <div className="absolute -left-[2px] top-[78px] md:top-[98px] w-[2px] h-[22px] md:h-[28px] rounded-l bg-[#2a2a2c]" />
            <div className="absolute -left-[2px] top-[112px] md:top-[140px] w-[2px] h-[40px] md:h-[50px] rounded-l bg-[#2a2a2c]" />
            <div className="absolute -left-[2px] top-[162px] md:top-[202px] w-[2px] h-[40px] md:h-[50px] rounded-l bg-[#2a2a2c]" />
            <div className="absolute -right-[2px] top-[136px] md:top-[172px] w-[2px] h-[58px] md:h-[72px] rounded-r bg-[#2a2a2c]" />

            {/* Titanium rail */}
            <div className="rounded-[2.6rem] md:rounded-[3rem] p-[3px] bg-gradient-to-b from-[#45474c] via-[#1f1f21] to-[#3b3d42] shadow-2xl">
              {/* Black bezel */}
              <div className="rounded-[2.45rem] md:rounded-[2.8rem] p-[7px] md:p-[9px] bg-black">
                {/* Screen */}
                <div className="relative w-full aspect-[9/19.5] rounded-[1.9rem] md:rounded-[2.15rem] overflow-hidden bg-black">
                  {/* Swiping photo track (7th slide duplicates the 1st for a seamless loop) */}
                  <div className="phone-reel-track absolute inset-x-0 top-0 flex flex-col">
                    {[...slides, slides[0]].map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt=""
                        aria-hidden="true"
                        className="w-full aspect-[9/19.5] object-cover shrink-0"
                      />
                    ))}
                  </div>
                  {/* Dynamic Island */}
                  <div className="absolute top-[8px] md:top-[10px] left-1/2 -translate-x-1/2 w-[56px] md:w-[72px] h-[17px] md:h-[21px] rounded-full bg-black z-20" />
                  {/* Home indicator */}
                  <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 w-[78px] md:w-[98px] h-[4px] rounded-full bg-white/70 z-20" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
