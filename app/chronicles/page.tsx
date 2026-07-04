import AudioPlayer from "../components/AudioPlayer";
import CardRow from "../components/CardRow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";
import { featuredChronicles } from "../components/homepageData";

export default function ChroniclesPage() {
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
        <h1 className="font-display text-5xl font-bold text-ark-black">Chronicles Archive</h1>
        
        <div className="mt-6 flex flex-wrap gap-3">
          {["Latest", "Most Read", "Editors Pick", "Research", "Hackathons"].map((filter) => (
            <button
              key={filter}
              type="button"
              className="rounded-full border border-ark-navy/20 px-5 py-2.5 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredChronicles.map((item) => (
            <a
              key={item.id}
              href={`/article/${item.id}`}
              className="group block overflow-hidden rounded-2xl border border-black/8 bg-white shadow-lg transition-all duration-150 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${item.imageSeed}/600/400`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex rounded-full bg-ark-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-ark-navy">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-ark-black leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600">{item.author}</p>
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
