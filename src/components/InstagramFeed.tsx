import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const InstagramFeed = () => {
  const instagramUrl = "https://www.instagram.com/__sahil_.27";
  
  // Instagram post IDs or shortcodes (you can update these with actual post IDs)
  const postShortcodes = [
    "C1234567", // Replace with actual shortcodes
    "C2345678",
    "C3456789",
    "C4567890",
    "C5678901",
    "C6789012",
  ];

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <section id="instagram" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Instagram className="w-4 h-4" />
            Social Updates
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">Follow on </span>
            <span className="text-gradient">Instagram</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            Latest moments, behind-the-scenes, and life updates.
          </p>
        </motion.div>

        {/* Instagram embed container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Profile header */}
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 via-primary to-orange-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-2xl">👨‍💻</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">@__sahil_.27</h3>
                    <p className="font-body text-sm text-muted-foreground">Sahil Wadhwani</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-display font-semibold hover:scale-105 active:scale-95 transition-all duration-200 btn-bounce"
                >
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow
                  </a>
                </Button>
              </div>

              {/* Embedded Instagram Profile */}
              <div className="rounded-2xl overflow-hidden bg-background/50 p-4">
                <div className="aspect-video w-full flex items-center justify-center">
                  <iframe
                    src="https://www.instagram.com/__sahil_.27/embed"
                    className="w-full h-[500px] border-0 rounded-xl"
                    allowTransparency={true}
                    allow="encrypted-media"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* View all link */}
              <div className="text-center mt-8">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:text-primary/80 transition-colors"
                >
                  View all posts on Instagram
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
