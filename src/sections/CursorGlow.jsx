import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    // Create main cursor glow
    const mainGlow = document.createElement("div");
    mainGlow.className = "cursor-glow";
    document.body.appendChild(mainGlow);

    // Create trailing glow
    const trailGlow = document.createElement("div");
    trailGlow.className = "cursor-glow-trail";
    document.body.appendChild(trailGlow);

    let mouseX = 0,
      mouseY = 0;
    let trailX = 0,
      trailY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mainGlow.style.left = mouseX + "px";
      mainGlow.style.top = mouseY + "px";
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      trailGlow.style.left = trailX + "px";
      trailGlow.style.top = trailY + "px";
      requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", moveCursor);
    animateTrail();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(mainGlow);
      document.body.removeChild(trailGlow);
    };
  }, []);

  return null; // No JSX needed
}
