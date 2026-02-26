import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white rounded-3xl mx-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Subscribe to Our Newsletter
      </motion.h2>
      <motion.p
        className="mb-8 text-gray-200 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Get updates on AI workflows, productivity tips, and exclusive features
        directly in your inbox.
      </motion.p>
      <motion.form
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-full w-full sm:w-auto flex-1 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-black"
        />
        <motion.button
          type="submit"
          className="px-6 py-3 bg-white text-purple-700 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </motion.form>
    </section>
  );
}
