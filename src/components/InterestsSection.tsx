import { motion } from "framer-motion";
import { Gamepad2, Dumbbell, Tv, Target } from "lucide-react";

const interests = [
  {
    icon: Gamepad2,
    title: "Rubik's Cube",
    description: "Speed cubing enthusiast solving puzzles in seconds. The perfect blend of logic and muscle memory.",
    emoji: "🧩",
  },
  {
    icon: Dumbbell,
    title: "Nunchucks",
    description: "Martial arts meets coordination. There's something meditative about the flow and rhythm.",
    emoji: "🥋",
  },
  {
    icon: Target,
    title: "Football",
    description: "Weekend warrior on the pitch. Nothing beats the thrill of a perfectly timed goal.",
    emoji: "⚽",
  },
  {
    icon: Tv,
    title: "Content Creation",
    description: "Sharing knowledge and experiences through videos. Building a community one upload at a time.",
    emoji: "🎬",
  },
];

const InterestsSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest">Beyond Code</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">More Than a </span>
            <span className="text-gradient">Developer</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            Life is too short to have just one passion. Here's what makes me, me.
          </p>
        </motion.div>

        {/* Interest cards grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                {/* Emoji with glow */}
                <div className="relative mb-4">
                  <span className="text-4xl block group-hover:scale-110 transition-transform duration-300">
                    {interest.emoji}
                  </span>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                  {interest.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {interest.description}
                </p>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
