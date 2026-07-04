"use client";

import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";
import { useState } from "react";

export default function SubmitStoryPage() {
  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const [status, setStatus] = useState<"draft" | "review" | "published">("draft");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Header
        currentDate={currentDate}
        navLinks={[
          { label: "Home", href: "/" },
          { label: "Chronicles", href: "/chronicles" },
          { label: "Founders", href: "/founders" },
          { label: "Research", href: "/research" },
          { label: "Investors", href: "/investors" },
          { label: "Opportunities", href: "/opportunities" },
          { label: "Submit Story", href: "/submit-story" },
          { label: "About Us", href: "/about" },
        ]}
        cityLinks={[
          { label: "Bengaluru", href: "#" },
          { label: "Mumbai", href: "#" },
          { label: "Delhi", href: "#" },
          { label: "Hyderabad", href: "#" },
        ]}
      />
      <LiveTicker
        items={[
          "Zyra Bio closes a $14M seed round to scale climate-first materials for advanced manufacturing.",
          "Founders in Bengaluru launch a cross-border fintech rail for emerging market exporters.",
          "ARK Research briefs investors on AI-native industrial software and deep-tech resilience.",
          "Mumbai mobility startup reports 3x retention growth after rolling out community-led fleet financing.",
          "Delhi health-tech collective opens applications for its women-led diagnostics accelerator cohort.",
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl font-bold text-ark-black">Submit Your Story</h1>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${status === "draft" ? "bg-ark-navy" : "bg-zinc-300"}`} />
            <span className={`text-sm font-medium ${status === "draft" ? "text-ark-navy" : "text-zinc-400"}`}>Draft</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${status === "review" ? "bg-ark-navy" : "bg-zinc-300"}`} />
            <span className={`text-sm font-medium ${status === "review" ? "text-ark-navy" : "text-zinc-400"}`}>Review</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${status === "published" ? "bg-ark-navy" : "bg-zinc-300"}`} />
            <span className={`text-sm font-medium ${status === "published" ? "text-ark-navy" : "text-zinc-400"}`}>Published</span>
          </div>
        </div>

        {submitted ? (
          <div className="mt-10 overflow-hidden rounded-2xl border border-ark-gold/30 bg-ark-gold/10 p-8 text-center">
            <div className="text-6xl">✅</div>
            <h2 className="mt-4 font-display text-2xl font-bold text-ark-black">Story Submitted Successfully!</h2>
            <p className="mt-2 text-zinc-700">Your story is now under review. We'll get back to you within 48 hours.</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full bg-ark-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:scale-105 hover:bg-[#22378c]"
            >
              Submit Another Story
            </button>
          </div>
        ) : (
          <form className="mt-10 overflow-hidden rounded-2xl border border-black/8 bg-white p-8 shadow-lg">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-ark-black">Headline</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="Enter your story headline"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ark-black">Author Name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ark-black">College/University</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="Your institution"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ark-black">LinkedIn Profile</label>
                <input
                  type="url"
                  className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-ark-black">Category</label>
              <select className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy">
                <option>Select a category</option>
                <option>Founder Story</option>
                <option>Startup Journey</option>
                <option>Industry Insights</option>
                <option>Research & Analysis</option>
                <option>Product & Tech</option>
                <option>Markets & Trends</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-ark-black">Content</label>
              <textarea
                rows={10}
                className="mt-1 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                placeholder="Write your story here..."
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-ark-black">Featured Image</label>
              <div className="mt-1 flex items-center gap-4">
                <label className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 px-4 py-3 text-sm text-zinc-600 hover:border-ark-navy">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  Upload Image
                  <input type="file" accept="image/*" className="hidden" />
                </label>
                <span className="text-xs text-zinc-500">Max size: 5MB. Recommended: 1200x630px</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitted(true);
                setStatus("review");
              }}
              className="mt-8 w-full rounded-full bg-ark-navy px-6 py-4 text-sm font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:bg-[#22378c]"
            >
              Submit Story
            </button>
          </form>
        )}
      </div>

      <Footer />
      <AudioPlayer />
    </main>
  );
}
