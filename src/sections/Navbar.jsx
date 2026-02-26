/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Features", id: "features" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Team", id: "team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "hero";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop - 120;
          if (window.scrollY >= offsetTop) current = link.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * @param {string} id
   */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1
          className="font-bold text-xl cursor-pointer hover:text-cyan-400 transition"
          onClick={() => scrollToSection("hero")}
        >
          FlowPilot AI
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative font-medium transition-all duration-300 hover:text-white hover:after:w-full
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:via-purple-400 after:to-indigo-400 after:w-0 after:transition-all
                ${activeSection === link.id ? "text-white font-semibold after:w-full" : ""}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          className="hidden md:inline bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 rounded-full hover:scale-105 transition transform shadow-lg shadow-cyan-500/40"
          onClick={() => scrollToSection("hero")}
        >
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-white text-2xl relative z-50"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              className="block w-6 h-0.5 bg-white mb-1 rounded"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-white mb-1 rounded"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B0F19]/90 backdrop-blur-lg border-t border-white/10 flex flex-col items-center py-4 gap-4 z-40"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition hover:text-white text-gray-300 font-medium ${
                  activeSection === link.id
                    ? "text-white font-semibold underline decoration-cyan-400"
                    : ""
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("hero")}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 rounded-full hover:scale-105 transition transform shadow-lg shadow-cyan-500/40"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
