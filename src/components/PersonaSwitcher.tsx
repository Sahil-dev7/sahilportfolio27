import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

export type Persona = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  bg: string;
  png: string;
  accent: string;        // hsl(...) string
  accentSoft: string;    // softer companion
  ctaLabel: string;
  ctaTo: string;
  stats: { label: string; value: string }[];
  marquee: string[];
};

const SWAP_MS = 7000;

/* Live clock — IST */
const useClock = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
};

/* Animated SVG underline that re-draws under the title on persona swap */
const TitleUnderline = ({ accent, id }: { accent: string; id: string }) => (
  <svg
    viewBox="0 0 600 24"
    className="absolute -bottom-2 left-0 w-[60%] max-w-[420px] pointer-events-none"
    fill="none"
  >
    <motion.path
      key={id}
      d="M2 14 C 120 4, 260 22, 400 10 S 580 16, 598 8"
      stroke={accent}
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
    />
  </svg>
);

/* Letter-by-letter kinetic title that re-animates on persona change */
const KineticTitle = ({ text, accent }: { text: string; accent: string }) => {
  const letters = Array.from(text);
  return (
    <h1
      className="font-display font-black tracking-tight leading-[0.85] text-foreground"
      style={{
        fontSize: "clamp(2.75rem, 11vw, 9.5rem)",
        textShadow: `0 8px 40px ${accent}55`,
      }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-block">
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "115%", opacity: 0, rotateX: -60 }}
            animate={{ y: "0%", opacity: 1, rotateX: 0 }}
            exit={{ y: "-115%", opacity: 0, rotateX: 60 }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "50% 100%" }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </span>
    </h1>
  );
};

