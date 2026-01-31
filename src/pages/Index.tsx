import { useState, useEffect, Suspense } from "react";
import Hero from "@/components/Hero";
import InterestsSection from "@/components/InterestsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import MarqueeText from "@/components/MarqueeText";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background grain">
      {/* Custom cursor glow effect */}
      <CursorGlow />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <Hero />
      
      {/* Scrolling marquee divider */}
      <div className="py-8 border-y border-border/30 overflow-hidden">
        <MarqueeText text="DEVELOPER • CREATOR • ANDROID • KOTLIN • INNOVATOR" />
      </div>
      
      <InterestsSection />
      <ProjectsSection />
      
      {/* Another marquee */}
      <div className="py-6 overflow-hidden">
        <MarqueeText text="FIREBASE • JETPACK COMPOSE • MATERIAL DESIGN • MVVM • CLEAN CODE" />
      </div>
      
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
