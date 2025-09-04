import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo/logo.png";

const SECTIONS = [
  "SERVICES",
  "ABOUT",
  "CLIENTS",
  "REVIEWS",
  "CONTACT",
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
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setCurrent(id);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <img
          src={Logo}
          alt="Logo"
          className="h-20 md:h-24 lg:h-28 w-auto max-w-[240px] transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_10px_#feb3eb]"
        />
        <div className="nav-links">
          {SECTIONS.map((id) => (
            <button
              key={id}
              className={`nav-link ${current === id ? "active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {id}
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
          {SECTIONS.map((id) => (
            <button
              key={id}
              className="mobile-link"
              onClick={() => scrollTo(id)}
            >
              {id}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
