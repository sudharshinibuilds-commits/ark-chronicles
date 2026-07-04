"use client";

import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";
import { useState } from "react";

export default function InvestorsPage() {
  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const [showModal, setShowModal] = useState(false);

  const investors = [
    { id: "1", name: "Aditya Vora", fund: "Vertex Ventures India", interests: ["AI/ML", "SaaS", "Fintech"], ticket: "$500K - $2M" },
    { id: "2", name: "Ritu Sharma", fund: "Blume Ventures", interests: ["Consumer", "HealthTech", "EdTech"], ticket: "$250K - $1M" },
    { id: "3", name: "Sameer Bhat", fund: "Accel India", interests: ["Enterprise", "DeepTech", "Climate"], ticket: "$1M - $5M" },
    { id: "4", name: "Leena Prakash", fund: "Sequoia Surge", interests: ["B2B", "Logistics", "Manufacturing"], ticket: "$1M - $3M" },
    { id: "5", name: "Vikram Mehta", fund: "Lightspeed India", interests: ["Consumer", "Fintech", "Marketplaces"], ticket: "$500K - $3M" },
    { id: "6", name: "Priya Nair", fund: "Elevation Capital", interests: ["HealthTech", "Biotech", "MedTech"], ticket: "$2M - $10M" },
  ];

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

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl font-bold text-ark-black">Investor Network</h1>
        
        <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-ark-navy/20 bg-ark-navy/5 p-6 sm:grid-cols-6">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">₹4500Cr</div>
            <div className="mt-1 text-sm text-zinc-600">Total AUM</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">120+</div>
            <div className="mt-1 text-sm text-zinc-600">Verified Angels</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">45</div>
            <div className="mt-1 text-sm text-zinc-600">VC Funds</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">850+</div>
            <div className="mt-1 text-sm text-zinc-600">Deals Closed</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">28</div>
            <div className="mt-1 text-sm text-zinc-600">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">92%</div>
            <div className="mt-1 text-sm text-zinc-600">Success Rate</div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {investors.map((investor) => (
            <div
              key={investor.id}
              className="overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg transition-all duration-150 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-ark-gold/20">
                  <img
                    src={`https://picsum.photos/seed/inv-${investor.id}/300/300`}
                    alt={investor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ark-black">{investor.name}</h3>
                  <p className="mt-1 text-sm font-medium text-ark-navy">{investor.fund}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {investor.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full bg-ark-navy px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <span className="text-sm font-semibold text-zinc-600">Ticket Size:</span>
                <span className="ml-2 text-sm font-bold text-ark-navy">{investor.ticket}</span>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="mt-4 w-full rounded-full border-2 border-ark-navy px-4 py-2.5 text-sm font-semibold text-ark-navy transition-all duration-150 hover:scale-105 hover:bg-ark-navy hover:text-white"
              >
                I'm Interested
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white p-6 shadow-2xl">
            <h2 className="font-display text-2xl font-bold text-ark-black">Express Interest</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-ark-black">Startup Name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="Your startup name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ark-black">Stage</label>
                <select className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy">
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ark-black">Amount Seeking</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="e.g., $500K"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ark-black">Pitch</label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="Brief pitch about your startup..."
                />
              </div>
              <p className="text-xs text-zinc-500">Note: 2% bridge fee applies on successful deals</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 rounded-full border border-black/10 px-4 py-3 text-sm font-semibold text-ark-black transition-all duration-150 hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-ark-navy px-4 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#22378c]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
      <AudioPlayer />
    </main>
  );
}
