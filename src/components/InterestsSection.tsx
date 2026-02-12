import { motion } from "framer-motion";
import { Youtube, Gamepad2 } from "lucide-react";
import nunchucksImage from "@/assets/nunchucks.png";

const interests = [
  { title: "Rubik's Cube", description: "Speed cubing enthusiast solving puzzles in seconds.", isRubiksCube: true },
  { title: "Nunchucks", description: "Martial arts meets coordination — flow and rhythm.", hasImage: true, image: nunchucksImage },
  { title: "Content Creation", description: "Sharing knowledge through videos on YouTube.", isYouTube: true },
  { title: "Gaming", description: "Competitive gamer — battle royale & racing.", isGaming: true },
];

// All-color Rubik's Cube
const RubiksCube3D = () => {
  const faceColors: Record<string, string[]> = {
    front:  ["#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000"],
    back:   ["#ff8c00", "#ffffff", "#ff8c00", "#ffffff", "#ff8c00", "#ffffff", "#ff8c00", "#ffffff", "#ff8c00"],
    right:  ["#0000ff", "#ffffff", "#0000ff", "#ffffff", "#0000ff", "#ffffff", "#0000ff", "#ffffff", "#0000ff"],
    left:   ["#00cc00", "#ffffff", "#00cc00", "#ffffff", "#00cc00", "#ffffff", "#00cc00", "#ffffff", "#00cc00"],
    top:    ["#ffff00", "#ffffff", "#ffff00", "#ffffff", "#ffff00", "#ffffff", "#ffff00", "#ffffff", "#ffff00"],
    bottom: ["#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff"],
  };
  
  return (
    <div className="rubiks-cube-container-large mx-auto">
      <div className="rubiks-cube-large">
        {Object.entries(faceColors).map(([face, colors]) => (
          <div key={face} className={`face-large ${face}-large`}>
            {colors.map((color, i) => (
              <div key={i} className="cube-piece-large" style={{ background: color }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const InterestsSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      <div className="absolute top-1/2 left-0 w-36 sm:w-64 h-36 sm:h-64 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest">Beyond Code</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">More Than a </span>
            <span className="text-gradient">Developer</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-2xl p-3 sm:p-4 h-full hover:border-primary/30 transition-all duration-300 min-h-[200px] sm:min-h-[260px] flex flex-col">
                {/* Visual */}
                <div className="relative flex-1 flex items-center justify-center mb-2 sm:mb-3 overflow-hidden rounded-xl min-h-[100px] sm:min-h-[140px]">
                  {interest.isRubiksCube ? (
                    <RubiksCube3D />
                  ) : interest.hasImage ? (
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : interest.isYouTube ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div 
                        className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        animate={{ rotateY: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Youtube className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
                      </motion.div>
                    </div>
                  ) : interest.isGaming ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div 
                        className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        animate={{ rotateY: [0, -10, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      >
                        <Gamepad2 className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
                      </motion.div>
                    </div>
                  ) : null}
                </div>
                
                <h3 className="font-display text-xs sm:text-sm md:text-base font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
                  {interest.title}
                </h3>
                <p className="font-body text-muted-foreground text-[10px] sm:text-xs leading-relaxed">
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
