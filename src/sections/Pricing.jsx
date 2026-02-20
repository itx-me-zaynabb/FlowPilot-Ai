/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    description: "Perfect for individuals",
    features: ["Access to core features", "5 AI workflows", "Email support"],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Advanced AI for teams",
    features: ["Unlimited workflows", "Team collaboration", "Priority support"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for enterprises",
    features: [
      "Custom workflows",
      "Dedicated account manager",
      "Premium support",
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 bg-[#0B0F19] text-white overflow-hidden">
      {/* Gradient floating glows */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/30 blur-[150px] rounded-full top-[-150px] left-[-150px] animate-pulse-slow" />
      <div className="absolute w-[350px] h-[350px] bg-blue-600/30 blur-[150px] rounded-full bottom-[-150px] right-[-150px] animate-pulse-slow" />

      <h2 className="text-4xl font-bold text-center mb-16 relative z-10">
        Pricing Plans
      </h2>

      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              type: "spring",
              stiffness: 120,
            }}
            className={`w-80 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center
              ${
                plan.isPopular
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none scale-105"
                  : "bg-white/10 border border-white/20 text-gray-200 hover:scale-105 hover:rotate-1 transition-transform duration-500"
              }`}
          >
            {plan.isPopular && (
              <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full mb-4 font-semibold animate-bounce">
                Most Popular
              </span>
            )}

            <motion.h3
              className="text-2xl font-semibold mb-2"
              whileHover={{ scale: 1.05 }}
            >
              {plan.name}
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {plan.description}
            </motion.p>

            <motion.span
              className="text-4xl font-bold mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {plan.price}
            </motion.span>

            <ul className="mb-6 space-y-2 text-gray-300">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <span>✅</span>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.button
              className={`px-6 py-3 rounded-full font-semibold transition
                ${
                  plan.isPopular
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {plan.isPopular ? "Choose Plan" : "Get Started"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
