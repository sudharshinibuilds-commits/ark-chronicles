"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import type { CityLink, NavLink } from "./homepageData";

type HeaderProps = {
  currentDate: string;
  navLinks: NavLink[];
  cityLinks: CityLink[];
};

function ArkWordmark() {
  return (
    <div className="leading-tight">
      <div className="font-display text-xl font-black uppercase tracking-[0.22em] sm:text-2xl" style={{ fontWeight: 900 }}>
        <span className="text-ark-gold" style={{ color: "#D4A017" }}>A.R.K</span>
        <span className="ml-3 text-ark-black">CHRONICLES</span>
      </div>
      <div className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 sm:text-[9px]" style={{ fontWeight: 900, letterSpacing: "2px" }}>
        Architects of Rising Knowledge
      </div>
    </div>
  );
}

const menuItems = [
  { icon: "🏠", label: "Home", href: "/" },
  { icon: "📰", label: "Chronicles", href: "/chronicles" },
  { icon: "👤", label: "Founders", href: "/founders" },
  { icon: "📚", label: "Magazines", href: "/magazines" },
  { icon: "🔬", label: "Research", href: "/research" },
  { icon: "💼", label: "Investors", href: "/investors" },
  { icon: "🌟", label: "Opportunities", href: "/opportunities" },
  { icon: "🎓", label: "College Collabs", href: "/college-collabs" },
  { icon: "ℹ️", label: "About Us", href: "/about" },
  { icon: "🏆", label: "Rewards", href: "/rewards" },
  { icon: "🔒", label: "Admin", href: "/admin" },
];

export default function Header({
  currentDate,
  navLinks,
  cityLinks,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="bg-ark-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] sm:px-6 lg:px-8">
          <div className="hidden sm:block">{currentDate}</div>
          <div className="mx-auto text-center font-semibold uppercase tracking-[0.35em] text-ark-gold">
            Architects of Rising Knowledge
          </div>
          <div className="hidden items-center gap-4 text-zinc-300 md:flex">
            {cityLinks.map((city) => (
              <Link
                key={city.label}
                href={city.href}
                className="transition-colors duration-150 hover:text-ark-gold"
              >
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-black/8 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-ark-black transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:text-ark-navy"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </div>
            </button>
            <Link
              href="/"
              className="transition-transform duration-150 hover:scale-[1.02]"
            >
              <ArkWordmark />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/submit-story"
              className="hidden sm:block rounded-full border border-ark-navy/20 px-4 py-2 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              Submit Story
            </Link>
            <Link
              href="#"
              className="rounded-full border border-ark-navy/20 px-4 py-2 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              Login
            </Link>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#"
                className="rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-all duration-150 hover:scale-105"
                style={{ backgroundColor: "#1B2A6B", color: "#FFFFFF", fontWeight: 700 }}
              >
                Join Ark
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 z-50 overflow-y-auto"
              style={{ backgroundColor: "#1B2A6B" }}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div>
                  <div className="font-display text-lg font-black uppercase tracking-wider text-white">
                    <span style={{ color: "#D4A017" }}>A.R.K</span>
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-zinc-400" style={{ letterSpacing: "2px" }}>
                    CHRONICLES
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full p-2 text-white transition-all duration-150 hover:bg-white/10"
                  aria-label="Close navigation"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="py-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white transition-all duration-150 hover:bg-white/10"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t border-white/10">
                <div className="flex flex-col gap-3">
                  <Link
                    href="/submit-story"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full border border-white/20 px-4 py-3 text-center text-sm font-medium text-white transition-all duration-150 hover:border-white hover:bg-white/10"
                  >
                    Submit Story
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full border border-white/20 px-4 py-3 text-center text-sm font-medium text-white transition-all duration-150 hover:border-white hover:bg-white/10"
                  >
                    Login
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-150 hover:scale-105"
                    style={{ backgroundColor: "#D4A017", color: "#1B2A6B", fontWeight: 700 }}
                  >
                    Join Ark
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
