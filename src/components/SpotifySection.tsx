import { motion, useScroll, useTransform } from "framer-motion";
import { Headphones } from "lucide-react";
import { useRef } from "react";

const SpotifySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "90%", "50%"]);

  return (
    <section ref={sectionRef} id="spotify" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-green-500/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-green-500 font-display text-xs sm:text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Headphones className="w-3 h-3 sm:w-4 sm:h-4" />
            Currently Vibing
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Playlist</span>
          </h2>
          <p className="text-muted-foreground font-body text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3">
            Music that fuels my coding sessions and creative flow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            style={{ width }}
            className="glass-card rounded-2xl p-3 sm:p-4 transition-all duration-700 ease-out min-w-[280px] max-w-4xl"
          >
            <iframe 
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/3eGq5wjhBBIZABtTti5nTE?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotifySection;
