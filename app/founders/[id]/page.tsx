import AudioPlayer from "../../components/AudioPlayer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LiveTicker from "../../components/LiveTicker";

export default function FounderProfilePage({ params }: { params: { id: string } }) {
  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

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
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg">
              <div className="relative h-48 w-full overflow-hidden rounded-xl">
                <img
                  src={`https://picsum.photos/seed/founder-${params.id}/400/400`}
                  alt="Founder"
                  className="h-full w-full object-cover"
                />
              </div>
              
              <h1 className="mt-4 font-display text-3xl font-bold text-ark-black">Aarav Bedi</h1>
              <p className="mt-1 text-lg font-medium text-ark-navy">PulseForge AI</p>
              <p className="mt-2 text-sm text-zinc-600">IIT Bombay • Bengaluru</p>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-full border border-ark-navy/20 px-4 py-2.5 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-full border border-ark-navy/20 px-4 py-2.5 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ark-navy">Achievements</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-ark-gold px-3 py-1.5 text-xs font-semibold text-ark-navy">🏆 Top Builder</span>
                  <span className="rounded-full bg-ark-navy px-3 py-1.5 text-xs font-semibold text-white">📈 3x Growth</span>
                  <span className="rounded-full bg-ark-gold px-3 py-1.5 text-xs font-semibold text-ark-navy">⭐ Featured</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-ark-black">Zero to Hero Story</h2>
              <p className="mt-4 leading-7 text-zinc-700">
                From a small dorm room at IIT Bombay to building one of India's most promising AI startups, Aarav's journey is a testament to persistence and vision. Starting with just a laptop and a dream to revolutionize industrial operations, he bootstrapped PulseForge AI for 18 months before securing seed funding. Today, the company serves over 50 enterprise clients across Asia.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-ark-black">Milestone Timeline</h2>
              <div className="mt-6 space-y-6">
                {[
                  { year: "2021", title: "Founded PulseForge AI", desc: "Started with $0 in funding" },
                  { year: "2022", title: "First Enterprise Client", desc: "Onboarded 3 manufacturing plants" },
                  { year: "2023", title: "Seed Round Closed", desc: "Raised $2M from top VCs" },
                  { year: "2024", title: "Series A Ready", desc: "Scaling to 50+ clients" },
                ].map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`h-4 w-4 rounded-full ${index % 2 === 0 ? 'bg-ark-navy' : 'bg-ark-gold'}`} />
                      {index < 3 && <div className="mt-2 h-12 w-0.5 bg-black/10" />}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-ark-navy">{milestone.year}</span>
                      <h3 className="font-display text-lg font-bold text-ark-black">{milestone.title}</h3>
                      <p className="text-sm text-zinc-600">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-ark-black">Published Articles</h2>
              <div className="mt-4 space-y-4">
                {[
                  { title: "Building AI for Industrial Operations", date: "Mar 2024" },
                  { title: "The Art of Bootstrapping in Deep Tech", date: "Jan 2024" },
                  { title: "Why Enterprise AI Needs More Than Algorithms", date: "Nov 2023" },
                ].map((article, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block rounded-xl border border-black/5 p-4 transition-all duration-150 hover:border-ark-navy/20 hover:bg-ark-navy/5"
                  >
                    <h3 className="font-display text-lg font-semibold text-ark-black">{article.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{article.date}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <AudioPlayer />
    </main>
  );
}
