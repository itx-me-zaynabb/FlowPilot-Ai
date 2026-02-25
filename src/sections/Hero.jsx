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
      <div className="absolute inset-0 -z-40 bg-gradient-to-br from-indigo-950 via-[#0B0F19] to-purple-950" />

      {/* Visible Animated Grid */}
      <div className="absolute inset-0 -z-30 opacity-40">
        <div
          className="absolute inset-0 animate-gridMove"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none absolute -z-20 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{
          left: mouse.x - 200,
          top: mouse.y - 200,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
        }}
      />

      {/* Floating Light Particles */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

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

      {/* Animations */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0px); }
          100% { transform: translateY(60px); }
        }
        .animate-gridMove {
          animation: gridMove 8s linear infinite;
        }

        @keyframes float {
          0% { transform: translateY(100vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}
