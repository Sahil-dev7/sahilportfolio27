import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";
const heroImage = "https://i.postimg.cc/J4M53SsL/1000085130.png";

const socials = [
  { icon: Github, href: "https://github.com/Sahil-dev7", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-w712", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sahilwadhwani712@gmail.com", label: "Email" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-background flex items-end sm:items-center">
      {/* Subtle background glow — just one, minimal */}
      <div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-[120px]"
        style={{ background: "hsl(0 70% 30%)" }}
      />

      {/* Content grid */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 py-24 sm:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
          {/* Left: Text */}
          <div className="order-2 md:order-1 pb-12 sm:pb-0">
            {/* Status badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-body text-foreground/80">Open to work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-4"
            >
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="text-gradient">Sahil Wadhwani</span>
            </motion.h1>

            {/* Role + one-liner */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <p className="font-display text-sm sm:text-lg font-semibold text-foreground/90 mb-2">
                Android Developer & Creator
              </p>
              <p className="font-body text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
                I build clean, scalable mobile apps with Kotlin & Jetpack Compose. 
                Also a content creator, martial artist, and competitive gamer.
              </p>
            </motion.div>

            {/* CTAs — clear hierarchy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-display font-semibold px-6 text-sm shadow-glow hover:scale-[1.03] active:scale-[0.97] transition-transform h-11"
                onClick={scrollToContact}
              >
                Hire Me
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="resume-btn-slide font-display font-semibold px-6 text-sm border-primary/30 h-11 relative overflow-hidden group"
                onClick={scrollToWork}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
                  View My Work
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="resume-btn-slide font-display font-semibold px-6 text-sm border-primary/30 h-11 relative overflow-hidden group"
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

            {/* Social links with text labels */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex items-center gap-4"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-xs font-body group"
                >
                  <s.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{s.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 relative flex justify-center md:justify-end"
          >
            {/* Glow behind image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[80px] opacity-20 pointer-events-none"
              style={{ background: "hsl(0 70% 40%)" }}
            />
            <img
              src={heroImage}
              alt="Sahil Wadhwani"
              className="relative z-10 h-[45svh] sm:h-[55svh] md:h-[70svh] lg:h-[78svh] w-auto object-contain object-bottom select-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                filter: "drop-shadow(0 20px 40px hsl(0 0% 0% / 0.5))",
              }}
              loading="eager"
              draggable={false}
            />

            {/* Code snippet floating badge — only on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="hidden md:block absolute bottom-[25%] left-0 glass-strong rounded-lg px-3 py-2 border border-primary/20 z-20"
            >
              <pre className="font-mono text-[10px] text-muted-foreground">
                <code>
                  <span className="text-primary">const</span> passion = <span className="text-secondary">"Android"</span>;
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-muted-foreground/50 hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
