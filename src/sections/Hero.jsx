/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="relative h-screen bg-[#0B0F19] flex items-center justify-center text-center overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 60 },
              color: { value: ["#ffffff", "#4F46E5"] },
              move: { enable: true, speed: 1 },
              size: { value: 2 },
              opacity: { value: 0.5 },
            },
          }}
          className="absolute inset-0 z-0"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white"
      >
        <h1 className="text-6xl font-bold mb-6">FlowPilot AI</h1>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Automate workflows. Optimize performance. Accelerate growth.
        </p>

        <button className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
