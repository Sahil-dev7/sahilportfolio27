import { motion } from "framer-motion";
import nunchucksImage from "@/assets/nunchucks.png";

const interests = [
  { title: "Rubik's Cube", description: "Speed cubing enthusiast solving puzzles in seconds.", isRubiksCube: true },
  { title: "Nunchucks", description: "Martial arts meets coordination — flow and rhythm.", hasImage: true, image: nunchucksImage },
  { title: "Content Creation", description: "Sharing knowledge through videos on YouTube.", isYouTube: true },
  { title: "Gaming", description: "Competitive gamer — battle royale & racing.", isGaming: true },
];

// Checkerboard Rubik's Cube with all colors
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

// 3D YouTube Play Button
const YouTube3D = () => (
  <div className="perspective-[300px] w-20 h-20 sm:w-28 sm:h-28 mx-auto">
    <motion.div
      className="w-full h-full relative"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      {/* Front */}
      <div className="absolute inset-0 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg" style={{ transform: "translateZ(20px)" }}>
        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
      </div>
      {/* Back */}
      <div className="absolute inset-0 bg-red-700 rounded-2xl flex items-center justify-center" style={{ transform: "rotateY(180deg) translateZ(20px)" }}>
        <span className="text-white font-bold text-[10px] sm:text-xs">YT</span>
      </div>
      {/* Left */}
      <div className="absolute top-0 bottom-0 left-0 w-[40px] bg-red-800 rounded-l-lg" style={{ transform: "rotateY(-90deg) translateZ(0px)", transformOrigin: "left center" }} />
      {/* Right */}
      <div className="absolute top-0 bottom-0 right-0 w-[40px] bg-red-500 rounded-r-lg" style={{ transform: "rotateY(90deg) translateZ(0px)", transformOrigin: "right center" }} />
    </motion.div>
  </div>
);

// 3D Game Controller
const GameController3D = () => (
  <div className="perspective-[300px] w-20 h-20 sm:w-28 sm:h-28 mx-auto">
    <motion.div
      className="w-full h-full relative"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateY: [-15, 15, -15], rotateX: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Controller body */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg" style={{ transform: "translateZ(15px)" }}>
        {/* D-pad */}
        <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/30 rounded-sm relative">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-white/30 rounded-sm" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-white/30 rounded-sm" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-1.5 h-1 bg-white/30 rounded-sm" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-1.5 h-1 bg-white/30 rounded-sm" />
          </div>
        </div>
        {/* Buttons */}
        <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-0.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400" />
        </div>
        {/* Joysticks */}
        <div className="absolute bottom-2 left-1/3 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-800 border border-white/20" />
        <div className="absolute bottom-2 right-1/3 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-800 border border-white/20" />
      </div>
      {/* Back */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl" style={{ transform: "rotateY(180deg) translateZ(15px)" }} />
    </motion.div>
  </div>
);

const InterestsSection = () => {
  return (
    <section id="about" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      <div className="absolute top-1/2 left-0 w-32 sm:w-56 h-32 sm:h-56 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest">Beyond Code</span>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">More Than a </span>
            <span className="text-gradient">Developer</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bounce-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-2xl p-2.5 sm:p-4 h-full hover:border-primary/30 transition-all duration-300 min-h-[180px] sm:min-h-[250px] flex flex-col">
                <div className="relative flex-1 flex items-center justify-center mb-2 sm:mb-3 overflow-hidden rounded-xl min-h-[90px] sm:min-h-[130px]">
                  {interest.isRubiksCube ? (
                    <RubiksCube3D />
                  ) : interest.hasImage ? (
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : interest.isYouTube ? (
                    <YouTube3D />
                  ) : interest.isGaming ? (
                    <GameController3D />
                  ) : null}
                </div>
                
                <h3 className="font-display text-[11px] sm:text-sm md:text-base font-bold text-foreground mb-0.5 group-hover:text-gradient transition-all">
                  {interest.title}
                </h3>
                <p className="font-body text-muted-foreground text-[9px] sm:text-xs leading-relaxed">
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
