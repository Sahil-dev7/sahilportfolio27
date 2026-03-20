import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Play, Instagram, FileText, Briefcase, Code, Monitor, Users, Video } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import sahilDeveloper from "@/assets/sahil-developer.png";
import sahilFriend from "@/assets/sahil-friend.png";
import sahilYoutuber from "@/assets/sahil-youtuber.png";
import bgDeveloper from "@/assets/bg-developer.avif";
import bgFriend from "@/assets/bg-friend.webp";

const personas = [
  {
    id: "developer",
    label: "Developer",
    icon: Monitor,
    image: sahilDeveloper,
    bg: bgDeveloper,
    bgFilter: "brightness(0.3) saturate(1.2)",
    subtitle: "Software Developer",
    tagline: "Turning ideas into reality through clean code, scalable systems, and sleek UIs.",
    accentColor: "hsl(0 85% 55%)",
  },
  {
    id: "friend",
    label: "As a Friend",
    icon: Users,
    image: sahilFriend,
    bg: bgFriend,
    bgFilter: "brightness(0.25) saturate(1.3)",
    subtitle: "Martial Artist & Explorer",
    tagline: "Nunchaku spinner, Rubik's cube solver, and always up for an adventure.",
    accentColor: "hsl(30 80% 55%)",
  },
  {
    id: "youtuber",
    label: "YouTuber",
    icon: Video,
    image: sahilYoutuber,
    bg: sahilYoutuber,
    bgFilter: "brightness(0.2) saturate(1.1) blur(20px)",
    subtitle: "Content Creator",
    tagline: "Sharing knowledge, tutorials, and behind-the-scenes of my dev journey.",
    accentColor: "hsl(0 90% 50%)",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Sahil-dev7", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-w712", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
  { icon: null, customIcon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ), href: "https://x.com/Sahil_701", label: "X" },
];

const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [activePersona, setActivePersona] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  // Auto-rotate personas
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActivePersona((p) => (p + 1) % personas.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const current = personas[activePersona];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-14 sm:pt-16"
    >
      {/* Dynamic background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + "-bg"}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={current.bg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: current.bgFilter }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Accent glow */}
      <motion.div
        className="absolute z-[2] w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${current.accentColor} 0%, transparent 70%)`,
          filter: "blur(100px)",
          right: "10%",
          top: "20%",
        }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[calc(100svh-80px)]">
          {/* Left content */}
          <div className="max-w-2xl order-2 lg:order-1 pb-8 sm:pb-0">
            {/* Persona tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-1 sm:gap-1.5 mb-4 sm:mb-6"
            >
              {personas.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => { setActivePersona(i); setAutoPlay(false); }}
                  className={`
                    flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[9px] sm:text-xs font-display font-semibold uppercase tracking-wider transition-all duration-300 click-spark
                    ${i === activePersona
                      ? "bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/90 backdrop-blur-sm"
                    }
                  `}
                >
                  <p.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="hidden sm:inline">{p.label}</span>
                </button>
              ))}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-1.5 sm:mb-2 leading-[1.05]"
            >
              <span className="text-white/80 block text-sm sm:text-xl md:text-2xl font-medium mb-1">Hi, I'm</span>
              <span className="text-gradient">Sahil Wadhwani</span>
            </motion.h1>

            {/* Animated subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current.subtitle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="font-display text-sm sm:text-lg md:text-xl text-primary font-semibold mb-2 sm:mb-3"
              >
                {current.subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Tagline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current.tagline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-body text-xs sm:text-sm md:text-base text-white/60 max-w-xl mb-3 sm:mb-5 leading-relaxed font-medium"
              >
                {current.tagline}
              </motion.p>
            </AnimatePresence>

            {/* Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5"
            >
              <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-body text-white/90 font-medium">
                <Briefcase className="w-3 h-3 text-primary" />
                Looking for Android roles
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-body text-white/90 font-medium">
                <Code className="w-3 h-3 text-secondary" />
                Open to freelance MVPs
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
            >
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-display font-semibold px-5 sm:px-7 text-xs sm:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce click-spark h-9 sm:h-12"
                onClick={scrollToProjects}
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-display font-semibold px-5 sm:px-7 text-xs sm:text-sm bg-white/5 backdrop-blur-md border-white/20 hover:bg-white/15 hover:scale-105 active:scale-95 transition-all duration-200 text-white btn-bounce click-spark h-9 sm:h-12"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-display font-semibold px-5 sm:px-7 text-xs sm:text-sm resume-btn-slide border-white/20 text-white/80 h-9 sm:h-12 relative overflow-hidden group"
                asChild
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-primary-foreground">
                    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Resume
                  </span>
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 sm:gap-2.5"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/social flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 backdrop-blur-md text-white/70 hover:text-primary hover:bg-white/20 transition-all border border-white/10 hover:border-primary/40 click-spark"
                  aria-label={social.label}
                >
                  {'customIcon' in social && social.customIcon ? (
                    social.customIcon
                  ) : social.icon ? (
                    <social.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  ) : null}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Character image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-img"}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Hero image - large and dominant */}
                <img
                  src={current.image}
                  alt={`Sahil Wadhwani - ${current.subtitle}`}
                  className="relative z-10 w-48 sm:w-64 md:w-80 lg:w-[420px] xl:w-[480px] h-auto mx-auto object-contain drop-shadow-2xl"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                  }}
                />

                {/* const passion badge - lower left of image */}
                {current.id === "developer" && (
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-12 sm:bottom-20 -left-2 sm:-left-4 glass-strong rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 border border-primary/40 z-20"
                  >
                    <pre className="font-mono text-[8px] sm:text-xs text-white/70">
                      <code>
                        <span className="text-primary">const</span> passion = <span className="text-secondary">"Android"</span>;
                      </code>
                    </pre>
                  </motion.div>
                )}

                {/* Open to Work badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-2 -right-2 sm:top-4 sm:-right-4 glass-strong rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 border border-primary/40 z-20"
                >
                  <span className="text-[8px] sm:text-xs font-display font-bold text-gradient">
                    🔥 Open to Work
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {personas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActivePersona(i); setAutoPlay(false); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === activePersona
                      ? "w-6 h-1.5 bg-primary"
                      : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 text-white/40"
          >
            <span className="text-[10px] font-body uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
