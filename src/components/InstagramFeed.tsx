import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramFeed = () => {
  const instagramUrl = "https://www.instagram.com/__sahil_.27";
  
  return (
    <section id="instagram" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Instagram className="w-4 h-4" />
            Social Updates
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            <span className="text-foreground">Follow on </span>
            <span className="text-gradient">Instagram</span>
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
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
          <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Embedded Instagram Profile */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-background/50">
                <div className="w-full flex items-center justify-center">
                  <iframe
                    src="https://www.instagram.com/__sahil_.27/embed"
                    className="w-full h-[400px] sm:h-[500px] border-0 rounded-xl"
                    allowTransparency={true}
                    allow="encrypted-media"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-6 sm:mt-8">
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-display font-semibold hover:scale-105 active:scale-95 transition-all duration-200 btn-bounce"
                >
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow @__sahil_.27
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;