import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "fixed w-32 h-32 bg-purple-500/40 blur-3xl pointer-events-none z-50 animate-glow";
    document.body.appendChild(glow);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const move = (e) => {
      mouseX = e.clientX - 64; // center glow
      mouseY = e.clientY - 64;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      glow.style.left = currentX + "px";
      glow.style.top = currentY + "px";
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);

  return (
    <style>{`
      @keyframes glowAnimation {
        0%   { transform: scale(1) rotate(0deg); border-radius: 50% 50% 50% 50%; }
        20%  { transform: scale(1.1) rotate(20deg); border-radius: 60% 40% 55% 45%; }
        40%  { transform: scale(0.9) rotate(60deg); border-radius: 55% 65% 45% 50%; }
        60%  { transform: scale(1.2) rotate(120deg); border-radius: 50% 60% 40% 55%; }
        80%  { transform: scale(1) rotate(200deg); border-radius: 55% 45% 60% 40%; }
        100% { transform: scale(1) rotate(360deg); border-radius: 50% 50% 50% 50%; }
      }

      .animate-glow {
        animation: glowAnimation 4s infinite ease-in-out;
      }
    `}</style>
  );
}
