import { motion } from "framer-motion";
import { Gamepad2, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const games = [
  {
    name: "GTA V",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    description: "Open world action-adventure masterpiece",
    url: "https://www.rockstargames.com/gta-v",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    name: "Red Dead Redemption 2",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    description: "Epic tale of life in America's unforgiving heartland",
    url: "https://www.rockstargames.com/reddeadredemption2",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    name: "Getting Over It",
    logo: "https://cdn.cloudflare.steamstatic.com/steam/apps/240720/header.jpg",
    description: "A game I made for a certain kind of person",
    url: "https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy/",
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    name: "BGMI",
    logo: "https://www.seekpng.com/png/detail/889-8897281_pubg-logo-png.png",
    description: "Battle Royale - Conqueror Rank",
    url: "https://www.battlegroundsmobileindia.com/",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  {
    name: "Need for Speed",
    logo: "https://wallpapers.com/images/featured-full/iphone-xs-max-need-for-speed-heat-background-3whzpe7dasppzbv0.jpg",
    description: "Speed is life - Racing enthusiast",
    url: "https://www.ea.com/games/need-for-speed",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "eFootball",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/EFootball_2022_cover.jpg",
    description: "The beautiful game, digitized",
    url: "https://www.konami.com/efootball/",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
];

const GamingSection = () => {
  return (
    <section id="gaming" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 gradient-blinds opacity-15" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Gamepad2 className="w-3 h-3 sm:w-4 sm:h-4" />
            Gaming World
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">User name: </span>
            <span className="text-gradient">S A A H O</span>
          </h2>
          <p className="text-muted-foreground font-body text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3">
            Games that defined my journey — from casual to competitive.
          </p>
        </motion.div>

        {/* Games grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {games.map((game, index) => (
            <motion.a
              key={game.name}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300">
                {/* Full card background image */}
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                  <img
                    src={game.logo}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">🎮</text></svg>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="font-display text-xs sm:text-sm md:text-base font-bold text-white mb-0.5 flex items-center gap-1.5">
                      {game.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs text-white/70 line-clamp-1">
                      {game.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* BGMI ID + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 glass-strong rounded-full border border-primary/30">
            <span className="text-lg sm:text-xl">🎯</span>
            <span className="font-display text-xs sm:text-sm text-foreground">
              BGMI ID: <span className="text-primary font-bold">5697409495</span>
            </span>
          </div>
          
          <Button
            asChild
            size="sm"
            className="bg-gradient-primary text-primary-foreground font-display font-semibold px-4 sm:px-6 shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 btn-bounce text-xs sm:text-sm"
          >
            <Link to="/gaming">
              View Full Gaming Profile
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GamingSection;
