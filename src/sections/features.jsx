/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "Smart Workflow Engine",
    description:
      "Design, automate and optimize complex processes with AI-driven orchestration.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path
          d="M4 12h16M12 4v16"
          stroke="url(#grad1)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="24" y2="24">
            <stop stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Predictive AI Insights",
    description:
      "Transform raw workflow data into predictive analytics and intelligent recommendations.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" stroke="#a855f7" strokeWidth="2" />
        <path d="M12 8v4l3 3" stroke="#3b82f6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Enable synchronized team workflows with live updates and AI-assisted coordination.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path
          d="M17 21v-2a4 4 0 0 0-3-3.87M7 21v-2a4 4 0 0 1 3-3.87"
          stroke="#8b5cf6"
          strokeWidth="2"
        />
        <circle cx="12" cy="7" r="4" stroke="#3b82f6" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 bg-[#0B0F19] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Powerful AI Capabilities
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          FlowPilot AI enhances productivity with intelligent automation,
          predictive analytics, and collaborative intelligence.
        </p>

        {/* Card Stack */}
        <div className="relative flex justify-center items-center h-[420px]">
          {features.map((feature, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActive(index)}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  y: isActive ? 0 : 30,
                  opacity: isActive ? 1 : 0.5,
                  rotate: isActive ? 0 : index % 2 === 0 ? -5 : 5,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-[320px] p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl -z-10"></div>

                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="bg-white/5 p-4 rounded-2xl">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
