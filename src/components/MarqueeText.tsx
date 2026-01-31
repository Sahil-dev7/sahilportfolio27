import { motion } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  className?: string;
}

const MarqueeText = ({ text, className = "" }: MarqueeTextProps) => {
  const items = Array(4).fill(text);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-8 font-display text-6xl md:text-8xl font-bold text-transparent"
            style={{
              WebkitTextStroke: "1px hsl(0 85% 55% / 0.3)",
            }}
          >
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`duplicate-${index}`}
            className="mx-8 font-display text-6xl md:text-8xl font-bold text-transparent"
            style={{
              WebkitTextStroke: "1px hsl(0 85% 55% / 0.3)",
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
