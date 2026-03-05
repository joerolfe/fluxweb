"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import FadeUp from "../components/FadeUp";
import StaggerContainer from "../components/StaggerContainer";
import SectionDivider from "../components/SectionDivider";
import Particles from "../components/Particles";
import CountUp from "../components/CountUp";

const LINKS = {
  tiktokTactics:  "https://tiktok.com/@fluxfut",
  tiktokTrading:  "https://tiktok.com/@fluxfuttrading",
  tiktokComp:     "https://tiktok.com/@fluxfutcomp",
  instagram:      "https://instagram.com/fluxfut",
  youtube:        "https://youtube.com/@fluxfut",
  twitter:        "https://twitter.com/fluxfut",
};

const socials = [
  { id:"tiktok-tactics", platform:"TikTok", label:"Tactics", handle:"@FluxFut",
    desc:"Formation breakdowns, in-game adjustments and winning systems updated every patch. Master every meta from 4-3-3 to custom builds.",
    followers:180000, display:"180K+", href:LINKS.tiktokTactics, accent:"rgba(236,72,153,0.35)", tag:"Tactics",
    stats:[{label:"Videos",val:"200+"},{label:"Avg Views",val:"50K"},{label:"Updated",val:"Daily"}],
    icon:<TikTokIcon/> },
  { id:"tiktok-trading", platform:"TikTok", label:"Trading", handle:"@FluxFutTrading",
    desc:"Coin-making methods, SBC solutions and live market alerts. Build your dream squad without spending real money.",
    followers:95000, display:"95K+", href:LINKS.tiktokTrading, accent:"rgba(236,72,153,0.35)", tag:"Trading",
    stats:[{label:"Videos",val:"150+"},{label:"Avg Views",val:"30K"},{label:"Updated",val:"Daily"}],
    icon:<TikTokIcon/> },
  { id:"tiktok-comp", platform:"TikTok", label:"Competitive", handle:"@FluxFutComp",
    desc:"Rivals & Weekend League prep, elite mental frameworks and pro-level player analysis to climb the ranks.",
    followers:150000, display:"150K+", href:LINKS.tiktokComp, accent:"rgba(236,72,153,0.35)", tag:"Competitive",
    stats:[{label:"Videos",val:"180+"},{label:"Avg Views",val:"45K"},{label:"Updated",val:"Weekly"}],
    icon:<TikTokIcon/> },
  { id:"instagram", platform:"Instagram", label:"Instagram", handle:"@FluxFut",
    desc:"Daily squad inspirations, patch breakdowns and behind-the-scenes content. The visual home of FluxFut.",
    followers:62000, display:"62K+", href:LINKS.instagram, accent:"rgba(249,115,22,0.3)", tag:"Daily",
    stats:[{label:"Posts",val:"300+"},{label:"Stories",val:"Daily"},{label:"Reels",val:"Weekly"}],
    icon:<InstagramIcon/> },
  { id:"youtube", platform:"YouTube", label:"YouTube", handle:"FluxFut",
    desc:"Long-form guides, deep-dive analysis and exclusive content. The most detailed EAFC content anywhere.",
    followers:28000, display:"28K+", href:LINKS.youtube, accent:"rgba(220,38,38,0.35)", tag:"Long-form",
    stats:[{label:"Videos",val:"80+"},{label:"Avg Views",val:"15K"},{label:"Length",val:"10-30m"}],
    icon:<YouTubeIcon/> },
  { id:"twitter", platform:"Twitter / X", label:"Twitter / X", handle:"@FluxFut",
    desc:"Instant meta reactions, patch hot-takes and real-time community conversation. Always first to break news.",
    followers:41000, display:"41K+", href:LINKS.twitter, accent:"rgba(14,165,233,0.3)", tag:"Real-time",
    stats:[{label:"Tweets",val:"500+"},{label:"Engagement",val:"High"},{label:"Pace",val:"Real-time"}],
    icon:<XIcon/> },
];

