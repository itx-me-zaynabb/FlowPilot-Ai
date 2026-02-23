/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

export default function Heros() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pixelRatio = window.devicePixelRatio || 1;

    // Renderer
    const renderer = new Renderer({
      dpr: pixelRatio,
      depth: false,
      alpha: true,
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    // Camera
    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, 35);

    // Resize
    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize);
    resize();

    // Mouse move
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };
    container.addEventListener("mousemove", handleMouseMove);

    // Particles data
    const particleCount = 150;
    const particleSpread = 8;
    const particleBaseSize = 50;
    const particleColors = ["#22D3EE", "#6366F1", "#0EA5E9"];

    const hexToRgb = (hex) => {
      hex = hex.replace(/^#/, "");
      if (hex.length === 3)
        hex = hex
          .split("")
          .map((c) => c + c)
          .join("");
      const int = parseInt(hex, 16);
      return [
        ((int >> 16) & 255) / 255,
        ((int >> 8) & 255) / 255,
        (int & 255) / 255,
      ];
    };

    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount * 4);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);

      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4,
      );

      const col = hexToRgb(
        particleColors[Math.floor(Math.random() * particleColors.length)],
      );
      colors.set(col, i * 3);
    }

    // GLSL Shaders
    const vertex = /* glsl */ `
      attribute vec3 position;
      attribute vec4 random;
      attribute vec3 color;

      uniform mat4 modelMatrix;
      uniform mat4 viewMatrix;
      uniform mat4 projectionMatrix;
      uniform float uTime;
      uniform float uSpread;
      uniform float uBaseSize;

      varying vec4 vRandom;
      varying vec3 vColor;

      void main() {
        vRandom = random;
        vColor = color;

        vec3 pos = position * uSpread;
        pos.z *= 10.0;

        vec4 mPos = modelMatrix * vec4(pos, 1.0);
        float t = uTime;
        mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
        mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
        mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);

        vec4 mvPos = viewMatrix * mPos;
        gl_PointSize = uBaseSize / length(mvPos.xyz);

        gl_Position = projectionMatrix * mvPos;
      }
    `;

    const fragment = /* glsl */ `
      precision highp float;
      varying vec4 vRandom;
      varying vec3 vColor;

      void main() {
        vec2 uv = gl_PointCoord.xy;
        float d = length(uv - vec2(0.5));
        if(d > 0.5) discard;
        gl_FragColor = vec4(vColor, 1.0);
      }
    `;

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize * pixelRatio },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let lastTime = performance.now();
    let elapsed = 0;
    let animationFrameId;

    const update = (t) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * 0.1;
      program.uniforms.uTime.value = elapsed * 0.001;

      // particles follow mouse slightly
      particles.position.x = -mouseRef.current.x * 1.2;
      particles.position.y = -mouseRef.current.y * 1.2;

      particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
      particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
      particles.rotation.z += 0.01;

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B0F19] text-white px-6">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-30
        bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900
        bg-[length:200%_200%] animate-[gradientShift_12s_ease_infinite]"
      />

      {/* Particles Container */}
      <div ref={containerRef} className="absolute inset-0 -z-25" />

      {/* Glow Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full -top-40 -left-40 animate-pulse -z-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full -bottom-40 -right-40 animate-pulse -z-20"></div>

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
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-cyan-300"
        >
          🚀 AI Powered Workflow Automation
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          FlowPilot AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-gray-300 text-lg md:text-xl"
        >
          Automate complex workflows, extract real-time insights, and scale
          productivity with next-generation AI systems.
        </motion.p>
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/30"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
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
