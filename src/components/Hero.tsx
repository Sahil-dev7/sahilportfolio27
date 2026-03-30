import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowLeft, ArrowRight, Github, Linkedin, Instagram, Play, Briefcase, Code, FileText } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const slides = [
  {
    id: 1,
    bg: "https://i.postimg.cc/FKcPcjG9/photo-1610563166150-b34df4f3bcd6.avif",
    png: "https://i.postimg.cc/J4M53SsL/1000085130.png",
    title: "Sahil Wadhwani",
    subtitle: "Software Developer",
    desc: "Turning ideas into reality through clean code, scalable systems, and sleek UIs.",
    accent: "primary",
  },
  {
    id: 2,
    bg: "https://i.postimg.cc/LsfyfzDv/martial-artist-sunset-conjures-ethereal-dragon-shadow-dramatic-night-sky-silhouetted-martial-artist.webp",
    png: "https://i.postimg.cc/PxjSMPFh/Picsart-26-03-18-11-21-20-487.png",
    title: "As a Friend",
    subtitle: "Martial Artist & Creator",
    desc: "Beyond code — a passionate martial artist, gamer, and content creator.",
    accent: "secondary",
  },
];

const socialLinks = [
  { icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", href: "https://www.facebook.com", label: "Facebook" },
  { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
  { icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", href: "https://x.com/Sahil_701", label: "X" },
  { icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z M9.545 15.568V8.432L15.818 12z", href: "https://www.youtube.com", label: "YouTube" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bgVariants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const contentVariants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const pngVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 200 : -200, scale: 0.8 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -200 : 200, scale: 0.8 }),
  };

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-background">
      {/* Background slides */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={`bg-${slide.id}`}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-background/30" />
        </motion.div>
      </AnimatePresence>

      {/* Red diagonal accent */}
      <div className="absolute top-0 right-0 w-[35%] h-full z-[1] overflow-hidden hidden lg:block">
        <div
          className="absolute inset-0 origin-top-right"
          style={{
            background: "linear-gradient(160deg, hsl(0 85% 55%) 0%, hsl(350 70% 40%) 100%)",
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
            opacity: current === 0 ? 1 : 0.7,
            transition: "opacity 0.8s ease",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero content area */}
        <div className="flex-1 flex items-end sm:items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-end sm:items-center pb-32 sm:pb-0">
            {/* Text content - left side */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`content-${slide.id}`}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-20 max-w-lg"
              >
                {/* Chips - desktop only */}
                {current === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="hidden sm:flex flex-wrap gap-2 mb-4"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-primary/30 text-xs font-body text-foreground/90 font-medium">
                      <Briefcase className="w-3 h-3 text-primary" />
                      Looking for Android roles
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-secondary/30 text-xs font-body text-foreground/90 font-medium">
                      <Code className="w-3 h-3 text-secondary" />
                      Open to freelance MVPs
                    </span>
                  </motion.div>
                )}

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-1">
                  <span className="text-gradient">{slide.title}</span>
                </h1>

                <p className="font-display text-base sm:text-lg text-primary font-semibold mb-2">
                  {slide.subtitle}
                </p>

                <p className="font-body text-sm sm:text-base text-muted-foreground max-w-md mb-5 leading-relaxed hidden sm:block">
                  {slide.desc}
                </p>

                {/* CTA Buttons - only on first slide */}
                {current === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap items-center gap-3 mb-0 sm:mb-0"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-primary text-primary-foreground font-display font-semibold px-5 sm:px-6 text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 h-10 sm:h-11"
                      onClick={scrollToProjects}
                    >
                      <Play className="w-4 h-4 mr-1" />
                      View My Work
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-display font-semibold px-5 sm:px-6 text-sm glass-strong border-primary/50 hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 text-foreground h-10 sm:h-11 hidden sm:inline-flex"
                      onClick={scrollToContact}
                    >
                      Get In Touch
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-display font-semibold px-5 sm:px-6 text-sm resume-btn-slide border-primary/30 text-foreground/80 h-10 sm:h-11 relative overflow-hidden group"
                      asChild
                    >
                      <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                        <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-primary-foreground">
                          <FileText className="w-4 h-4" />
                          Resume
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Hero PNG - center/right */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`png-${slide.id}`}
                custom={direction}
                variants={pngVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute bottom-0 right-0 sm:right-[5%] lg:right-[10%] z-[2] pointer-events-none"
              >
                <img
                  src={slide.png}
                  alt={slide.title}
                  className="h-[65svh] sm:h-[80svh] lg:h-[90svh] w-auto object-contain object-bottom select-none"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                    filter: "drop-shadow(0 0 60px hsl(0 85% 30% / 0.3))",
                  }}
                  loading="eager"
                />

                {/* Floating badge - const passion */}
                {current === 0 && (
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-[20%] left-0 glass-strong rounded-lg px-3 py-1.5 border border-primary/30"
                  >
                    <pre className="font-mono text-[10px] sm:text-xs text-muted-foreground">
                      <code>
                        <span className="text-primary">const</span> passion = <span className="text-secondary">"Android"</span>;
                      </code>
                    </pre>
                  </motion.div>
                )}

                {/* Open to Work badge */}
                {current === 0 && (
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-[15%] right-0 sm:right-4 glass-strong rounded-lg px-3 py-1.5 border border-primary/30"
                  >
                    <span className="text-[10px] sm:text-xs font-display font-bold text-gradient">
                      🔥 Open to Work
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom bar: social + nav arrows + dots */}
        <div className="relative z-20 pb-4 sm:pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between">
            {/* Social icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-background/80 border border-border/50 text-foreground/70 hover:text-foreground hover:border-primary/50 transition-all duration-200"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-foreground text-background hover:bg-primary transition-all duration-200"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Slide dots */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-3 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint - desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-muted-foreground/50"
        >
          <span className="text-[9px] font-body uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
