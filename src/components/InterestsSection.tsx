import { motion } from "framer-motion";
import { Gamepad2, Dumbbell, Tv, Target } from "lucide-react";

const interests = [
  {
    icon: Gamepad2,
    title: "Rubik's Cube",
    description: "Speed cubing enthusiast solving puzzles in seconds. The perfect blend of logic and muscle memory.",
    emoji: "🧩",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Dumbbell,
    title: "Nunchucks",
    description: "Martial arts meets coordination. There's something meditative about the flow and rhythm.",
    emoji: "🥋",
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    icon: Target,
    title: "Football",
    description: "Weekend warrior on the pitch. Nothing beats the thrill of a perfectly timed goal.",
    emoji: "⚽",
    gradient: "from-accent/20 to-secondary/20",
  },
  {
    icon: Tv,
    title: "Content Creation",
    description: "Sharing knowledge and experiences through videos. Building a community one upload at a time.",
    emoji: "🎬",
    gradient: "from-primary/20 to-secondary/20",
  },
];

const InterestsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
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

        {/* Interest cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-gradient-card rounded-2xl border border-border p-6 h-full shadow-card hover:border-primary/50 transition-colors">
                {/* Emoji floating */}
                <span className="text-4xl mb-4 block">{interest.emoji}</span>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {interest.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
