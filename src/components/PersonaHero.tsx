import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export type PersonaStat = { label: string; value: string };
export type Persona = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  bg: string;
  png: string;
  accent: string;
  ctaLabel: string;
  ctaTo: string;
  index: number;
  total: number;
  stats?: PersonaStat[];
  marquee?: string[];
};

/* ──────────────────────────────────────────────────────────
   Kinetic title — letter-by-letter spring entrance
   ────────────────────────────────────────────────────────── */
const KineticTitle = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] tracking-tight leading-[0.88] mb-4 text-foreground">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.18em] last:mr-0">
          {Array.from(word).map((ch, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ y: "110%", opacity: 0, rotateX: -45 }}
              animate={{ y: "0%", opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25 + (wi * word.length + ci) * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "50% 100%" }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
};

/* ──────────────────────────────────────────────────────────
   Magnetic CTA — button gently follows the cursor
   ────────────────────────────────────────────────────────── */
const MagneticCTA = ({
  to,
  label,
  accent,
}: {
  to: string;
  label: string;
  accent: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.25);
    y.set(my * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <Link
        ref={ref}
        to={to}
        className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full font-display font-semibold text-sm overflow-hidden text-white shadow-2xl"
        style={{ background: accent }}
      >
        {/* Shimmer sweep */}
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, hsl(0 0% 100% / 0.35) 50%, transparent 70%)",
          }}
        />
        <span className="relative z-10 tracking-wide">{label}</span>
        <span className="relative z-10 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors overflow-hidden">
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-4" />
          <ArrowRight className="w-3.5 h-3.5 absolute -translate-x-4 transition-transform duration-300 group-hover:translate-x-0" />
        </span>
      </Link>
    </motion.div>
  );
};

/* ──────────────────────────────────────────────────────────
   PersonaHero — sticky cinematic slide
   ────────────────────────────────────────────────────────── */
