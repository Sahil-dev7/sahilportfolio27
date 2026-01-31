import { motion } from "framer-motion";

const skills = [
  { name: "Kotlin", level: 95 },
  { name: "Android SDK", level: 90 },
  { name: "Jetpack Compose", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "REST APIs", level: 85 },
  { name: "Git & GitHub", level: 90 },
];

const tools = [
  "Android Studio", "VS Code", "Figma", "Postman", 
  "Firebase Console", "Play Console", "Git", "Gradle"
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills bars */}
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
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display font-semibold text-foreground">{skill.name}</span>
                    <span className="font-body text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools cloud */}
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
            
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-3 bg-gradient-card border border-border rounded-xl font-display font-medium text-foreground shadow-card hover:border-primary/50 transition-colors cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>

            {/* Fun stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {[
                { value: "3+", label: "Years Coding" },
                { value: "15+", label: "Projects Built" },
                { value: "10K+", label: "Lines of Kotlin" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-card border border-border rounded-xl"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
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
