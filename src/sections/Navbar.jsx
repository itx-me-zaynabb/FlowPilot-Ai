import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // active route

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <h1 className="font-bold text-xl cursor-pointer">
          <Link to="/">FlowPilot AI</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <Link
            to="/features"
            className={`hover:text-white transition ${
              location.pathname === "/features"
                ? "text-white font-semibold underline decoration-blue-500"
                : ""
            }`}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className={`hover:text-white transition ${
              location.pathname === "/pricing"
                ? "text-white font-semibold underline decoration-blue-500"
                : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/faq"
            className={`hover:text-white transition ${
              location.pathname === "/faq"
                ? "text-white font-semibold underline decoration-blue-500"
                : ""
            }`}
          >
            FAQ
          </Link>
        </div>

        <Link
          to="/"
          className="hidden md:inline bg-blue-600 px-5 py-2 rounded-full hover:scale-105 transition"
        >
          Get Started
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-white text-2xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0F19]/90 backdrop-blur-lg border-t border-white/10 flex flex-col items-center py-4 gap-4 z-40">
          <Link
            to="/features"
            className={`hover:text-white text-gray-300 transition ${
              location.pathname === "/features"
                ? "text-white font-semibold underline decoration-blue-500"
                : ""
            }`}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className={`hover:text-white text-gray-300 transition ${
              location.pathname === "/pricing"
                ? "text-white font-semibold underline decoration-blue-500"
                : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/faq"
            className={`hover:text-white text-gray-300 transition ${
              location.pathname === "/faq"
                ? "text-white font-semibold underline decoration-blue-500"
                : ""
            }`}
          >
            FAQ
          </Link>
          <Link
            to="/"
            className="bg-blue-600 px-5 py-2 rounded-full hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
