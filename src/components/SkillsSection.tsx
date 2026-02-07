import { motion, useInView } from "framer-motion";
import { Code2, Cpu, Database, Layers, Palette, Smartphone, Zap, Keyboard, Flame, GitBranch, Box, Server } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const skills = [
  { name: "Kotlin", level: 95, icon: Code2, color: "from-violet-500 to-purple-600" },
  { name: "Android SDK", level: 90, icon: Smartphone, color: "from-green-500 to-emerald-600" },
  { name: "Jetpack Compose", level: 85, icon: Layers, color: "from-blue-500 to-cyan-600" },
  { name: "Firebase", level: 80, icon: Flame, color: "from-orange-500 to-amber-600" },
  { name: "REST APIs", level: 85, icon: Server, color: "from-pink-500 to-rose-600" },
  { name: "Git & GitHub", level: 90, icon: GitBranch, color: "from-gray-500 to-slate-600" },
  { name: "Typing Speed", level: 80, icon: Keyboard, suffix: "80 WPM", color: "from-primary to-red-600" },
];

const tools = [
  { name: "Android Studio", icon: "🤖" },
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "🎨" },
  { name: "Postman", icon: "📬" },
  { name: "Firebase Console", icon: "🔥" },
  { name: "Play Console", icon: "▶️" },
  { name: "Git", icon: "🌿" },
  { name: "Gradle", icon: "🐘" },
];

// Animated counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Gradient blinds */}
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Skills section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest">Expertise</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 sm:mb-8">
              <span className="text-foreground">Technical </span>
              <span className="text-gradient">Skills</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card rounded-xl p-3 sm:p-4 hover:border-primary/30 transition-all group cursor-default bounce-card"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div 
                      className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} text-white group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <skill.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                        <span className="font-display font-semibold text-foreground text-sm sm:text-base">{skill.name}</span>
                        <motion.span 
                          className="font-body text-xs sm:text-sm text-primary font-bold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          {skill.suffix || `${skill.level}%`}
                        </motion.span>
                      </div>
                      <div className="h-2 sm:h-2.5 bg-muted/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          {/* Shimmer effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest">Toolkit</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 sm:mb-8">
              <span className="text-foreground">Tools I </span>
              <span className="text-gradient">Use</span>
            </h2>
            
            {/* Bento-style tool grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 cursor-default hover:border-primary/30 transition-all group bounce-card"
                >
                  <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">{tool.icon}</span>
                  <span className="font-display font-medium text-foreground text-xs sm:text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              {[
                { value: 6, label: "Years Coding", suffix: "+" },
                { value: 15, label: "Projects Built", suffix: "+" },
                { value: 10, label: "Lines of Kotlin", suffix: "K+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 sm:p-4 glass-card rounded-xl hover:border-primary/30 transition-all bounce-card"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-body text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
