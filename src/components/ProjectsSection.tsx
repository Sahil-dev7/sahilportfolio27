import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Star, ArrowUpRight, Folder, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const projects = [
  {
    title: "Weather Companion",
    description: "A beautiful Android weather app built with Kotlin and Jetpack Compose. Features real-time forecasts and stunning animations.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    image: "🌤️",
    featured: true,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts, set goals, and monitor progress. Clean MVVM architecture with Room database.",
    tags: ["Android", "Room DB", "Material3"],
    image: "💪",
    featured: false,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Task Master Pro",
    description: "Productivity app with smart reminders and beautiful UI. Featured on Google Play with 10K+ downloads.",
    tags: ["Kotlin", "WorkManager", "Firebase"],
    image: "✅",
    featured: true,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Social Connect",
    description: "A modern social networking app with real-time messaging and content sharing features.",
    tags: ["Firebase", "Kotlin", "MVVM"],
    image: "💬",
    featured: false,
    color: "from-purple-500 to-violet-600",
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">Featured </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            A selection of Android apps I've built with love and lots of Kotlin.
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 snap-start"
            >
              {/* Folder Card UI */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative cursor-pointer"
                style={{ perspective: "1500px" }}
              >
                {/* Folder back */}
                <div className={`relative w-full h-48 rounded-2xl rounded-tl-none bg-gradient-to-br ${project.color} shadow-lg transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,.3)]`}>
                  {/* Folder tab */}
                  <div className={`absolute bottom-full left-0 w-20 h-4 rounded-t-xl bg-gradient-to-br ${project.color}`} />
                  <div className={`absolute -top-[12px] left-[76px] w-4 h-4 bg-gradient-to-br ${project.color}`} style={{ clipPath: "polygon(0 35%, 0% 100%, 50% 100%)" }} />
                  
                  {/* Folder papers effect */}
                  <div className="absolute inset-1 bg-muted/40 rounded-xl transition-all duration-300 origin-bottom group-hover:[transform:rotateX(-20deg)]" />
                  <div className="absolute inset-1 bg-muted/60 rounded-xl transition-all duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]" />
                  <div className="absolute inset-1 bg-muted/80 rounded-xl transition-all duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]" />
                  
                  {/* Front folder flap */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t ${project.color} rounded-2xl rounded-tr-none transition-all duration-300 origin-bottom flex flex-col justify-end p-4 group-hover:shadow-[inset_0_20px_40px_rgba(255,255,255,0.2)] group-hover:[transform:rotateX(-46deg)_translateY(1px)]`}>
                    {/* Tab on flap */}
                    <div className={`absolute bottom-full right-0 w-[calc(100%-4rem)] h-4 rounded-t-xl bg-gradient-to-t ${project.color}`} />
                    <div className={`absolute -top-[10px] right-[calc(100%-4rem-8px)] w-3 h-3 bg-gradient-to-t ${project.color}`} style={{ clipPath: "polygon(100% 14%, 50% 100%, 100% 100%)" }} />
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      {project.image}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-xs font-display text-white bg-white/20 backdrop-blur px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-display text-xl font-bold text-white mb-1 drop-shadow-lg">
                      {project.title}
                    </h3>
                    
                    <p className="font-body text-white/80 text-xs leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-body text-white/90 bg-white/20 backdrop-blur px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="font-display font-semibold glass border-primary/30 hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce"
          >
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
