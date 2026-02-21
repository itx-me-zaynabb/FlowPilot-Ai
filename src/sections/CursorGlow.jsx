import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    // Create multiple glow blobs
    const glows = [];
    const colors = ["#7F5AF0", "#3B82F6", "#0EA5E9"]; // purple, blue, cyan

    for (let i = 0; i < 3; i++) {
      const glow = document.createElement("div");
      glow.className = `fixed w-32 h-32 pointer-events-none z-50 animate-glow-${i}`;
      glow.style.background = colors[i] + "/40";
      glow.style.filter = "blur(80px)";
      glow.style.borderRadius = "50%";
      document.body.appendChild(glow);
      glows.push(glow);
    }

    let mouseX = 0;
    let mouseY = 0;
    let currentX = [0, 0, 0];
    let currentY = [0, 0, 0];

    const move = (e) => {
      mouseX = e.clientX - 64;
      mouseY = e.clientY - 64;
    };

    const animate = () => {
      glows.forEach((glow, i) => {
        const speed = 0.05 + i * 0.02; // trailing effect
        currentX[i] += (mouseX - currentX[i]) * speed;
        currentY[i] += (mouseY - currentY[i]) * speed;
        glow.style.left = currentX[i] + "px";
        glow.style.top = currentY[i] + "px";
        glow.style.opacity = 0.5 + 0.5 * Math.sin(Date.now() / 1000 + i); // pulsating opacity
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      glows.forEach((glow) => document.body.removeChild(glow));
    };
  }, []);

  return (
    <style>{`
      @keyframes glowAnimation0 {
        0%   { transform: scale(1) rotate(0deg); border-radius: 50%; }
        50%  { transform: scale(1.2) rotate(180deg); border-radius: 60% 40% 55% 45%; }
        100% { transform: scale(1) rotate(360deg); border-radius: 50%; }
      }

      @keyframes glowAnimation1 {
        0%   { transform: scale(1) rotate(0deg); border-radius: 50%; }
        50%  { transform: scale(1.1) rotate(200deg); border-radius: 55% 45% 60% 40%; }
        100% { transform: scale(1) rotate(360deg); border-radius: 50%; }
      }

      @keyframes glowAnimation2 {
        0%   { transform: scale(1) rotate(0deg); border-radius: 50%; }
        50%  { transform: scale(1.3) rotate(160deg); border-radius: 50% 60% 40% 55%; }
        100% { transform: scale(1) rotate(360deg); border-radius: 50%; }
      }

      .animate-glow-0 {
        animation: glowAnimation0 5s infinite ease-in-out;
      }
      .animate-glow-1 {
        animation: glowAnimation1 6s infinite ease-in-out;
      }
      .animate-glow-2 {
        animation: glowAnimation2 4.5s infinite ease-in-out;
      }
    `}</style>
  );
}
