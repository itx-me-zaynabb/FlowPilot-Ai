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
    <section className="py-20 bg-[#0B0F19] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`w-80 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center
              ${
                plan.isPopular
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none scale-105"
                  : "bg-white/10 border border-white/20 text-gray-200 hover:scale-105 transition-transform"
              }
            `}
          >
            {plan.isPopular && (
              <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full mb-4 font-semibold">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-300 mb-4">{plan.description}</p>
            <span className="text-4xl font-bold mb-6">{plan.price}</span>

            <ul className="mb-6 space-y-2 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>✅</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`px-6 py-3 rounded-full font-semibold transition
                ${
                  plan.isPopular
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }
              `}
            >
              {plan.isPopular ? "Choose Plan" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
