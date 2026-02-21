import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-300 to-blue-200 animate-textGradient"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Ready to Boost Your Productivity?
      </motion.h2>
      <motion.button
        className="px-8 py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:shadow-2xl transition-transform transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Free Trial
      </motion.button>

      {/* Optional: subtle animated underline or glow */}
      <style>{`
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-textGradient {
          background-size: 200% 200%;
          animation: textGradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
