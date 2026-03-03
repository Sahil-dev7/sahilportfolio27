import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Sahil-dev7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-w712", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Sahil_701", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/@SahilDev", label: "YouTube" },
  ];

  const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";

  return (
    <footer className="relative overflow-hidden border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Brand */}
          <span className="font-display text-base sm:text-lg font-bold text-gradient">SAHIL DEV</span>

          {/* Social */}
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all text-[10px] font-display"
                aria-label={social.label}
              >
                <social.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 text-[10px] sm:text-xs text-muted-foreground font-body">
            <a href="mailto:sahilwadhwani712@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">sahilwadhwani712@gmail.com</span>
            </a>
            <span className="text-muted-foreground/30">•</span>
            <Button
              variant="ghost"
              size="sm"
              className="resume-btn-slide h-7 px-3 text-[10px] sm:text-xs font-display font-semibold border border-primary/30 relative overflow-hidden group"
              asChild
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">Resume</span>
              </a>
            </Button>
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
