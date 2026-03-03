import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Home, User, FolderOpen, Wrench, Gamepad2, Image, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Gaming", href: "#gaming", icon: Gamepad2 },
  { label: "Gallery", href: "https://sahildev.odoo.com/gallery", external: true, icon: Image },
  { label: "Contact", href: "#contact", icon: Phone },
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
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

            {/* Resume CTA */}
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
            <motion.button
              className="md:hidden p-2 text-foreground z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-[300px] z-40 md:hidden overflow-hidden"
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-bl from-card via-background to-background border-l border-primary/20" />
              
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-3xl" />

              <div className="relative h-full flex flex-col pt-20 pb-8 px-6">
                {/* Brand */}
                <div className="mb-8">
                  <span className="font-display text-xl font-bold text-gradient">SAHIL DEV</span>
                  <p className="text-[10px] text-muted-foreground font-body mt-1">Android Developer</p>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 space-y-1">
                  {navItems.map((item, index) => (
                    item.external ? (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all group"
                      >
                        <item.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                        <span className="font-display text-sm font-semibold">{item.label}</span>
                      </motion.a>
                    ) : (
                      <motion.button
                        key={item.label}
                        onClick={() => scrollToSection(item.href)}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all group"
                      >
                        <item.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                        <span className="font-display text-sm font-semibold">{item.label}</span>
                      </motion.button>
                    )
                  ))}
                </nav>

                {/* Resume Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    className="w-full resume-btn-slide font-display font-semibold relative overflow-hidden group border-primary/30"
                    variant="outline"
                    asChild
                  >
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-primary-foreground">
                        <FileText className="w-4 h-4" />
                        Resume/CV
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
