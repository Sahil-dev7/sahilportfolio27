import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Youtube, Twitter, ArrowRight, Sparkles, Send, Instagram, Globe, FileText } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Sahil-dev7" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-w712" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/__sahil_.27" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/Sahil_701" },
  { icon: Youtube, label: "Vines Channel", href: "https://instagram.com/sahil_x_rajat_vines" },
  { icon: Globe, label: "Portfolio", href: "https://sahildev.odoo.com" },
];

const ContactSection = () => {
  const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";
  const mocktaleUrl = "https://www.moctale.in/u/MenOfCulture_2";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-foreground font-body font-medium">Let's Connect</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Got an Idea? </span>
            <span className="text-gradient">Let's Talk!</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
            Whether it's about a project, collaboration, or just want to say hi — my inbox is always open.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl animate-pulse" />
              <Button 
                size="lg" 
                className="relative bg-gradient-primary text-primary-foreground font-display font-semibold px-10 py-6 text-lg shadow-glow hover:scale-105 transition-transform group"
                asChild
              >
                <a href="mailto:sahilwadhwani7@gmail.com">
                  <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Say Hello
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            <Button 
              size="lg" 
              variant="outline"
              className="font-display font-semibold px-8 py-6 text-lg glass-strong border-primary/50 hover:bg-primary/20 text-foreground"
              asChild
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Resume/CV
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                className="p-3 rounded-full glass-strong text-foreground hover:text-primary hover:border-primary/30 transition-all border border-border/50"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Mocktale link */}
          <motion.a
            href={mocktaleUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 mt-6 text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <span>Also on</span>
            <span className="font-semibold text-foreground">Mocktale</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-border/50 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-body text-foreground">
                Open to <span className="text-primary font-semibold">freelance</span> & <span className="text-primary font-semibold">full-time</span> opportunities
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
