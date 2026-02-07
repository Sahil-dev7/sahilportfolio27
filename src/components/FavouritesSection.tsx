import { motion } from "framer-motion";
import { Heart, Car, Music, ExternalLink, Play } from "lucide-react";

const favourites = [
  {
    category: "Dream Car",
    name: "Lamborghini Huracán",
    emoji: "🏎️",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop",
    description: "The perfect blend of Italian craftsmanship and raw power. V10 naturally aspirated engine, 630 HP of pure adrenaline.",
    url: "https://www.lamborghini.com/en-en/models/huracan",
    icon: Car,
    gradient: "from-amber-500/30 via-orange-500/20 to-transparent",
  },
  {
    category: "Favourite Song",
    name: "Udd Ja Parindey",
    emoji: "🎵",
    image: "https://i.ytimg.com/vi/XjJAtLzLPXA/maxresdefault.jpg",
    description: "The anthem of freedom and spirit. Vishal Dadlani's powerful vocals with Amit Trivedi's composition.",
    url: "https://www.youtube.com/watch?v=XjJAtLzLPXA",
    icon: Music,
    gradient: "from-purple-500/30 via-pink-500/20 to-transparent",
  },
];

const FavouritesSection = () => {
  return (
    <section id="favourites" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Gradient blinds */}
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            Personal Picks
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Favourites</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4">
            Things that inspire me beyond code — machines and melodies.
          </p>
        </motion.div>

        {/* Favourites cards grid - Card behind card design */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
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
              whileHover={{ y: -10 }}
              className="group relative block"
            >
              {/* Stacked cards behind */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 glass-card rounded-2xl opacity-30 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
              <div className="absolute inset-0 translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 glass-card rounded-2xl opacity-50 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              
              {/* Main Card - Full background image */}
              <div className="relative glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 bounce-card">
                {/* Full background image */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60`} />
                  
                  {/* Play button overlay for song */}
                  {item.category === "Favourite Song" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div 
                        className="p-3 sm:p-4 rounded-full bg-primary/80 text-primary-foreground"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end">
                    {/* Category badge */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-display font-semibold mb-2 sm:mb-3 w-fit">
                      <item.icon className="w-3 h-3" />
                      {item.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-primary-foreground transition-colors flex items-center gap-2 drop-shadow-lg">
                      <span className="text-xl sm:text-2xl md:text-3xl">{item.emoji}</span>
                      {item.name}
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    
                    <p className="font-body text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavouritesSection;