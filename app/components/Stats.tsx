"use client";

import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import statsData from "../../public/instagram-stats.json";

const millionFormat = (n: number) => `${(n / 1000000).toFixed(1)}M`;
const kFormat = (n: number) => `${(n / 1000).toFixed(1)}k`;
const kFormatWhole = (n: number) => `${(n / 1000).toFixed(0)}k`;
const pctFormat2dp = (n: number) => `${(n / 100).toFixed(2)}%`;

// Followers auto-updated daily via Cowork scheduled task (Instagram API) — task currently paused.
// All other figures manually maintained. Update from Instagram Insights.
// Engagement rate = median likes / followers = ~2,045 / 10,300 = 20.45%
const stats = [
  {
    label: "Followers",
    value: 10300,
    format: kFormat,
    sub: "↑ +15.6% this month",
  },
  {
    label: "30-day impressions",
    value: 1600000,
    format: millionFormat,
    sub: "160× following size",
  },
  {
    label: "30-day interactions",
    value: 47000,
    format: kFormatWhole,
    sub: "Likes, comments, shares, saves & reposts",
  },
  {
    label: "Engagement rate",
    value: 2045,
    format: pctFormat2dp,
    sub: "Median likes by followers",
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
