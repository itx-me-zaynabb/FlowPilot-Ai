import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Hero() {
  // particles initialization
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
          fullScreen: { enable: false }, // particles section ke andar hi rahen
          background: { color: "#0B0F19" }, // canvas ka background match section se
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#4F46E5"] },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6, outModes: "out" },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Gradient Glow */}
      <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-600/30 blur-[150px] rounded-full top-[-150px] md:top-[-200px] left-[-150px] md:left-[-200px]" />
      <div className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-blue-600/30 blur-[150px] rounded-full bottom-[-150px] md:bottom-[-200px] right-[-150px] md:right-[-200px]" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          FlowPilot AI
        </h1>

        <p className="text-md sm:text-lg md:text-xl text-gray-300 mb-8">
          Automate complex workflows, generate insights instantly, and scale
          your productivity with intelligent AI-driven tools.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
            Start Free Trial
          </button>

          <button className="px-6 py-3 border border-gray-600 hover:border-white rounded-full transition">
            Live Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}
