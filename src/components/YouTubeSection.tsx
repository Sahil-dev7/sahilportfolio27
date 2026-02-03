import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Play, X, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  resources?: string;
  youtubeUrl?: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Android Development Basics",
    thumbnail: "https://i.ytimg.com/vi/fis26HvvDII/maxresdefault.jpg",
    description: "Getting started with Android development using Kotlin",
    resources: "📚 Resources:\n- Android Studio Download\n- Kotlin Documentation\n- Sample Project Files",
    youtubeUrl: "https://www.youtube.com/@SahilDev",
  },
  {
    id: "2",
    title: "Jetpack Compose Tutorial",
    thumbnail: "https://i.ytimg.com/vi/6_wK_Ud8--0/maxresdefault.jpg",
    description: "Modern UI development with Jetpack Compose",
    resources: "📚 Resources:\n- Compose Samples\n- Material Design 3\n- Code Repository",
    youtubeUrl: "https://www.youtube.com/@SahilDev",
  },
  {
    id: "3",
    title: "Firebase Integration",
    thumbnail: "https://i.ytimg.com/vi/jbHfJpoOzkI/maxresdefault.jpg",
    description: "Add backend services to your Android app",
    resources: "📚 Resources:\n- Firebase Console Setup\n- Auth Implementation\n- Firestore Guide",
    youtubeUrl: "https://www.youtube.com/@SahilDev",
  },
];

const YouTubeSection = () => {
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  return (
    <section id="youtube" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-red-500/5 to-background" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-red-500 font-display text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Youtube className="w-4 h-4" />
            Video Content
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">My </span>
            <span className="text-gradient">YouTube</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Tutorials, resources, and knowledge sharing for developers.
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => setExpandedVideo(expandedVideo === video.id ? null : video.id)}
                className="group cursor-pointer"
              >
                <div className="glass-card rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-500/40 transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-3 sm:p-4 rounded-full bg-red-500/90 text-white transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-red-500 transition-colors mb-1 sm:mb-2">
                      {video.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted-foreground">
                      {video.description}
                    </p>
                    
                    <div className="mt-2 sm:mt-3 text-xs text-primary font-display">
                      Click for resources →
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Expanded resources */}
              <AnimatePresence>
                {expandedVideo === video.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 overflow-hidden"
                  >
                    <div className="glass-card rounded-xl p-3 sm:p-4 border border-primary/30">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="font-display text-xs sm:text-sm font-semibold text-primary">Resources</span>
                        <button
                          onClick={() => setExpandedVideo(null)}
                          className="p-1 rounded-full hover:bg-muted transition-colors"
                        >
                          <X className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                      <pre className="font-body text-xs text-muted-foreground whitespace-pre-wrap">
                        {video.resources}
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white font-display font-semibold px-6 sm:px-8 hover:scale-105 active:scale-95 transition-all duration-200 btn-bounce"
          >
            <a href="https://www.youtube.com/@SahilDev" target="_blank" rel="noopener noreferrer">
              Visit YouTube Channel
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;