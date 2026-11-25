"use client";

import { useLayoutEffect, useRef, useState } from "react";

/* Renders the real number in the HTML, so link previews, crawlers and
   anything without JavaScript never see "0". Once the page is running, a
   counter that is still off-screen resets to 0 and counts up when scrolled
   into view. One that is already on screen (or when the visitor prefers
   reduced motion) just keeps showing the real number. */
export default function StatCounter({
  value,
  format,
  duration = 1400,
}: {
  value: number;
  format: (n: number) => string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => format(value));

  // Layout effect so the reset to 0 happens before the browser paints.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const rect = el.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (reduceMotion || onScreen) return;

    setDisplay(format(0));
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(format(Math.round(eased * value)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      setDisplay(format(value));
    };
  }, [value, format, duration]);

  return <span ref={ref}>{display}</span>;
}
