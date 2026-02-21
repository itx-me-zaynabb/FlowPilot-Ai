/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useRef } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleContainer = useRef(null);

  const createButtonParticles = (e) => {
    const container = particleContainer.current;
    if (!container) return;

    for (let i = 0; i < 12; i++) {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-2 h-2 rounded-full pointer-events-none bg-gradient-to-r from-cyan-400 to-purple-500 opacity-80 animate-buttonParticle";
      particle.style.left = e.clientX + "px";
      particle.style.top = e.clientY + "px";

      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 800);
    }
  };

  return (
    <section
      id="hero"
      ref={particleContainer}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#0B0F19] text-white px-6"
    >
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
        className="absolute inset-0 -z-20"
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
              distance: 120,
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
            onMouseEnter={createButtonParticles}
            className="px-8 py-3 rounded-full font-semibold 
            bg-gradient-to-r from-cyan-500 to-purple-600 
            shadow-lg shadow-cyan-500/30"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={createButtonParticles}
            className="px-8 py-3 rounded-full border border-white/30 
            backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
          >
            View Demo
          </motion.button>
        </div>
      </motion.div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }

        /* Button particles animation */
        @keyframes buttonParticle {
          0% { transform: translate(0,0) scale(1); opacity: 0.8; }
          100% { transform: translate(calc(-50px + 100px*var(--randX)), calc(-50px + 100px*var(--randY))) scale(0); opacity: 0; }
        }
        .animate-buttonParticle {
          animation: buttonParticle 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
