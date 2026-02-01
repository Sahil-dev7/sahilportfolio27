import { motion } from "framer-motion";
import { Heart, Car, Music, ExternalLink } from "lucide-react";

const favourites = [
  {
    category: "Dream Car",
    name: "Aston Martin Valkyrie",
    emoji: "🏎️",
    description: "The ultimate hypercar — a Formula 1 car for the road. Pure engineering perfection.",
    url: "https://www.astonmartin.com/en/models/valkyrie",
    icon: Car,
    gradient: "from-primary/20 to-secondary/10",
  },
  {
    category: "Favourite Song",
    name: "Udd Ja Parindey",
    emoji: "🎵",
    description: "A melody that speaks to the soul. Freedom, dreams, and the open sky.",
    url: "https://youtu.be/x0rphRfOWeU",
    icon: Music,
    gradient: "from-secondary/20 to-primary/10",
  },
];

const FavouritesSection = () => {
  return (
    <section id="favourites" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Heart className="w-4 h-4" />
            Personal Picks
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Favourites</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            Some things that inspire me beyond code — machines and melodies.
          </p>
        </motion.div>

        {/* Favourites grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {favourites.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative glass-card rounded-3xl p-8 h-full hover:border-primary/40 transition-all duration-300">
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-display font-semibold mb-4">
                  <item.icon className="w-3 h-3" />
                  {item.category}
                </div>
                
                {/* Content */}
                <div className="flex items-start gap-4">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {item.name}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavouritesSection;
