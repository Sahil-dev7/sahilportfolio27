import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p 
            className="font-body text-sm text-muted-foreground flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 — Designed & Built with{" "}
            <Heart className="w-4 h-4 text-primary animate-pulse" />{" "}
            and lots of ☕
          </motion.p>
          
          <motion.p 
            className="font-body text-sm text-muted-foreground flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            Made with{" "}
            <Code className="w-4 h-4 text-primary" />{" "}
            <span className="text-gradient font-semibold">Kotlin</span> energy
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
