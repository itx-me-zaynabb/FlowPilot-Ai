/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B0F19] text-white px-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-40 bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#1e1b4b] animate-gradientShift" />

      {/* Aurora Moving Blobs */}
      <div className="absolute -z-30 w-[600px] h-[600px] bg-purple-600/30 blur-[160px] rounded-full -top-40 -left-40 animate-blob1" />
      <div className="absolute -z-30 w-[600px] h-[600px] bg-indigo-600/30 blur-[160px] rounded-full -bottom-40 -right-40 animate-blob2" />

      {/* Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -z-20 w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-300"
        style={{
          left: mouse.x - 250,
          top: mouse.y - 250,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)",
        }}
      />

      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/40 rounded-full animate-floatSoft"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
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
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 text-transparent bg-clip-text"
        >
          FlowPilot AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
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

      {/* Animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes blob1 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          50% { transform: translate(100px,50px) scale(1.1); }
        }
        .animate-blob1 {
          animation: blob1 18s infinite ease-in-out;
        }

        @keyframes blob2 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          50% { transform: translate(-120px,-80px) scale(1.15); }
        }
        .animate-blob2 {
          animation: blob2 22s infinite ease-in-out;
        }

        @keyframes floatSoft {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { opacity: 1; }
          100% { transform: translateY(-40px); opacity: 0.2; }
        }
        .animate-floatSoft {
          animation: floatSoft linear infinite;
        }
      `}</style>
    </section>
  );
}
