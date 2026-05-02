import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YouTubeSection from "@/components/YouTubeSection";
import InstagramFeed from "@/components/InstagramFeed";
import SpotifySection from "@/components/SpotifySection";
import FavouritesSection from "@/components/FavouritesSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import MarqueeText from "@/components/MarqueeText";

const PERSONA = {
  label: "ABOUT ME",
  title: "THE HUMAN",
  subtitle: "Off the keyboard — music, films, frames, friends",
  description:
    "When I'm not shipping code, I'm chasing songs on loop, films on repeat, and photographs that mean something. This is the slower, softer side of Sahil — the corners of the internet I call home.",
  bg: "https://i.postimg.cc/gk7rBzHF/Friend-Bg.webp",
  png: "https://i.postimg.cc/ncWMwFGJ/Friend.webp",
  accent: "hsl(28 90% 55%)",
};

const Friend = () => {
  return (
    <div className="min-h-screen bg-background grain overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-[100svh] w-full overflow-hidden flex items-end sm:items-center">
        <div className="absolute inset-0">
          <img src={PERSONA.bg} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px]" style={{ background: PERSONA.accent, opacity: 0.2 }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display font-black tracking-tighter select-none whitespace-nowrap"
            style={{ fontSize: "clamp(120px, 22vw, 360px)", color: PERSONA.accent, opacity: 0.08, letterSpacing: "-0.05em" }}>
            {PERSONA.label}
          </span>
        </div>

        <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 mb-5">
                <span className="px-3 py-1 font-display font-bold text-xs tracking-widest text-white" style={{ background: PERSONA.accent }}>
                  {PERSONA.label}
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-4 text-foreground">
                {PERSONA.title}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="font-display text-sm sm:text-lg font-semibold text-foreground/80 mb-3">
                {PERSONA.subtitle}
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="font-body text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
                {PERSONA.description}
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 md:order-2 relative flex justify-center md:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[80px] opacity-30 pointer-events-none" style={{ background: PERSONA.accent }} />
              <img src={PERSONA.png} alt={PERSONA.title}
                className="relative z-10 h-[55svh] sm:h-[70svh] md:h-[80svh] lg:h-[88svh] w-auto object-contain object-bottom select-none"
                style={{
                  maskImage: "linear-gradient(to bottom, black 92%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 92%, transparent 100%)",
                  filter: "drop-shadow(0 25px 50px hsl(0 0% 0% / 0.6))",
                }}
                loading="eager" draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-6 sm:py-8 border-y border-border/30 overflow-hidden">
        <MarqueeText text="MUSIC • FILMS • PHOTOGRAPHY • STORYTELLING • CULTURE" />
      </div>

      <InterestsSection />
      <YouTubeSection />
      <SpotifySection />
      <InstagramFeed />
      <FavouritesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Friend;