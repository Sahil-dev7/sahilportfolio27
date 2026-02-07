import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight, CheckCircle2, Rocket, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const completedProjects = [
  {
    title: "Weather Companion",
    description: "A beautiful Android weather app built with Kotlin and Jetpack Compose. Features real-time forecasts and stunning animations.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    image: "🌤️",
    featured: true,
    color: "from-amber-500 to-orange-600",
    github: "https://github.com/Sahil-dev7",
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts, set goals, and monitor progress. Clean MVVM architecture with Room database.",
    tags: ["Android", "Room DB", "Material3"],
    image: "💪",
    featured: false,
    color: "from-green-500 to-emerald-600",
    github: "https://github.com/Sahil-dev7",
  },
  {
    title: "Task Master Pro",
    description: "Productivity app with smart reminders and beautiful UI. Featured on Google Play with 10K+ downloads.",
    tags: ["Kotlin", "WorkManager", "Firebase"],
    image: "✅",
    featured: true,
    color: "from-blue-500 to-cyan-600",
    github: "https://github.com/Sahil-dev7",
  },
  {
    title: "Social Connect",
    description: "A modern social networking app with real-time messaging and content sharing features.",
    tags: ["Firebase", "Kotlin", "MVVM"],
    image: "💬",
    featured: false,
    color: "from-purple-500 to-violet-600",
    github: "https://github.com/Sahil-dev7",
  },
];

const runningProjects = [
  {
    title: "Aureo Music Player",
    description: "Next-gen media player with AI-driven recommendations, beautiful visualizations, and seamless streaming.",
    tags: ["Kotlin", "Jetpack Compose", "MediaPlayer"],
    image: "🎵",
    color: "from-rose-500 to-pink-600",
    github: "https://github.com/Sahil-dev7",
  },
];

const upcomingProjects = [
  {
    title: "PC Connect App",
    description: "Seamlessly bridge your phone and computer. File transfer, notifications, and more.",
    tags: ["Kotlin", "Networking", "Desktop"],
    image: "🔗",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Your Idea Here?",
    description: "Got a project idea? Let me know what you want me to build next!",
    tags: ["Open for ideas"],
    image: "💡",
    color: "from-yellow-500 to-amber-600",
    isUserIdea: true,
  },
];

const ProjectCard = ({ project, type }: { project: any; type: string }) => (
  <motion.a
    href={project.github || "#contact"}
    target={project.github ? "_blank" : undefined}
    rel={project.github ? "noopener noreferrer" : undefined}
    onClick={project.isUserIdea ? (e) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } : undefined}
    className="flex-shrink-0 w-64 sm:w-72 md:w-80 snap-start block"
  >
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full cursor-pointer bounce-card"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative glass-card rounded-2xl p-4 sm:p-5 h-full hover:border-primary/40 transition-all duration-300 min-h-[220px] sm:min-h-[250px]">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <motion.span 
            className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -10, 10, 0] }}
          >
            {project.image}
          </motion.span>
          <div className="flex gap-2">
            {project.github && (
              <div className="p-1.5 sm:p-2 rounded-full glass-strong text-foreground group-hover:text-primary transition-colors">
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            )}
            {!project.isUserIdea && (
              <div className="p-1.5 sm:p-2 rounded-full glass-strong text-foreground group-hover:text-primary transition-colors">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            )}
            {project.isUserIdea && (
              <div className="p-1.5 sm:p-2 rounded-full glass-strong text-foreground group-hover:text-primary transition-colors">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            )}
          </div>
        </div>
        
        {/* Featured badge */}
        {project.featured && (
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-display text-primary bg-primary/20 px-2 py-0.5 rounded-full mb-2 sm:mb-3">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            Featured
          </span>
        )}
        
        {/* Content */}
        <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs font-body text-muted-foreground bg-muted/50 px-1.5 sm:px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.a>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Gradient blinds */}
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
            From completed apps to works in progress — here's what I've been building.
          </p>
        </motion.div>

        {/* Completed Projects */}
        <div className="mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground">Completed</h3>
            <span className="text-xs sm:text-sm font-body text-muted-foreground">({completedProjects.length})</span>
          </motion.div>
          
          <div 
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollBehavior: 'smooth' }}
          >
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} type="completed" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Running Projects */}
        <div className="mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground">Currently Working On</h3>
          </motion.div>
          
          <div 
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollBehavior: 'smooth' }}
          >
            {runningProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} type="running" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground">Upcoming</h3>
          </motion.div>
          
          <div 
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollBehavior: 'smooth' }}
          >
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} type="upcoming" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground/60">
          <span className="text-[10px] sm:text-xs font-body">← Scroll to explore →</span>
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="font-display font-semibold glass border-primary/30 hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce click-spark text-sm sm:text-base"
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
