import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";

export default function ResearchPage() {
  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const papers = [
    {
      id: "1",
      domain: "AI/ML",
      title: "Reading founder resilience through execution patterns, not narrative polish",
      publishedBy: "ARK Research Lab",
      date: "March 2024",
      peerReviewed: true,
    },
    {
      id: "2",
      domain: "Geography",
      title: "The new geography of startup density across India's emerging innovation corridors",
      publishedBy: "Pranav Desai",
      date: "February 2024",
      peerReviewed: true,
    },
    {
      id: "3",
      domain: "Finance",
      title: "Capital efficiency benchmarks for AI-native startups after the infrastructure reset",
      publishedBy: "ARK Research Lab",
      date: "January 2024",
      peerReviewed: true,
    },
    {
      id: "4",
      domain: "Enterprise",
      title: "Trust, talent, and time-to-value: what keeps enterprise buyers leaning in",
      publishedBy: "Sonia Mehta",
      date: "December 2023",
      peerReviewed: false,
    },
    {
      id: "5",
      domain: "Consumer",
      title: "Behavioral shifts in Gen-Z founders: risk appetite and decision frameworks",
      publishedBy: "ARK Research Lab",
      date: "November 2023",
      peerReviewed: true,
    },
    {
      id: "6",
      domain: "Climate",
      title: "Deep-tech financing patterns in climate hardware: a comparative analysis",
      publishedBy: "Vikram Singh",
      date: "October 2023",
      peerReviewed: true,
    },
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
        <h1 className="font-display text-5xl font-bold text-ark-black">Research Papers</h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-full border border-ark-navy/20 px-5 py-2.5 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
          >
            All Domains
          </button>
          {["AI/ML", "Finance", "Consumer", "Climate", "Enterprise", "Geography"].map((domain) => (
            <button
              key={domain}
              type="button"
              className="rounded-full border border-ark-navy/20 px-5 py-2.5 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg transition-all duration-150 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-ark-navy">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  {paper.peerReviewed && (
                    <span className="inline-flex rounded-full bg-ark-gold px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-ark-navy">
                      Peer Reviewed
                    </span>
                  )}
                  <span className="ml-2 inline-flex rounded-full bg-ark-navy px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    {paper.domain}
                  </span>
                </div>
              </div>

              <h3 className="mt-4 font-display text-lg font-bold text-ark-black leading snug">
                {paper.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-600">Published by {paper.publishedBy}</p>
              <p className="text-sm text-zinc-500">{paper.date}</p>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="flex-1 rounded-full border border-ark-navy/20 px-3 py-2 text-xs font-semibold text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
                >
                  Download Abstract
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-full border border-ark-navy/20 px-3 py-2 text-xs font-semibold text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
                >
                  Cite
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-ark-navy/20 bg-gradient-to-r from-ark-navy to-[#2a3f8a] p-8 text-white">
          <h2 className="font-display text-3xl font-bold">Hackathon Brochure</h2>
          <p className="mt-2 text-white/80">
            Download our comprehensive guide to upcoming hackathons, prizes, and participation requirements.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex rounded-full bg-ark-gold px-6 py-3 text-sm font-semibold text-ark-navy transition-all duration-150 hover:scale-105 hover:bg-[#e1b54b]"
          >
            Download Brochure
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-ark-navy/20 bg-gradient-to-r from-ark-navy to-[#2a3f8a] p-8 text-white">
          <h2 className="font-display text-3xl font-bold">Research Conference Brochure</h2>
          <p className="mt-2 text-white/80">
            Explore upcoming research conferences, submission deadlines, and networking opportunities.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex rounded-full bg-ark-gold px-6 py-3 text-sm font-semibold text-ark-navy transition-all duration-150 hover:scale-105 hover:bg-[#e1b54b]"
          >
            Download Brochure
          </button>
        </div>
      </div>

      <Footer />
      <AudioPlayer />
    </main>
  );
}
