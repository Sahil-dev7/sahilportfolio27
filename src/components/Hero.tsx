import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Youtube, Play, Sparkles } from "lucide-react";
import { useRef } from "react";
import Scene3D from "./Scene3D";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
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
      <Scene3D scrollY={typeof window !== 'undefined' ? window.scrollY : 0} className="opacity-70" />
      
      {/* Animated lines/grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y2 }}
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        />
      </div>
      
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-body">Available for opportunities</span>
            </motion.div>

            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary font-display text-lg italic mb-2"
            >
              Hi I'm
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            >
              <span className="text-foreground">Sahil </span>
              <span className="text-gradient">Wadhwani</span>
              <span className="text-foreground">,</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-xl md:text-2xl text-primary italic font-semibold mb-6"
            >
              Software Developer
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-lg text-muted-foreground max-w-xl mb-8"
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
                className="bg-gradient-primary text-primary-foreground font-display font-semibold px-8 shadow-glow hover:scale-105 transition-transform group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-display font-semibold px-8 glass border-primary/30 hover:bg-primary/10 transition-all"
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
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="p-3 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right content - Glass card with code snippet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              
              {/* Code block */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary/80" />
                  <div className="w-3 h-3 rounded-full bg-secondary/80" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
                </div>
                
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-muted-foreground">{"// About me"}</span>
                    {"\n"}
                    <span className="text-primary">I've been programming</span> for the last{" "}
                    <span className="text-secondary">6 years</span>.{"\n"}
                    I started off <span className="text-primary">playing around</span>{"\n"}
                    in Scratch, but since then I have{"\n"}
                    worked on a number of{" "}
                    <span className="text-primary">programming projects</span>,{"\n\n"}
                    Interested in <span className="text-secondary">AI, ML</span>{"\n"}
                    <span className="text-secondary">Cloud Computing</span> and{"\n"}
                    <span className="text-secondary">App Development</span>.{"\n\n"}
                    <span className="text-muted-foreground">// Renaissance University</span>
                  </code>
                </pre>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-2"
            >
              <span className="text-sm font-display font-bold text-gradient">
                🔥 Open to Work
              </span>
            </motion.div>
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
