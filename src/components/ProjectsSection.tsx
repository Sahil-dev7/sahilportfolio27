import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Weather Companion",
    description: "A beautiful Android weather app built with Kotlin and Jetpack Compose. Features real-time forecasts and stunning animations.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    image: "🌤️",
    featured: true,
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts, set goals, and monitor progress. Clean MVVM architecture with Room database.",
    tags: ["Android", "Room DB", "Material3"],
    image: "💪",
    featured: false,
  },
  {
    title: "Task Master Pro",
    description: "Productivity app with smart reminders and beautiful UI. Featured on Google Play with 10K+ downloads.",
    tags: ["Kotlin", "WorkManager", "Firebase"],
    image: "✅",
    featured: true,
  },
  {
    title: "Social Connect",
    description: "A modern social networking app with real-time messaging and content sharing features.",
    tags: ["Firebase", "Kotlin", "MVVM"],
    image: "💬",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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

        {/* Bento-style projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative ${
                project.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="glass-card rounded-2xl h-full p-6 flex flex-col justify-between overflow-hidden hover:border-primary/30 transition-all duration-500">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top row */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className={`text-4xl ${project.featured ? "md:text-6xl" : ""}`}>
                    {project.image}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full glass text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full glass text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <div className="flex items-center gap-2 mb-2">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-xs font-body text-primary bg-primary/20 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-body text-muted-foreground">
                      <Smartphone className="w-3 h-3" />
                      Android
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  
                  {project.featured && (
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  )}
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, project.featured ? 3 : 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body text-primary/80 bg-primary/10 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            className="font-display font-semibold glass border-primary/30 hover:bg-primary/10 group"
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
