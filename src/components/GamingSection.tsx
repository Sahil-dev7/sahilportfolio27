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
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Getting_Over_It_with_Bennett_Foddy_cover_art.png",
    description: "A game I made for a certain kind of person",
    url: "https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy/",
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    name: "BGMI",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/94/PUBG_Mobile_logo.png",
    description: "Battle Royale - ID: 5697409495",
    url: "https://www.battlegroundsmobileindia.com/",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  {
    name: "Need for Speed",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Need_for_Speed_logo.svg",
    description: "Highest Rank achieved - Speed is life",
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
    <section id="gaming" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

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
            <Gamepad2 className="w-4 h-4" />
            Gaming World
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">Player Tag: </span>
            <span className="text-gradient">S A A H O</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            Games that defined my journey — from casual to competitive. 
            Each title has its own story, its own grind, and its own glory.
          </p>
        </motion.div>

        {/* Games grid with real logos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.a
              key={game.name}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative glass-card rounded-2xl p-6 h-full hover:border-primary/40 transition-all duration-300 flex flex-col">
                {/* Game logo */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted mb-4 flex-shrink-0">
                  <img
                    src={game.logo}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">🎮</text></svg>';
                    }}
                  />
                </div>
                
                {/* Game info */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {game.name}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="font-body text-sm text-muted-foreground flex-1">
                  {game.description}
                </p>
                
                {/* Hover glow border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* BGMI ID highlight + View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-strong rounded-full border border-primary/30">
            <span className="text-2xl">🎯</span>
            <span className="font-display text-foreground">
              BGMI ID: <span className="text-primary font-bold">5697409495</span>
            </span>
          </div>
          
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-display font-semibold px-8 shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 btn-bounce"
          >
            <Link to="/gaming">
              View Full Gaming Profile
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GamingSection;
