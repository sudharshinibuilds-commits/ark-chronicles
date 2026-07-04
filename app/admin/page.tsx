"use client";

import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";
import { useState } from "react";

export default function AdminPage() {
  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"pending" | "users" | "colleges" | "investors">("pending");

  const pendingStories = [
    { id: "1", title: "How AI is transforming Indian agriculture", author: "Rahul Sharma", date: "Dec 10, 2024" },
    { id: "2", title: "The rise of femtech in India's startup ecosystem", author: "Priya Patel", date: "Dec 9, 2024" },
    { id: "3", title: "Building sustainable supply chains for D2C brands", author: "Amit Kumar", date: "Dec 8, 2024" },
  ];

  if (!authenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#faf9f6] px-4">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-black/8 bg-white p-8 shadow-lg">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">A.R.K</div>
            <div className="font-display text-2xl font-bold text-ark-black">Admin Portal</div>
          </div>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (password === "admin123") {
                setAuthenticated(true);
              } else {
                alert("Invalid password");
              }
            }}
          >
            <div>
              <label className="block text-sm font-semibold text-ark-black">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-ark-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:bg-[#22378c]"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

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
        <h1 className="font-display text-5xl font-bold text-ark-black">Admin Dashboard</h1>

        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-ark-navy/20 bg-ark-navy/5 p-6 sm:grid-cols-4">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">5,234</div>
            <div className="mt-1 text-sm text-zinc-600">Total Users</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">1,200</div>
            <div className="mt-1 text-sm text-zinc-600">Articles</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">3</div>
            <div className="mt-1 text-sm text-zinc-600">Pending Stories</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-ark-navy">156</div>
            <div className="mt-1 text-sm text-zinc-600">Active Streaks</div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex gap-2 border-b border-black/10">
            {[
              { id: "pending", label: "Pending Stories" },
              { id: "users", label: "Users" },
              { id: "colleges", label: "Colleges" },
              { id: "investors", label: "Investors" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-ark-navy text-ark-navy"
                    : "text-zinc-600 hover:text-ark-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-black/8 bg-white shadow-lg">
            {activeTab === "pending" && (
              <div className="divide-y divide-black/5">
                {pendingStories.map((story) => (
                  <div key={story.id} className="flex items-center justify-between p-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-ark-black">{story.title}</h3>
                      <p className="mt-1 text-sm text-zinc-600">
                        By {story.author} • {story.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:scale-105 hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:scale-105 hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "users" && (
              <div className="p-6 text-center text-zinc-600">
                <p>User management module coming soon...</p>
              </div>
            )}

            {activeTab === "colleges" && (
              <div className="p-6 text-center text-zinc-600">
                <p>College management module coming soon...</p>
              </div>
            )}

            {activeTab === "investors" && (
              <div className="p-6 text-center text-zinc-600">
                <p>Investor management module coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <AudioPlayer />
    </main>
  );
}
