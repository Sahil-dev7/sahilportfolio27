import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-muted-foreground">
            © 2025 — Designed & Built with 💙 and lots of ☕
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Made with <span className="text-gradient font-semibold">Kotlin</span> energy
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
