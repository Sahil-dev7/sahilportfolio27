import { motion } from "framer-motion";
import { Gamepad2, ExternalLink, ArrowLeft, Trophy, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const games = [
  {
    name: "GTA V",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    description: "Open world action-adventure masterpiece by Rockstar Games. Los Santos never felt more alive.",
    url: "https://www.rockstargames.com/gta-v",
    playtime: "500+ hours",
    rating: "10/10",
    genre: "Action-Adventure",
    highlights: ["Completed main story 3 times", "Online level 200+", "All heists completed"],
    color: "from-green-500/30 to-green-600/10",
  },
  {
    name: "Red Dead Redemption 2",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    description: "Epic tale of life in America's unforgiving heartland. The greatest story ever told in gaming.",
    url: "https://www.rockstargames.com/reddeadredemption2",
    playtime: "300+ hours",
    rating: "10/10",
    genre: "Action-Adventure",
    highlights: ["100% Story completion", "All legendary animals hunted", "Max honor playthrough"],
    color: "from-amber-500/30 to-amber-600/10",
  },
  {
    name: "Getting Over It",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Getting_Over_It_with_Bennett_Foddy_cover_art.png",
    description: "A game I made for a certain kind of person. The ultimate test of patience and skill.",
    url: "https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy/",
    playtime: "50+ hours",
    rating: "9/10",
    genre: "Platformer",
    highlights: ["Completed under 10 minutes", "Golden pot achieved", "Only 1 rage quit"],
    color: "from-orange-500/30 to-orange-600/10",
  },
  {
    name: "BGMI",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/94/PUBG_Mobile_logo.png",
    description: "Battle Royale at its finest. Where legends are born and chickens are earned.",
    url: "https://www.battlegroundsmobileindia.com/",
    playtime: "1000+ hours",
    rating: "9/10",
    genre: "Battle Royale",
    highlights: ["Crown tier reached", "Squad wins: 200+", "K/D ratio: 4.5"],
    playerId: "5697409495",
    color: "from-yellow-500/30 to-yellow-600/10",
  },
  {
    name: "Need for Speed",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Need_for_Speed_logo.svg",
    description: "Speed is life. From Most Wanted to Heat, the thrill never ends.",
    url: "https://www.ea.com/games/need-for-speed",
    playtime: "400+ hours",
    rating: "9/10",
    genre: "Racing",
    highlights: ["Highest rank achieved", "All cars unlocked", "Drift king status"],
    color: "from-blue-500/30 to-blue-600/10",
  },
  {
    name: "eFootball",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/EFootball_2022_cover.jpg",
    description: "The beautiful game, digitized. Every match tells a story.",
    url: "https://www.konami.com/efootball/",
    playtime: "200+ hours",
    rating: "8/10",
    genre: "Sports",
    highlights: ["Division 1 player", "Full legendary squad", "Online win rate: 70%"],
    color: "from-emerald-500/30 to-emerald-600/10",
  },
];

const GamingPage = () => {
  return (
    <div className="min-h-screen bg-background grain">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </div>
              <span className="font-display text-lg font-semibold text-primary">Player Profile</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Player Tag: </span>
              <span className="text-gradient">S A A H O</span>
            </h1>
            
            <p className="font-body text-lg text-muted-foreground max-w-2xl mb-8">
              Games that defined my journey — from casual sessions to competitive grinds. 
              Each title has its own story, its own challenges, and its own victories.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Clock, label: "Total Playtime", value: "2500+ hrs" },
                { icon: Trophy, label: "Games Completed", value: "50+" },
                { icon: Star, label: "Avg Rating Given", value: "9/10" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-border/50">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-display text-lg font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <motion.a
                key={game.name}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group block"
              >
                <div className={`relative glass-card rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Game logo */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={game.logo}
                          alt={game.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">🎮</text></svg>';
                          }}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {game.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </div>
                        <span className="text-xs font-display text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                          {game.genre}
                        </span>
                      </div>
                      
                      {/* Rating */}
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-display font-bold">{game.rating}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{game.playtime}</div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {game.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2">
                      {game.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm">
                          <Trophy className="w-3 h-3 text-primary" />
                          <span className="text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Player ID for BGMI */}
                    {game.playerId && (
                      <div className="mt-4 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 inline-flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-mono text-sm text-primary font-bold">ID: {game.playerId}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* BGMI ID highlight */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-primary/10" />
            
            <div className="relative z-10">
              <div className="text-6xl mb-4">🎯</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Let's </span>
                <span className="text-gradient">Squad Up!</span>
              </h2>
              <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
                Add me on BGMI and let's drop together. Winner winner chicken dinner! 🍗
              </p>
              <div className="inline-flex items-center gap-4 px-8 py-4 glass-strong rounded-2xl border border-primary/30">
                <span className="text-3xl">🎮</span>
                <div>
                  <div className="text-xs text-muted-foreground font-body">BGMI Player ID</div>
                  <div className="font-display text-2xl font-bold text-gradient">5697409495</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamingPage;
