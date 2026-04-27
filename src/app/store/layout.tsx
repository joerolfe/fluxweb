import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials | FluxFut",
  description: "Follow FluxFut across TikTok (@flux.fut, @moreflux, @fluxevolutions), YouTube and Instagram. 34K+ FC26 players in the network.",
  openGraph: {
    title: "FluxFut Socials — Follow the Network",
    description: "Three TikTok accounts, YouTube and Instagram. Meta cards, evolutions and fun series — all in one place.",
    url: "https://fluxfut.com/socials",
  },
  twitter: {
    card: "summary_large_image",
    title: "FluxFut Socials — Follow the Network",
    description: "Three TikTok accounts, YouTube and Instagram. Meta cards, evolutions and FC26 content daily.",
  },
};

export default function SocialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
