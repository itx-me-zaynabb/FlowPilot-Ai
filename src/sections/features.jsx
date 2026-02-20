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
    <section className="relative py-20 bg-[#0B0F19] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-72 p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
