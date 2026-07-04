import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";
import { featuredFounders } from "../components/homepageData";

export default function FoundersPage() {
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
        <h1 className="font-display text-5xl font-bold text-ark-black">Founders Vault</h1>
        <p className="mt-2 text-xl text-ark-navy">Elite Network</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredFounders.map((item) => (
            <a
              key={item.id}
              href={`/founders/${item.id}`}
              className="group block overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg transition-all duration-150 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-ark-gold/20">
                  <img
                    src={`https://picsum.photos/seed/${item.imageSeed}/300/300`}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <h3 className="mt-4 font-display text-xl font-bold text-ark-black">{item.name}</h3>
                <p className="mt-1 text-sm font-medium text-ark-navy">{item.startup}</p>
                <p className="mt-2 text-xs text-zinc-500">IIT Bombay</p>
                <p className="text-xs text-zinc-500">Bengaluru</p>

                <div className="mt-4 w-full">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="font-semibold text-ark-gold">Strike Rate</span>
                    <span className="font-bold text-ark-navy">{item.strikeRate}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-black/10">
                    <div className="h-full bg-ark-gold" style={{ width: item.strikeRate }} />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  <span className="text-sm font-semibold text-ark-navy">{item.streak}</span>
                </div>

                <div className="mt-3 text-sm text-zinc-600">
                  <span className="font-semibold">2.4K</span> reads
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href="#"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-white transition-all duration-150 hover:scale-105"
                    style={{ backgroundColor: "#0077B5" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:founder@example.com"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-black/10 bg-zinc-100 px-3 py-2 text-xs font-semibold text-ark-black transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email
                  </a>
                </div>

                <button
                  type="button"
                  className="mt-3 w-full rounded-full bg-ark-navy px-4 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:scale-105 hover:bg-[#22378c]"
                >
                  View Profile
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
      <AudioPlayer />
    </main>
  );
}
