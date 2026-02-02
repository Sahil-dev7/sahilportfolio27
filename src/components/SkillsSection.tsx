import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layers, Palette, Smartphone, Zap, Keyboard } from "lucide-react";

const skills = [
  { name: "Kotlin", level: 95, icon: Code2 },
  { name: "Android SDK", level: 90, icon: Smartphone },
  { name: "Jetpack Compose", level: 85, icon: Layers },
  { name: "Firebase", level: 80, icon: Database },
  { name: "REST APIs", level: 85, icon: Zap },
  { name: "Git & GitHub", level: 90, icon: Code2 },
  { name: "Typing Speed", level: 80, icon: Keyboard, suffix: "80 WPM" },
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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest">Expertise</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8">
              <span className="text-foreground">Technical </span>
              <span className="text-gradient">Skills</span>
            </h2>
            
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-display font-semibold text-foreground">{skill.name}</span>
                        <span className="font-body text-sm text-primary font-semibold">
                          {skill.suffix || `${skill.level}%`}
                        </span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-primary rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
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
            <span className="text-secondary font-display text-sm font-semibold uppercase tracking-widest">Toolkit</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8">
              <span className="text-foreground">Tools I </span>
              <span className="text-gradient">Use</span>
            </h2>
            
            {/* Bento-style tool grid */}
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 cursor-default hover:border-primary/30 transition-all group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{tool.icon}</span>
                  <span className="font-display font-medium text-foreground text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "6+", label: "Years Coding", suffix: "" },
                { value: "15+", label: "Projects Built", suffix: "" },
                { value: "10K+", label: "Lines of Kotlin", suffix: "" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 glass-card rounded-xl hover:border-primary/30 transition-all"
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-display font-bold text-gradient"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs font-body text-muted-foreground mt-1">{stat.label}</div>
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
