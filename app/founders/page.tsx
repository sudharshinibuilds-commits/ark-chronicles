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

                <button
                  type="button"
                  className="mt-4 w-full rounded-full bg-ark-navy px-4 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:scale-105 hover:bg-[#22378c]"
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