export default function SocialsPage() {
  return (
    <main className="relative text-white pt-20 overflow-hidden">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <motion.div
          animate={{ backgroundPosition:["0% 50%","100% 50%","0% 50%"] }}
          transition={{ duration:18, repeat:Infinity, ease:"linear" }}
          className="absolute inset-0 opacity-90"
          style={{ background:`radial-gradient(circle at 20% 30%, rgba(37,99,235,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.45), transparent 45%), radial-gradient(circle at 50% 50%, rgba(29,78,216,0.4), transparent 50%)`, backgroundSize:"200% 200%" }}
        />
      </div>
      <Particles />
      <Navbar />

      {/* HERO */}
      <section id="top" className="relative min-h-[55vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div animate={{ y:[0,-16,0] }} transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
            className="w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-blue-500/[0.07] rounded-full blur-3xl" />
        </div>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Follow the Flux
        </motion.div>
        <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
          Everywhere<br /><span className="text-blue-400">We Play.</span>
        </motion.h1>
        <motion.p initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-100/70 max-w-2xl">
          425K+ players following FluxFut across six platforms.
        </motion.p>
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-2">
          {["6 Channels","425K+ Followers","Updated Daily"].map((l) => (
            <span key={l} className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-blue-400/15 text-blue-100/60 text-sm">
              <span className="text-blue-400 mr-1.5 text-xs">◈</span>{l}
            </span>
          ))}
        </motion.div>
      </section>

      <SectionDivider />

      {/* LIVE COUNTERS */}
      <section id="stats" className="py-16 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[{label:"TikTok",target:425000},{label:"Instagram",target:62000},{label:"YouTube",target:28000},{label:"X / Twitter",target:41000}].map((s) => (
              <div key={s.label} className="p-5 sm:p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.07] to-transparent text-center hover:border-blue-400/25 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-semibold text-white mb-1"><CountUp target={s.target} suffix="+" /></p>
                <p className="text-xs text-blue-100/50 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* SOCIAL CARDS */}
      <section id="platforms" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-4">The Platforms</h2>
            <p className="text-center text-blue-100/50 mb-16 max-w-xl mx-auto">Every channel has its own focus. Follow the ones that match your game.</p>
          </FadeIn>
          <StaggerContainer>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {socials.map((s) => (
                <FadeUp key={s.id}>
                  <div id={s.id} className="group relative flex flex-col h-full p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent overflow-hidden hover:border-blue-400/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.12)] transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background:`radial-gradient(circle at 0% 0%, ${s.accent}, transparent 60%)` }} />
                    <div className="relative z-10 flex flex-col h-full gap-4">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-blue-300">{s.icon}</div>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium">{s.tag}</span>
                      </div>
                      <div>
                        <p className="text-xs text-blue-100/40 uppercase tracking-widest mb-0.5">{s.platform}</p>
                        <h3 className="text-xl font-semibold text-white">{s.label}</h3>
                        <p className="text-sm text-blue-400/70">{s.handle}</p>
                      </div>
                      <p className="text-blue-100/55 text-sm leading-relaxed flex-1">{s.desc}</p>
                      {/* Mini stats */}
                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-blue-400/10">
                        {s.stats.map((st) => (
                          <div key={st.label} className="text-center">
                            <p className="text-sm font-semibold text-white">{st.val}</p>
                            <p className="text-xs text-blue-100/40">{st.label}</p>
                          </div>
                        ))}
                      </div>
                      {/* Follower count + CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-semibold text-white">{s.display}</p>
                          <p className="text-xs text-blue-100/40">followers</p>
                        </div>
                        <a href={s.href} target="_blank" rel="noopener noreferrer">
                          <motion.div whileHover={{ scale:1.06 }} whileTap={{ scale:0.97 }}
                            className="px-4 py-2 rounded-xl bg-blue-500/15 border border-blue-400/25 text-blue-200 text-sm font-medium hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-200 flex items-center gap-2">
                            <span className="w-4 h-4">{s.icon}</span> Follow
                          </motion.div>
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* FOOTER CTA */}
      <section className="py-24 px-4 sm:px-6 text-center border-t border-blue-400/10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Never Miss a Drop.</h2>
          <p className="text-blue-100/60 text-lg mb-10 max-w-md mx-auto">Follow every channel and be first to get patch breakdowns, meta shifts and exclusive content.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale:1.06 }} whileTap={{ scale:0.97 }}
                  className="px-5 py-2.5 rounded-xl border border-blue-400/20 bg-blue-500/[0.07] text-blue-200 text-sm font-medium hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-white transition-all duration-200 flex items-center gap-2">
                  <span className="w-4 h-4">{s.icon}</span>{s.label}
                </motion.div>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-blue-400/10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold text-white mb-2">FluxFut</p>
            <p className="text-blue-100/40 text-xs leading-relaxed max-w-[180px]">Elite EAFC tactics, trading & competitive gameplay.</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Socials</h4>
            <ul className="space-y-2 text-blue-100/50">
              {socials.map((s) => <li key={s.id}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{s.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Community</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href="/discord" className="hover:text-blue-400 transition-colors">Free Discord</a></li>
              <li><a href="/discord" className="hover:text-blue-400 transition-colors">Premium Discord</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Products</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href="/store" className="hover:text-blue-400 transition-colors">Whop Store</a></li>
              <li><a href="/store" className="hover:text-blue-400 transition-colors">Gumroad</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-blue-100/30 text-xs mt-12">© {new Date().getFullYear()} FluxFut. All rights reserved.</p>
      </footer>

    </main>
  );
}

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>;
}
function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
}
function YouTubeIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
}
function XIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.734l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>;
}
