import Hero from "@/components/Hero";
import InterestsSection from "@/components/InterestsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MarqueeText from "@/components/MarqueeText";
import GamingSection from "@/components/GamingSection";
import FavouritesSection from "@/components/FavouritesSection";
import RunningProjectsSection from "@/components/RunningProjectsSection";
import InstagramFeed from "@/components/InstagramFeed";
import SpotifySection from "@/components/SpotifySection";
import YouTubeSection from "@/components/YouTubeSection";

const Index = () => {

  return (
    <div className="min-h-screen bg-background grain">
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <Hero />
      
      {/* Scrolling marquee divider */}
      <div className="py-8 border-y border-border/30 overflow-hidden">
        <MarqueeText text="SAHIL DEV • ANDROID • KOTLIN • CREATOR • INNOVATOR • GAMER" />
      </div>
      
      <InterestsSection />
      <ProjectsSection />
      
      {/* Another marquee */}
      <div className="py-6 overflow-hidden">
        <MarqueeText text="FIREBASE • JETPACK COMPOSE • MATERIAL DESIGN • MVVM • CLEAN CODE" />
      </div>
      
      <SkillsSection />
      <GamingSection />
      <FavouritesSection />
      <RunningProjectsSection />
      <SpotifySection />
      <YouTubeSection />
      <InstagramFeed />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
