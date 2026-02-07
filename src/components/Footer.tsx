import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Instagram, Youtube, ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Sahil-dev7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-w712", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Sahil_701", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/@SahilDev", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Gaming", href: "#gaming" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/30">
      {/* Gradient blinds */}
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main footer content */}
        <div className="py-10 sm:py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="space-y-4 sm:space-y-6 col-span-2 lg:col-span-1">
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gradient">SAHIL DEV</span>
            </motion.a>
            <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs">
              Android Developer passionate about creating beautiful, functional apps. 
              Building the future, one app at a time.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="p-2 rounded-xl glass text-foreground/70 hover:text-primary hover:border-primary/30 transition-all border border-border/50 click-spark"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:sahilwadhwani49@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="truncate">sahilwadhwani49@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                India
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-foreground">Status</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-3 rounded-xl glass border border-primary/20">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
                </span>
                <span className="font-body text-[10px] sm:text-xs md:text-sm text-foreground">Available for freelance</span>
              </div>
              <a
                href="https://sahildev.odoo.com/gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Sparkles className="w-3 h-3" />
                View Gallery
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 sm:py-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <motion.p 
              className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground flex items-center gap-1.5 sm:gap-2"
              whileHover={{ scale: 1.02 }}
            >
              © 2025 Sahil Wadhwani — Built with{" "}
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />{" "}
              and ☕
            </motion.p>
            
            <motion.p 
              className="font-body text-[10px] sm:text-xs text-muted-foreground/60"
              whileHover={{ scale: 1.02 }}
            >
              Made with <span className="text-gradient font-semibold">React + Tailwind</span> 
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
