"use client";

import { motion } from "framer-motion";

const brandLetters = [
  { value: "A", className: "text-ark-black" },
  { value: ".", className: "text-ark-black" },
  { value: "R", className: "text-ark-navy" },
  { value: ".", className: "text-ark-black" },
  { value: "K", className: "text-ark-black" },
];

const bookPaths = [
  "M24 84C44 72 64 70 88 76",
  "M22 94C46 84 66 82 90 88",
  "M20 104C46 96 68 94 92 100",
  "M98 76C122 70 142 72 162 84",
  "M96 88C120 82 140 84 164 94",
  "M94 100C118 94 140 96 166 104",
];

const sunRays = [
  { x1: 63, y1: 42, x2: 48, y2: 22 },
  { x1: 79, y1: 34, x2: 69, y2: 10 },
  { x1: 95, y1: 30, x2: 95, y2: 6 },
  { x1: 111, y1: 34, x2: 121, y2: 10 },
  { x1: 127, y1: 42, x2: 142, y2: 22 },
  { x1: 141, y1: 53, x2: 160, y2: 39 },
];

function SunriseBookMark() {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 188 124"
      className="h-32 w-44 sm:h-36 sm:w-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.3 }}
    >
      {bookPaths.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 0.75 + index * 0.06,
            duration: 0.28,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.path
        d="M94 72L94 111"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.08, duration: 0.24, ease: "easeOut" }}
      />

      {sunRays.map((ray, index) => (
        <motion.line
          key={`${ray.x1}-${ray.y1}`}
          {...ray}
          stroke="#D4A017"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 1.05 + index * 0.08,
            duration: 0.22,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.path
        d="M55 68C67 46 82 35 95 35C108 35 123 46 135 68"
        fill="none"
        stroke="#D4A017"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.62, duration: 0.32, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex max-w-3xl flex-col items-center text-center">
        <div className="flex items-end gap-1 sm:gap-2">
          {brandLetters.map((letter, index) => (
            <motion.span
              key={`${letter.value}-${index}`}
              className={`font-display text-[56px] font-bold leading-none sm:text-[72px] ${letter.className}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.22,
                ease: "easeOut",
              }}
            >
              {letter.value}
            </motion.span>
          ))}
        </div>

        <div className="mt-6">
          <SunriseBookMark />
        </div>

        <motion.p
          className="mt-4 text-xl font-semibold tracking-[0.5em] text-ark-black sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.3, ease: "easeOut" }}
        >
          CHRONICLE
        </motion.p>

        <motion.div
          className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.45em] text-ark-navy sm:text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.35, ease: "easeOut" }}
        >
          <span className="h-px w-10 bg-ark-navy/40 sm:w-16" />
          <span>Architects of Rising Knowledge</span>
          <span className="h-px w-10 bg-ark-navy/40 sm:w-16" />
        </motion.div>
      </div>
    </motion.div>
  );
}
