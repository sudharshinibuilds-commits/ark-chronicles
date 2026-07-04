import AudioPlayer from "./components/AudioPlayer";
import CardRow from "./components/CardRow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StreakBanner from "./components/StreakBanner";
import {
  cityLinks,
  featuredChronicles,
  featuredFounders,
  investorSpotlights,
  magazines,
  navLinks,
  opportunities,
  researchPapers,
} from "./components/homepageData";

export default function Home() {
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
        navLinks={navLinks}
        cityLinks={cityLinks}
      />
      <StreakBanner />
      <CardRow
        id="trending-chronicles"
        title="🔥 Trending Chronicles"
        seeAllHref="/chronicles"
        variant="article"
        items={featuredChronicles}
      />
      <CardRow
        id="founder-spotlights"
        title="👤 Founder Spotlights"
        seeAllHref="/founders"
        variant="founder"
        items={featuredFounders}
      />
      <CardRow
        id="latest-magazines"
        title="📚 Latest Magazines"
        seeAllHref="/magazines"
        variant="magazine"
        items={magazines}
      />
      <CardRow
        id="investor-spotlights"
        title="💼 Investor Spotlights"
        seeAllHref="/investors"
        variant="article"
        items={investorSpotlights}
      />
      <CardRow
        id="opportunities"
        title="🌟 Opportunities"
        seeAllHref="/opportunities"
        variant="article"
        items={opportunities}
      />
      <CardRow
        id="research-papers"
        title="🔬 Research Papers"
        seeAllHref="/research"
        variant="article"
        items={researchPapers}
      />
      <Footer />
      <AudioPlayer />
    </main>
  );
}
