import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor-glow";
    document.body.appendChild(cursor);

    // Optional trailing blobs
    const trail = [];
    const colors = ["#7F5AF0", "#3B82F6", "#0EA5E9"];
    for (let i = 0; i < 2; i++) {
      const t = document.createElement("div");
      t.className = "cursor-glow-trail";
      t.style.background = `radial-gradient(circle, ${colors[i]}, ${colors[i + 1]})`;
      document.body.appendChild(t);
      trail.push(t);
    }

    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;
    let trailX = [0, 0],
      trailY = [0, 0];

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Main cursor
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;
      cursor.style.transform = `translate(${currentX - 40}px, ${currentY - 40}px)`;

      // Trail
      trail.forEach((t, i) => {
        const speed = 0.1 + i * 0.05;
        trailX[i] += (mouseX - trailX[i]) * speed;
        trailY[i] += (mouseY - trailY[i]) * speed;
        t.style.transform = `translate(${trailX[i] - 30}px, ${trailY[i] - 30}px)`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
      trail.forEach((t) => document.body.removeChild(t));
    };
  }, []);

  return null;
}
