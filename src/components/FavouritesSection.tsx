import { motion } from "framer-motion";
import { Heart, Car, Music, ExternalLink, Play, Youtube, Instagram } from "lucide-react";

const favourites = [
  {
    category: "Dream Car",
    name: "Lamborghini Huracán",
    emoji: "🏎️",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop",
    description: "V10 naturally aspirated, 630 HP of pure adrenaline.",
    url: "https://www.lamborghini.com/en-en/models/huracan",
    icon: Car,
    source: { label: "Saved on Instagram", icon: Instagram, href: "https://www.instagram.com/__sahil_.27" },
    gradient: "from-amber-500/30 via-orange-500/20 to-transparent",
  },
  {
    category: "Favourite Song",
    name: "Udd Ja Parindey",
    emoji: "🎵",
    image: "https://i3.ytimg.com/vi/woCicWwE-i8/mqdefault.jpg",
    description: "Vishal Dadlani's powerful vocals with Amit Trivedi's composition.",
    url: "https://www.youtube.com/watch?v=woCicWwE-i8",
    icon: Music,
    source: { label: "Listening on YouTube", icon: Youtube, href: "https://youtube.com/@SahilDev" },
    gradient: "from-purple-500/30 via-pink-500/20 to-transparent",
  },
];

const FavouritesSection = () => {
  return (
    <section id="favourites" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            Personal Picks
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Favourites</span>
          </h2>
        </motion.div>

        {/* Card behind card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
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
              <div className="absolute inset-0 translate-x-2 translate-y-2 glass-card rounded-2xl opacity-30 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              <div className="absolute inset-0 translate-x-1 translate-y-1 glass-card rounded-2xl opacity-50 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
              
              {/* Main Card with full background image */}
              <div className="relative glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 bounce-card">
                <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {item.category === "Favourite Song" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div className="p-3 rounded-full bg-primary/80 text-primary-foreground" whileHover={{ scale: 1.2 }}>
                        <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-display font-semibold">
                        <item.icon className="w-2.5 h-2.5" />
                        {item.category}
                      </span>
                      {item.source && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white/85 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider">
                          <item.source.icon className="w-2.5 h-2.5" />
                          {item.source.label}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-1 flex items-center gap-1.5 drop-shadow-lg">
                      <span className="text-base sm:text-lg">{item.emoji}</span>
                      {item.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    
                    <p className="font-body text-white/80 text-[10px] sm:text-xs leading-relaxed line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavouritesSection;
