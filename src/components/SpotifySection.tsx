import { motion, useScroll, useTransform } from "framer-motion";
import { Music, Headphones } from "lucide-react";
import { useRef } from "react";

const SpotifySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth width animation based on scroll
  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["40%", "80%", "40%"]);

  return (
    <section ref={sectionRef} id="spotify" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-green-500/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-green-500 font-display text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Headphones className="w-4 h-4" />
            Currently Vibing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Playlist</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            Music that fuels my coding sessions and creative flow.
          </p>
        </motion.div>

        {/* Spotify embed with dynamic width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            style={{ width }}
            className="glass-card rounded-2xl p-4 transition-all duration-700 ease-out min-w-[300px] max-w-4xl"
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

        {/* Music note decorations */}
        <div className="flex justify-center gap-4 mt-8">
          {["🎵", "🎶", "🎧", "🎸", "🎹"].map((emoji, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
