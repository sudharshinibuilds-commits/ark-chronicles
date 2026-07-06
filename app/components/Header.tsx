"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

function MenuItemIcon() {
  return (
    <svg
      className="mobile-menu-icon h-5 w-5 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="3.5" fill="currentColor" />
      <path
        d="M15.5 10H18M2 10H4.5M10 2V4.5M10 15.5V18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header({
  currentDate,
  navLinks,
  cityLinks,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

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
              className="mobile-menu-backdrop"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mobile-menu overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <div>
                  <div className="mobile-menu-title font-display text-lg font-black uppercase tracking-[0.28em]">
                    ARK CHRONICLES
                  </div>
                  <div
                    className="mobile-menu-title mt-2 text-[10px] font-semibold uppercase tracking-[0.35em]"
                  >
                    Architects of Rising Knowledge
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="mobile-menu-close rounded-full p-2 transition-all duration-150 hover:bg-white/10"
                  aria-label="Close navigation"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col px-5 py-6">
                {navLinks.map((item) => {
                  const isActive =
                    item.label === "Home"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href) && item.href !== "#";

                  return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`mobile-menu-link flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all duration-150 hover:bg-white/10 ${
                      isActive ? "mobile-menu-link-active" : ""
                    }`}
                  >
                    <MenuItemIcon />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                      {item.label}
                    </span>
                  </Link>
                  );
                })}
              </nav>

              <div className="border-t border-white/10 p-5">
                <div className="flex flex-col gap-3">
                  <Link
                    href="/submit-story"
                    onClick={() => setMenuOpen(false)}
                    className="mobile-menu-action rounded-full border border-white/20 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-150 hover:border-white hover:bg-white/10"
                  >
                    Submit Story
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="mobile-menu-action rounded-full border border-white/20 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-150 hover:border-white hover:bg-white/10"
                  >
                    Login
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="mobile-menu-action rounded-full border border-white/20 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-150 hover:bg-white/10"
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
