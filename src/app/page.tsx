"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import FadeIn from "./components/FadeIn";
import FadeUp from "./components/FadeUp";
import StaggerContainer from "./components/StaggerContainer";
import SectionDivider from "./components/SectionDivider";
import Particles from "./components/Particles";
import EmailCapture from "./components/EmailCapture";

const LINKS = {
  tiktokTactics:  "https://www.tiktok.com/@flux.fut",
  tiktokTrading:  "https://www.tiktok.com/@moreflux",
  tiktokComp:     "https://www.tiktok.com/@fluxevolutions",
  instagram:      "https://instagram.com/fluxfut",
  youtube:        "https://youtube.com/@fluxfut",
  discordFree:    "https://discord.gg/HJCn7YZCC3",
  discordPremium: "https://whop.com/fluxfut/fluxfut-premium/",
  gumroad:        "https://fluxfut.gumroad.com/l/blueprint",
  whop:           "https://whop.com/fluxfut/fluxfut-premium/",
};

const socials = [
  { id:"tiktok-tactics", platform:"TikTok", label:"FluxFut", handle:"@flux.fut",
    desc:"Best meta cards, Top 3 players for every budget and Top 10 best players in the game at every position.",
    displayFollowers:"100", href:LINKS.tiktokTactics, accent:"rgba(37,99,235,0.5)", tag:"Meta & Players", icon:<TikTokIcon/>,
    hoverBorder:"hover:border-blue-500/40", hoverShadow:"hover:shadow-[0_0_50px_rgba(37,99,235,0.18)]",
    iconCls:"text-blue-400", tagCls:"bg-blue-600/10 border-blue-500/20 text-blue-300",
    handleCls:"text-blue-400/70", btnCls:"border-blue-500/20 bg-blue-500/[0.08] text-blue-200 hover:bg-blue-500/20 hover:border-blue-500/50" },
  { id:"tiktok-trading", platform:"TikTok", label:"MoreFlux", handle:"@moreflux",
    desc:"Fun series about EAFC26 and past games. Viral formats, nostalgia and everything entertaining about FC.",
    displayFollowers:"100", href:LINKS.tiktokTrading, accent:"rgba(125,211,252,0.25)", tag:"Fun & Series", icon:<TikTokIcon/>,
    hoverBorder:"hover:border-sky-300/40", hoverShadow:"hover:shadow-[0_0_50px_rgba(125,211,252,0.14)]",
    iconCls:"text-sky-200", tagCls:"bg-sky-300/10 border-sky-300/20 text-sky-200",
    handleCls:"text-sky-300/70", btnCls:"border-sky-300/20 bg-sky-300/[0.08] text-sky-100 hover:bg-sky-300/20 hover:border-sky-300/50" },
  { id:"tiktok-comp", platform:"TikTok", label:"FluxEvolutions", handle:"@fluxevolutions",
    desc:"Every FC26 Evolution covered — which evos are worth it, best paths and hidden value picks.",
    displayFollowers:"100", href:LINKS.tiktokComp, accent:"rgba(34,197,94,0.35)", tag:"Evolutions", icon:<TikTokIcon/>,
    hoverBorder:"hover:border-green-400/40", hoverShadow:"hover:shadow-[0_0_50px_rgba(34,197,94,0.14)]",
    iconCls:"text-green-400", tagCls:"bg-green-500/10 border-green-400/20 text-green-300",
    handleCls:"text-green-400/70", btnCls:"border-green-400/20 bg-green-500/[0.08] text-green-200 hover:bg-green-500/20 hover:border-green-400/50" },
  { id:"instagram", platform:"Instagram", label:"Instagram", handle:"@FluxFut",
    desc:"Reels from all three TikTok channels plus exclusive posts — squad builds, card ratings and tier lists.",
    displayFollowers:"1K", href:LINKS.instagram, accent:"rgba(249,115,22,0.3)", tag:"Reels + Posts", icon:<InstagramIcon/>,
    hoverBorder:"hover:border-orange-400/30", hoverShadow:"hover:shadow-[0_0_50px_rgba(249,115,22,0.12)]",
    iconCls:"text-orange-400", tagCls:"bg-orange-500/10 border-orange-400/20 text-orange-300",
    handleCls:"text-orange-400/70", btnCls:"border-orange-400/20 bg-orange-500/[0.08] text-orange-200 hover:bg-orange-500/20 hover:border-orange-400/50" },
  { id:"youtube", platform:"YouTube", label:"YouTube", handle:"FluxFut",
    desc:"Every TikTok posted daily as Shorts — meta cards, fun series and evo guides all in one place.",
    displayFollowers:"18K", href:LINKS.youtube, accent:"rgba(220,38,38,0.35)", tag:"Shorts", icon:<YouTubeIcon/>,
    hoverBorder:"hover:border-red-400/30", hoverShadow:"hover:shadow-[0_0_50px_rgba(220,38,38,0.12)]",
    iconCls:"text-red-400", tagCls:"bg-red-500/10 border-red-400/20 text-red-300",
    handleCls:"text-red-400/70", btnCls:"border-red-400/20 bg-red-500/[0.08] text-red-200 hover:bg-red-500/20 hover:border-red-400/50" },
];

