import { motion } from "framer-motion";
import { Heart, Code, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Sahil-dev7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-w712", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Sahil_701", label: "Twitter" },
  ];

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            className="font-display text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            SAHIL DEV
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="p-2 rounded-full glass text-foreground/70 hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <motion.p 
              className="font-body text-sm text-muted-foreground flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              © 2025 Sahil Wadhwani — Designed & Built with{" "}
              <Heart className="w-4 h-4 text-primary animate-pulse" />{" "}
              and lots of ☕
            </motion.p>
          </div>
          
          <motion.p 
            className="font-body text-xs text-muted-foreground/60 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            Made with{" "}
            <Code className="w-3 h-3 text-primary" />{" "}
            <span className="text-gradient font-semibold">Kotlin</span> energy
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
