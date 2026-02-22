/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let bubbles = [];
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      for (let i = 0; i < 4; i++) {
        bubbles.push({
          x: mouse.x,
          y: mouse.y,
          radius: Math.random() * 6 + 2,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          life: 100,
        });
      }
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble, index) => {
        bubble.x += bubble.dx;
        bubble.y += bubble.dy;
        bubble.life--;

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,255,${bubble.life / 100})`;
        ctx.shadowColor = "#00FFFF";
        ctx.shadowBlur = 20;
        ctx.fill();

        if (bubble.life <= 0) {
          bubbles.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B0F19] text-white px-6">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 -z-30 
        bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 
        bg-[length:200%_200%] animate-[gradientShift_15s_ease_infinite]"
      />

      {/* Premium Mesh Glow Layer */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[200px] rounded-full -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[200px] rounded-full -bottom-40 -right-40 animate-pulse"></div>
      </div>

      {/* Cursor Bubble Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-1 text-sm 
          bg-white/10 backdrop-blur-md border border-white/20 
          rounded-full text-cyan-300"
        >
          🚀 AI Powered Workflow Automation
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold 
          bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 
          text-transparent bg-clip-text"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          FlowPilot AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-300 text-lg md:text-xl"
        >
          Automate workflows. Generate insights. Deploy intelligent systems at
          enterprise scale.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold 
            bg-gradient-to-r from-cyan-500 to-purple-600 
            shadow-lg shadow-cyan-500/40"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-white/30 
            backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
          >
            View Demo
          </motion.button>
        </div>
      </motion.div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
