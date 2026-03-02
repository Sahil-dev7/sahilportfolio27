import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Gaming", href: "#gaming" },
  { label: "Gallery", href: "https://sahildev.odoo.com/gallery", external: true },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    // Small delay so mobile menu closes first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong py-2 sm:py-3 border-b border-border/30" : "py-3 sm:py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('#hero')}
              className="font-display text-lg sm:text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              SAHIL DEV
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                item.external ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.a>
                ) : (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="font-body text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.button>
                )
              ))}
            </div>

            {/* Resume CTA with slide animation */}
            <div className="hidden md:block">
              <Button
                className="resume-btn-slide font-display font-semibold border-primary/30 relative overflow-hidden group"
                variant="outline"
                asChild
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
                    Resume/CV
                  </span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          x: isMobileMenuOpen ? 0 : "100%",
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 right-0 w-3/4 z-40 glass-strong border-l border-border/30 md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-5">
          {navItems.map((item) => (
            item.external ? (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg font-bold text-foreground"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ) : (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-display text-lg font-bold text-foreground"
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.button>
            )
          ))}
          
          <Button
            className="resume-btn-slide font-display font-semibold mt-3 relative overflow-hidden group"
            variant="outline"
            asChild
          >
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
                Resume/CV
              </span>
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
