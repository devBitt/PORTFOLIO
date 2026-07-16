import React, { useEffect, useRef } from 'react';

export function CanvasStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000); // density
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          alpha: Math.random() * 0.8 + 0.2
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid overlay
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      
      for(let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for(let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        // Mix between white and cyan
        const isCyan = Math.random() > 0.8;
        ctx.fillStyle = isCyan ? `rgba(0, 245, 255, ${star.alpha})` : `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] opacity-70"
    />
  );
}
