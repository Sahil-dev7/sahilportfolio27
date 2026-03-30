import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, FileText, Briefcase, Code } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const slides = [
  {
    id: 1,
    bg: "https://i.postimg.cc/FKcPcjG9/photo-1610563166150-b34df4f3bcd6.avif",
    png: "https://i.postimg.cc/J4M53SsL/1000085130.png",
    watermark: "DEVELOPER",
    label: "SAHIL'S",
    title: "PORTFOLIO",
    desc: "Turning ideas into reality through clean code, scalable systems, and sleek UIs — one project at a time.",
    chips: [
      { icon: Briefcase, text: "Looking for Android roles" },
      { icon: Code, text: "Open to freelance MVPs" },
    ],
  },
  {
    id: 2,
    bg: "https://i.postimg.cc/LsfyfzDv/martial-artist-sunset-conjures-ethereal-dragon-shadow-dramatic-night-sky-silhouetted-martial-artist.webp",
    png: "https://i.postimg.cc/PxjSMPFh/Picsart-26-03-18-11-21-20-487.png",
    watermark: "WARRIOR",
    label: "BEYOND",
    title: "CODE",
    desc: "A passionate martial artist, gamer, and content creator — there's more to me than just code.",
    chips: [],
  },
];

const socialPaths = [
  { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", href: "https://www.facebook.com", label: "Facebook" },
  { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
  { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", href: "https://x.com/Sahil_701", label: "X" },
  { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z M9.545 15.568V8.432L15.818 12z", href: "https://www.youtube.com", label: "YouTube" },
];

const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-background">
      {/* Background image */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={`bg-${slide.id}`}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </motion.div>
      </AnimatePresence>

      {/* Giant watermark text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`wm-${slide.id}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.04 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-0 -translate-y-1/2 z-[1] pointer-events-none select-none"
        >
          <span className="font-display font-black text-[12vw] sm:text-[14vw] lg:text-[16vw] leading-none text-foreground whitespace-nowrap">
            {slide.watermark}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Red diagonal accent */}
      <div className="absolute top-0 right-0 h-full z-[3] pointer-events-none hidden md:block" style={{ width: "38%" }}>
        <motion.div
          animate={{ opacity: current === 0 ? 1 : 0.8 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(165deg, hsl(0 85% 55%) 0%, hsl(350 80% 40%) 100%)",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        {/* Subtle pattern on red */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%)",
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)",
          }}
        />
      </div>

      {/* Mobile red accent - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[3] pointer-events-none md:hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, hsl(0 85% 55%) 0%, transparent 100%)",
            opacity: 0.3,
          }}
        />
      </div>

      {/* Hero PNG character */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`char-${slide.id}`}
          custom={direction}
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.9 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 z-[4] pointer-events-none right-[5%] sm:right-[10%] md:right-[15%] lg:right-[18%]"
        >
          <img
            src={slide.png}
            alt={slide.title}
            className="h-[55svh] sm:h-[70svh] md:h-[80svh] lg:h-[88svh] w-auto object-contain object-bottom select-none"
            style={{
              maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
              filter: "drop-shadow(0 0 80px hsl(0 60% 20% / 0.5))",
            }}
            loading="eager"
          />

          {/* Floating badge - const passion */}
          {current === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-[22%] left-[-10%] sm:left-0 glass-strong rounded-lg px-2.5 py-1.5 border border-primary/30"
            >
              <pre className="font-mono text-[9px] sm:text-xs text-muted-foreground">
                <code>
                  <span className="text-primary">const</span> passion = <span className="text-secondary">"Android"</span>;
                </code>
              </pre>
            </motion.div>
          )}

          {/* Open to Work badge */}
          {current === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute top-[12%] right-[-5%] sm:right-4 glass-strong rounded-lg px-2.5 py-1.5 border border-primary/30"
            >
              <span className="text-[9px] sm:text-xs font-display font-bold text-gradient">
                🔥 Open to Work
              </span>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Text content - left aligned */}
      <div className="relative z-[5] h-full flex flex-col justify-end sm:justify-center pb-28 sm:pb-0">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`txt-${slide.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-md lg:max-w-lg"
            >
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary font-display font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mb-1"
              >
                {slide.label}
              </motion.p>

              {/* Title */}
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-3 sm:mb-4">
                <span className="text-foreground">{slide.title}</span>
              </h1>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed mb-4 sm:mb-5">
                {slide.desc}
              </p>

              {/* Chips */}
              {slide.chips.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {slide.chips.map((chip, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass border border-primary/20 text-[10px] sm:text-xs font-body text-foreground/80 font-medium"
                    >
                      <chip.icon className="w-3 h-3 text-primary" />
                      {chip.text}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              {current === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap items-center gap-2.5"
                >
                  <Button
                    size="default"
                    className="bg-gradient-primary text-primary-foreground font-display font-semibold px-5 text-xs sm:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 h-9 sm:h-10"
                    onClick={scrollToProjects}
                  >
                    <Play className="w-3.5 h-3.5 mr-1" />
                    View My Work
                  </Button>
                  <Button
                    size="default"
                    variant="outline"
                    className="font-display font-semibold px-5 text-xs sm:text-sm glass-strong border-primary/40 hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 text-foreground h-9 sm:h-10"
                    onClick={scrollToContact}
                  >
                    Get In Touch
                  </Button>
                  <Button
                    size="default"
                    variant="outline"
                    className="font-display font-semibold px-5 text-xs sm:text-sm resume-btn-slide border-primary/30 text-foreground/80 h-9 sm:h-10 relative overflow-hidden group"
                    asChild
                  >
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-primary-foreground">
                        <FileText className="w-3.5 h-3.5" />
                        Resume
                      </span>
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-[6] pb-4 sm:pb-5">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialPaths.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors"
                aria-label={s.label}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>

          {/* Dots + Arrows */}
          <div className="flex items-center gap-3">
            {/* Dots */}
            <div className="flex items-center gap-1.5 mr-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-background/60 backdrop-blur-sm border border-border/40 text-foreground/60 hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-foreground text-background hover:bg-primary transition-all"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
