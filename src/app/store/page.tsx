"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import FadeUp from "../components/FadeUp";
import StaggerContainer from "../components/StaggerContainer";
import SectionDivider from "../components/SectionDivider";
import Particles from "../components/Particles";
import Button from "../components/Button";

// ── REPLACE THESE ──────────────────────────────────────────────────────────
const LINKS = {
  whop:    "https://whop.com/REPLACE",
  gumroad: "https://fluxfut.gumroad.com",
};
// ──────────────────────────────────────────────────────────────────────────

const products = [
  {
    id:"coaching",
    store:"Whop",
    storeHref:LINKS.whop,
    badge:"Most Popular",
    badgeStyle:"bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]",
    title:"1-on-1 Coaching",
    subtitle:"Personal mentorship sessions",
    price:"From £19.99",
    desc:"Direct coaching with FluxFut experts. We analyse your gameplay, identify weaknesses and build a personalised improvement plan around your playstyle.",
    features:["Full gameplay review","Custom tactic build","Live session via Discord","Follow-up feedback","Weakness analysis","Replay breakdown"],
    accent:"rgba(59,130,246,0.2)",
    icon:<CoachIcon/>,
  },
  {
    id:"courses",
    store:"Gumroad",
    storeHref:LINKS.gumroad,
    badge:"Best Value",
    badgeStyle:"bg-emerald-500/20 border border-emerald-400/40 text-emerald-300",
    title:"Video Courses",
    subtitle:"Complete EAFC mastery series",
    price:"From £9.99",
    desc:"Structured video courses covering every aspect of EAFC — from beginner fundamentals to elite competitive play. Learn at your own pace, rewatch anytime.",
    features:["HD video lessons","Tactics deep-dives","Trading masterclass","Competitive mindset","Meta breakdowns","Lifetime access"],
    accent:"rgba(16,185,129,0.15)",
    icon:<CourseIcon/>,
  },
  {
    id:"trading",
    store:"Gumroad",
    storeHref:LINKS.gumroad,
    badge:"High ROI",
    badgeStyle:"bg-amber-500/20 border border-amber-400/40 text-amber-300",
    title:"Trading Guides",
    subtitle:"Coin-making strategies & alerts",
    price:"From £4.99",
    desc:"Proven trading methods, market timing strategies and SBC investment guides. Stop grinding, start profiting. Updated every major patch.",
    features:["Market timing guides","SBC profit methods","Player investment tips","Mass bidding strategies","Patch-by-patch updates","Instant download"],
    accent:"rgba(245,158,11,0.15)",
    icon:<TradingIcon/>,
  },
];

