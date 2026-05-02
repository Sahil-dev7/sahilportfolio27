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
};

/* Cursive name title — viral, hand-written feel, single-line on desktop */
const CursiveName = ({ text, accent }: { text: string; accent: string }) => {
  const letters = Array.from(text);
  return (
    <h1
      className="leading-[0.85] text-foreground md:whitespace-nowrap"
      style={{
        fontFamily: "'Italianno', 'Caveat', cursive",
        fontWeight: 400,
        fontStyle: "italic",
        fontSize: "clamp(3rem, 9vw, 9rem)",
        textShadow: `0 14px 60px ${accent}55, 0 2px 0 ${accent}22`,
        letterSpacing: "-0.01em",
      }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-block">
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "55%", opacity: 0, rotate: -6, filter: "blur(6px)" }}
            animate={{ y: "0%", opacity: 1, rotate: 0, filter: "blur(0px)" }}
            exit={{ y: "-25%", opacity: 0, filter: "blur(6px)" }}
            transition={{
              duration: 0.65,
              delay: 0.08 + i * 0.035,
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

      {/* Preloaded layered backgrounds — opacity crossfade, no remount glitch */}
      <div className="absolute inset-0">
        {personas.map((p, i) => (
          <motion.img
            key={p.id}
            src={p.bg}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "blur(18px) saturate(1.15)",
              transform: "scale(1.12)",
              willChange: "opacity",
            }}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            loading={i === 0 ? "eager" : "lazy"}
            draggable={false}
          />
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20 md:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 0% / 0.65) 100%)",
          }}
        />
      </div>

      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden md:block z-[5]"
        style={{ background: spotlight as unknown as string }}
      />

      {/* Content grid */}
      <div className="relative z-10 h-full container mx-auto px-5 sm:px-8 lg:px-16 pt-20 pb-24 sm:pt-24 flex items-end md:items-center">
        {/* Vertical persona rail */}
        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-6">
          <span className="font-mono text-[9px] tracking-[0.4em] text-foreground/40 [writing-mode:vertical-rl] rotate-180">
            SAHIL · WADHWANI
          </span>
          <span className="block w-px h-16 bg-foreground/15" />
          <AnimatePresence mode="wait">
            <motion.span
              key={`rail-${persona.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-xs tracking-[0.5em] [writing-mode:vertical-rl] rotate-180"
              style={{ color: persona.accent }}
            >
              {persona.label}
            </motion.span>
          </AnimatePresence>
          <span className="block w-px h-16 bg-foreground/15" />
          <span className="font-mono text-[9px] tracking-[0.4em] text-foreground/40">
            ◆
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end md:items-center w-full">
          {/* LEFT — copy (on mobile sits at bottom, smaller, since PNG dominates) */}
          <div className="order-2 md:order-1 md:col-span-7 lg:col-span-7 relative max-w-2xl">
            {/* Subtitle ABOVE name */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`sub-${persona.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mb-2 sm:mb-3 flex items-center gap-3"
              >
                <span
                  className="block h-px w-8 sm:w-12"
                  style={{ background: persona.accent }}
                />
                <span
                  className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase"
                  style={{ color: persona.accent }}
                >
                  {persona.subtitle}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Cursive name title */}
            <div className="relative mb-4 min-h-[1.2em]">
              <AnimatePresence mode="wait">
                <CursiveName
                  key={`title-${persona.id}`}
                  text={persona.title}
                  accent={persona.accent}
                />
              </AnimatePresence>
            </div>

            {/* Accent rule */}
            <motion.div
              animate={{ background: persona.accent }}
              transition={{ duration: 0.8 }}
              className="h-[2px] w-20 mb-4 rounded-full origin-left hidden sm:block"
            />

            {/* Description */}
            <div className="mb-6 hidden sm:block">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${persona.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-body text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed"
                >
                  {persona.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Single Enter pill (redesigned, persists, label morphs) */}
            <div className="flex items-center gap-4">
              <EnterPill
                to={persona.ctaTo}
                label={persona.ctaLabel}
                accent={persona.accent}
              />
            </div>

            {/* Stat tiles — desktop only to keep mobile clean for PNG */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stats-${persona.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="hidden md:flex flex-wrap gap-3 mt-7"
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

          {/* RIGHT — character image (mobile: 65vh dominant, desktop full height) */}
          <div className="order-1 md:order-2 md:col-span-5 lg:col-span-5 relative h-[60svh] md:h-[88svh] flex justify-center md:justify-end items-end overflow-hidden">
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
            {/* Character — BIGGER. Mobile: fills the 65svh container, scales >100% */}
            <motion.div
              style={{ x: px, y: py }}
              className="relative z-10 h-full w-full flex items-end justify-center md:justify-end"
            >
              {personas.map((p, i) => {
                const active = i === index;
                return (
                  <motion.img
                    key={p.id}
                    src={p.png}
                    alt={active ? p.title : ""}
                    initial={false}
                    animate={{
                      opacity: active ? 1 : 0,
                      x: active ? 0 : (i < index ? -60 : 60),
                      scale: active ? 1 : 0.96,
                      filter: active ? "blur(0px)" : "blur(10px)",
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 h-full w-auto max-w-none object-contain object-bottom select-none pointer-events-none"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 92%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 92%, transparent 100%)",
                      filter: "drop-shadow(0 30px 60px hsl(0 0% 0% / 0.7))",
                      willChange: "opacity, transform",
                    }}
                    loading={i === 0 ? "eager" : "lazy"}
                    draggable={false}
                  />
                );
              })}
            </motion.div>

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
