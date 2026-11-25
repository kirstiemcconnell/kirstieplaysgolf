import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "@kirstieplaysgolf | Brand Partnerships",
  description:
    "Women's golf creator with 12.3k followers and 1M monthly views. UGC ads and brand partnerships for golf and lifestyle brands.",
  // Used by link previews in messages, email and social apps.
  openGraph: {
    title: "@kirstieplaysgolf | UGC & Brand Partnerships",
    description:
      "Women's golf creator with 12.3k followers and 1M monthly views. UGC ads and brand partnerships for golf and lifestyle brands.",
    type: "website",
  },
  robots: "noindex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="bg-cream text-forest font-body antialiased">
        {children}
      </body>
    </html>
  );
}
