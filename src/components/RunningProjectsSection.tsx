import { motion } from "framer-motion";
import { Rocket, CheckCircle2, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Sentient AI Aarti",
    status: "current",
    description: "AI-powered spiritual assistant for personalized aarti experiences",
    url: "https://tinyurl.com/Sentientaiaarti",
    icon: "🤖",
  },
  {
    name: "Portfolio Website",
    status: "completed",
    description: "This very site you're browsing right now!",
    url: "#",
    icon: "🌐",
  },
  {
    name: "Aureo Media Player",
    status: "upcoming",
    description: "Next-gen media player with AI-driven recommendations",
    url: "#",
    icon: "🎵",
  },
  {
    name: "PC Connect App",
    status: "upcoming",
    description: "Seamlessly bridge your phone and computer",
    url: "#",
    icon: "💻",
  },
];

const statusConfig = {
  current: {
    label: "In Progress",
    icon: Rocket,
    color: "text-primary",
    bg: "bg-primary/20",
    border: "border-primary/40",
  },
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-400/20",
    border: "border-green-400/40",
  },
  upcoming: {
    label: "Upcoming",
    icon: Clock,
    color: "text-secondary",
    bg: "bg-secondary/20",
    border: "border-secondary/40",
  },
};

const RunningProjectsSection = () => {
  return (
    <section id="running-projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Rocket className="w-4 h-4" />
            Current Focus
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">Running </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            What I'm building right now, what's done, and what's coming next.
          </p>
        </motion.div>

        {/* Projects timeline */}
        <div className="max-w-3xl mx-auto space-y-6">
          {projects.map((project, index) => {
            const config = statusConfig[project.status as keyof typeof statusConfig];
            const StatusIcon = config.icon;
            
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`relative glass-card rounded-2xl p-6 hover:${config.border} transition-all duration-300`}>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </span>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${config.bg} ${config.color} text-xs font-display font-semibold`}>
                          <StatusIcon className="w-3 h-3" />
                          {config.label}
                        </span>
                      </div>
                      <p className="font-body text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Link */}
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-all hover:bg-primary/20"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-display font-semibold px-8 shadow-glow hover:scale-105 transition-transform group"
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
