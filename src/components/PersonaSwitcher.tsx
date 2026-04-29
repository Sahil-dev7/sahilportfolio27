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
import { ArrowUpRight } from "lucide-react";

export type Persona = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  bg: string;
  png: string;
  accent: string;
  accentSoft: string;
  ctaLabel: string;
  ctaTo: string;
  stats: { label: string; value: string }[];
  marquee: string[];
  coverLines?: {
    leftTop?: { kicker: string; headline: string; sub?: string };
    leftMid?: { kicker: string; headline: string; sub?: string };
    rightTop?: { kicker: string; headline: string; sub?: string };
    rightBottom?: { kicker: string; headline: string; sub?: string };
    issueWord?: string; // e.g. "DEVELOPER" — small italic word under masthead
  };
};

/* Cursive name title — viral, hand-written feel */
const CursiveName = ({
  text,
  accent,
  size = "clamp(4rem, 14vw, 12rem)",
  stroke = false,
}: {
  text: string;
  accent: string;
  size?: string;
  stroke?: boolean;
}) => {
  const letters = Array.from(text);
  return (
    <h1
      className="leading-[0.85]"
      style={{
        fontFamily: "'Caveat', cursive",
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "-0.01em",
        color: stroke ? "transparent" : "hsl(var(--foreground))",
        WebkitTextStroke: stroke ? `1.5px ${accent}` : undefined,
        textShadow: stroke ? "none" : `0 10px 50px ${accent}55, 0 2px 0 ${accent}22`,
      }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-block">
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "60%", opacity: 0, rotate: -8, filter: "blur(6px)" }}
            animate={{ y: "0%", opacity: 1, rotate: 0, filter: "blur(0px)" }}
            exit={{ y: "-30%", opacity: 0, filter: "blur(6px)" }}
            transition={{
              duration: 0.7,
              delay: 0.1 + i * 0.04,
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

/* Redesigned, simple "Enter Dev Mode" pill — minimal, animated arrow */
const EnterPill = ({
  to,
  label,
  accent,
}: {
  to: string;
  label: string;
  accent: string;
}) => {
  return (
    <motion.div layout className="inline-block">
      <Link
        to={to}
        className="group relative inline-flex items-center gap-4 pl-6 pr-3 py-3 rounded-full font-display font-medium text-sm uppercase tracking-[0.22em] text-foreground overflow-hidden"
        style={{
          background: "hsl(0 0% 100% / 0.06)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {/* animated border */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow: `0 0 0 1px ${accent}55, 0 12px 40px -10px ${accent}88`,
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* fill on hover */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
          style={{ background: accent }}
        />
        <span className="relative z-10 transition-colors group-hover:text-white">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={label}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </span>
        <span
          className="relative z-10 inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors group-hover:bg-white/20"
          style={{ background: `${accent}` }}
        >
          <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
};

const SCROLL_COOLDOWN = 900;

const PersonaSwitcher = ({ personas }: { personas: Persona[] }) => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  const persona = personas[index];
  const lastSwapRef = useRef(0);

  const go = (n: number, direction: number) => {
    setDir(direction);
    setIndex(n);
  };

  /* Wheel / touch scroll → change persona */
  useEffect(() => {
    const tryAdvance = (delta: number) => {
      const now = Date.now();
      if (now - lastSwapRef.current < SCROLL_COOLDOWN) return;
      if (Math.abs(delta) < 8) return;
      lastSwapRef.current = now;
      if (delta > 0) {
        const n = (index + 1) % personas.length;
        go(n, 1);
      } else {
        const n = (index - 1 + personas.length) % personas.length;
        go(n, -1);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      tryAdvance(e.deltaY);
    };
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dy = touchStartY - e.touches[0].clientY;
      if (Math.abs(dy) > 40) {
        tryAdvance(dy);
        touchStartY = e.touches[0].clientY;
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") tryAdvance(1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") tryAdvance(-1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [index, personas.length]);

  /* Mouse parallax */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
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
      mx.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 24);
      my.set(((e.clientY - (r.top + r.height / 2)) / r.height) * 18);
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
      {/* Animated gradient backdrop */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(ellipse at 30% 30%, ${persona.accentSoft} 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, ${persona.accent}33 0%, transparent 60%), hsl(var(--background))`,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Crossfading background image */}
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
          {/* On mobile, lighter overlay so PNG dominates 65% of screen */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/10 md:to-background/20" />
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

      {/* Floating accent orb */}
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

      {/* Subtle grid */}
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

      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden md:block z-[5]"
        style={{ background: spotlight as unknown as string }}
      />

      {/* Drifting particles */}
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

      {/* ============== POSTER / TITLE-CARD LAYOUT ============== */}

      {/* TOP metadata bar */}
      <div className="absolute top-16 sm:top-20 left-0 right-0 z-20 px-5 sm:px-10 pointer-events-none">
        <div className="flex items-center justify-between gap-4 font-mono text-[9px] sm:text-[10px] tracking-[0.35em] text-foreground/55 uppercase">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">A FILM BY</span>
            <span className="text-foreground/80">SAHIL · W</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`meta-c-${persona.id}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
              style={{ color: persona.accent }}
            >
              <span className="block w-6 h-px" style={{ background: persona.accent }} />
              <span>CHAPTER · {persona.label}</span>
              <span className="block w-6 h-px" style={{ background: persona.accent }} />
            </motion.div>
          </AnimatePresence>
          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>INDIA · MMXXVI</span>
          </div>
        </div>
      </div>

      {/* LEFT vertical rail */}
      <div className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-5">
        <span className="font-mono text-[9px] tracking-[0.4em] text-foreground/40 [writing-mode:vertical-rl] rotate-180">
          SAHIL · WADHWANI · 27
        </span>
        <span className="block w-px h-14 bg-foreground/20" />
        <AnimatePresence mode="wait">
          <motion.span
            key={`rail-l-${persona.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-xs tracking-[0.5em] [writing-mode:vertical-rl] rotate-180"
            style={{ color: persona.accent }}
          >
            ◆ {persona.subtitle.split("·")[0].trim().toUpperCase()}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* RIGHT vertical rail */}
      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-5">
        <AnimatePresence mode="wait">
          <motion.span
            key={`rail-r-${persona.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.5em] [writing-mode:vertical-rl] uppercase"
            style={{ color: persona.accent }}
          >
            {String(index + 1).padStart(2, "0")} / {String(personas.length).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <span className="block w-px h-14 bg-foreground/20" />
        <span className="font-mono text-[9px] tracking-[0.4em] text-foreground/40 [writing-mode:vertical-rl]">
          REEL · 26 / 70MM · CINEMASCOPE
        </span>
      </div>

      {/* === STAGE === */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-end md:justify-center pt-20 pb-32 sm:pb-28 md:py-0 px-5 sm:px-10">
        {/* Subtitle chip ABOVE title (centered) */}
        <div className="hidden md:flex justify-center mb-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={`chip-${persona.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-strong"
              style={{ borderColor: `${persona.accent}55` }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: persona.accent }} />
              <span
                className="font-mono text-[10px] tracking-[0.35em] uppercase"
                style={{ color: persona.accent }}
              >
                {persona.subtitle}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TITLE LAYER — behind portrait */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[6] px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-back-${persona.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <CursiveName
                text={persona.title}
                accent={persona.accent}
                size="clamp(4rem, 16vw, 14rem)"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PORTRAIT LAYER — over title */}
        <div className="relative w-full flex-1 md:flex-none md:h-[78svh] flex items-end md:items-center justify-center z-[8]">
          <div className="relative h-[65svh] md:h-full w-full max-w-[820px] flex items-end justify-center">
            {/* Glow */}
            <motion.div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px] pointer-events-none"
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
            {/* Concentric rings */}
            <motion.div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border pointer-events-none hidden md:block"
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[330px] h-[330px] rounded-full border-2 border-dashed pointer-events-none hidden md:block"
              animate={{
                borderColor: `${persona.accent}22`,
                rotate: reduce ? 0 : -360,
              }}
              transition={{
                borderColor: { duration: 0.8 },
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              }}
            />

            {/* Animated SVG progress ring */}
            <svg
              aria-hidden
              viewBox="0 0 200 200"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden md:block -rotate-90"
            >
              <circle
                cx="100"
                cy="100"
                r="96"
                stroke={`${persona.accent}22`}
                strokeWidth="0.6"
                fill="none"
              />
              <motion.circle
                key={`ring-${persona.id}`}
                cx="100"
                cy="100"
                r="96"
                stroke={persona.accent}
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
                pathLength={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={{ filter: `drop-shadow(0 0 6px ${persona.accent})` }}
              />
              {Array.from({ length: 60 }).map((_, i) => {
                const angle = (i / 60) * Math.PI * 2;
                const r1 = 88;
                const r2 = i % 5 === 0 ? 80 : 84;
                const x1 = 100 + Math.cos(angle) * r1;
                const y1 = 100 + Math.sin(angle) * r1;
                const x2 = 100 + Math.cos(angle) * r2;
                const y2 = 100 + Math.sin(angle) * r2;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={`${persona.accent}${i % 5 === 0 ? "55" : "22"}`}
                    strokeWidth="0.5"
                  />
                );
              })}
            </svg>

            {/* Character — BIGGER. Mobile: fills the 65svh container, scales >100% */}
            <motion.div
              style={{ x: px, y: py }}
              className="relative z-10 h-full w-full flex items-end justify-center"
            >
              <AnimatePresence mode="sync">
                <motion.img
                  key={`png-${persona.id}`}
                  src={persona.png}
                  alt={persona.title}
                  initial={{ opacity: 0, x: dir * 80, scale: 1.0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, scale: 1.12, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -dir * 80, scale: 1.0, filter: "blur(8px)" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 h-[115%] md:h-[110%] w-auto object-contain object-bottom select-none pointer-events-none"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 94%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 94%, transparent 100%)",
                    filter: "drop-shadow(0 30px 60px hsl(0 0% 0% / 0.7))",
                  }}
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </AnimatePresence>
            </motion.div>

            {/* Floating keyword tags */}
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
                      { top: "12%", left: "-6%" },
                      { top: "26%", right: "-6%" },
                      { bottom: "28%", left: "-8%" },
                      { top: "62%", right: "-4%" },
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
          </div>
        </div>

        {/* FOREGROUND title (small, in front, bottom) + CTA */}
        <div className="absolute left-0 right-0 bottom-24 sm:bottom-28 md:bottom-16 z-[12] flex flex-col items-center gap-4 px-5 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-front-${persona.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block"
            >
              <div
                className="font-display font-black tracking-[0.4em] text-xs uppercase text-center"
                style={{ color: persona.accent }}
              >
                — Presenting —
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile compact title chip */}
          <div className="md:hidden text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`m-sub-${persona.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-[10px] tracking-[0.3em] uppercase mb-1"
                style={{ color: persona.accent }}
              >
                {persona.subtitle}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pointer-events-auto">
            <EnterPill
              to={persona.ctaTo}
              label={persona.ctaLabel}
              accent={persona.accent}
            />
          </div>
        </div>
      </div>

      {/* Bottom: passive indicator dots + scroll hint (no buttons) */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 flex flex-col items-center gap-3 pointer-events-none">
        <div className="flex items-center gap-2">
          {personas.map((p, i) => {
            const isActive = i === index;
            return (
              <motion.span
                key={p.id}
                aria-hidden
                className="block h-[3px] rounded-full"
                animate={{
                  width: isActive ? 36 : 10,
                  background: isActive ? p.accent : "hsl(0 0% 100% / 0.25)",
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            );
          })}
        </div>
        <motion.span
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] text-foreground/40 uppercase"
          animate={{ y: [0, 4, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to switch
        </motion.span>
      </div>
    </section>
  );
};

export default PersonaSwitcher;
