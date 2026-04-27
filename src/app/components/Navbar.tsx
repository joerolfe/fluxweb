"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Socials", href: "/socials" },
  { label: "Store",   href: "/store" },
  { label: "Discord", href: "/discord" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#020617]/70 border-b border-blue-400/10" : "bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

          {/* Logo */}
          <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group">
            <div className="flex items-center gap-3 cursor-pointer">
              <Image
                src="/fluxfut.logo.png"
                alt="FluxFut Logo"
                width={44}
                height={44}
                priority
                className="drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-sm">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} href={href}
                  className={`relative transition-colors duration-300 group ${isActive ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
                  {label}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a href="https://discord.gg/HJCn7YZCC3" target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/15 border border-blue-400/25 text-blue-200 text-sm font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200">
            <DiscordIcon className="w-4 h-4" />
            Join Discord
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white rounded-full block origin-center" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }} transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white rounded-full block" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white rounded-full block origin-center" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#080f1f] border-l border-blue-400/10 flex flex-col md:hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-blue-400/10">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image src="/fluxfut.logo.png" alt="FluxFut" width={36} height={36} />
                </Link>
                <button onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-blue-100/60 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 px-4 py-6 space-y-1">
                {navLinks.map(({ label, href }) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === href ? "text-blue-400 bg-blue-500/10" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}>
                    {label}
                  </Link>
                ))}
              </div>

              {/* Bottom CTAs */}
              <div className="px-4 py-6 border-t border-blue-400/10 space-y-3">
                <a href="https://discord.gg/HJCn7YZCC3" target="_blank" rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-400 transition-colors duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <DiscordIcon className="w-4 h-4" />
                  Join Free Discord
                </a>
                <Link href="/store" onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-xl border border-blue-400/25 text-blue-200 text-sm font-medium hover:bg-blue-500/10 transition-colors duration-200">
                  View Store
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}>
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
    </svg>
  );
}
