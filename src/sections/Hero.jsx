/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white px-6">
      <div className="max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-6 py-2 text-sm border border-white/20 rounded-full text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
        >
          🚀 AI Powered Workflow Automation
        </motion.div>

        {/* Heading with continuous ripple */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 flex justify-center"
        >
          <span className="relative cursor-default">
            {/* Gradient + Ripple Text */}
            <span
              className="
                bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400
                bg-[length:200%_200%]
                text-transparent bg-clip-text
                animate-gradientFlow animate-rippleText
              "
            >
              FlowPilot AI
            </span>

            {/* Glow Layer */}
            <span
              className="
                absolute inset-0
                bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500
                blur-xl opacity-40
                transition duration-500
                -z-10
              "
            ></span>
          </span>
        </motion.h1>

        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 mx-auto mb-8 rounded-full"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Automate complex workflows, extract real-time insights, and scale
          productivity with next-generation AI systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 0px 30px rgba(168,85,247,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500
              bg-[length:200%_200%] hover:animate-gradientFlow transition-all duration-300
            "
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "#a855f7",
              color: "#a855f7",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-white/30 text-gray-300 transition-all duration-300"
          >
            View Demo
          </motion.button>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes rippleText {
          0% { filter: url(#ripple1); }
          50% { filter: url(#ripple2); }
          100% { filter: url(#ripple1); }
        }

        .animate-gradientFlow {
          animation: gradientFlow 5s ease infinite;
        }

        .animate-rippleText {
          animation: rippleText 4s ease-in-out infinite;
        }
      `}</style>

      {/* SVG Filters for continuous ripple */}
      <svg width="0" height="0">
        <filter id="ripple1">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="2"
            result="turb"
          />
          <feDisplacementMap
            in2="turb"
            in="SourceGraphic"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="ripple2">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.03"
            numOctaves="2"
            result="turb"
          />
          <feDisplacementMap
            in2="turb"
            in="SourceGraphic"
            scale="15"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </section>
  );
}