export default function StorePage() {
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
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Digital Products
        </motion.div>
        <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
          Level Up<br /><span className="text-blue-400">Your Game.</span>
        </motion.h1>
        <motion.p initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-100/70 max-w-2xl">
          Coaching, courses and trading guides — everything you need to dominate EAFC.
        </motion.p>
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-2">
          {["Instant Download","Expert-created","Updated Every Patch"].map((l) => (
            <span key={l} className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-blue-400/15 text-blue-100/60 text-sm">
              <span className="text-blue-400 mr-1.5 text-xs">◈</span>{l}
            </span>
          ))}
        </motion.div>
      </section>

      <SectionDivider />

      {/* STORE PILLS */}
      <section className="py-10 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
            <a href={LINKS.whop} target="_blank" rel="noopener noreferrer" className="flex-1">
              <motion.div whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                className="flex items-center justify-center gap-3 p-5 rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] hover:border-blue-400/40 hover:bg-blue-500/15 transition-all duration-200 cursor-pointer">
                <WhopIcon className="w-6 h-6 text-blue-400" />
                <div className="text-left">
                  <p className="font-semibold text-white text-sm">Whop Store</p>
                  <p className="text-xs text-blue-100/50">Coaching & premium products</p>
                </div>
                <ArrowIcon className="w-4 h-4 text-blue-400 ml-auto" />
              </motion.div>
            </a>
            <a href={LINKS.gumroad} target="_blank" rel="noopener noreferrer" className="flex-1">
              <motion.div whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                className="flex items-center justify-center gap-3 p-5 rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] hover:border-blue-400/40 hover:bg-blue-500/15 transition-all duration-200 cursor-pointer">
                <GumroadIcon className="w-6 h-6 text-pink-400" />
                <div className="text-left">
                  <p className="font-semibold text-white text-sm">Gumroad</p>
                  <p className="text-xs text-blue-100/50">Guides & digital downloads</p>
                </div>
                <ArrowIcon className="w-4 h-4 text-blue-400 ml-auto" />
              </motion.div>
            </a>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* PRODUCT CARDS */}
      <section id="products" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-4">What We Offer</h2>
            <p className="text-center text-blue-100/50 mb-16 max-w-xl mx-auto">
              Three product types, each built to target a specific part of your game.
            </p>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((p) => (
                <FadeUp key={p.id}>
                  <div id={p.id} className="group relative flex flex-col h-full p-8 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent overflow-hidden hover:border-blue-400/25 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background:`radial-gradient(circle at 50% 0%, ${p.accent}, transparent 60%)` }} />
                    <div className="relative z-10 flex flex-col h-full gap-4">
                      {/* Badge */}
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-blue-300">{p.icon}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${p.badgeStyle}`}>{p.badge}</span>
                      </div>
                      {/* Title */}
                      <div>
                        <p className="text-xs text-blue-100/40 uppercase tracking-widest mb-0.5">via {p.store}</p>
                        <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                        <p className="text-sm text-blue-400/70">{p.subtitle}</p>
                      </div>
                      {/* Price */}
                      <p className="text-3xl font-semibold text-white">{p.price}</p>
                      {/* Desc */}
                      <p className="text-blue-100/55 text-sm leading-relaxed">{p.desc}</p>
                      {/* Features */}
                      <ul className="space-y-2 flex-1">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-blue-100/70 text-sm">
                            <span className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-[10px] flex-shrink-0">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      {/* CTA */}
                      <a href={p.storeHref} target="_blank" rel="noopener noreferrer">
                        <motion.div whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                          className="mt-4 w-full py-3 rounded-xl bg-blue-500 text-white text-sm font-medium text-center hover:bg-blue-400 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.25)] cursor-pointer">
                          Get on {p.store} →
                        </motion.div>
                      </a>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* TRUST STRIP */}
      <section className="py-16 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { val:"500+", label:"Products Sold" },
              { val:"4.9★", label:"Average Rating" },
              { val:"Instant", label:"Download" },
              { val:"100%", label:"Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent">
                <p className="text-2xl font-semibold text-white mb-1">{s.val}</p>
                <p className="text-xs text-blue-100/50 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* FOOTER CTA */}
      <section className="py-24 px-4 sm:px-6 text-center border-t border-blue-400/10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Ready to Invest in Your Game?</h2>
          <p className="text-blue-100/60 text-lg mb-10 max-w-md mx-auto">Browse the full catalogue on Whop and Gumroad. New products added every patch.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={LINKS.whop} target="_blank" rel="noopener noreferrer"><Button>Browse Whop Store</Button></a>
            <a href={LINKS.gumroad} target="_blank" rel="noopener noreferrer"><Button variant="outline">Browse Gumroad</Button></a>
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
            <h4 className="font-medium text-white mb-4">Products</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={LINKS.whop} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Whop Store</a></li>
              <li><a href={LINKS.gumroad} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Gumroad</a></li>
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
            <h4 className="font-medium text-white mb-4">Socials</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href="/socials" className="hover:text-blue-400 transition-colors">All Channels</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-blue-100/30 text-xs mt-12">© {new Date().getFullYear()} FluxFut. All rights reserved.</p>
      </footer>

    </main>
  );
}

function CoachIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>;
}
function CourseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/></svg>;
}
function TradingIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>;
}
function WhopIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className ?? "w-5 h-5"}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
}
function GumroadIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16A8 8 0 0112 4zm1 3.5h-2v5l4.5 2.7.75-1.23-3.25-1.97V7.5z"/></svg>;
}
function ArrowIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className ?? "w-4 h-4"}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>;
}
