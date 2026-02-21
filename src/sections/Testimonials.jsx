/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Alice W.",
    role: "Product Manager",
    text: "FlowPilot AI saved us 10+ hours a week!",
  },
  {
    name: "John D.",
    role: "Team Lead",
    text: "The AI insights helped us grow revenue fast.",
  },
  {
    name: "Sara K.",
    role: "Entrepreneur",
    text: "Love how easy and powerful FlowPilot AI is.",
  },
];

export default function Testimonials() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const particles = [];

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "testimonial-particle";
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
      if (e.target.closest(".testimonial-card")) {
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

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x inside card
    const y = e.clientY - rect.top; // y inside card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * -5;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#0B0F19] px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
        What Users Say
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.3,
              type: "spring",
              stiffness: 100,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="testimonial-card w-80 p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg flex flex-col items-center text-center cursor-pointer transition-transform duration-300"
          >
            <p className="text-gray-300 mb-4">"{r.text}"</p>
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              {r.name}
            </span>
            <span className="text-gray-400 text-sm">{r.role}</span>
          </motion.div>
        ))}
      </div>

      <style>{`
        .testimonial-particle {
          position: fixed;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          pointer-events: none;
          background: linear-gradient(45deg, #7f5af0, #3b82f6);
          opacity: 0.8;
          animation: floatParticle 1s ease-out forwards;
        }

        @keyframes floatParticle {
          0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          100% { transform: translate(${Math.random() * 20 - 10}px, ${-20 + Math.random() * 10}px) scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
