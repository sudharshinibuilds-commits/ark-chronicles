"use client";

import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";
import { useState } from "react";

export default function CollegeCollabsPage() {
  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const [showForm, setShowForm] = useState(false);

  const colleges = [
    { id: "1", name: "IIT Bombay", city: "Mumbai", students: 15000, active: true },
    { id: "2", name: "IIT Delhi", city: "Delhi", students: 12000, active: true },
    { id: "3", name: "IISc Bangalore", city: "Bengaluru", students: 4000, active: true },
    { id: "4", name: "BITS Pilani", city: "Pilani", students: 8000, active: true },
    { id: "5", name: "NIT Trichy", city: "Trichy", students: 6000, active: false },
    { id: "6", name: "VIT Vellore", city: "Vellore", students: 35000, active: true },
    { id: "7", name: "SRM University", city: "Chennai", students: 50000, active: false },
    { id: "8", name: "Manipal Institute", city: "Manipal", students: 28000, active: true },
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
        <h1 className="font-display text-5xl font-bold text-ark-black">College Collaborations</h1>
        <p className="mt-2 text-xl text-ark-navy">Partner with India's leading institutions</p>

        {!showForm ? (
          <>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {colleges.map((college) => (
                <div
                  key={college.id}
                  className="overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg transition-all duration-150 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ark-navy/10 text-3xl font-bold text-ark-navy">
                    {college.name.slice(0, 2)}
                  </div>
                  
                  <h3 className="mt-4 font-display text-lg font-bold text-ark-black">{college.name}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{college.city}</p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-zinc-600">Students Reached:</span>
                    <span className="font-bold text-ark-navy">{college.students.toLocaleString()}</span>
                  </div>

                  {college.active && (
                    <div className="mt-4">
                      <span className="inline-flex rounded-full bg-ark-gold px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-ark-navy">
                        Active Partner
                      </span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className="mt-4 w-full rounded-full border-2 border-ark-navy px-4 py-2.5 text-sm font-semibold text-ark-navy transition-all duration-150 hover:scale-105 hover:bg-ark-navy hover:text-white"
                  >
                    Apply for Collaboration
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/8 bg-white p-8 shadow-lg">
            <h2 className="font-display text-2xl font-bold text-ark-black">Apply for College Collaboration</h2>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-ark-black">College Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                    placeholder="Your institution name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ark-black">City</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                    placeholder="City"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-ark-black">Contact Person</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ark-black">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                    placeholder="email@college.edu"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ark-black">Student Population</label>
                <input
                  type="number"
                  className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="Approximate number of students"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-ark-black">Collaboration Interest</label>
                <select className="mt-1 w-full rounded-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy">
                  <option>Select collaboration type</option>
                  <option>Content Partnership</option>
                  <option>Event Sponsorship</option>
                  <option>Research Collaboration</option>
                  <option>Talent Pipeline</option>
                  <option>Startup Incubation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ark-black">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-ark-navy"
                  placeholder="Tell us about your collaboration goals..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-full border border-black/10 px-4 py-3 text-sm font-semibold text-ark-black transition-all duration-150 hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-ark-navy px-4 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#22378c]"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <Footer />
      <AudioPlayer />
    </main>
  );
}
