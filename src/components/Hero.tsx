import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Play, Instagram, Twitter, Briefcase, Code, FileText } from "lucide-react";
import { useRef } from "react";
import sahilHero from "@/assets/sahil-hero.png";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sahil-dev7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-w712", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Sahil_701", label: "Twitter" },
  ];

  const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-14 sm:pt-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, hsl(0 85% 25% / 0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
            right: "-5%",
            top: "30%",
          }}
        />
        <div 
          className="absolute w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-primary/10 blur-3xl animate-float"
          style={{ left: "15%", top: "25%" }}
        />
      </div>
      
      <div className="absolute inset-0 gradient-blinds opacity-20" />
      
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* ===== MOBILE LAYOUT (< sm) ===== */}
        <div className="flex sm:hidden flex-col items-center justify-center min-h-[calc(100svh-3.5rem)] relative">
          {/* Full-screen hero image */}
          <div className="relative flex-1 flex items-center justify-center w-full">
            {/* Warm glow behind image */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(ellipse at center, hsl(0 85% 30% / 0.25) 0%, transparent 60%)",
                filter: "blur(50px)",
              }}
            />
            <motion.img 
              src={sahilHero} 
              alt="Sahil Wadhwani - Software Developer" 
              className="relative z-10 w-64 h-auto object-contain"
              style={{
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                filter: "sepia(0.06) saturate(1.1)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating badges on image */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-8 left-2 glass-strong rounded-lg px-2 py-1 border border-primary/30 z-20"
            >
              <pre className="font-mono text-[7px] text-muted-foreground">
                <code>
                  <span className="text-primary">const</span> passion = <span className="text-secondary">"Android"</span>;
                </code>
              </pre>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute top-4 right-2 glass-strong rounded-lg px-2 py-1 border border-primary/30 z-20"
            >
              <span className="text-[7px] font-display font-bold text-gradient">
                🔥 Open to Work
              </span>
            </motion.div>
          </div>

          {/* Name overlay at bottom of screen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center pb-6 w-full"
          >
            <p className="text-foreground/80 text-sm font-medium mb-0.5">Hi, I'm</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-gradient leading-tight">
              Sahil Wadhwani
            </h1>
            <p className="text-primary font-display font-semibold text-xs mt-1">Software Developer</p>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="pb-3 text-muted-foreground"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>

        {/* ===== DESKTOP LAYOUT (>= sm) ===== */}
        <div className="hidden sm:grid lg:grid-cols-2 gap-6 lg:gap-4 items-center">
          {/* Left content - text closer to image by reducing gap */}
          <div className="max-w-2xl order-2 lg:order-1 lg:pr-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-1 leading-[1.1]"
            >
              <span className="text-foreground block text-2xl md:text-3xl font-medium mb-0.5">Hi, I'm</span>
              <span className="text-gradient">Sahil Wadhwani</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-display text-lg md:text-xl text-primary font-semibold mb-3"
            >
              Software Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="font-body text-sm md:text-base text-muted-foreground max-w-xl mb-4 leading-relaxed font-medium"
            >
              Turning ideas into reality through clean code, scalable systems, and sleek UIs — one project at a time.
            </motion.p>

            {/* Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass border border-primary/30 text-xs font-body text-foreground/90 font-medium">
                <Briefcase className="w-3 h-3 text-primary" />
                Looking for Android roles
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass border border-secondary/30 text-xs font-body text-foreground/90 font-medium">
                <Code className="w-3 h-3 text-secondary" />
                Open to freelance MVPs
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground font-display font-semibold px-6 text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce click-spark h-11"
                onClick={scrollToProjects}
              >
                <Play className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display font-semibold px-6 text-sm glass-strong border-primary/50 hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 text-foreground btn-bounce click-spark h-11"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display font-semibold px-6 text-sm resume-btn-slide border-primary/30 text-foreground/80 h-11 relative overflow-hidden group"
                asChild
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-primary-foreground">
                    <FileText className="w-4 h-4" />
                    Resume
                  </span>
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group/social flex items-center gap-1.5 px-3 py-2 rounded-full glass-strong text-foreground/70 hover:text-primary hover:border-primary/50 transition-all border border-border/50 click-spark"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-display font-medium">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div 
                className="absolute -inset-8 md:-inset-12 rounded-full"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(0 85% 30% / 0.3) 0%, hsl(15 60% 20% / 0.1) 40%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              
              <motion.img 
                src={sahilHero} 
                alt="Sahil Wadhwani - Software Developer" 
                className="relative z-10 w-56 md:w-72 lg:w-[380px] xl:w-[440px] h-auto mx-auto object-contain"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  filter: "sepia(0.06) saturate(1.1)",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* const passion badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-10 left-0 glass-strong rounded-lg px-3 py-1.5 border border-primary/30 z-20"
              >
                <pre className="font-mono text-xs text-muted-foreground">
                  <code>
                    <span className="text-primary">const</span> passion = <span className="text-secondary">"Android"</span>;
                  </code>
                </pre>
              </motion.div>

              {/* Open to Work badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-2 right-2 glass-strong rounded-lg px-3 py-1.5 border border-primary/30 z-20"
              >
                <span className="text-xs font-display font-bold text-gradient">
                  🔥 Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 text-muted-foreground"
          >
            <span className="text-[10px] font-body uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
