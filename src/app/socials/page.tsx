"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import SectionDivider from "../components/SectionDivider";
import Particles from "../components/Particles";

const LINKS = {
  fluxfut:        "https://www.tiktok.com/@flux.fut",
  moreflux:       "https://www.tiktok.com/@moreflux",
  fluxevolutions: "https://www.tiktok.com/@fluxevolutions",
  instagram:      "https://instagram.com/fluxfut",
  youtube:        "https://youtube.com/@fluxfut",
};

export default function SocialsPage() {
  return (
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
      <section id="top" className="relative min-h-[40vh] sm:min-h-[55vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-4 sm:gap-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-blue-500/[0.07] rounded-full blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Follow the Flux
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
          Everywhere<br /><span className="text-blue-400">We Play.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 }}
          className="text-base sm:text-xl md:text-2xl text-blue-100/70 max-w-2xl">
          5 channels across TikTok, YouTube and Instagram — all posting daily.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-2">
          {["3 TikTok Accounts", "34K+ Followers", "Daily Content"].map((l) => (
            <span key={l} className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-blue-400/15 text-blue-100/60 text-sm">{l}</span>
          ))}
        </motion.div>
      </section>

      <SectionDivider />

      {/* ── FOLLOWER STATS ── */}
      <section className="py-8 sm:py-16 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: "TikTok",    value: "15K+", icon: <TikTokIcon /> },
              { label: "Instagram", value: "1K+",  icon: <InstagramIcon /> },
              { label: "YouTube",   value: "18K+", icon: <YouTubeIcon /> },
            ].map((stat) => (
              <div key={stat.label} className="p-4 sm:p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.07] to-transparent text-center">
                <div className="flex justify-center mb-3 text-blue-300/60">{stat.icon}</div>
                <p className="text-2xl sm:text-3xl font-semibold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-blue-100/50 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ── FLUXFUT ── */}
      <section id="fluxfut" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-blue-400"><TikTokIcon /></div>
              <h2 className="text-3xl sm:text-5xl font-semibold">FluxFut</h2>
            </div>
            <p className="text-center text-blue-400/70 text-sm mb-1">@flux.fut</p>
            <p className="text-center text-blue-100/50 mb-8 sm:mb-12 max-w-xl mx-auto">
              The main account. Best meta cards, top players for every budget and the top 10 at every position.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="text-center">
              <a href={LINKS.fluxfut} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-500/15 border border-blue-400/25 text-blue-200 font-medium hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200">
                  <TikTokIcon /> Follow on TikTok
                </motion.div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* ── MOREFLUX ── */}
      <section id="moreflux" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-sky-200"><TikTokIcon /></div>
              <h2 className="text-3xl sm:text-5xl font-semibold">MoreFlux</h2>
            </div>
            <p className="text-center text-sky-300/70 text-sm mb-1">@moreflux</p>
            <p className="text-center text-blue-100/50 mb-8 sm:mb-12 max-w-xl mx-auto">
              The fun side of FluxFut. Series content, viral formats, nostalgia and everything entertaining about FC.
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-center text-xs text-blue-300/50 tracking-widest uppercase mb-6">Featured posts</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              {["7633414775728393475", "7629834356265110806"].map((id) => (
                <div key={id} className="rounded-2xl overflow-hidden border border-blue-400/10 flex-shrink-0">
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${id}`}
                    width="325"
                    height="740"
                    allow="encrypted-media"
                    allowFullScreen
                    style={{ border: "none", display: "block" }}
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href={LINKS.moreflux} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-sky-400/15 border border-sky-300/25 text-sky-100 font-medium hover:bg-sky-400 hover:border-sky-400 hover:text-white transition-all duration-200">
                  <TikTokIcon /> Follow on TikTok
                </motion.div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* ── FLUXEVOLUTIONS ── */}
      <section id="fluxevolutions" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-green-400"><TikTokIcon /></div>
              <h2 className="text-3xl sm:text-5xl font-semibold">FluxEvolutions</h2>
            </div>
            <p className="text-center text-green-400/70 text-sm mb-1">@fluxevolutions</p>
            <p className="text-center text-blue-100/50 mb-8 sm:mb-12 max-w-xl mx-auto">
              Every FC26 Evolution covered — which evos are worth it, best paths and hidden value picks.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="text-center">
              <a href={LINKS.fluxevolutions} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-green-500/15 border border-green-400/25 text-green-200 font-medium hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-200">
                  <TikTokIcon /> Follow on TikTok
                </motion.div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* ── YOUTUBE ── */}
      <section id="youtube" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-red-400"><YouTubeIcon /></div>
              <h2 className="text-3xl sm:text-5xl font-semibold">YouTube</h2>
            </div>
            <p className="text-center text-red-400/70 text-sm mb-1">FluxFut</p>
            <p className="text-center text-blue-100/50 mb-8 sm:mb-12 max-w-xl mx-auto">
              Every TikTok posted daily as Shorts — meta cards, fun series and evo guides all in one place.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="text-center">
              <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-red-500/15 border border-red-400/25 text-red-200 font-medium hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-200">
                  <YouTubeIcon /> Subscribe · 18K
                </motion.div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* ── INSTAGRAM ── */}
      <section id="instagram" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-orange-400"><InstagramIcon /></div>
              <h2 className="text-3xl sm:text-5xl font-semibold">Instagram</h2>
            </div>
            <p className="text-center text-orange-400/70 text-sm mb-1">@FluxFut</p>
            <p className="text-center text-blue-100/50 mb-8 sm:mb-12 max-w-xl mx-auto">
              Reels from all three TikTok accounts, plus exclusive posts with squad builds, card ratings and tier lists.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="text-center">
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-orange-500/15 border border-orange-400/25 text-orange-200 font-medium hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200">
                  <InstagramIcon /> Follow · 1K
                </motion.div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* ── FOOTER CTA ── */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 text-center border-t border-blue-400/10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Never Miss a Drop.</h2>
          <p className="text-blue-100/60 text-lg mb-10 max-w-md mx-auto">Follow them all and you'll never be behind.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "@flux.fut",       href: LINKS.fluxfut,        icon: <TikTokIcon />,    color: "border-blue-400/20 bg-blue-500/[0.07] text-blue-200 hover:bg-blue-500/20 hover:text-white" },
              { label: "@moreflux",       href: LINKS.moreflux,       icon: <TikTokIcon />,    color: "border-sky-400/20 bg-sky-500/[0.07] text-sky-200 hover:bg-sky-500/20 hover:text-white" },
              { label: "@fluxevolutions", href: LINKS.fluxevolutions,  icon: <TikTokIcon />,    color: "border-green-400/20 bg-green-500/[0.07] text-green-200 hover:bg-green-500/20 hover:text-white" },
              { label: "Instagram",       href: LINKS.instagram,       icon: <InstagramIcon />, color: "border-orange-400/20 bg-orange-500/[0.07] text-orange-200 hover:bg-orange-500/20 hover:text-white" },
              { label: "YouTube",         href: LINKS.youtube,         icon: <YouTubeIcon />,   color: "border-red-400/20 bg-red-500/[0.07] text-red-200 hover:bg-red-500/20 hover:text-white" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-2 ${s.color}`}>
                  <span className="w-4 h-4">{s.icon}</span>{s.label}
                </motion.div>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 sm:py-16 border-t border-blue-400/10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold text-white mb-2">FluxFut</p>
            <p className="text-blue-100/40 text-xs leading-relaxed max-w-[180px]">EAFC tactics, trading and content.</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">TikTok</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={LINKS.fluxfut} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@flux.fut</a></li>
              <li><a href={LINKS.moreflux} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@moreflux</a></li>
              <li><a href={LINKS.fluxevolutions} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@fluxevolutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">More Socials</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a></li>
              <li><a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Community</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href="/discord" className="hover:text-blue-400 transition-colors">Discord</a></li>
              <li><a href="/store" className="hover:text-blue-400 transition-colors">Store</a></li>
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