/* Magnetic shared CTA — does NOT remount between personas, only color morphs */
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
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
      layout
    >
      <motion.div
        animate={{
          background: accent,
          boxShadow: `0 18px 50px -10px ${accent}, 0 0 0 1px hsl(0 0% 100% / 0.12) inset`,
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-full"
      >
        <Link
          ref={ref}
          to={to}
          className="group relative inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full font-display font-semibold text-sm text-white overflow-hidden"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, hsl(0 0% 100% / 0.4) 50%, transparent 70%)",
            }}
          />
          <span className="relative z-10 tracking-[0.18em] uppercase">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={label}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {label}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="relative z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors overflow-hidden">
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-5" />
            <ArrowRight className="w-4 h-4 absolute -translate-x-5 transition-transform duration-300 group-hover:translate-x-0" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const PersonaSwitcher = ({ personas }: { personas: Persona[] }) => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const persona = personas[index];
  const now = useClock();
  const timeStr = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });

  /* Auto-rotate */
  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => {
      setDir(1);
      setIndex((i) => (i + 1) % personas.length);
    }, SWAP_MS);
    return () => clearTimeout(t);
  }, [index, paused, personas.length, reduce]);

  const go = (n: number) => {
    setDir(n > index || (index === personas.length - 1 && n === 0) ? 1 : -1);
    setIndex(n);
  };
  const next = () => go((index + 1) % personas.length);
  const prev = () => go((index - 1 + personas.length) % personas.length);

  /* Keyboard nav */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  /* Mouse parallax for character */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  /* Cursor spotlight (raw px coords inside stage) */
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  const sCursorX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const sCursorY = useSpring(cursorY, { stiffness: 120, damping: 22 });
  const spotlight = useTransform(
    [sCursorX, sCursorY],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x}px ${y}px, ${persona.accent}26, transparent 70%)`
  );
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduce) return;
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 30);
      my.set(((e.clientY - (r.top + r.height / 2)) / r.height) * 22);
      cursorX.set(e.clientX - r.left);
      cursorY.set(e.clientY - r.top);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
      cursorX.set(-1000);
      cursorY.set(-1000);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my, cursorX, cursorY, reduce]);

  return (
    <section
      ref={stageRef}
      className="relative w-full h-screen overflow-hidden bg-background"
      aria-label="Persona showcase"
    >
      {/* ─────────── Animated gradient backdrop (color morphs) ─────────── */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(ellipse at 30% 30%, ${persona.accentSoft} 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, ${persona.accent}33 0%, transparent 60%), hsl(var(--background))`,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* ─────────── Crossfading background image ─────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${persona.id}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={persona.bg}
            alt=""
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, hsl(0 0% 0% / 0.6) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ─────────── Floating accent orbs ─────────── */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-[150px] pointer-events-none"
        animate={{
          background: persona.accent,
          opacity: 0.18,
          x: reduce ? 0 : [0, 50, 0],
          y: reduce ? 0 : [0, 30, 0],
        }}
        transition={{
          background: { duration: 1 },
          opacity: { duration: 1 },
          x: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* ─────────── Subtle animated grid lines ─────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* ─────────── Cursor spotlight (follows mouse) ─────────── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden md:block z-[5]"
        style={{ background: spotlight as unknown as string }}
      />

      {/* ─────────── Drifting accent particles ─────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => {
          const left = (i * 73) % 100;
          const delay = (i % 7) * 0.7;
          const dur = 9 + (i % 5) * 2;
          const size = 2 + (i % 3);
          return (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${left}%`,
                bottom: "-10px",
                width: size,
                height: size,
                background: persona.accent,
                boxShadow: `0 0 8px ${persona.accent}`,
              }}
              animate={
                reduce
                  ? {}
                  : {
                      y: ["0vh", "-105vh"],
                      opacity: [0, 0.7, 0],
                      x: [0, i % 2 === 0 ? 30 : -30, 0],
                    }
              }
              transition={{
                duration: dur,
                delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      {/* ─────────── Giant scrolling watermark (morphs) ─────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={`wm-${persona.id}`}
            className="font-display font-black tracking-tighter select-none whitespace-nowrap"
            style={{
              fontSize: "clamp(160px, 30vw, 480px)",
              color: persona.accent,
              opacity: 0.07,
              letterSpacing: "-0.07em",
              WebkitTextStroke: `1px ${persona.accent}`,
            }}
            initial={{ x: "-15%", opacity: 0 }}
            animate={{ x: "0%", opacity: 0.07 }}
            exit={{ x: "12%", opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {persona.label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ─────────── Content grid ─────────── */}
      <div className="relative z-10 h-full container mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-24 sm:pt-24 sm:pb-20 flex items-center">
        {/* Meta-strip — top right (clock + persona id + sparkle) */}
        <div className="hidden md:flex absolute top-20 right-8 lg:right-12 z-20 items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-foreground/50 uppercase">
          <Sparkles
            className="w-3 h-3"
            style={{ color: persona.accent }}
          />
          <span>IST</span>
          <span className="tabular-nums text-foreground/80">{timeStr}</span>
          <span className="w-8 h-px bg-foreground/20" />
          <AnimatePresence mode="wait">
            <motion.span
              key={`mid-${persona.id}`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.4 }}
              style={{ color: persona.accent }}
            >
              MODE/{persona.label}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center w-full">
          {/* LEFT — animated copy */}
          <div className="order-2 md:order-1 md:col-span-7 lg:col-span-6 relative">
            {/* Persona chip + counter (changes) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`chip-${persona.id}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-5"
              >
                <span
                  className="relative px-3 py-1 font-display font-bold text-[10px] sm:text-xs tracking-[0.3em] text-white overflow-hidden rounded-sm"
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
                  0{index + 1} / 0{personas.length}
                </span>
                <span className="hidden sm:inline-block w-12 h-px bg-foreground/20" />
              </motion.div>
            </AnimatePresence>

            {/* Title — kinetic, re-animates */}
            <div className="relative mb-4 min-h-[3em]">
              <AnimatePresence mode="wait">
                <KineticTitle
                  key={`title-${persona.id}`}
                  text={persona.title}
                  accent={persona.accent}
                />
              </AnimatePresence>
              <TitleUnderline accent={persona.accent} id={persona.id} />
            </div>

            {/* Accent rule (color morphs, doesn't remount) */}
            <motion.div
              animate={{ background: persona.accent }}
              transition={{ duration: 0.8 }}
              className="h-[2px] w-24 mb-5 rounded-full origin-left"
            />

            {/* Subtitle + description */}
            <div className="min-h-[5.5rem] mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`copy-${persona.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="font-display text-base sm:text-xl font-semibold text-foreground/95 mb-2">
                    {persona.subtitle}
                  </p>
                  <p className="font-body text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
                    {persona.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Shared CTA + secondary link (button persists, label/color morph) */}
            <div className="flex items-center gap-5 mb-7">
              <MagneticCTA
                to={persona.ctaTo}
                label={persona.ctaLabel}
                accent={persona.accent}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={`learn-${persona.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    to={persona.ctaTo}
                    className="font-display text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors story-link"
                  >
                    Learn more
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stat tiles */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stats-${persona.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-wrap gap-3"
              >
                {persona.stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="glass rounded-xl px-4 py-2.5 cursor-default"
                    style={{
                      boxShadow: `0 8px 24px hsl(0 0% 0% / 0.3), inset 0 0 0 1px ${persona.accent}33`,
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
            </AnimatePresence>
          </div>

          {/* RIGHT — character image */}
          <div className="order-1 md:order-2 md:col-span-5 lg:col-span-6 relative h-[42svh] sm:h-[55svh] md:h-[78svh] flex justify-center md:justify-end items-end">
            {/* Glow */}
            <motion.div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full blur-[100px] pointer-events-none"
              animate={{
                background: persona.accent,
                opacity: reduce ? 0.3 : [0.28, 0.45, 0.28],
                scale: reduce ? 1 : [1, 1.08, 1],
              }}
              transition={{
                background: { duration: 0.8 },
                opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            {/* Concentric rings (color morph) */}
            <motion.div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border pointer-events-none hidden md:block"
              animate={{
                borderColor: `${persona.accent}33`,
                rotate: reduce ? 0 : 360,
              }}
              transition={{
                borderColor: { duration: 0.8 },
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              }}
            />
            <motion.div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-2 border-dashed pointer-events-none hidden md:block"
              animate={{
                borderColor: `${persona.accent}22`,
                rotate: reduce ? 0 : -360,
              }}
              transition={{
                borderColor: { duration: 0.8 },
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              }}
            />

            {/* Character with parallax + crossfade */}
            <motion.div
              style={{ x: px, y: py }}
              className="relative z-10 h-full w-full flex items-end justify-center md:justify-end"
            >
              <AnimatePresence mode="sync">
                <motion.img
                  key={`png-${persona.id}`}
                  src={persona.png}
                  alt={persona.title}
                  initial={{ opacity: 0, x: dir * 80, scale: 0.94, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -dir * 80, scale: 0.94, filter: "blur(8px)" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 h-full w-auto object-contain object-bottom select-none pointer-events-none"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 92%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 92%, transparent 100%)",
                    filter: "drop-shadow(0 30px 60px hsl(0 0% 0% / 0.7))",
                  }}
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </AnimatePresence>
            </motion.div>

            {/* Floating keyword tags around portrait */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`tags-${persona.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  {persona.marquee.slice(0, 4).map((tag, i) => {
                    const positions = [
                      { top: "12%", left: "4%" },
                      { top: "32%", right: "2%" },
                      { bottom: "28%", left: "0%" },
                      { top: "58%", right: "6%" },
                    ];
                    return (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 14, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          y: [0, -8, 0],
                          scale: 1,
                        }}
                        transition={{
                          opacity: { delay: 0.4 + i * 0.12, duration: 0.5 },
                          scale: { delay: 0.4 + i * 0.12, duration: 0.5 },
                          y: {
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                          },
                        }}
                        className="absolute font-mono text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full glass-strong"
                        style={{
                          ...positions[i],
                          color: persona.accent,
                          borderColor: `${persona.accent}55`,
                        }}
                      >
                        ◆ {tag}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Status badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`status-${persona.id}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex absolute bottom-[18%] right-2 lg:right-6 z-20 glass-strong rounded-2xl px-4 py-3 border items-center gap-3"
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
                    {index === 0
                      ? "Available · Hire Me"
                      : index === 1
                      ? "Online · Say Hi"
                      : "Squad Up · BGMI"}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ─────────── Side arrow controls ─────────── */}
      <button
        onClick={prev}
        aria-label="Previous persona"
        className="hidden md:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass-strong items-center justify-center text-foreground/80 hover:text-foreground hover:scale-110 transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next persona"
        className="hidden md:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass-strong items-center justify-center text-foreground/80 hover:text-foreground hover:scale-110 transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ─────────── Bottom dock: dots + auto-progress + pause ─────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        {/* Marquee strip */}
        <div
          className="border-t py-3 overflow-hidden backdrop-blur-md"
          style={{
            borderColor: `${persona.accent}33`,
            background: "hsl(0 0% 0% / 0.4)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`marq-${persona.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex gap-10 whitespace-nowrap"
            >
              <motion.div
                className="flex gap-10 whitespace-nowrap"
                animate={reduce ? {} : { x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...persona.marquee, ...persona.marquee, ...persona.marquee].map(
                  (m, i) => (
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
                  )
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dock controls */}
        <div
          className="flex items-center justify-between gap-4 px-5 sm:px-10 py-4"
          style={{ background: "hsl(0 0% 0% / 0.5)" }}
        >
          {/* Persona dots */}
          <div className="flex items-center gap-2 sm:gap-3">
            {personas.map((p, i) => {
              const isActive = i === index;
              return (
                <button
                  key={p.id}
                  onClick={() => go(i)}
                  aria-label={`Go to ${p.label}`}
                  className="group relative flex items-center gap-2 py-2"
                >
                  <span className="relative block h-[3px] w-10 sm:w-16 rounded-full bg-foreground/15 overflow-hidden">
                    <motion.span
                      key={`prog-${p.id}-${index}-${paused}`}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ background: p.accent }}
                      initial={{ width: isActive ? "0%" : i < index ? "100%" : "0%" }}
                      animate={{
                        width: isActive
                          ? paused || reduce
                            ? "30%"
                            : "100%"
                          : i < index
                          ? "100%"
                          : "0%",
                      }}
                      transition={{
                        duration: isActive && !paused && !reduce ? SWAP_MS / 1000 : 0.4,
                        ease: "linear",
                      }}
                    />
                  </span>
                  <span
                    className={`hidden sm:inline-block font-display text-[10px] tracking-[0.25em] uppercase transition-colors ${
                      isActive ? "" : "text-foreground/40 group-hover:text-foreground/70"
                    }`}
                    style={{ color: isActive ? p.accent : undefined }}
                  >
                    {p.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Pause + hint */}
          <div className="flex items-center gap-3">
            <span className="hidden md:block font-mono text-[10px] tracking-[0.3em] text-foreground/40">
              ← / → SWITCH
            </span>
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Resume" : "Pause"}
              className="w-9 h-9 rounded-full glass-strong flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
            >
              {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSwitcher;
