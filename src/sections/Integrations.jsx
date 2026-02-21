/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const tools = ["Slack", "Notion", "Google Drive", "Trello", "Asana"];

export default function Integrations() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const particles = [];

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "particle";
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
      if (e.target.closest(".integration-card")) {
        for (let i = 0; i < 3; i++) {
          createParticle(
            e.clientX + Math.random() * 20 - 10,
            e.clientY + Math.random() * 20 - 10,
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
      className="py-24 bg-[#0B0F19] text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        Integrates With Your Favorite Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="integration-card relative p-6 bg-white/10 rounded-2xl backdrop-blur-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
          >
            <span className="text-xl sm:text-2xl md:text-2xl font-semibold text-white">
              {tool}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        .particle {
          position: fixed;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          pointer-events: none;
          background: linear-gradient(45deg, #7f5af0, #3b82f6);
          opacity: 0.8;
          animation: floatParticle 1s ease-out forwards;
        }

        @keyframes floatParticle {
          0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          100% { transform: translate(${Math.random() * 30 - 15}px, ${-30 + Math.random() * 15}px) scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
