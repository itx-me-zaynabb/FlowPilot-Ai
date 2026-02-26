/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "AI Workflow Engine",
    description:
      "Build adaptive automation pipelines with intelligent branching logic and self-optimizing execution layers.",
    gradient: "from-purple-600 to-indigo-600",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path
          d="M4 12h16M12 4v16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Predictive Intelligence",
    description:
      "Transform workflow data into forward-looking insights using real-time AI modeling and forecasting systems.",
    gradient: "from-blue-500 to-cyan-500",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" />
        <path d="M12 8v4l3 3" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Live Team Sync",
    description:
      "Enable synchronized collaboration with shared automation layers and AI-assisted task coordination.",
    gradient: "from-indigo-500 to-purple-500",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" />
        <path d="M5 21c0-4 3-6 7-6s7 2 7 6" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Enterprise Scalability",
    description:
      "Cloud-native infrastructure with secure architecture and horizontal scalability for high-growth systems.",
    gradient: "from-cyan-500 to-blue-600",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M4 10h16M10 4v16" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 bg-[#0B0F19] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[180px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Intelligent Platform Architecture
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-24"
        >
          A unified automation ecosystem powered by AI, designed for
          performance, scalability, and intelligent collaboration.
        </motion.p>

        {/* Stack Container */}
        <div className="relative flex justify-center items-center h-[520px]">
          {features.map((feature, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActive(index)}
                animate={{
                  scale: isActive ? 1 : 0.92,
                  y: isActive ? 0 : 60,
                  rotate: isActive ? 0 : index % 2 === 0 ? -8 : 8,
                  opacity: isActive ? 1 : 0.6,
                  zIndex: isActive ? 30 : 10 - index,
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-[380px] h-[460px] p-10 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl cursor-pointer flex flex-col justify-between"
              >
                {/* Gradient Glow Background */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-25 blur-2xl -z-10`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                >
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mt-10 mb-6">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`h-1 w-20 rounded-full bg-gradient-to-r ${feature.gradient}`}
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
