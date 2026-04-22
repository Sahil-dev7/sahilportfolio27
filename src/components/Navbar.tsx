import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Home, Code2, Heart, Gamepad2, Image, Phone, FileText } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Developer", to: "/developer", icon: Code2 },
  { label: "Friend", to: "/friend", icon: Heart },
  { label: "Gamer", to: "/gamer", icon: Gamepad2 },
  { label: "Gallery", href: "https://sahildev.odoo.com/gallery", external: true, icon: Image },
  { label: "Contact", to: "/friend#contact", icon: Phone },
];

const resumeUrl = "https://raw.githubusercontent.com/Sahil-dev7/Sahil-dev7/main/Resume.pdf";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleNavigate = (to: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const [path, hash] = to.split("#");
      navigate(path);
      if (hash) {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);
  };

  const isActive = (to: string) => {
    const path = to.split("#")[0];
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
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
              onClick={() => scrollToSection("#hero")}
              className="font-display text-lg sm:text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              SAHIL DEV
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-3 py-1.5 font-body text-sm text-foreground/60 hover:text-foreground transition-colors rounded-md hover:bg-primary/5"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-1.5 font-body text-sm rounded-md transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-primary font-medium"
                        : "text-foreground/60 hover:text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                )
              )}
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

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-[300px] z-40 md:hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-card via-background to-background border-l border-primary/20" />
              <div className="relative h-full flex flex-col pt-20 pb-8 px-6">
                <div className="mb-8">
                  <span className="font-display text-xl font-bold text-gradient">SAHIL DEV</span>
                  <p className="text-[10px] text-muted-foreground font-body mt-1">Android Developer</p>
                </div>
                <nav className="flex-1 space-y-1">
                  {navItems.map((item, index) =>
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
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all"
                      >
                        <item.icon className="w-4 h-4 text-primary/60" />
                        <span className="font-display text-sm font-semibold">{item.label}</span>
                      </motion.a>
                    ) : (
                      <motion.button
                        key={item.label}
                        onClick={() => scrollToSection(item.href)}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all ${
                          isActive(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground/80 hover:text-foreground hover:bg-primary/10"
                        }`}
                      >
                        <item.icon className={`w-4 h-4 ${isActive(item.href) ? "text-primary" : "text-primary/60"}`} />
                        <span className="font-display text-sm font-semibold">{item.label}</span>
                      </motion.button>
                    )
                  )}
                </nav>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
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
