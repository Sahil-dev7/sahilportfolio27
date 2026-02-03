import { motion } from "framer-motion";
import { Rocket, CheckCircle2, Clock, ExternalLink, ArrowRight, Code2, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Sentient AI Aarti",
    status: "current",
    description: "AI-powered spiritual assistant for personalized aarti experiences",
    url: "https://tinyurl.com/Sentientaiaarti",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Portfolio Website",
    status: "completed",
    description: "This very site you're browsing right now!",
    url: "#",
    icon: Palette,
    color: "from-primary to-red-600",
  },
  {
    name: "Aureo Media Player",
    status: "upcoming",
    description: "Next-gen media player with AI-driven recommendations",
    url: "#",
    icon: Code2,
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "PC Connect App",
    status: "upcoming",
    description: "Seamlessly bridge your phone and computer",
    url: "#",
    icon: Rocket,
    color: "from-cyan-500 to-blue-600",
  },
];

const statusConfig = {
  current: {
    label: "In Progress",
    icon: Rocket,
    color: "text-primary",
    bg: "bg-primary/20",
  },
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-400/20",
  },
  upcoming: {
    label: "Upcoming",
    icon: Clock,
    color: "text-secondary",
    bg: "bg-secondary/20",
  },
};

const RunningProjectsSection = () => {
  return (
    <section id="running-projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Rocket className="w-4 h-4" />
            Current Focus
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">Running </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
            What I'm building right now, what's done, and what's coming next.
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div 
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project, index) => {
            const config = statusConfig[project.status as keyof typeof statusConfig];
            const StatusIcon = config.icon;
            const ProjectIcon = project.icon;
            
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 sm:w-80 snap-start"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative glass-card rounded-2xl p-5 sm:p-6 h-full hover:border-primary/40 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                      <ProjectIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    
                    {/* Status badge */}
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${config.bg} ${config.color} text-xs font-display font-semibold mb-3`}>
                      <StatusIcon className="w-3 h-3" />
                      {config.label}
                    </span>
                    
                    {/* Content */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.name}
                    </h3>
                    <p className="font-body text-muted-foreground text-xs sm:text-sm mb-4">
                      {project.description}
                    </p>
                    
                    {/* Link */}
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary text-sm font-display font-semibold hover:text-primary/80 transition-colors"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/60">
          <span className="text-xs font-body">← Scroll →</span>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-display font-semibold px-6 sm:px-8 shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Got an idea? Let's build together
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RunningProjectsSection;