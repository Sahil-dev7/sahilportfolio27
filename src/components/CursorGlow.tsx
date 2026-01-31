import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [x, y]);

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed pointer-events-none z-0 hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 500 : 400,
            height: isHovering ? 500 : 400,
            opacity: isHovering ? 0.25 : 0.15,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: "radial-gradient(circle, hsl(0 85% 55% / 0.3) 0%, hsl(0 85% 55% / 0.1) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{
            width: isHovering ? 16 : 8,
            height: isHovering ? 16 : 8,
            opacity: isHovering ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
};

export default CursorGlow;
