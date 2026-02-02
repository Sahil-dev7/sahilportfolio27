import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Youtube, Play, Sparkles, Instagram, Twitter } from "lucide-react";
import { useRef } from "react";
import Scene3D from "./Scene3D";
import sahilHero from "@/assets/sahil-hero.png";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sahil-dev7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-w712", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/__sahil_.27", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Sahil_701", label: "Twitter" },
  ];

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(ellipse at 80% 50%, hsl(0 70% 25% / 0.4) 0%, transparent 50%)" }}
      />
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at 20% 80%, hsl(0 50% 15% / 0.3) 0%, transparent 40%)" }}
      />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* 3D Scene */}
      <Scene3D className="opacity-70" />
      
      {/* Floating decorative elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-primary/15 blur-3xl animate-float-delayed"
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-secondary/10 blur-2xl animate-float"
      />
      
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Intro badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-8 border border-primary/30"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-foreground font-body font-medium">Available for opportunities</span>
            </motion.div>

            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary font-display text-xl font-semibold mb-2"
            >
              Hi, I'm
            </motion.p>

            {/* Main heading - Fixed overlap */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
            >
              <span className="text-gradient block">Sahil Wadhwani</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-xl md:text-2xl text-primary font-semibold mb-6"
            >
              Software Developer
            </motion.p>

            {/* Passion badge - Moved up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-strong border border-primary/20 mb-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
              </div>
              <pre className="font-mono text-xs text-muted-foreground">
                <code>
                  <span className="text-primary">const</span> passion = <span className="text-secondary">"Android"</span>;
                </code>
              </pre>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Turning ideas into reality through clean code, scalable systems, and sleek UIs — one project at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground font-display font-semibold px-8 shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce"
                onClick={scrollToProjects}
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display font-semibold px-8 glass-strong border-primary/50 hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 text-foreground btn-bounce"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="p-3 rounded-full glass-strong text-foreground hover:text-primary hover:border-primary/50 transition-colors border border-border/50"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Hero image - clean without 3D effect */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 rounded-full blur-3xl" />
              <img 
                src={sahilHero} 
                alt="Sahil Wadhwani - Software Developer" 
                className="relative z-10 w-full max-w-lg mx-auto"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
                }}
              />
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-2 border border-primary/30 z-20"
              >
                <span className="text-sm font-display font-bold text-gradient">
                  🔥 Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
