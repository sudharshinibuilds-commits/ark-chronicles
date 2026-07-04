"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import type { NavLink } from "./homepageData";

type SidebarProps = {
  navLinks: NavLink[];
};

export default function Sidebar({ navLinks }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sidebarItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "Chronicles", href: "/chronicles", icon: "📰" },
    { label: "Founders", href: "/founders", icon: "👤" },
    { label: "Magazines", href: "/magazines", icon: "📚" },
    { label: "Research", href: "/research", icon: "🔬" },
    { label: "Investors", href: "/investors", icon: "💼" },
    { label: "Opportunities", href: "/opportunities", icon: "🚀" },
    { label: "College Collabs", href: "/college-collabs", icon: "🎓" },
    { label: "Submit Story", href: "/submit-story", icon: "✍️" },
    { label: "About Us", href: "/about", icon: "ℹ️" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col fixed left-0 top-0 h-full transition-all duration-300 z-40 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
        style={{ backgroundColor: "#1B2A6B" }}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {!isCollapsed && (
            <div className="flex-1">
              <div className="font-display text-lg font-black uppercase tracking-wider text-white">
                <span style={{ color: "#D4A017" }}>A.R.K</span>
              </div>
              <div className="text-[9px] font-black uppercase tracking-wider text-zinc-400" style={{ letterSpacing: "2px" }}>
                CHRONICLES
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-2 rounded-full p-2 text-white transition-all duration-150 hover:bg-white/10"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isCollapsed ? (
                <path d="M9 18l6-6-6-6" />
              ) : (
                <path d="M15 18l-6-6 6-6" />
              )}
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 text-white transition-all duration-150 hover:bg-white/10 ${
                isCollapsed ? "justify-center" : "gap-3"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          {!isCollapsed && (
            <div className="text-xs text-zinc-400 text-center">
              © 2024 ARK Chronicles
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Sidebar Toggle */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-150 hover:scale-105"
        style={{ backgroundColor: "#1B2A6B" }}
        aria-label="Open navigation"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-72 z-50 lg:hidden"
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
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-full p-2 text-white transition-all duration-150 hover:bg-white/10"
                  aria-label="Close navigation"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white transition-all duration-150 hover:bg-white/10"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t border-white/10">
                <div className="text-xs text-zinc-400 text-center">
                  © 2024 ARK Chronicles
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
