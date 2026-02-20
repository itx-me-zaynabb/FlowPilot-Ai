import { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="py-24 bg-[#0B0F19] text-white max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="mb-4 border-b border-gray-600"
        >
          <button
            className="w-full text-left py-4 font-semibold flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {faq.q}
            <span>{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && <p className="text-gray-300 pb-4">{faq.a}</p>}
        </motion.div>
      ))}
    </section>
  );
}
