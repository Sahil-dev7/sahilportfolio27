import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Youtube, Twitter, ArrowRight } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-primary" },
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-secondary" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-primary" },
];

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section header */}
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-widest">Let's Connect</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
            <span className="text-foreground">Got an Idea? </span>
            <span className="text-gradient">Let's Talk!</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8 max-w-xl mx-auto">
            Whether it's about a project, collaboration, or just want to say hi — my inbox is always open.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground font-display font-semibold px-10 py-6 text-lg shadow-glow hover:scale-105 transition-transform"
            >
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                className={`p-3 rounded-full bg-muted border border-border text-muted-foreground ${social.color} transition-colors`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to freelance & full-time opportunities
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
