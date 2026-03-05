"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import FadeUp from "../components/FadeUp";
import SectionDivider from "../components/SectionDivider";
import Particles from "../components/Particles";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const GUMROAD = "https://fluxfut.gumroad.com"; // ← update to direct product link when live

const features = [
  "How to pick your niche & content pillars",
  "Setting up 3 TikTok accounts the right way",
  "Short-form content strategy that actually grows",
  "How to cross-post to YouTube, Instagram & X",
  "Building a Discord community from zero",
  "Monetising with Gumroad, Whop & premium tiers",
  "Branding, logo & aesthetic — done on a budget",
  "The exact posting schedule FluxFut used to grow",
  "How to get your first 1,000 followers fast",
  "Mistakes to avoid when starting out",
];

const faqs = [
  {
    q: "Do I need any experience to follow this guide?",
    a: "None at all. The guide is written for complete beginners — it covers everything from picking a niche to publishing your first piece of content.",
  },
  {
    q: "Is this specific to football / EAFC content?",
    a: "The framework works for any niche. EAFC is used as the worked example throughout, but every step applies to gaming, sports, lifestyle, or any content-driven brand.",
  },
  {
    q: "What format is the product?",
    a: "It's a digital PDF guide with step-by-step instructions, templates and checklists. Instant download via Gumroad after purchase.",
  },
  {
    q: "Will this be updated over time?",
    a: "Yes. Anyone who purchases gets free updates for life as platforms change and new strategies get added.",
  },
];

export default function StorePage() {
  return (
    <PageTransition>
    <main className="relative text-white pt-20 overflow-hidden">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(circle at 20% 30%, rgba(37,99,235,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.45), transparent 45%), radial-gradient(circle at 50% 50%, rgba(29,78,216,0.4), transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>
      <Particles />
      <Navbar />

      {/* ── HERO ── */}
      <section id="top" className="relative min-h-[45vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-4 sm:gap-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] bg-blue-500/[0.07] rounded-full blur-3xl" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Digital Guide · On Gumroad
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
          Build a Brand<br /><span className="text-blue-400">Like FluxFut.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 }}
          className="text-base sm:text-xl md:text-2xl text-blue-100/70 max-w-2xl">
          The exact blueprint used to build FluxFut from zero — content strategy, platform setup, community building and monetisation.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3">
          {["Instant PDF Download", "Beginner Friendly", "Free Lifetime Updates"].map((l) => (
            <span key={l} className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-blue-400/15 text-blue-100/60 text-sm">
              <span className="text-blue-400 mr-1.5 text-xs">◈</span>{l}
            </span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.55 }}>
          <a href={GUMROAD} target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-500 text-white font-semibold text-lg hover:bg-blue-400 transition-all duration-200 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
              <GumroadIcon className="w-5 h-5" />
              Get the Guide · £10–£25
            </motion.div>
          </a>
        </motion.div>
      </section>

      <SectionDivider />

      {/* ── PRODUCT CARD ── */}
      <section id="product" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-3">What's Inside</h2>
            <p className="text-center text-blue-100/50 mb-8 sm:mb-16 max-w-xl mx-auto">
              A complete, no-fluff roadmap for building a content brand from scratch.
            </p>
          </FadeIn>

          <FadeUp>
            <div className="relative rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.1] via-blue-500/[0.04] to-transparent overflow-hidden">

              {/* Glow corners */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/[0.08] rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 grid md:grid-cols-2 gap-0">

                {/* Left — info */}
                <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-blue-400/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-blue-300">
                      <BrandIcon />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                      ✦ New Release
                    </span>
                  </div>

                  <p className="text-xs text-blue-100/40 uppercase tracking-widest mb-2">via Gumroad</p>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                    How to Start Your Own Brand
                  </h3>
                  <p className="text-blue-400/80 text-sm mb-6">The FluxFut Blueprint</p>

                  <div className="flex items-end gap-3 mb-6">
                    <p className="text-5xl font-semibold text-white">£10<span className="text-2xl text-blue-100/40">–£25</span></p>
                  </div>

                  <p className="text-blue-100/60 text-sm leading-relaxed mb-8">
                    Everything you need to go from zero to a real content brand with multiple platforms, an engaged community and actual income. Written by someone who did it.
                  </p>

                  <a href={GUMROAD} target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      className="w-full py-3.5 rounded-xl bg-blue-500 text-white font-medium text-center hover:bg-blue-400 transition-all duration-200 shadow-[0_0_25px_rgba(59,130,246,0.35)] flex items-center justify-center gap-2 cursor-pointer">
                      <GumroadIcon className="w-4 h-4" />
                      Buy on Gumroad
                    </motion.div>
                  </a>
                </div>

                {/* Right — features */}
                <div className="p-8 sm:p-12">
                  <p className="text-xs text-blue-100/40 uppercase tracking-widest mb-6">What you'll learn</p>
                  <ul className="space-y-3">
                    {features.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-start gap-3 text-blue-100/75 text-sm"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-[10px] flex-shrink-0 mt-0.5">✓</span>
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionDivider />

      {/* ── WHO IT'S FOR ── */}
      <section className="py-8 sm:py-16 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "🎮", title: "Content Creators", desc: "You want to build an audience around gaming or any niche but don't know where to start." },
              { icon: "📈", title: "Aspiring Entrepreneurs", desc: "You want to turn a passion into income through digital products and community building." },
              { icon: "🚀", title: "Complete Beginners", desc: "Zero followers, zero experience. This guide starts from absolute scratch and holds nothing back." },
            ].map((item) => (
              <div key={item.title} className="p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent text-center hover:border-blue-400/25 transition-all duration-300">
                <p className="text-3xl mb-3">{item.icon}</p>
                <p className="font-semibold text-white mb-2">{item.title}</p>
                <p className="text-blue-100/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ── FAQ ── */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-8 sm:mb-16">FAQs</h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── FINAL CTA ── */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 text-center border-t border-blue-400/10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            Ready to Build Your Brand?
          </h2>
          <p className="text-blue-100/60 text-lg mb-10 max-w-md mx-auto">
            Get the exact blueprint. Instant download. Start today.
          </p>
          <a href={GUMROAD} target="_blank" rel="noopener noreferrer">
            <Button>Get the Guide on Gumroad →</Button>
          </a>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 sm:py-16 border-t border-blue-400/10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold text-white mb-2">FluxFut</p>
            <p className="text-blue-100/40 text-xs leading-relaxed max-w-[180px]">Elite EAFC tactics, trading & competitive gameplay.</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Products</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={GUMROAD} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Brand Blueprint</a></li>
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
    </PageTransition>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      onClick={() => setOpen((v) => !v)}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
        open ? "border-blue-400/30 bg-blue-500/[0.07]" : "border-blue-400/10 bg-blue-500/[0.03] hover:border-blue-400/20"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <p className="text-sm sm:text-base font-medium text-white/90 text-left">{q}</p>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: "hidden" }}
      >
        <p className="px-6 pb-5 text-sm text-blue-100/60 leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

import React from "react";

function BrandIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>;
}
function GumroadIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16A8 8 0 0112 4zm1 3.5h-2v5l4.5 2.7.75-1.23-3.25-1.97V7.5z"/></svg>;
}
