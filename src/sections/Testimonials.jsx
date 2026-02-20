import { motion } from "framer-motion";

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
  return (
    <section className="relative py-24 bg-[#0B0F19]">
      <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
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
            className="w-80 p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <p className="text-gray-300 mb-4">"{r.text}"</p>
            <span className="font-semibold">{r.name}</span>
            <span className="text-gray-400 text-sm">{r.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
