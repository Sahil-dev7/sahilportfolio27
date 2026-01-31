import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Weather Companion",
    description: "A beautiful Android weather app built with Kotlin and Jetpack Compose. Features real-time forecasts and stunning animations.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    image: "🌤️",
    accent: "primary",
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts, set goals, and monitor progress. Clean MVVM architecture with Room database.",
    tags: ["Android", "Room DB", "Material3"],
    image: "💪",
    accent: "secondary",
  },
  {
    title: "Task Master Pro",
    description: "Productivity app with smart reminders and beautiful UI. Featured on Google Play with 10K+ downloads.",
    tags: ["Kotlin", "WorkManager", "Firebase"],
    image: "✅",
    accent: "accent",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-glow transition-all duration-500">
                {/* Project preview */}
                <div className="relative h-48 bg-muted flex items-center justify-center">
                  <span className="text-7xl">{project.image}</span>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1 text-xs font-body text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Smartphone className="w-3 h-3" />
                      Android
                    </span>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body text-primary bg-primary/10 px-2 py-1 rounded-md"
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
          <Button variant="outline" size="lg" className="font-display font-semibold">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
