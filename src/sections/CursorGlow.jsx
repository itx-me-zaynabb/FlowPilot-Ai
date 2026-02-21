import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "fixed w-32 h-32 bg-purple-500/40 blur-3xl rounded-full pointer-events-none z-50 animate-glow";
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX - 64 + "px"; // center the glow
      glow.style.top = e.clientY - 64 + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);

  return (
    <style>{`
      @keyframes glowAnimation {
        0%, 100% { transform: scale(1) rotate(0deg) border-radius: 50% 50% 50% 50%; }
        25% { transform: scale(1.2) rotate(45deg); border-radius: 60% 40% 55% 45%; }
        50% { transform: scale(0.9) rotate(90deg); border-radius: 50% 60% 40% 55%; }
        75% { transform: scale(1.1) rotate(135deg); border-radius: 55% 45% 60% 40%; }
      }

      .animate-glow {
        animation: glowAnimation 3s infinite ease-in-out;
      }
    `}</style>
  );
}
