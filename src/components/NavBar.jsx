import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo/logo.png";

const SECTIONS = [
  { name: "ABOUT", id: "about" },
  { name: "SERVICES", id: "services" },
  { name: "CLIENTS", id: "clients" },
  { name: "REVIEWS", id: "reviews" },
  { name: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const [current, setCurrent] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setCurrent(id);
      } else {
        console.error(`Element with id ${id} not found`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-xl" : "bg-transparent"
        }`}
      >
        
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 w-full">
            
                                       
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 cursor-pointer ml-4" 
              onClick={() => scrollTo("hero")}
            >
              <img
                src={logo}
                alt="BildUp Logo"
                className="h-16 md:h-60 w-auto transition-all duration-300 hover:scale-110"
                style={{
                  filter: scrolled
                    ? "drop-shadow(0 0 8px #feb3eb)"
                    : "drop-shadow(0 0 12px #feb3eb)",
                }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {SECTIONS.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollTo(section.id)}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wider transition-all duration-300 ${
                    current === section.id
                      ? scrolled
                        ? "text-slate-950"
                        : "text-white"
                      : scrolled
                      ? "text-gray-600 hover:text-slate-950"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section.name}
                  {current === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: "#feb3eb" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-7 h-7 transition-all duration-300 ${
                  scrolled ? "text-slate-950" : "text-white"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-slate-900 z-50 lg:hidden overflow-y-auto shadow-2xl"
              style={{ borderLeft: `2px solid #feb3eb` }}
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Logo */}
              <div className="px-6 pb-8">
                <img
                  src={logo}
                  alt="BildUp Logo"
                  className="h-14 w-auto"
                  style={{ filter: "drop-shadow(0 0 8px #feb3eb)" }}
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="px-6 space-y-2">
                {SECTIONS.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-4 py-4 rounded-xl text-lg font-semibold tracking-wider transition-all duration-300 ${
                      current === section.id
                        ? "bg-white/10 text-white border-l-4"
                        : "text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                    }`}
                    style={{
                      borderLeftColor:
                        current === section.id ? "#feb3eb" : "transparent",
                    }}
                  >
                    {section.name}
                  </motion.button>
                ))}
              </div>

              <div className="px-6 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm text-center">
                  Building brands from the ground up
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;