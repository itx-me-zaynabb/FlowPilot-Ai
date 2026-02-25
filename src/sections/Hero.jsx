/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import ParticlesBackground from "../component/ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B0F19] text-white px-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 bg-[length:200%_200%] animate-[gradientShift_12s_ease_infinite]" />

      {/* Interactive Particles */}
      <ParticlesBackground />

      {/* Glow Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full -top-40 -left-40 animate-pulse -z-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[180px] rounded-full -bottom-40 -right-40 animate-pulse -z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <motion.h1
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 text-transparent bg-clip-text"
        >
          FlowPilot AI
        </motion.h1>
      </motion.div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
