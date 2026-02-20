import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-[#0B0F19] overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* Particles */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            color: { value: ["#ffffff", "#4F46E5"] },
            move: { enable: true, speed: 0.6 },
            size: { value: 2 },
            opacity: { value: 0.4 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          FlowPilot AI
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Automate complex workflows, generate insights instantly, and scale
          your productivity with intelligent AI-driven tools.
        </p>

        <div className="flex justify-center gap-4">
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
