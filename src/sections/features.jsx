/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

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
  return (
    <section className="relative py-24 bg-[#0B0F19] text-white overflow-hidden">
      {/* Floating Gradient Glows (Hero style) */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/30 blur-[150px] rounded-full top-[-150px] left-[-150px] animate-pulse-slow" />
      <div className="absolute w-[350px] h-[350px] bg-blue-600/30 blur-[150px] rounded-full bottom-[-150px] right-[-150px] animate-pulse-slow" />

      <h2 className="text-4xl font-bold text-center mb-16 z-10 relative">
        Features
      </h2>

      <div className="flex flex-wrap justify-center gap-8 relative z-10">
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
            className="w-72 p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg flex flex-col items-center text-center hover:scale-105 hover:rotate-1 transition-transform duration-500"
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
              className="text-2xl font-semibold mb-2"
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
    </section>
  );
}
