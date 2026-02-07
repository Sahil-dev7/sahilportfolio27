import { motion } from "framer-motion";
import { Youtube, Gamepad2 } from "lucide-react";
import nunchucksImage from "@/assets/nunchucks.png";

const interests = [
  {
    title: "Rubik's Cube",
    description: "Speed cubing enthusiast solving puzzles in seconds. The perfect blend of logic and muscle memory.",
    isRubiksCube: true,
  },
  {
    title: "Nunchucks",
    description: "Martial arts meets coordination. There's something meditative about the flow and rhythm.",
    hasImage: true,
    image: nunchucksImage,
  },
  {
    title: "Content Creation",
    description: "Sharing knowledge and experiences through videos. Building a community one upload at a time.",
    isYouTube: true,
  },
  {
    title: "Gaming",
    description: "Competitive gamer with passion for battle royale and racing games. Username: S A A H O",
    isGaming: true,
  },
];

// Rubik's Cube 3D CSS Component with Checkerboard Pattern
const RubiksCube3D = () => {
  const checkerPattern = ["#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000"];
  
  return (
    <div className="rubiks-cube-container-large mx-auto">
      <div className="rubiks-cube-large">
        <div className="face-large front-large">
          {checkerPattern.map((color, i) => (
            <div key={i} className="cube-piece-large" style={{ background: color }} />
          ))}
        </div>
        <div className="face-large back-large">
          {checkerPattern.map((color, i) => (
            <div key={i} className="cube-piece-large" style={{ background: color }} />
          ))}
        </div>
        <div className="face-large right-large">
          {checkerPattern.map((color, i) => (
            <div key={i} className="cube-piece-large" style={{ background: color }} />
          ))}
        </div>
        <div className="face-large left-large">
          {checkerPattern.map((color, i) => (
            <div key={i} className="cube-piece-large" style={{ background: color }} />
          ))}
        </div>
        <div className="face-large top-large">
          {checkerPattern.map((color, i) => (
            <div key={i} className="cube-piece-large" style={{ background: color }} />
          ))}
        </div>
        <div className="face-large bottom-large">
          {checkerPattern.map((color, i) => (
            <div key={i} className="cube-piece-large" style={{ background: color }} />
          ))}
        </div>
      </div>
    </div>
  );
};

const InterestsSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Gradient blinds */}
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-36 sm:w-48 h-36 sm:h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest">Beyond Code</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">More Than a </span>
            <span className="text-gradient">Developer</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4">
            Life is too short to have just one passion. Here's what makes me, me.
          </p>
        </motion.div>

        {/* Interest cards grid - Bento style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bounce-card"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-2xl p-4 sm:p-5 h-full hover:border-primary/30 transition-all duration-300 min-h-[260px] sm:min-h-[300px] flex flex-col">
                {/* Visual element - fills most of the card */}
                <div className="relative flex-1 flex items-center justify-center mb-3 sm:mb-4 overflow-hidden rounded-xl min-h-[140px] sm:min-h-[160px]">
                  {interest.isRubiksCube ? (
                    <RubiksCube3D />
                  ) : interest.hasImage ? (
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : interest.isYouTube ? (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <motion.div 
                        className="absolute -left-4 sm:-left-6 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
                          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)"
                        }}
                      >
                        <Youtube className="w-14 h-14 sm:w-16 sm:h-16 text-white" />
                      </motion.div>
                    </div>
                  ) : interest.isGaming ? (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <motion.div 
                        className="absolute -left-4 sm:-left-6 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
                          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)"
                        }}
                      >
                        <Gamepad2 className="w-14 h-14 sm:w-16 sm:h-16 text-white" />
                      </motion.div>
                    </div>
                  ) : null}
                </div>
                
                <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-gradient transition-all">
                  {interest.title}
                </h3>
                <p className="font-body text-muted-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed">
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
