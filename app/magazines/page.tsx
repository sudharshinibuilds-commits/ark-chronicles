import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";
import { magazines } from "../components/homepageData";

export default function MagazinesPage() {
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
          { label: "Magazines", href: "/magazines" },
          { label: "Research", href: "/research" },
          { label: "Investors", href: "/investors" },
          { label: "Opportunities", href: "/opportunities" },
          { label: "College Collabs", href: "/college-collabs" },
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
          "Zyra Bio closes a $14M seed round to scale climate-first materials.",
          "Founders in Bengaluru launch a cross-border fintech rail.",
          "ARK Research briefs investors on AI-native industrial software.",
          "Mumbai mobility startup reports 3x retention growth.",
          "Delhi health-tech collective opens applications for accelerator.",
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl font-bold text-ark-black">
          Magazines
        </h1>
        <p className="mt-2 text-xl text-ark-navy">Curated Editions</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {magazines.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-black/8 bg-white shadow-lg transition-all duration-150 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-[280px] w-full overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${item.imageSeed}/300/400`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex rounded-full bg-ark-gold px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-ark-navy">
                    {item.edition}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-ark-navy px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white">
                  {item.category}
                </div>
                <h3 className="font-display text-2xl font-bold text-ark-black leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {item.month} {item.year}
                </p>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                  {item.category} edition — curated stories for India's
                  founder community.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <button
                    type="button"
                    className="w-full rounded-full bg-ark-gold px-4 py-3 text-sm font-semibold text-ark-navy transition-all duration-150 hover:scale-105"
                  >
                    Read Now
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-full border border-ark-navy/20 px-4 py-3 text-sm font-semibold text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <AudioPlayer />
    </main>
  );
}