const freePerks = ["Community chat","Weekly tips","Meta updates","Basic tactics","Market news","SBC alerts"];
const premiumPerks = ["Custom tactics packs","Live trading alerts","Advanced squad builders","Patch breakdowns","1-on-1 coaching access","Private strategy channels","Early access to content","Weekly live sessions"];

export default function Home() {
  return (
    <main className="relative text-white pt-20 overflow-hidden">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <motion.div
          animate={{ backgroundPosition: ["0% 50%","100% 50%","0% 50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-90"
          style={{ background:`radial-gradient(circle at 20% 30%, rgba(37,99,235,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.45), transparent 45%), radial-gradient(circle at 50% 50%, rgba(29,78,216,0.4), transparent 50%)`, backgroundSize:"200% 200%" }}
        />
      </div>
      <Particles />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-5 sm:gap-8">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div animate={{ y:[0,-20,0] }} transition={{ duration:18, repeat:Infinity, ease:"easeInOut" }}
            className="w-[300px] h-[300px] sm:w-[700px] sm:h-[700px] bg-blue-500/[0.08] rounded-full blur-3xl" />
        </div>
        <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.2 }}
          className="relative text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
          CONTROL THE META.
        </motion.h1>
        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:1.2 }}
          className="relative text-base sm:text-xl md:text-2xl text-blue-100/80 max-w-2xl">
          Tactics, trading and the best EAFC content — all in one place.
        </motion.p>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5, duration:1 }}
          className="flex flex-col sm:flex-row gap-4">
          <a href={LINKS.discordFree} target="_blank" rel="noopener noreferrer"><Button>Join Free Discord</Button></a>
          <a href={LINKS.discordPremium} target="_blank" rel="noopener noreferrer"><Button variant="outline">Unlock Premium</Button></a>
        </motion.div>
      </section>

      <SectionDivider />

      {/* FOLLOWER STATS */}
      <section className="py-10 sm:py-20 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs text-blue-300/50 tracking-widest uppercase mb-12">Across all platforms</p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: "TikTok",    value: "15K+", icon: <TikTokIcon /> },
                { label: "Instagram", value: "1K+",  icon: <InstagramIcon /> },
                { label: "YouTube",   value: "18K+", icon: <YouTubeIcon /> },
              ].map((stat) => (
                <div key={stat.label} className="p-6 sm:p-8 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.07] to-transparent text-center">
                  <div className="flex justify-center mb-4 text-blue-300/60">{stat.icon}</div>
                  <p className="text-3xl sm:text-4xl font-semibold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-blue-100/50 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-blue-100/40 text-sm mt-8">
              <span className="text-white font-medium">34K+</span> EAFC players across all platforms.
            </p>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* FLUXFUT NETWORK */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-3">The FluxFut Network</h2>
            <p className="text-center text-blue-100/50 text-base mb-8 sm:mb-16 max-w-xl mx-auto">
              Three TikToks, YouTube and Instagram. Pick your platform.
            </p>
          </FadeIn>
          <StaggerContainer>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {socials.slice(0, 3).map((s) => (
                <FadeUp key={s.id}>
                  <div className={`group relative flex flex-col h-full p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent overflow-hidden ${s.hoverBorder} ${s.hoverShadow} transition-all duration-300 hover:-translate-y-1`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background:`radial-gradient(circle at 0% 0%, ${s.accent}, transparent 60%)` }} />
                    <div className="relative z-10 flex flex-col h-full gap-4">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] ${s.iconCls}`}>{s.icon}</div>
                        <span className={`px-3 py-1 rounded-full border text-xs font-medium ${s.tagCls}`}>{s.tag}</span>
                      </div>
                      <div>
                        <p className="text-xs text-blue-100/40 uppercase tracking-widest mb-0.5">{s.platform}</p>
                        <h3 className="text-lg font-semibold text-white">{s.label}</h3>
                        <p className={`text-sm ${s.handleCls}`}>{s.handle}</p>
                      </div>
                      <p className="text-blue-100/55 text-sm leading-relaxed flex-1">{s.desc}</p>
                      <a href={s.href} target="_blank" rel="noopener noreferrer"
                        className={`mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border text-sm font-medium hover:text-white transition-all duration-200 ${s.btnCls}`}>
                        <span className="w-4 h-4 flex-shrink-0">{s.icon}</span>
                        Follow · {s.displayFollowers}
                      </a>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-5 lg:w-2/3 lg:mx-auto">
              {socials.slice(3).map((s) => (
                <FadeUp key={s.id}>
                  <div className={`group relative flex flex-col h-full p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent overflow-hidden ${s.hoverBorder} ${s.hoverShadow} transition-all duration-300 hover:-translate-y-1`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background:`radial-gradient(circle at 0% 0%, ${s.accent}, transparent 60%)` }} />
                    <div className="relative z-10 flex flex-col h-full gap-4">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] ${s.iconCls}`}>{s.icon}</div>
                        <span className={`px-3 py-1 rounded-full border text-xs font-medium ${s.tagCls}`}>{s.tag}</span>
                      </div>
                      <div>
                        <p className="text-xs text-blue-100/40 uppercase tracking-widest mb-0.5">{s.platform}</p>
                        <h3 className="text-lg font-semibold text-white">{s.label}</h3>
                        <p className={`text-sm ${s.handleCls}`}>{s.handle}</p>
                      </div>
                      <p className="text-blue-100/55 text-sm leading-relaxed flex-1">{s.desc}</p>
                      <a href={s.href} target="_blank" rel="noopener noreferrer"
                        className={`mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border text-sm font-medium hover:text-white transition-all duration-200 ${s.btnCls}`}>
                        <span className="w-4 h-4 flex-shrink-0">{s.icon}</span>
                        Follow · {s.displayFollowers}
                      </a>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </StaggerContainer>
          <FadeIn>
            <div className="text-center mt-12">
              <Link href="/socials"><Button variant="outline">View All Socials →</Button></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* JOIN THE COMMUNITY */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-3">The Discord</h2>
            <p className="text-center text-blue-100/50 text-base mb-8 sm:mb-16 max-w-xl mx-auto">
              Free to join. Upgrade to premium when you want everything.
            </p>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-6">
              {/* FREE */}
              <FadeUp>
                <div className="flex flex-col h-full p-8 sm:p-10 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium tracking-wide mb-6 w-fit">Free</span>
                  <h3 className="text-2xl font-semibold mb-1">Free Discord</h3>
                  <p className="text-4xl font-semibold text-white mt-2 mb-6">£0<span className="text-lg text-blue-100/50 font-normal">/mo</span></p>
                  <ul className="space-y-3 mb-10 flex-1">
                    {freePerks.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-blue-100/70 text-sm">
                        <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-xs flex-shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href={LINKS.discordFree} target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                      className="w-full py-3 rounded-xl bg-blue-500/10 border border-blue-400/25 text-blue-200 text-sm font-medium text-center hover:bg-blue-500/20 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                      <DiscordIcon className="w-4 h-4" /> Join Free on Discord
                    </motion.div>
                  </a>
                </div>
              </FadeUp>
              {/* PREMIUM */}
              <FadeUp>
                <div className="flex flex-col h-full p-8 sm:p-10 rounded-2xl border border-blue-400/25 bg-gradient-to-b from-blue-500/[0.12] to-blue-500/[0.03] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium tracking-wide mb-6 w-fit shadow-[0_0_20px_rgba(59,130,246,0.4)]">Premium</span>
                    <h3 className="text-2xl font-semibold mb-1">Premium Discord</h3>
                    <p className="text-4xl font-semibold text-white mt-2 mb-6">£9.99<span className="text-lg text-blue-100/50 font-normal">/mo</span></p>
                    <ul className="space-y-3 mb-10 flex-1">
                      {premiumPerks.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-blue-100/80 text-sm">
                          <span className="w-5 h-5 rounded-full bg-blue-500/30 border border-blue-400/50 flex items-center justify-center text-blue-300 text-xs flex-shrink-0">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a href={LINKS.discordPremium} target="_blank" rel="noopener noreferrer">
                      <motion.div whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                        className="w-full py-3 rounded-xl bg-blue-500 text-white text-sm font-medium text-center hover:bg-blue-400 transition-all duration-200 shadow-[0_0_25px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2 cursor-pointer">
                        <WhopIcon className="w-4 h-4" /> Unlock Premium on Whop
                      </motion.div>
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* EMAIL CAPTURE */}
      <EmailCapture />

      {/* FOOTER */}
      <footer className="py-10 sm:py-16 border-t border-blue-400/10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold text-white mb-2">FluxFut</p>
            <p className="text-blue-100/40 text-xs leading-relaxed max-w-[180px]">EAFC tactics, trading and content.</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Socials</h4>
            <ul className="space-y-2 text-blue-100/50">
              {[["@flux.fut",LINKS.tiktokTactics],["@moreflux",LINKS.tiktokTrading],["@fluxevolutions",LINKS.tiktokComp],["Instagram",LINKS.instagram],["YouTube",LINKS.youtube]].map(([label,href])=>(
                <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Community</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={LINKS.discordFree} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Free Discord</a></li>
              <li><a href={LINKS.discordPremium} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Premium Discord</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Products</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={LINKS.whop} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Whop Store</a></li>
              <li><a href={LINKS.gumroad} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Gumroad</a></li>
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
function DiscordIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>;
}
function WhopIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className ?? "w-5 h-5"}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
}
