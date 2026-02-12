import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight, Mail, Rocket, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  { key: "completed", label: "Completed", icon: CheckCircle2, color: "text-green-400" },
  { key: "running", label: "In Progress", icon: Rocket, color: "text-primary" },
  { key: "upcoming", label: "Upcoming", icon: Clock, color: "text-secondary" },
];

const projects = [
  // Completed
  { title: "Task Master Pro", description: "Productivity app with smart reminders and beautiful UI. Featured on Google Play with 10K+ downloads.", tags: ["Kotlin", "WorkManager", "Firebase"], image: "✅", featured: true, color: "from-blue-500 to-cyan-600", github: "https://github.com/Sahil-dev7", category: "completed" },
  { title: "Fitness Tracker", description: "Track workouts, set goals, and monitor progress. Clean MVVM architecture with Room database.", tags: ["Android", "Room DB", "Material3"], image: "💪", featured: false, color: "from-green-500 to-emerald-600", github: "https://github.com/Sahil-dev7", category: "completed" },
  { title: "Weather Companion", description: "Beautiful Android weather app with real-time forecasts and stunning animations.", tags: ["Kotlin", "Jetpack Compose", "Retrofit"], image: "🌤️", featured: true, color: "from-amber-500 to-orange-600", github: "https://github.com/Sahil-dev7", category: "completed" },
  { title: "Personal Portfolio", description: "This website — a cinematic portfolio built with React, Tailwind, and Framer Motion.", tags: ["React", "Tailwind", "Framer Motion"], image: "🌐", featured: false, color: "from-red-500 to-rose-600", github: "https://github.com/Sahil-dev7", category: "completed" },
  { title: "Election Central", description: "Online voting system built as a university project. Secure, real-time results.", tags: ["Web", "Database", "Auth"], image: "🗳️", featured: false, color: "from-indigo-500 to-violet-600", github: "https://github.com/Sahil-dev7", category: "completed" },
  // Running
  { title: "Aureo Music Player", description: "Next-gen media player with skeuomorphism design — audio & video player with AI recommendations.", tags: ["Kotlin", "Jetpack Compose", "MediaPlayer"], image: "🎵", featured: false, color: "from-rose-500 to-pink-600", github: "https://github.com/Sahil-dev7", category: "running" },
  // Upcoming
  { title: "PC Connect App", description: "Seamlessly bridge your phone and computer. File transfer, notifications, and more.", tags: ["Kotlin", "Networking", "Desktop"], image: "🔗", color: "from-cyan-500 to-blue-600", category: "upcoming" },
  { title: "Your Idea Here?", description: "Got a project idea? Let me know what you want me to build next!", tags: ["Open for ideas"], image: "💡", color: "from-yellow-500 to-amber-600", isUserIdea: true, category: "upcoming" },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.a
    href={project.isUserIdea ? "#contact" : (project.github || "https://github.com/Sahil-dev7")}
    target={project.isUserIdea ? undefined : "_blank"}
    rel={project.isUserIdea ? undefined : "noopener noreferrer"}
    onClick={project.isUserIdea ? (e: React.MouseEvent) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } : undefined}
    className="flex-shrink-0 w-60 sm:w-72 md:w-80 snap-start block"
  >
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full cursor-pointer bounce-card"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      <div className="relative glass-card rounded-2xl p-4 sm:p-5 h-full hover:border-primary/40 transition-all duration-300 min-h-[200px] sm:min-h-[230px]">
        <div className="flex items-start justify-between mb-3">
          <motion.span 
            className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -10, 10, 0] }}
          >
            {project.image}
          </motion.span>
          <div className="flex gap-1.5">
            {project.github && (
              <div className="p-1.5 rounded-full glass-strong text-foreground group-hover:text-primary transition-colors">
                <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
            )}
            {project.isUserIdea ? (
              <div className="p-1.5 rounded-full glass-strong text-foreground group-hover:text-primary transition-colors">
                <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
            ) : (
              <div className="p-1.5 rounded-full glass-strong text-foreground group-hover:text-primary transition-colors">
                <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
            )}
          </div>
        </div>
        
        {project.featured && (
          <span className="inline-flex items-center gap-1 text-[10px] font-display text-primary bg-primary/20 px-2 py-0.5 rounded-full mb-2">
            <Star className="w-2.5 h-2.5" /> Featured
          </span>
        )}
        
        <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="font-body text-muted-foreground text-[11px] sm:text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[9px] sm:text-[10px] font-body text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.a>
);

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("completed");
  const filteredProjects = projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3">
            From completed apps to works in progress — here's what I've been building.
          </p>
        </motion.div>

        {/* Horizontal category tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-display text-xs sm:text-sm font-semibold transition-all duration-300 click-spark ${
                activeCategory === cat.key
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "glass-strong text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              <cat.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${activeCategory === cat.key ? "text-primary-foreground" : cat.color}`} />
              {cat.label}
              <span className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.key ? "bg-white/20" : "bg-muted/50"
              }`}>
                {projects.filter(p => p.category === cat.key).length}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Horizontally scrollable project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
              style={{ scrollBehavior: 'smooth' }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scroll hint */}
        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground/60">
          <span className="text-[10px] sm:text-xs font-body">← Scroll to explore →</span>
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-6 sm:mt-10"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="font-display font-semibold glass border-primary/30 hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce click-spark text-xs sm:text-sm"
            asChild
          >
            <a href="https://github.com/Sahil-dev7" target="_blank" rel="noopener noreferrer">
              View All on GitHub
              <ArrowUpRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
