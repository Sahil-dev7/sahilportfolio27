import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">Featured </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
            A selection of Android apps I've built with love and lots of Kotlin.
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div 
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-72 sm:w-80 snap-start block"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-full cursor-pointer"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative glass-card rounded-2xl p-5 sm:p-6 h-full hover:border-primary/40 transition-all duration-300">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </span>
                    <div className="flex gap-2">
                      <div className="p-2 rounded-full glass-strong text-foreground group-hover:text-primary transition-colors">
                        <Github className="h-4 w-4" />
                      </div>
                      <div className="p-2 rounded-full glass-strong text-foreground group-hover:text-primary transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-display text-primary bg-primary/20 px-2 py-0.5 rounded-full mb-3">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  
                  {/* Content */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground/60">
          <span className="text-xs font-body">← Scroll to explore →</span>
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="font-display font-semibold glass border-primary/30 hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce"
            asChild
          >
            <a href="https://github.com/Sahil-dev7" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;