import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is FlowPilot AI easy to use?",
    a: "Yes! It's designed for beginners and teams.",
  },
  {
    q: "Can I customize workflows?",
    a: "Absolutely, all plans support custom workflows.",
  },
  {
    q: "Do you offer team plans?",
    a: "Yes, Pro and Enterprise plans are for teams.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#0B0F19] text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
              openIndex === i
                ? "bg-gradient-to-r from-purple-700/30 via-blue-600/30 to-purple-500/30"
                : "bg-[#121826]"
            }`}
          >
            <button
              className="w-full text-left py-4 px-5 font-semibold flex justify-between items-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-colors duration-300 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{faq.q}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-5 pb-4 text-gray-300"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
