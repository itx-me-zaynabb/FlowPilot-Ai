/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Automated Workflows",
    description: "Streamline repetitive tasks and save hours daily.",
    icon: "⚡",
  },
  {
    title: "AI Insights",
    description: "Get real-time analytics and actionable recommendations.",
    icon: "🤖",
  },
  {
    title: "Collaboration",
    description: "Seamless teamwork with AI-assisted tools.",
    icon: "🧩",
  },
];

export default function Features() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const particles = [];

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "feature-particle";
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      container.appendChild(particle);
      particles.push(particle);

      setTimeout(() => {
        particle.remove();
        particles.splice(particles.indexOf(particle), 1);
      }, 1000);
    };

    const mouseMove = (e) => {
      if (e.target.closest(".feature-card")) {
        for (let i = 0; i < 2; i++) {
          createParticle(
            e.clientX + Math.random() * 10 - 5,
            e.clientY + Math.random() * 10 - 5,
          );
        }
      }
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#0B0F19] text-white overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Floating Gradient Glows */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full top-[-150px] left-[-150px] animate-pulse-slow" />
      <div className="absolute w-[350px] h-[350px] bg-blue-600/20 blur-[150px] rounded-full bottom-[-150px] right-[-150px] animate-pulse-slow" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 z-10 relative">
        Features
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="feature-card relative w-72 p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg flex flex-col items-center text-center hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-transform duration-500 cursor-pointer"
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              {feature.icon}
            </motion.div>

            <motion.h3
              className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"
              whileHover={{ scale: 1.05 }}
            >
              {feature.title}
            </motion.h3>

            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }

        /* Hover particles */
        .feature-particle {
          position: fixed;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          pointer-events: none;
          background: linear-gradient(45deg, #7f5af0, #3b82f6);
          opacity: 0.8;
          animation: floatFeatureParticle 1s ease-out forwards;
        }

        @keyframes floatFeatureParticle {
          0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          100% { transform: translate(${Math.random() * 20 - 10}px, ${-20 + Math.random() * 10}px) scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
