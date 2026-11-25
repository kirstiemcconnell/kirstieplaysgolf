"use client";

import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

// Drops a trailing ".0" so 12000 shows as "12k" and 10300 as "10.3k"
const kFormat = (n: number) => `${parseFloat((n / 1000).toFixed(1))}k`;
const kFormatWhole = (n: number) => `${(n / 1000).toFixed(0)}k`;
// Engagement rate is stored ×100 so the integer counter can animate two decimals.
const pctFormat2dp = (n: number) => `${(n / 100).toFixed(2)}%`;

// Followers auto-updated via Cowork scheduled task (Instagram API), currently paused.
// All other figures manually maintained. Update from Instagram Insights.
// Views multiple = 966,807 / 12,344 = ~78×
// Engagement rate = avg interactions per post / followers, last 30 days
//   = (12,000 post + 8,200 reel interactions) / 17 posts = ~1,188 / 12,344 = ~9.63%
//   Interactions = likes, comments, shares, saves and reposts. Stories excluded.
const stats = [
  {
    label: "Followers",
    value: 12344,
    format: kFormat,
    sub: "↑ +28.0% this month",
  },
  {
    label: "30-day views",
    value: 966807,
    format: kFormatWhole,
    sub: "78× following size",
  },
  {
    label: "30-day interactions",
    value: 22200,
    format: kFormatWhole,
    sub: "Likes, comments, shares, saves & reposts",
  },
  {
    label: "Engagement rate",
    value: 963,
    format: pctFormat2dp,
    sub: "Avg. interactions per post ÷ followers",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center md:divide-x md:divide-warm-grey/60">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2">
              <div className="font-display text-3xl md:text-4xl">
                <StatCounter value={stat.value} format={stat.format} />
              </div>
              <p className="overline mt-3">{stat.label}</p>
              <p className="text-xs text-muted mt-1">{stat.sub}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
