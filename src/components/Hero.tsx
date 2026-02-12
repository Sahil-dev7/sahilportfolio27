import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Youtube, Play, Instagram, Twitter, Briefcase, Code, FileText } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import sahilHero from "@/assets/sahil-hero.png";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 sm:pt-20"
    >
      {/* Gradient blinds background */}
      <div className="absolute inset-0 gradient-blinds opacity-30" />
      
      {/* Venom-style distortion background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse, hsl(0 85% 20% / 0.6) 0%, hsl(0 60% 10% / 0.3) 40%, transparent 70%)",
            filter: "blur(60px)",
            x: mousePosition.x,
            y: mousePosition.y,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-primary/30 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ right: "20%", top: "30%" }}
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />
      
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-primary/10 blur-3xl animate-float"
      />
      
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl order-2 lg:order-1">
            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary font-display text-sm sm:text-base md:text-lg font-semibold mb-1"
            >
              Hi, I'm
            </motion.p>

            {/* Main heading - "Dev" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-1 sm:mb-2 leading-none"
            >
              <span className="text-gradient block">Dev</span>
            </motion.h1>

            {/* Full name subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-display text-sm sm:text-base md:text-lg text-muted-foreground font-medium mb-2 sm:mb-3"
            >
              Sahil Wadhwani
            </motion.p>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-base sm:text-lg md:text-xl text-primary font-semibold mb-3 sm:mb-4"
            >
              Software Developer
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mb-3 sm:mb-4 leading-relaxed font-medium"
            >
              Turning ideas into reality through clean code, scalable systems, and sleek UIs — one project at a time.
            </motion.p>

            {/* Next Action chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-2 mb-4 sm:mb-5"
            >
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass border border-primary/30 text-[10px] sm:text-xs font-body text-foreground/90 font-medium">
                <Briefcase className="w-3 h-3 text-primary" />
                Looking for Android roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass border border-secondary/30 text-[10px] sm:text-xs font-body text-foreground/90 font-medium">
                <Code className="w-3 h-3 text-secondary" />
                Open to freelance MVPs
              </span>
            </motion.div>

            {/* CTA Buttons - View My Work PRIMARY, Get In Touch secondary, Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground font-display font-semibold px-4 sm:px-6 text-xs sm:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 group btn-bounce click-spark h-9 sm:h-11"
                onClick={scrollToProjects}
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display font-semibold px-4 sm:px-6 text-xs sm:text-sm glass-strong border-primary/50 hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 text-foreground btn-bounce click-spark h-9 sm:h-11"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display font-semibold px-4 sm:px-6 text-xs sm:text-sm glass border-primary/30 hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-200 text-foreground/80 btn-bounce click-spark h-9 sm:h-11"
                asChild
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social links with hover text labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-1.5 sm:gap-2"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="group/social p-2 sm:p-2.5 rounded-full glass-strong text-foreground hover:text-primary hover:border-primary/50 transition-all border border-border/50 click-spark relative"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {/* Hover label */}
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-body text-primary opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center lg:block"
          >
            <div className="relative">
              {/* Warm glow behind image */}
              <motion.div 
                className="absolute -inset-6 sm:-inset-10 md:-inset-14 rounded-full"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(0 85% 30% / 0.4) 0%, hsl(15 60% 20% / 0.2) 40%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Hero image - bigger, warm tint via sepia filter */}
              <motion.img 
                src={sahilHero} 
                alt="Sahil Wadhwani - Software Developer" 
                className="relative z-10 w-44 sm:w-64 md:w-80 lg:w-[420px] xl:w-[500px] h-auto mx-auto object-contain"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  filter: "sepia(0.08) saturate(1.1)",
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* const passion = "Android" badge on lower-left of image */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-8 sm:bottom-12 -left-2 sm:left-0 glass-strong rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 border border-primary/30 z-20"
              >
                <pre className="font-mono text-[9px] sm:text-xs text-muted-foreground">
                  <code>
                    <span className="text-primary">const</span> passion = <span className="text-secondary">"Android"</span>;
                  </code>
                </pre>
              </motion.div>

              {/* Open to Work badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-1 -right-1 sm:top-2 sm:right-2 glass-strong rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 border border-primary/30 z-20"
              >
                <span className="text-[9px] sm:text-xs font-display font-bold text-gradient">
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
