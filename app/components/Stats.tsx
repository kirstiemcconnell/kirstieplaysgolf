// Engagement rate = median likes / followers = ~2,045 / 10,000 = 20.45%
const stats = [
  {
    label: "Followers",
    value: 10300,
    format: (n: number) => `${(n / 1000).toFixed(1)}k`,
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
    format: (n: number) => `${(n / 1000).toFixed(0)}k`,
    sub: "Likes, comments, shares, saves & reposts",
  },
  {
    label: "Engagement rate",
    value: 2045,
    format: (n: number) => `${(n / 100).toFixed(2)}%`,
    sub: "Median likes by followers",
  },
];
