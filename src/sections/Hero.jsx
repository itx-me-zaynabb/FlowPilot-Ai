import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-[#0B0F19] overflow-hidden px-4 md:px-12">
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0B0F19" },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#4F46E5", "#00FFDD"] },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 2 },
            move: { enable: true, speed: 1, outModes: "out" },
            links: {
              enable: true,
              distance: 150,
              color: "#4F46E5",
              opacity: 0.3,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" }, // cursor hover effect
              onClick: { enable: true, mode: "push" }, // click adds particles
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Gradient Glow */}
      <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-600/30 blur-[150px] rounded-full top-[-150px] md:top-[-200px] left-[-150px] md:left-[-200px]" />
      <div className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-blue-600/30 blur-[150px] rounded-full bottom-[-150px] md:bottom-[-200px] right-[-150px] md:right-[-200px]" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-2xl"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          FlowPilot AI
        </motion.h1>

        <motion.p
          className="text-md sm:text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Automate complex workflows, generate insights instantly, and scale
          your productivity with intelligent AI-driven tools.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>

          <motion.button
            className="px-6 py-3 border border-gray-600 hover:border-white rounded-full transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
