"use client";

import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import statsData from "../../public/instagram-stats.json";

const intFormat = (n: number) => n.toLocaleString("en-US");
const millionFormat = (n: number) => `${(n / 1000000).toFixed(1)}M`;
const pctFormat = (n: number) => `${(n / 10).toFixed(1)}%`;

const stats = [
  {
    label: "Followers",
    value: statsData.followers,
    format: intFormat,
    sub: `Updated ${statsData.updated_at}`,
  },
  {
    label: "30-day views",
    value: statsData.views_30d,
    format: millionFormat,
    sub: "Times content was seen",
  },
  {
    label: "30-day interactions",
    value: statsData.interactions_30d,
    format: intFormat,
    sub: "Likes, comments, shares, saves & reposts",
  },
  {
    label: "Engagement rate",
    value: statsData.engagement_rate_x10,
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
