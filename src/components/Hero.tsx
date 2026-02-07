import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Youtube, Play, Sparkles, Instagram, Twitter, Briefcase, Code } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import sahilHero from "@/assets/sahil-hero.png";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  // Mouse tracking for venom effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 sm:pt-20"
    >
      {/* Gradient blinds background */}
      <div className="absolute inset-0 gradient-blinds opacity-30" />
      
      {/* Venom-style distortion background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse, hsl(0 85% 20% / 0.6) 0%, hsl(0 60% 10% / 0.3) 40%, transparent 70%)",
            filter: "blur(60px)",
            x: mousePosition.x,
            y: mousePosition.y,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Sharp blur distortion shapes */}
        <motion.div 
          className="absolute w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-primary/30 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ right: "20%", top: "30%" }}
        />
        <motion.div 
          className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-secondary/20 blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          style={{ left: "15%", bottom: "30%" }}
        />
      </div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Floating decorative elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 blur-3xl animate-float"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-32 right-20 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-primary/15 blur-3xl animate-float-delayed"
      />
      
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl order-2 lg:order-1">
            {/* Available badge with pulse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-strong mb-4 sm:mb-6 border border-primary/40 pulse-badge"
            >
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm text-foreground font-body font-medium">Available for opportunities</span>
            </motion.div>

            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary font-display text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2"
            >
              Hi, I'm
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-2 sm:mb-3 leading-tight"
            >
              <span className="text-gradient block">Sahil Wadhwani</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-base sm:text-lg md:text-xl lg:text-2xl text-primary font-semibold mb-3 sm:mb-4"
            >
              Software Developer
            </motion.p>

            {/* Passion badge - Code snippet style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl glass-strong border border-primary/20 mb-3 sm:mb-4"
            >
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-muted-foreground/50" />
              </div>
              <pre className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground">
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
              className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-4 sm:mb-6 leading-relaxed"
            >
              Turning ideas into reality through clean code, scalable systems, and sleek UIs — one project at a time.
            </motion.p>

            {/* Next Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-primary/30 text-xs sm:text-sm font-body text-foreground/90">
                <Briefcase className="w-3 h-3 text-primary" />
                Looking for Android roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-secondary/30 text-xs sm:text-sm font-body text-foreground/90">
                <Code className="w-3 h-3 text-secondary" />
                Open to freelance MVPs
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground font-display font-semibold px-5 sm:px-8 text-sm sm:text-base shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce click-spark"
                onClick={scrollToProjects}
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display font-semibold px-5 sm:px-8 text-sm sm:text-base glass-strong border-primary/50 hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 text-foreground btn-bounce click-spark"
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
              className="flex items-center gap-2 sm:gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="p-2 sm:p-2.5 md:p-3 rounded-full glass-strong text-foreground hover:text-primary hover:border-primary/50 transition-colors border border-border/50 click-spark"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right content - Hero Image with Venom Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center lg:block"
          >
            {/* Venom distortion behind image */}
            <div className="relative">
              {/* Multiple blur layers for depth */}
              <motion.div 
                className="absolute -inset-8 sm:-inset-12 md:-inset-16 rounded-full"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(0 85% 30% / 0.5) 0%, hsl(0 60% 15% / 0.3) 40%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -inset-4 sm:-inset-8"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(350 80% 25% / 0.4) 0%, transparent 60%)",
                  filter: "blur(30px)",
                }}
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Hero image */}
              <motion.img 
                src={sahilHero} 
                alt="Sahil Wadhwani - Software Developer" 
                className="relative z-10 w-56 sm:w-72 md:w-80 lg:w-[400px] xl:w-[480px] h-auto mx-auto object-contain"
                style={{
                  maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)"
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:top-0 sm:right-0 glass-strong rounded-xl px-2.5 py-1 sm:px-4 sm:py-2 border border-primary/30 z-20"
              >
                <span className="text-[10px] sm:text-sm font-display font-bold text-gradient">
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
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
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