const PersonaHero = ({ persona }: { persona: Persona }) => {
  const ref = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const watermarkX = useTransform(scrollYProgress, [0, 1], [0, -120]);

  /* Mouse parallax on character */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const el = stickyRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const ny = (e.clientY - (r.top + r.height / 2)) / r.height;
      mx.set(nx * 24);
      my.set(ny * 18);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my, reduce]);

  const marquee = persona.marquee ?? [];

  return (
    <section
      ref={ref}
      id={persona.id}
      className="relative w-full"
      style={{ height: "200vh" }}
    >
      <motion.div
        ref={stickyRef}
        style={{ opacity }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* ── BG layer with parallax ── */}
        <motion.div style={{ y: yBg, scale }} className="absolute inset-0">
          <img
            src={persona.bg}
            alt=""
            className="w-full h-full object-cover"
            loading={persona.index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          {/* Cinematic vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 0% / 0.55) 100%)",
            }}
          />
        </motion.div>

        {/* ── Diagonal accent slab ── */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: `linear-gradient(115deg, transparent 58%, ${persona.accent} 58%, ${persona.accent} 60.5%, transparent 60.5%, transparent 63%, ${persona.accent} 63%, ${persona.accent} 63.6%, transparent 63.6%)`,
            opacity: 0.55,
          }}
        />

        {/* ── Floating decorative orbs ── */}
        <motion.div
          aria-hidden
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: persona.accent, opacity: 0.18 }}
          animate={reduce ? {} : { x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-0 right-1/4 w-[320px] h-[320px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: persona.accent, opacity: 0.12 }}
          animate={reduce ? {} : { x: [0, -50, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Giant scrolling watermark ── */}
        <motion.div
          style={{ x: watermarkX }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <span
            className="font-display font-black tracking-tighter select-none whitespace-nowrap"
            style={{
              fontSize: "clamp(140px, 26vw, 420px)",
              color: persona.accent,
              opacity: 0.07,
              letterSpacing: "-0.06em",
              WebkitTextStroke: `1px ${persona.accent}`,
            }}
          >
            {persona.label}
          </span>
        </motion.div>

        {/* ── Content grid ── */}
        <div className="relative z-10 h-full container mx-auto px-5 sm:px-8 lg:px-12 flex items-end sm:items-center pb-24 sm:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center w-full">
            {/* Left text block */}
            <motion.div
              style={{ y: yText }}
              className="order-2 md:order-1 md:col-span-6 lg:col-span-6"
            >
              {/* Persona chip */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <span
                  className="relative px-3 py-1 font-display font-bold text-xs tracking-[0.25em] text-white overflow-hidden"
                  style={{ background: persona.accent }}
                >
                  {persona.label}
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-[0.3em]">
                  0{persona.index + 1} / 0{persona.total}
                </span>
                <span className="hidden sm:inline-block w-12 h-px bg-foreground/20" />
              </motion.div>

              <KineticTitle text={persona.title} />

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-px w-24 mb-5 origin-left"
                style={{ background: persona.accent }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="font-display text-base sm:text-xl font-semibold text-foreground/90 mb-3"
              >
                {persona.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="font-body text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed mb-7"
              >
                {persona.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="flex items-center gap-4 mb-8"
              >
                <MagneticCTA
                  to={persona.ctaTo}
                  label={persona.ctaLabel}
                  accent={persona.accent}
                />
                <Link
                  to={persona.ctaTo}
                  className="font-display text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors story-link"
                >
                  Learn more
                </Link>
              </motion.div>

              {/* Stat tiles */}
              {persona.stats && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                  className="flex flex-wrap gap-3 sm:gap-4"
                >
                  {persona.stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      whileHover={{ y: -4, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="glass rounded-xl px-4 py-2.5 border border-white/10 cursor-default"
                      style={{
                        boxShadow: `0 8px 24px hsl(0 0% 0% / 0.3), inset 0 0 0 1px ${persona.accent}22`,
                      }}
                    >
                      <div
                        className="font-display text-lg sm:text-2xl font-bold leading-none"
                        style={{ color: persona.accent }}
                      >
                        {s.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground font-body mt-1 tracking-wide">
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Right character */}
            <motion.div
              style={{ y: yImg, x: px, rotate: useTransform(px, [-24, 24], [-2, 2]) }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2 md:col-span-6 lg:col-span-6 relative flex justify-center md:justify-end"
            >
              {/* Glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[90px] pointer-events-none"
                style={{ background: persona.accent, opacity: 0.35 }}
                animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Concentric rings */}
              <motion.div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border pointer-events-none hidden md:block"
                style={{ borderColor: `${persona.accent}33` }}
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                aria-hidden
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-2 border-dashed pointer-events-none hidden md:block"
                style={{ borderColor: `${persona.accent}22` }}
                animate={reduce ? {} : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              <motion.img
                src={persona.png}
                alt={persona.title}
                style={{
                  y: py,
                  maskImage:
                    "linear-gradient(to bottom, black 92%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 92%, transparent 100%)",
                  filter: "drop-shadow(0 30px 60px hsl(0 0% 0% / 0.7))",
                }}
                className="relative z-10 h-[58svh] sm:h-[72svh] md:h-[82svh] lg:h-[90svh] w-auto object-contain object-bottom select-none"
                loading={persona.index === 0 ? "eager" : "lazy"}
                draggable={false}
              />

              {/* Corner badge — bottom-right of character */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="hidden md:flex absolute bottom-[18%] right-0 lg:right-4 z-20 glass-strong rounded-2xl px-4 py-3 border items-center gap-3"
                style={{ borderColor: `${persona.accent}55` }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                    style={{ background: persona.accent }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: persona.accent }}
                  />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    Status
                  </div>
                  <div
                    className="font-display text-xs font-bold"
                    style={{ color: persona.accent }}
                  >
                    {persona.index === 0
                      ? "Available · Hire Me"
                      : persona.index === 1
                      ? "Online · Say Hi"
                      : "Squad Up · BGMI"}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom marquee strip ── */}
        {marquee.length > 0 && (
          <div
            className="absolute bottom-0 left-0 right-0 z-10 border-t border-b py-3 overflow-hidden backdrop-blur-sm"
            style={{
              borderColor: `${persona.accent}33`,
              background: "hsl(0 0% 0% / 0.35)",
            }}
          >
            <motion.div
              className="flex gap-10 whitespace-nowrap"
              animate={reduce ? {} : { x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
                <span
                  key={i}
                  className="font-display font-bold text-xs sm:text-sm tracking-[0.3em] text-foreground/60 flex items-center gap-10"
                >
                  {m}
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: persona.accent }}
                  />
                </span>
              ))}
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PersonaHero;