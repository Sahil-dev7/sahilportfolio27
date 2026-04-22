import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Persona = {
  id: string;
  label: string;          // top-left chip e.g. "MARVEL" style
  title: string;          // big title, e.g. SAHIL DEV
  subtitle: string;       // role line
  description: string;
  bg: string;
  png: string;
  accent: string;         // hsl color used for diagonal + glow
  ctaLabel: string;
  ctaTo: string;
  index: number;          // 0,1,2
  total: number;
};

/**
 * Sticky cinematic slide. Pins for one viewport, then cross-fades out
 * as the next sibling slide scrolls in. Marvel/Spider-Man inspired:
 *   - left text block with persona label, huge title, subtitle
 *   - right character PNG with drop-shadow + glow
 *   - diagonal accent slab on the right edge
 *   - giant watermark word in the background
 *   - bottom-right pagination dots
 */
const PersonaHero = ({ persona }: { persona: Persona }) => {
  const ref = useRef<HTMLElement>(null);

  // Each slide section is 200vh tall: first 100vh = pinned visible,
  // next 100vh = scroll-out (parallax + fade).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 0 → fully visible, 1 → fully scrolled past
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      id={persona.id}
      className="relative w-full"
      style={{ height: "200vh" }}
    >
      <motion.div
        style={{ opacity }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* BG image with subtle parallax */}
        <motion.div style={{ y: yBg, scale }} className="absolute inset-0">
          <img
            src={persona.bg}
            alt=""
            className="w-full h-full object-cover"
            loading={persona.index === 0 ? "eager" : "lazy"}
          />
          {/* Side gradient — text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          {/* Bottom fade into next slide */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </motion.div>

        {/* Diagonal accent slab (Marvel-style) */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: `linear-gradient(115deg, transparent 60%, ${persona.accent} 60%, ${persona.accent} 62%, transparent 62%)`,
            opacity: 0.5,
          }}
        />

        {/* Giant watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span
            className="font-display font-black tracking-tighter select-none whitespace-nowrap"
            style={{
              fontSize: "clamp(120px, 22vw, 360px)",
              color: persona.accent,
              opacity: 0.08,
              letterSpacing: "-0.05em",
            }}
          >
            {persona.label}
          </span>
        </div>

        {/* Soft accent glow */}
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px]"
          style={{ background: persona.accent, opacity: 0.18 }}
        />

        {/* Content */}
        <div className="relative z-10 h-full container mx-auto px-5 sm:px-8 lg:px-12 flex items-end sm:items-center pb-20 sm:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center w-full">
            {/* Left text */}
            <motion.div style={{ y: yText }} className="order-2 md:order-1">
              {/* Persona chip */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-5"
              >
                <span
                  className="px-3 py-1 font-display font-bold text-xs tracking-widest text-primary-foreground"
                  style={{ background: persona.accent }}
                >
                  {persona.label}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest">
                  0{persona.index + 1} / 0{persona.total}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-4 text-foreground"
              >
                {persona.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="font-display text-sm sm:text-lg font-semibold text-foreground/80 mb-3"
              >
                {persona.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="font-body text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed mb-6"
              >
                {persona.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="font-display font-semibold px-6 text-sm h-11 group"
                  style={{ background: persona.accent, color: "white" }}
                >
                  <Link to={persona.ctaTo}>
                    {persona.ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right PNG */}
            <motion.div
              style={{ y: yImg }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 md:order-2 relative flex justify-center md:justify-end"
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[80px] opacity-30 pointer-events-none"
                style={{ background: persona.accent }}
              />
              <img
                src={persona.png}
                alt={persona.title}
                className="relative z-10 h-[55svh] sm:h-[70svh] md:h-[80svh] lg:h-[88svh] w-auto object-contain object-bottom select-none"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 92%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 92%, transparent 100%)",
                  filter: "drop-shadow(0 25px 50px hsl(0 0% 0% / 0.6))",
                }}
                loading={persona.index === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </motion.div>
          </div>
        </div>

        {/* Pagination dots — bottom right */}
        <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex flex-col gap-2">
          {Array.from({ length: persona.total }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-6 rounded-full transition-all"
              style={{
                background:
                  i === persona.index ? persona.accent : "hsl(0 0% 100% / 0.25)",
                height: i === persona.index ? "32px" : "16px",
              }}
            />
          ))}
        </div>

        {/* Scroll cue (only on first slide) */}
        {persona.index === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-muted-foreground/60 flex flex-col items-center gap-1"
          >
            <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default PersonaHero;