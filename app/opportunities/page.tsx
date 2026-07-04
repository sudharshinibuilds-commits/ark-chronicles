import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LiveTicker from "../components/LiveTicker";

export default function OpportunitiesPage() {
  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  const opportunities = [
    {
      id: "1",
      type: "Internship",
      typeColor: "bg-blue-500",
      title: "Product Design Intern at Zomato",
      organization: "Zomato",
      location: "Bengaluru",
      stipend: "₹25,000/month",
      deadline: "Dec 15, 2024",
    },
    {
      id: "2",
      type: "Grant",
      typeColor: "bg-green-500",
      title: "Startup India Seed Fund Grant",
      organization: "Startup India",
      location: "Pan India",
      stipend: "Up to ₹50 Lakhs",
      deadline: "Dec 31, 2024",
    },
    {
      id: "3",
      type: "Fellowship",
      typeColor: "bg-purple-500",
      title: "Google Startup Fellowship",
      organization: "Google",
      location: "Remote",
      stipend: "$5,000 stipend",
      deadline: "Jan 15, 2025",
    },
    {
      id: "4",
      type: "Job",
      typeColor: "bg-orange-500",
      title: "Full Stack Developer at Razorpay",
      organization: "Razorpay",
      location: "Bengaluru",
      stipend: "₹25-35 LPA",
      deadline: "Dec 20, 2024",
    },
    {
      id: "5",
      type: "Internship",
      typeColor: "bg-blue-500",
      title: "Data Science Intern at Flipkart",
      organization: "Flipkart",
      location: "Bengaluru",
      stipend: "₹30,000/month",
      deadline: "Dec 18, 2024",
    },
    {
      id: "6",
      type: "Grant",
      typeColor: "bg-green-500",
      title: "Biotechnology Innovation Grant",
      organization: "DBT India",
      location: "Pan India",
      stipend: "Up to ₹2 Crores",
      deadline: "Jan 31, 2025",
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
        <h1 className="font-display text-5xl font-bold text-ark-black">Opportunities</h1>
        
        <div className="mt-6 flex flex-wrap gap-3">
          {["All", "Internship", "Grant", "Fellowship", "Job"].map((filter) => (
            <button
              key={filter}
              type="button"
              className="rounded-full border border-ark-navy/20 px-5 py-2.5 text-sm font-medium text-ark-navy transition-all duration-150 hover:scale-105 hover:border-ark-navy hover:bg-ark-navy/5"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="overflow-hidden rounded-2xl border-l-4 border-l-ark-navy border border-black/8 border-l-ark-navy bg-white p-6 shadow-lg transition-all duration-150 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className={`rounded-full ${opp.typeColor} px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white`}>
                  {opp.type}
                </span>
                <span className="text-xs font-semibold text-red-600">Deadline: {opp.deadline}</span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-ark-black">{opp.title}</h3>
              <p className="mt-1 text-sm font-medium text-ark-navy">{opp.organization}</p>
              <p className="mt-1 text-sm text-zinc-600">{opp.location}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">{opp.stipend}</span>
                <button
                  type="button"
                  className="rounded-full bg-ark-black px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:scale-105 hover:bg-ark-navy"
                >
                  Apply Now
                </button>
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
