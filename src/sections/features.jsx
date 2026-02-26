/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Workflow Automation",
    description:
      "Design and deploy complex automation pipelines with adaptive AI orchestration.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Predictive Intelligence",
    description:
      "Leverage machine learning to forecast outcomes and optimize decisions.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Monitor live workflow performance with dynamic dashboards and insights.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Secure Cloud Architecture",
    description:
      "Enterprise-grade encryption and scalable infrastructure built for growth.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI-Powered Collaboration",
    description:
      "Enhance team productivity with synchronized AI-assisted workflows.",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    title: "Seamless API Integrations",
    description:
      "Connect third-party tools and services effortlessly with modular APIs.",
    gradient: "from-indigo-600 to-cyan-500",
  },
];

export default function Features() {
  return (
    <section className="relative py-28 bg-[#0B0F19] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full -bottom-40 -right-40"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Advanced AI Capabilities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-20"
        >
          FlowPilot AI empowers modern teams with automation, intelligence, and
          real-time collaboration at enterprise scale.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.05,
              }}
              className="relative group p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl transition-all duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Border Glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition duration-500 -z-10`}
              ></div>

              {/* Icon Circle */}
              <div
                className={`w-14 h-14 mb-6 mx-auto rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}
              >
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>

              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
