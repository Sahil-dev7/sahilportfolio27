import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type RailItem = { id: string; label: string; accent: string };

/**
 * Top scroll progress bar + right-side persona rail.
 * Rail shows which persona slide is currently active and lets user jump.
 */
const HomeChrome = ({ items }: { items: RailItem[] }) => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let current = items[0]?.id ?? "";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const top = el.offsetTop;
        if (mid >= top) current = it.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-primary via-secondary to-primary"
        style={{ scaleX: progress }}
      />

      {/* Right side persona rail */}
      <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-end gap-4">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => jump(it.id)}
              aria-label={`Jump to ${it.label}`}
              className="group relative flex items-center gap-3"
            >
              <span
                className={`font-display font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                }`}
                style={{ color: it.accent }}
              >
                {it.label}
              </span>
              <span className="relative flex items-center justify-center w-8 h-8">
                <span
                  className={`absolute rounded-full border transition-all duration-300 ${
                    isActive ? "w-7 h-7" : "w-2 h-2 border-foreground/30"
                  }`}
                  style={{
                    borderColor: isActive ? it.accent : undefined,
                  }}
                />
                <span
                  className="rounded-full transition-all duration-300"
                  style={{
                    background: isActive ? it.accent : "hsl(0 0% 100% / 0.3)",
                    width: isActive ? "10px" : "6px",
                    height: isActive ? "10px" : "6px",
                    boxShadow: isActive ? `0 0 16px ${it.accent}` : undefined,
                  }}
                />
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default HomeChrome;