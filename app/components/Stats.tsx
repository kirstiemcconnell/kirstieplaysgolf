"use client";

import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

const intFormat = (n: number) => n.toLocaleString("en-US");
const millionFormat = (n: number) => `${(n / 1000000).toFixed(1)}M`;
// Engagement rate is stored ×10 so the integer counter can animate a decimal.
const pctFormat = (n: number) => `${(n / 10).toFixed(1)}%`;

// All figures manually maintained. Update from Instagram Insights.
// Engagement rate = interactions / reach = 102,908 / 653,094 = 15.8%
const stats = [
  {
    label: "Followers",
    value: 7231,
    format: intFormat,
    sub: "↑ +31.4% this month",
    // NOTE: live-updatable via Instagram API, see InstagramStats component
  },
  {
    label: "30-day impressions",
    value: 1300000,
    format: millionFormat,
    sub: "180× following size",
  },
  {
    label: "30-day interactions",
    value: 102908,
    format: intFormat,
    sub: "Likes, comments, shares, saves & reposts",
  },
  {
    label: "Engagement rate",
    value: 158,
    format: pctFormat,
    sub: "Interactions by reach",
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
