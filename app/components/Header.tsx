"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { CityLink, NavLink } from "./homepageData";

type HeaderProps = {
  currentDate: string;
  navLinks: NavLink[];
  cityLinks: CityLink[];
};

function ArkWordmark() {
  return (
    <div className="leading-tight">
      <div className="font-display text-xl font-black uppercase tracking-[0.22em] sm:text-2xl">
        <span style={{ color: "#D4A017" }}>A.R.K</span>
        <span className="ml-3" style={{ color: "#0A0A0A" }}>CHRONICLES</span>
      </div>
      <div className="mt-1 text-[9px] font-black uppercase" style={{ letterSpacing: "2px", color: "#888888" }}>
        Architects of Rising Knowledge
      </div>
    </div>
  );
}

const drawerLinks = [
  { icon: "🏠", label: "Home", href: "/" },
  { icon: "📰", label: "Chronicles", href: "/chronicles" },
  { icon: "👤", label: "Founders", href: "/founders" },
  { icon: "📚", label: "Magazines", href: "/magazines" },
  { icon: "🔬", label: "Research", href: "/research" },
  { icon: "💼", label: "Investors", href: "/investors" },
  { icon: "🌟", label: "Opportunities", href: "/opportunities" },
  { icon: "🎓", label: "College Collabs", href: "/college-collabs" },
  { icon: "📝", label: "Submit Story", href: "/submit-story" },
  { icon: "ℹ️", label: "About Us", href: "/about" },
  { icon: "🏆", label: "Rewards", href: "/rewards" },
  { icon: "🔒", label: "Admin", href: "/admin" },
];

function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Dark overlay behind drawer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: 99998,
            }}
          />
          {/* Drawer itself */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "280px",
              height: "100vh",
              backgroundColor: "#1B2A6B",
              zIndex: 99999,
              overflowY: "auto",
              boxShadow: "4px 0 24px rgba(0,0,0,0.3)",
            }}
          >
            {/* Drawer header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
            }}>
              <div>
                <div style={{
                  color: "#D4A017",
                  fontWeight: 900,
                  fontSize: "18px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}>
                  ARK CHRONICLES
                </div>
                <div style={{
                  color: "#FFFFFF",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginTop: "4px",
                  opacity: 0.7,
                }}>
                  Architects of Rising Knowledge
                </div>
              </div>
              <button
                onClick={onClose}
                style={{
                  color: "#FFFFFF",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav style={{ padding: "12px 0" }}>
              {drawerLinks.map((item) => {
                const isActive = item.href === "/" 
                  ? pathname === "/" 
                  : pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 20px",
                      color: isActive ? "#D4A017" : "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "15px",
                      fontWeight: 600,
                      backgroundColor: isActive 
                        ? "rgba(212,160,23,0.15)" 
                        : "transparent",
                      borderLeft: isActive 
                        ? "3px solid #D4A017" 
                        : "3px solid transparent",
                      transition: "all 0.15s ease",
                    }}
                    onMouseOver={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "rgba(255,255,255,0.1)";
                      el.style.color = "#D4A017";
                    }}
                    onMouseOut={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = isActive 
                        ? "rgba(212,160,23,0.15)" 
                        : "transparent";
                      el.style.color = isActive ? "#D4A017" : "#FFFFFF";
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function Header({ currentDate, navLinks, cityLinks }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white border-b border-black/10" style={{ zIndex: 1000 }}>
        {/* Top black bar */}
        <div style={{ backgroundColor: "#0A0A0A", color: "#fff" }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
            <div className="hidden sm:block">{currentDate}</div>
            <div style={{ color: "#D4A017", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", fontSize: "11px" }}>
              Architects of Rising Knowledge
            </div>
            <div className="hidden items-center gap-4 md:flex">
              {cityLinks.map((city) => (
                <Link key={city.label} href={city.href} style={{ color: "#ccc", fontSize: "11px", textDecoration: "none" }}>
                  {city.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            {/* Left: hamburger + logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(true)}
                style={{
                  background: "none",
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  color: "#0A0A0A",
                }}
              >
                <span style={{ width: "20px", height: "2px", backgroundColor: "currentColor", display: "block" }} />
                <span style={{ width: "20px", height: "2px", backgroundColor: "currentColor", display: "block" }} />
                <span style={{ width: "20px", height: "2px", backgroundColor: "currentColor", display: "block" }} />
              </button>
              <Link href="/" style={{ textDecoration: "none" }}>
                <ArkWordmark />
              </Link>
            </div>

            {/* Right: buttons only */}
            <div className="flex items-center gap-3">
              <Link
                href="/submit-story"
                className="hidden sm:block"
                style={{
                  border: "1px solid #1B2A6B",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1B2A6B",
                  textDecoration: "none",
                }}
              >
                Submit Story
              </Link>
              <Link
                href="#"
                style={{
                  border: "1px solid rgba(27,42,107,0.3)",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1B2A6B",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
              <Link
                href="#"
                style={{
                  backgroundColor: "#1B2A6B",
                  color: "#FFFFFF",
                  borderRadius: "999px",
                  padding: "8px 20px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "none",
                }}
              >
                Join Ark
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Menu drawer rendered at body level - always on top */}
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}