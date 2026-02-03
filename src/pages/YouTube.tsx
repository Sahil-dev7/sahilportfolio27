import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Play, X, ExternalLink, ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  videoUrl: string;
  resources: string;
  downloads?: { name: string; url: string }[];
}

const videos: Video[] = [
  {
    id: "1",
    title: "Android Development Basics",
    thumbnail: "https://i.ytimg.com/vi/fis26HvvDII/maxresdefault.jpg",
    description: "Getting started with Android development using Kotlin. Learn the fundamentals of building your first Android app from scratch.",
    videoUrl: "https://www.youtube.com/@SahilDev",
    resources: "📚 What you'll learn:\n\n• Setting up Android Studio\n• Creating your first project\n• Understanding activities & layouts\n• Running on emulator/device\n\n💡 Prerequisites:\n• Basic programming knowledge\n• A computer with 8GB+ RAM",
    downloads: [
      { name: "Starter Project", url: "#" },
      { name: "Cheat Sheet PDF", url: "#" },
    ],
  },
  {
    id: "2",
    title: "Jetpack Compose Tutorial",
    thumbnail: "https://i.ytimg.com/vi/6_wK_Ud8--0/maxresdefault.jpg",
    description: "Modern UI development with Jetpack Compose. Build beautiful, declarative UIs with less code.",
    videoUrl: "https://www.youtube.com/@SahilDev",
    resources: "📚 Topics covered:\n\n• Composable functions\n• State management\n• Material Design 3\n• Animations & gestures\n• Navigation\n\n🔗 Useful links:\n• compose.academy\n• developer.android.com/compose",
    downloads: [
      { name: "Compose Samples", url: "#" },
      { name: "UI Components", url: "#" },
    ],
  },
  {
    id: "3",
    title: "Firebase Integration",
    thumbnail: "https://i.ytimg.com/vi/jbHfJpoOzkI/maxresdefault.jpg",
    description: "Add backend services to your Android app with Firebase. Authentication, database, and storage.",
    videoUrl: "https://www.youtube.com/@SahilDev",
    resources: "📚 Firebase features:\n\n• Authentication (Email, Google, etc.)\n• Cloud Firestore\n• Realtime Database\n• Cloud Storage\n• Cloud Messaging\n\n⚙️ Setup guide included!",
    downloads: [
      { name: "Firebase Config", url: "#" },
      { name: "Security Rules", url: "#" },
    ],
  },
  {
    id: "4",
    title: "MVVM Architecture",
    thumbnail: "https://i.ytimg.com/vi/X8K4_b0Gq3E/maxresdefault.jpg",
    description: "Clean architecture patterns for scalable Android apps. Learn MVVM with practical examples.",
    videoUrl: "https://www.youtube.com/@SahilDev",
    resources: "📚 Architecture components:\n\n• ViewModel\n• LiveData / StateFlow\n• Repository pattern\n• Dependency injection\n• Use cases",
    downloads: [
      { name: "Architecture Template", url: "#" },
    ],
  },
  {
    id: "5",
    title: "API Integration with Retrofit",
    thumbnail: "https://i.ytimg.com/vi/ONb_MuPBSTo/maxresdefault.jpg",
    description: "Connect your app to REST APIs using Retrofit and Kotlin Coroutines.",
    videoUrl: "https://www.youtube.com/@SahilDev",
    resources: "📚 You'll learn:\n\n• Setting up Retrofit\n• Creating API interfaces\n• Handling responses\n• Error management\n• Coroutines integration",
    downloads: [
      { name: "API Client Setup", url: "#" },
    ],
  },
  {
    id: "6",
    title: "Publishing to Play Store",
    thumbnail: "https://i.ytimg.com/vi/M_HpnlTDwu4/maxresdefault.jpg",
    description: "Complete guide to publishing your Android app on Google Play Store.",
    videoUrl: "https://www.youtube.com/@SahilDev",
    resources: "📚 Publishing checklist:\n\n• App signing & bundle\n• Store listing optimization\n• Screenshots & graphics\n• Privacy policy\n• Review guidelines",
    downloads: [
      { name: "Publishing Checklist", url: "#" },
      { name: "ASO Guide", url: "#" },
    ],
  },
];

const YouTubePage = () => {
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background grain">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-background to-background" />
        <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-red-500/20">
                <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
              </div>
              <span className="font-display text-base sm:text-lg font-semibold text-red-500">YouTube Channel</span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Video </span>
              <span className="text-gradient">Resources</span>
            </h1>
            
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl">
              Click on any video thumbnail to reveal downloadable resources, code samples, and guides. 
              Everything you need to follow along!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                        <div className="p-3 sm:p-4 rounded-full bg-red-500/90 text-white transform group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                      </div>
                      
                      {/* Click hint */}
                      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-2 py-1 rounded-full bg-black/60 text-white text-[10px] sm:text-xs font-display">
                        Click for resources
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="font-display text-base sm:text-xl font-bold text-foreground group-hover:text-red-500 transition-colors mb-2">
                        {video.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
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
                      className="mt-3 overflow-hidden"
                    >
                      <div className="glass-card rounded-xl p-4 sm:p-5 border border-red-500/30">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <span className="font-display text-sm font-semibold text-red-500 flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Resources & Downloads
                          </span>
                          <button
                            onClick={(e) => { e.stopPropagation(); setExpandedVideo(null); }}
                            className="p-1.5 rounded-full hover:bg-muted transition-colors"
                          >
                            <X className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                        
                        <pre className="font-body text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap mb-4">
                          {video.resources}
                        </pre>
                        
                        {video.downloads && (
                          <div className="space-y-2 pt-4 border-t border-border/50">
                            {video.downloads.map((download) => (
                              <a
                                key={download.name}
                                href={download.url}
                                className="flex items-center gap-2 text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
                              >
                                <Download className="w-4 h-4" />
                                {download.name}
                              </a>
                            ))}
                          </div>
                        )}
                        
                        <Button
                          asChild
                          className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white text-sm"
                        >
                          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                            <Youtube className="w-4 h-4 mr-2" />
                            Watch on YouTube
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-primary/10" />
            
            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Subscribe for </span>
                <span className="text-red-500">More Content</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
                New tutorials, tips, and resources every week. Join the community!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white font-display font-semibold px-6 sm:px-8"
              >
                <a href="https://www.youtube.com/@SahilDev" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Subscribe Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YouTubePage;