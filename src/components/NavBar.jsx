import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo/logo.png";

// Use lowercase IDs that match your section IDs
const SECTIONS = [
  { name: "SERVICES", id: "services" },
  { name: "ABOUT", id: "about" },
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

    // Add a small delay to ensure the menu is closed before scrolling
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
        // Fallback: scroll to top if section not found
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <img
          src={Logo}
          alt="Logo"
          className="h-20 md:h-24 lg:h-28 w-auto max-w-[240px] transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_10px_#feb3eb]"
          onClick={() => scrollTo("hero")}
          style={{ cursor: "pointer" }}
        />
        <div className="nav-links">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              className={`nav-link ${current === section.id ? "active" : ""}`}
              onClick={() => scrollTo(section.id)}
            >
              {section.name}
            </button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <XMarkIcon className="w-6" />
          ) : (
            <Bars3Icon className="w-6" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              className="mobile-link"
              onClick={() => scrollTo(section.id)}
            >
              {section.name}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
