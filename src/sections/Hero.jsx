/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef(null);

  // Mouse spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B0F19] text-white px-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-40 bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 bg-[length:300%_300%] animate-[gradientShift_15s_ease_infinite]" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-30 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[160px] rounded-full -top-40 -left-40 animate-[floatSlow_8s_ease-in-out_infinite] -z-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full -bottom-40 -right-40 animate-[floatSlow_10s_ease-in-out_infinite] -z-20"></div>

      {/* Mouse Glow Spotlight */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-150"
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-purple-300"
        >
          🚀 AI Powered Workflow Automation
        </motion.div>

        <motion.h1
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 text-transparent bg-clip-text"
        >
          FlowPilot AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-gray-300 text-lg md:text-xl"
        >
          Automate complex workflows, extract real-time insights, and scale
          productivity with next-generation AI systems.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/30"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
          >
            View Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatSlow {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }
      `}</style>
    </section>
  );
}
