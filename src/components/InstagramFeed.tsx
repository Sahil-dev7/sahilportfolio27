import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramFeed = () => {
  const instagramUrl = "https://www.instagram.com/__sahil_.27";
  
  return (
    <section id="instagram" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-primary font-display text-xs sm:text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
            <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
            Social Updates
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-foreground">Follow on </span>
            <span className="text-gradient">Instagram</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-3 sm:p-6 overflow-hidden">
            <div className="rounded-xl overflow-hidden bg-background/50">
              <iframe
                src="https://www.instagram.com/__sahil_.27/embed"
                className="w-full h-[350px] sm:h-[450px] border-0 rounded-xl"
                allowTransparency={true}
                allow="encrypted-media"
                loading="lazy"
              />
            </div>

            <div className="text-center mt-4 sm:mt-6">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-display font-semibold hover:scale-105 active:scale-95 transition-all duration-200 btn-bounce text-xs sm:text-sm"
              >
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                  Follow @__sahil_.27
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
