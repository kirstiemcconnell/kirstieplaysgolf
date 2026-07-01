"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Segment = { label: string; value: number; color: string };
type Bar = { label: string; value: number };

type Audience = {
  title: string;
  total: string;
  totalLabel: string;
  gender: Segment[];
  age: Bar[];
  location: Bar[];
};

const followers: Audience = {
  title: "Followers",
  total: "7.2k",
  totalLabel: "total followers",
  gender: [
    { label: "Women", value: 34, color: "var(--blush)" },
    { label: "Men", value: 66, color: "var(--forest)" },
  ],
  age: [
    { label: "13-24", value: 3.2 },
    { label: "25-34", value: 24 },
    { label: "35-44", value: 30.6 },
    { label: "45-54", value: 21.4 },
    { label: "55+", value: 20.8 },
  ],
  location: [
    { label: "Australia", value: 40.8 },
    { label: "US", value: 32.5 },
    { label: "UK", value: 10.9 },
    { label: "Canada", value: 4.5 },
    { label: "NZ", value: 2.6 },
  ],
};

const reach: Audience = {
  title: "30-day reach",
  total: "1.3M",
  totalLabel: "accounts reached",
  gender: [
    { label: "Women", value: 65, color: "var(--blush)" },
    { label: "Men", value: 35, color: "var(--forest)" },
  ],
  age: [
    { label: "18-24", value: 16.9 },
    { label: "25-34", value: 32.3 },
    { label: "35-44", value: 21.3 },
    { label: "45-54", value: 12.2 },
  ],
  location: [
    { label: "US", value: 54.2 },
    { label: "Canada", value: 16.9 },
    { label: "Australia", value: 9 },
    { label: "UK", value: 7.4 },
  ],
};

// Two-segment donut: a base ring plus a single arc drawn on top. The arc has
// straight (butt) ends, so both edges are clean, and it sweeps in when active.
function Donut({ segments, active }: { segments: Segment[]; active: boolean }) {
  const size = 108;
  const stroke = 20;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const arc = segments[0];
  const base = segments[1];
  const arcLen = (arc.value / 100) * c;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90 shrink-0"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={base.color}
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={arc.color}
        strokeWidth={stroke}
        strokeLinecap="butt"
        strokeDasharray={c}
        style={{
          strokeDashoffset: active ? c - arcLen : c,
          transition: "stroke-dashoffset 1s ease-out",
        }}
      />
    </svg>
  );
}

function BarList({ items, active }: { items: Bar[]; active: boolean }) {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <div className="space-y-2.5">
      {items.map((it, i) => (
        <div key={it.label} className="flex items-center gap-3 text-xs">
          <span className="w-16 shrink-0 text-forest/70">{it.label}</span>
          <div className="flex-1 h-2 rounded-full bg-warm-grey/30 overflow-hidden">
            <div
              className="h-full rounded-full bg-sage"
              style={{
                width: active ? `${(it.value / max) * 100}%` : "0%",
                transition: "width 0.9s ease-out",
                transitionDelay: `${i * 80}ms`,
              }}
            />
          </div>
          <span className="w-11 shrink-0 text-right tabular-nums text-forest font-medium">
            {it.value}%
          </span>
        </div>
      ))}
    </div>
  );
}

function AudienceColumn({
  data,
  active,
}: {
  data: Audience;
  active: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl border border-warm-grey/50 p-6 md:p-8">
      <div className="flex items-baseline justify-between mb-6">
        <h3 className="font-display text-xl md:text-2xl">{data.title}</h3>
        <div className="text-right">
          <span className="font-display text-2xl md:text-3xl text-forest">
            {data.total}
          </span>
          <p className="text-[11px] text-muted">{data.totalLabel}</p>
        </div>
      </div>

      {/* Gender */}
      <p className="overline mb-3">Gender</p>
      <div className="flex items-center gap-5 mb-8">
        <Donut segments={data.gender} active={active} />
        <div className="space-y-2">
          {data.gender.map((g) => (
            <div key={g.label} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ background: g.color }}
              />
              <span className="text-forest/80">{g.label}</span>
              <span className="font-medium tabular-nums">{g.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Age */}
      <p className="overline mb-3">Age</p>
      <div className="mb-8">
        <BarList items={data.age} active={active} />
      </div>

      {/* Location */}
      <p className="overline mb-3">Top locations</p>
      <BarList items={data.location} active={active} />
    </div>
  );
}

export default function Demographics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="audience" className="py-24 md:py-32 px-6 bg-peach/40">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <p className="overline mb-4">Audience</p>
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            A closer look at who&apos;s watching
          </h2>
          <p className="text-sm text-muted">
            The people who follow me, and the far larger audience my content
            reaches every month.
          </p>
        </Reveal>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8">
          <AudienceColumn data={followers} active={active} />
          <AudienceColumn data={reach} active={active} />
        </div>
      </div>
    </section>
  );
}
