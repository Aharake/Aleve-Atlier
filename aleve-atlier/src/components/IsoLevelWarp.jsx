import React, { useRef, useEffect } from "react";
import './IsoLevelWarp.css';

const IsoLevelWarp = ({
  className = "",
  color = "14, 165, 233", // RGB for sky-500
  speed = 1,
  density = 40,
  ...props
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let animationFrameId;

    // Grid Configuration
    const gridGap = density;
    let rows = Math.ceil(height / gridGap) + 5;
    let cols = Math.ceil(width / gridGap) + 5;
    
    // Mouse Interaction
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    
    // Wave Physics
    let time = 0;

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      if (width > 0 && height > 0) {
        canvas.width = width;
        canvas.height = height;
        rows = Math.ceil(height / gridGap) + 5;
        cols = Math.ceil(width / gridGap) + 5;
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    // Math Helper: Smoothstep
    const smoothMix = (a, b, t) => {
      return a + (b - a) * t;
    };

    const draw = () => {
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // Clear Screen
      ctx.clearRect(0, 0, width, height);
      
      // Smooth mouse movement
      mouse.x = smoothMix(mouse.x, mouse.targetX, 0.1);
      mouse.y = smoothMix(mouse.y, mouse.targetY, 0.1);

      time += 0.01 * speed;

      ctx.beginPath();
      
      // Calculate Grid Points
      for (let y = 0; y <= rows; y++) {
        let isFirst = true;

        for (let x = 0; x <= cols; x++) {
          const baseX = (x * gridGap) - (gridGap * 2);
          const baseY = (y * gridGap) - (gridGap * 2);

          // DISTORTION LOGIC
          // 1. Ambient Wave (The "Breathing")
          const wave = Math.sin(x * 0.2 + time) * Math.cos(y * 0.2 + time) * 15;
          
          // 2. Mouse Repulsion (The "Interaction")
          const dx = baseX - mouse.x;
          const dy = baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 300;
          
          // Calculate force: 0 at edge, 1 at center
          const force = Math.max(0, (maxDist - dist) / maxDist);
          // Apply a "Z-push" effect by moving points UP (negative Y) based on proximity
          const interactionY = -(force * force) * 80; // Non-linear falloff

          // Final Coordinates
          const finalX = baseX;
          const finalY = baseY + wave + interactionY;

          // Draw the line
          if (isFirst) {
            ctx.moveTo(finalX, finalY);
            isFirst = false;
          } else {
            ctx.lineTo(finalX, finalY);
          }
        }
      }

      // STYLING
      // Gradient Stroke - matching background but keeping wave color
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `rgba(${color}, 0)`); // Fade top-left
      gradient.addColorStop(0.5, `rgba(${color}, 0.4)`); // Subtle center
      gradient.addColorStop(1, `rgba(${color}, 0)`); // Fade bottom-right

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    // Initialize after a small delay to ensure container has dimensions
    const initTimeout = setTimeout(() => {
      resize();
      if (width > 0 && height > 0) {
        window.addEventListener("resize", resize);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
        draw();
      }
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("resize", resize);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [color, speed, density]);

  return (
    <div
      ref={containerRef}
      className={`iso-level-warp ${className}`}
      {...props}
    >
      <canvas ref={canvasRef} className="iso-canvas" />
      
      {/* Optional: Vignette overlay for depth */}
      <div className="iso-vignette" />
    </div>
  );
};

export default IsoLevelWarp;
