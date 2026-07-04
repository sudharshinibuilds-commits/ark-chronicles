import AudioPlayer from "../../components/AudioPlayer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LiveTicker from "../../components/LiveTicker";

export default function ArticlePage({ params }: { params: { id: string } }) {
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

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ark-black transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:text-ark-navy"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <AudioPlayer />
          </div>
        </div>

        <article className="mt-8">
          <div className="mb-6">
            <span className="inline-flex rounded-full bg-ark-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-ark-navy">
              Founder Story
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold text-ark-black sm:text-5xl">
            The second-time founder advantage is not speed. It is sharper decision quality.
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
            <span>By Naina Kapoor</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>December 10, 2024</span>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-ark-navy/20 px-4 py-2 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Share on WhatsApp
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-ark-navy/20 px-4 py-2 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              Share on LinkedIn
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-ark-navy/20 px-4 py-2 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 5.5H17V18.5L12 15L7 18.5V5.5Z" />
              </svg>
              Bookmark
            </button>
          </div>

          <div className="prose prose-lg mt-8 max-w-none font-serif leading-8 text-zinc-800">
            <p className="font-display text-xl font-semibold text-ark-black">
              The common narrative around second-time founders focuses on speed—the ability to move faster, raise quicker, and ship sooner. But the real advantage lies elsewhere.
            </p>

            <p>
              After interviewing over 50 second-time founders across India's startup ecosystem, a pattern emerges: their edge isn't velocity. It's decision quality. They make better choices because they've seen the consequences of bad ones.
            </p>

            <h2 className="font-display text-2xl font-bold text-ark-black mt-8">The Cost of Learning</h2>
            <p>
              First-time founders often optimize for the wrong metrics. They chase vanity metrics, over-engineer products, and hire for roles that don't exist yet. Second-time founders skip these mistakes not because they're smarter, but because they've paid the tuition.
            </p>

            <p>
              "In my first startup, we spent six months building features that nobody used," says Priya Sharma, who now leads a Series B SaaS company. "In my second venture, we shipped one feature in two weeks and got customer feedback that saved us 18 months of wasted effort."
            </p>

            <h2 className="font-display text-2xl font-bold text-ark-black mt-8">Pattern Recognition</h2>
            <p>
              Decision quality comes from pattern recognition. Second-time founders can spot market signals that first-timers miss. They know when to pivot, when to persevere, and when to walk away—distinctions that can make or break a company.
            </p>

            <p>
              This pattern recognition extends to hiring, fundraising, and product strategy. They've seen what great teams look like, how investors think during downturns, and which product decisions compound over time.
            </p>

            <h2 className="font-display text-2xl font-bold text-ark-black mt-8">The Network Effect</h2>
            <p>
              Beyond decision quality, second-time founders benefit from accumulated networks. They know who to call for legal help, which investors move fast, and which operators can scale teams. This network accelerates execution without sacrificing quality.
            </p>

            <p>
              But the network is only valuable if paired with good judgment. Calling the right investor at the wrong time, or hiring the wrong executive for the right role, still leads to failure.
            </p>

            <h2 className="font-display text-2xl font-bold text-ark-black mt-8">Conclusion</h2>
            <p>
              The second-time founder advantage is real, but it's misunderstood. Speed is a byproduct of experience, not the source of value. The true advantage is the ability to make sharper decisions—decisions that compound over time and separate the survivors from the thrivers.
            </p>
          </div>

          <div className="mt-12 border-t border-black/10 pt-8">
            <h3 className="font-display text-2xl font-bold text-ark-black">Related Articles</h3>
            <div className="mt-4 space-y-4">
              <a href="#" className="block rounded-xl border border-black/5 p-4 transition-all duration-150 hover:border-ark-navy/20 hover:bg-ark-navy/5">
                <h4 className="font-display text-lg font-semibold text-ark-black">What early teams get wrong about operating cadence</h4>
                <p className="mt-1 text-sm text-zinc-600">Rahul Menon • 5 min read</p>
              </a>
              <a href="#" className="block rounded-xl border border-black/5 p-4 transition-all duration-150 hover:border-ark-navy/20 hover:bg-ark-navy/5">
                <h4 className="font-display text-lg font-semibold text-ark-black">Beyond vanity rounds: disciplined capital storytelling</h4>
                <p className="mt-1 text-sm text-zinc-600">Saira Anand • 7 min read</p>
              </a>
            </div>
          </div>
        </article>
      </div>

      <Footer />
      <AudioPlayer />
    </main>
  );
}
