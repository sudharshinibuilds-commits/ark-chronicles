import AudioPlayer from "./components/AudioPlayer";
import CardRow from "./components/CardRow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LiveTicker from "./components/LiveTicker";
import StreakBanner from "./components/StreakBanner";
import {
  cityLinks,
  featuredChronicles,
  featuredFounders,
  heroContent,
  heroInsights,
  investorSpotlights,
  magazines,
  navLinks,
  opportunities,
  researchPapers,
  tickerItems,
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
      <LiveTicker items={tickerItems} />
      <StreakBanner />
      <HeroSection
        tag={heroContent.tag}
        title={heroContent.title}
        description={heroContent.description}
        imageSeed={heroContent.imageSeed}
        insights={heroInsights}
      />
      <CardRow
        id="featured-chronicles"
        title="Featured Chronicles"
        seeAllHref="#"
        variant="article"
        items={featuredChronicles}
      />
      <CardRow
        id="featured-founders"
        title="Featured Founders"
        seeAllHref="#"
        variant="founder"
        items={featuredFounders}
      />
      <CardRow
        id="investor-spotlights"
        title="Investor Spotlights"
        seeAllHref="#"
        variant="article"
        items={investorSpotlights}
      />
      <CardRow
        id="magazines"
        title="Magazines"
        seeAllHref="/magazines"
        variant="magazine"
        items={magazines}
      />
      <CardRow
        id="opportunities"
        title="Opportunities"
        seeAllHref="#"
        variant="article"
        items={opportunities}
      />
      <CardRow
        id="research-papers"
        title="Research Papers"
        seeAllHref="#"
        variant="article"
        items={researchPapers}
      />
      <Footer />
      <AudioPlayer />
    </main>
  );
}
