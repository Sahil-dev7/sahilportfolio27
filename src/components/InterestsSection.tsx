import { motion } from "framer-motion";
import nunchucksImage from "@/assets/nunchucks.png";

const interests = [
  { title: "Rubik's Cube", description: "Speed cubing enthusiast solving puzzles in seconds.", isRubiksCube: true },
  { title: "Nunchucks", description: "Martial arts meets coordination — flow and rhythm.", hasImage: true, image: nunchucksImage },
  { title: "Content Creation", description: "Sharing knowledge through videos on YouTube.", isYouTube: true },
  { title: "Gaming", description: "Competitive gamer — battle royale & racing.", isGaming: true },
];

// Solved Rubik's Cube - each face is a single solid color
const RubiksCube3D = () => {
  const faceColors: Record<string, string> = {
    front: "#ff0000",   // Red
    back: "#ff8c00",    // Orange
    right: "#0000ff",   // Blue
    left: "#00cc00",    // Green
    top: "#ffff00",     // Yellow
    bottom: "#ffffff",  // White
  };
  
  return (
    <div className="rubiks-cube-container-large mx-auto">
      <div className="rubiks-cube-large">
        {Object.entries(faceColors).map(([face, color]) => (
          <div key={face} className={`face-large ${face}-large`}>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="cube-piece-large" style={{ background: color }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Classic 3D YouTube Logo - levitating and rotating
const YouTube3D = () => (
  <div className="perspective-[400px] w-24 h-24 sm:w-32 sm:h-32 mx-auto">
    <motion.div
      className="w-full h-full relative"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ 
        rotateY: [0, 360],
        y: [0, -8, 0],
      }}
      transition={{ 
        rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Front face - YouTube red with play button */}
      <div className="absolute inset-0 rounded-2xl flex items-center justify-center shadow-lg" 
        style={{ 
          transform: "translateZ(16px)", 
          background: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
          boxShadow: "0 0 30px rgba(255,0,0,0.4)",
        }}
      >
        <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-1.5 drop-shadow-lg" />
      </div>
      {/* Back face */}
      <div className="absolute inset-0 rounded-2xl flex items-center justify-center" 
        style={{ 
          transform: "rotateY(180deg) translateZ(16px)",
          background: "linear-gradient(135deg, #CC0000 0%, #990000 100%)",
        }}
      >
        <span className="text-white font-bold text-sm tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>YT</span>
      </div>
      {/* Left */}
      <div className="absolute top-0 bottom-0 left-0 w-[32px]" 
        style={{ transform: "rotateY(-90deg) translateZ(0px)", transformOrigin: "left center", background: "#B30000", borderRadius: "8px 0 0 8px" }} 
      />
      {/* Right */}
      <div className="absolute top-0 bottom-0 right-0 w-[32px]" 
        style={{ transform: "rotateY(90deg) translateZ(0px)", transformOrigin: "right center", background: "#FF3333", borderRadius: "0 8px 8px 0" }} 
      />
      {/* Top */}
      <div className="absolute top-0 left-0 right-0 h-[32px]" 
        style={{ transform: "rotateX(90deg) translateZ(0px)", transformOrigin: "top center", background: "#FF1A1A", borderRadius: "8px 8px 0 0" }} 
      />
      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[32px]" 
        style={{ transform: "rotateX(-90deg) translateZ(0px)", transformOrigin: "bottom center", background: "#AA0000", borderRadius: "0 0 8px 8px" }} 
      />
    </motion.div>
  </div>
);

// PS5 Controller with Spider-Man skin
const GameController3D = () => (
  <div className="perspective-[400px] w-24 h-20 sm:w-32 sm:h-28 mx-auto">
    <motion.div
      className="w-full h-full relative"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ 
        rotateY: [-15, 15, -15], 
        rotateX: [-5, 5, -5],
        y: [0, -6, 0],
      }}
      transition={{ 
        rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Controller body - Spider-Man red/blue theme */}
      <div className="absolute inset-0 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden" 
        style={{ 
          transform: "translateZ(12px)",
          background: "linear-gradient(135deg, #CC0000 0%, #FF1A1A 35%, #0044CC 65%, #001A99 100%)",
          boxShadow: "0 0 25px rgba(200,0,0,0.3), 0 0 25px rgba(0,68,204,0.3)",
        }}
      >
        {/* Spider web pattern */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, transparent 0%, transparent 20%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 21%, transparent 21%),
              radial-gradient(circle at 30% 40%, transparent 0%, transparent 35%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0.1) 36%, transparent 36%),
              radial-gradient(circle at 30% 40%, transparent 0%, transparent 50%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.08) 51%, transparent 51%)
            `,
          }}
        />
        {/* Spider logo center */}
        <div className="text-white/90 text-lg sm:text-2xl font-bold drop-shadow-lg">🕷️</div>
        
        {/* PS5 face buttons */}
        <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-0.5 sm:gap-1">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-pink-400/80 shadow-inner" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400/80 shadow-inner" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-300/80 shadow-inner" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-300/80 shadow-inner" />
        </div>
        {/* D-pad */}
        <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rounded-sm relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-sm" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-sm" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-1 h-1 bg-white/20 rounded-sm" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-1 h-1 bg-white/20 rounded-sm" />
          </div>
        </div>
        {/* Joysticks */}
        <div className="absolute bottom-1.5 left-1/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black/60 border border-white/20" />
        <div className="absolute bottom-1.5 right-1/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black/60 border border-white/20" />
      </div>
      {/* Back */}
      <div className="absolute inset-0 rounded-2xl" style={{ transform: "rotateY(180deg) translateZ(12px)", background: "linear-gradient(135deg, #990000 0%, #001466 100%)" }} />
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
