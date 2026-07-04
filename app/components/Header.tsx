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
          <Link
            href="#"
            className="transition-transform duration-150 hover:scale-[1.02]"
          >
            <ArkWordmark />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ark-black transition-all duration-150 hover:scale-105 hover:text-ark-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#"
              className="rounded-full border border-ark-navy/20 px-4 py-2 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              Login
            </Link>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#"
                className="rounded-full bg-ark-navy px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ark-navy/20 transition-colors duration-150 hover:bg-[#22378c]"
              >
                Join Ark
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-ark-black transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:text-ark-navy lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-b border-black/8 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-ark-black transition-colors duration-150 hover:text-ark-navy"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-black/8 pt-4">
                <Link
                  href="#"
                  className="rounded-full border border-ark-navy/20 px-4 py-3 text-center text-sm font-medium text-ark-navy transition-all duration-150 hover:border-ark-navy hover:bg-ark-navy/5"
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-ark-navy px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#22378c]"
                >
                  Join Ark
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 border-t border-black/8 pt-4 text-xs text-zinc-500 sm:hidden">
                {cityLinks.map((city) => (
                  <Link key={city.label} href={city.href}>
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
