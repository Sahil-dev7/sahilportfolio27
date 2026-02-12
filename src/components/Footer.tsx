import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Instagram, Youtube, ArrowUpRight, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Sahil-dev7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-w712", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Sahil_701", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/@SahilDev", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Compact single row footer */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand + tagline */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => scrollToSection('#hero')}
              whileHover={{ scale: 1.05 }}
              className="font-display text-lg sm:text-xl font-bold text-gradient"
            >
              SAHIL DEV
            </motion.button>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <span className="hidden sm:inline text-xs font-body text-muted-foreground">Android Developer</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-1.5">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-1.5 sm:p-2 rounded-lg text-foreground/60 hover:text-primary transition-all click-spark"
                aria-label={social.label}
              >
                <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
            ))}
          </div>

          {/* Contact + Copyright */}
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground font-body">
            <a href="mailto:sahilwadhwani712@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">sahilwadhwani712@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <span className="text-muted-foreground/30">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> India
            </span>
            <span className="text-muted-foreground/30">•</span>
            <span className="flex items-center gap-1">
              © 2025 <Heart className="w-2.5 h-2.5 text-primary" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
