import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Clock, Star, ExternalLink, Users, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeText from "@/components/MarqueeText";

const PERSONA = {
  label: "GAMER",
  title: "S A A H O",
  subtitle: "Casual gamer — weekends only",
  description:
    "Gaming is how I unwind, not how I grind. A few BGMI squad matches with friends, an open-world drive in GTA, a quick race in NFS. This is the playlist of games I keep coming back to.",
  bg: "https://i.postimg.cc/7YRbQHnw/gamer-bg.webp",
  png: "https://i.postimg.cc/TYshHdqH/Gamer.webp",
  accent: "hsl(190 90% 55%)",
};

const games = [
  { name: "GTA V", logo: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", description: "Open world action-adventure masterpiece by Rockstar Games.", url: "https://www.rockstargames.com/gta-v", playtime: "500+ hours", rating: "10/10", genre: "Action-Adventure", highlights: ["Completed main story 3 times", "Online level 200+", "All heists completed"], color: "from-green-500/30 to-green-600/10" },
  { name: "Red Dead Redemption 2", logo: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg", description: "Epic tale of life in America's unforgiving heartland.", url: "https://www.rockstargames.com/reddeadredemption2", playtime: "300+ hours", rating: "10/10", genre: "Action-Adventure", highlights: ["100% Story completion", "All legendary animals hunted", "Max honor playthrough"], color: "from-amber-500/30 to-amber-600/10" },
  { name: "Getting Over It", logo: "https://cdn.cloudflare.steamstatic.com/steam/apps/240720/header.jpg", description: "The ultimate test of patience and skill.", url: "https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy/", playtime: "50+ hours", rating: "9/10", genre: "Platformer", highlights: ["Completed under 10 minutes", "Golden pot achieved", "Only 1 rage quit"], color: "from-orange-500/30 to-orange-600/10" },
  { name: "BGMI", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Battlegrounds_Mobile_India_logo.png/220px-Battlegrounds_Mobile_India_logo.png", description: "Battle Royale at its finest. Where legends are born.", url: "https://www.battlegroundsmobileindia.com/", playtime: "1000+ hours", rating: "9/10", genre: "Battle Royale", highlights: ["Conqueror tier reached", "Squad wins: 200+", "K/D ratio: 4.5"], playerId: "5697409495", color: "from-yellow-500/30 to-yellow-600/10" },
  { name: "Need for Speed", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Need_for_Speed_2015.jpg/220px-Need_for_Speed_2015.jpg", description: "Speed is life. The thrill never ends.", url: "https://www.ea.com/games/need-for-speed", playtime: "400+ hours", rating: "9/10", genre: "Racing", highlights: ["Highest rank achieved", "All cars unlocked", "Drift king status"], color: "from-blue-500/30 to-blue-600/10" },
  { name: "eFootball", logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/EFootball_2022_cover.jpg", description: "The beautiful game, digitized.", url: "https://www.konami.com/efootball/", playtime: "200+ hours", rating: "8/10", genre: "Sports", highlights: ["Division 1 player", "Full legendary squad", "Online win rate: 70%"], color: "from-emerald-500/30 to-emerald-600/10" },
];

const Gamer = () => {
  return (
    <div className="min-h-screen bg-background grain overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[100svh] w-full overflow-hidden flex items-end sm:items-center">
        <div className="absolute inset-0">
          <img src={PERSONA.bg} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px]" style={{ background: PERSONA.accent, opacity: 0.18 }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display font-black tracking-tighter select-none whitespace-nowrap"
            style={{ fontSize: "clamp(120px, 22vw, 360px)", color: PERSONA.accent, opacity: 0.08, letterSpacing: "-0.05em" }}>
            {PERSONA.label}
          </span>
        </div>

        <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 mb-5">
                <span className="px-3 py-1 font-display font-bold text-xs tracking-widest text-white" style={{ background: PERSONA.accent }}>
                  {PERSONA.label}
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-4 text-foreground"
                style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.15em" }}
              >
                {PERSONA.title}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="font-display text-sm sm:text-lg font-semibold text-foreground/80 mb-3">
                {PERSONA.subtitle}
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="font-body text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
                {PERSONA.description}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-3">
                {[
                  { icon: Clock, label: "When", value: "Weekends" },
                  { icon: Trophy, label: "Vibe", value: "Casual" },
                  { icon: Star, label: "Mood", value: "Wind down" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 px-3 py-2 rounded-xl glass border border-border/50">
                    <s.icon className="w-4 h-4" style={{ color: PERSONA.accent }} />
                    <div>
                      <div className="font-display text-sm sm:text-base font-bold text-foreground">{s.value}</div>
                      <div className="text-[9px] sm:text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 md:order-2 relative flex justify-center md:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[80px] opacity-30 pointer-events-none" style={{ background: PERSONA.accent }} />
              <img src={PERSONA.png} alt={PERSONA.title}
                className="relative z-10 h-[55svh] sm:h-[70svh] md:h-[80svh] lg:h-[88svh] w-auto object-contain object-bottom select-none"
                style={{
                  maskImage: "linear-gradient(to bottom, black 92%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 92%, transparent 100%)",
                  filter: "drop-shadow(0 25px 50px hsl(0 0% 0% / 0.6))",
                }}
                loading="eager" draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-6 sm:py-8 border-y border-border/30 overflow-hidden">
        <MarqueeText text="BGMI • GTA V • RDR2 • NFS • EFOOTBALL • CONQUEROR" />
      </div>

      {/* Game library */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-4xl font-bold">
              <span className="text-foreground">My </span>
              <span className="text-gradient">Game Library</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {games.map((game, index) => (
              <motion.a key={game.name} href={game.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -6, scale: 1.01 }} className="group block">
                <div className="relative glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative p-5 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                        <img src={game.logo} alt={game.name} className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">🎮</text></svg>'; }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors truncate">{game.name}</h3>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary flex-shrink-0" />
                        </div>
                        <span className="text-xs font-display text-muted-foreground px-2 py-0.5 rounded-full bg-muted">{game.genre}</span>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-display text-sm font-bold">{game.rating}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{game.playtime}</div>
                      </div>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mb-4">{game.description}</p>
                    <div className="space-y-1.5">
                      {game.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm">
                          <Trophy className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{h}</span>
                        </div>
                      ))}
                    </div>
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

      {/* Squad up */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-primary/10" />
            <div className="relative z-10">
              <Gamepad2 className="w-10 h-10 mx-auto mb-3" style={{ color: PERSONA.accent }} />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Let's </span>
                <span className="text-gradient">Squad Up!</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
                Add me on BGMI and let's drop together. Winner winner chicken dinner.
              </p>
              <div className="inline-flex items-center gap-4 px-8 py-4 glass-strong rounded-2xl border border-primary/30">
                <Gamepad2 className="w-6 h-6" style={{ color: PERSONA.accent }} />
                <div className="text-left">
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

export default Gamer;