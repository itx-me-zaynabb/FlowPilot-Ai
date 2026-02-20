import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-black text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Ready to Boost Your Productivity?
      </motion.h2>
      <motion.button
        className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-gray-100 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Free Trial
      </motion.button>
    </section>
  );
}
