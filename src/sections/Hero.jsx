/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#0B0F19] text-white px-6">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 -z-30 
        bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 
        bg-[length:200%_200%] animate-[gradientShift_12s_ease_infinite]"
      />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 70, density: { enable: true, area: 800 } },
            color: { value: ["#6366F1", "#00FFFF", "#A855F7"] },
            opacity: { value: 0.6 },
            size: { value: 2.5 },
            move: { enable: true, speed: 1.2 },
            links: {
              enable: true,
              distance: 130,
              color: "#6366F1",
              opacity: 0.3,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 120 },
              push: { quantity: 4 },
            },
          },
        }}
        className="absolute inset-0 -z-20"
      />

      {/* Glow Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full -top-40 -left-40 animate-pulse -z-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full -bottom-40 -right-40 animate-pulse -z-20"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        {/* Badge */}
        <div
          className="inline-block mb-6 px-4 py-1 text-sm 
          bg-white/10 backdrop-blur-md border border-white/20 
          rounded-full text-cyan-300"
        >
          🚀 AI Powered Workflow Automation
        </div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold 
          leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 
          text-transparent bg-clip-text"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          FlowPilot AI
        </motion.h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          Automate complex workflows, extract real-time insights, and scale
          productivity with next-generation AI systems.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold 
            bg-gradient-to-r from-cyan-500 to-purple-600 
            shadow-lg shadow-cyan-500/30"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-white/30 
            backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
          >
            View Demo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
