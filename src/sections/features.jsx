/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Brain, BarChart3, Layers, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "AI Workflow Engine",
    description:
      "Build intelligent automation pipelines that adapt dynamically to operational conditions.",
    icon: Brain,
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    title: "Predictive Analytics",
    description:
      "Transform real-time data into forecasting intelligence with machine-driven insights.",
    icon: BarChart3,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Modular Architecture",
    description:
      "Composable system design allowing rapid integration and scalable feature deployment.",
    icon: Layers,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Enterprise Security",
    description:
      "Advanced encryption and infrastructure-level compliance built for scale.",
    icon: ShieldCheck,
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 bg-[#0B0F19] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full -top-32 -left-32"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[140px] rounded-full -bottom-32 -right-32"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Intelligent Platform Capabilities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A unified automation ecosystem engineered for scalability,
            intelligence, and enterprise performance.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl group"
              >
                {/* Gradient Glow Layer */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition duration-500 -z-10`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className={`h-1 w-20 mt-6 rounded-full bg-gradient-to-r ${feature.gradient}`}
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
