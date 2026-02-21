import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    description: "Perfect for individuals",
    features: ["Core Features", "5 AI Workflows", "Email Support"],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Advanced AI for teams",
    features: ["Unlimited Workflows", "Team Collaboration", "Priority Support"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions",
    features: ["Custom Workflows", "Dedicated Manager", "Premium Support"],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 bg-[#0B0F19] text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16">Pricing Plans</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-3xl backdrop-blur-xl border
              ${
                plan.isPopular
                  ? "bg-gradient-to-br from-blue-600/40 to-purple-600/40 border-purple-500"
                  : "bg-white/5 border-white/10"
              }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm px-4 py-1 rounded-full font-semibold animate-pulse">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-8 text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✔ {feature}</li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-full font-semibold transition-all
              ${
                plan.isPopular
                  ? "bg-white text-black hover:scale-105"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
