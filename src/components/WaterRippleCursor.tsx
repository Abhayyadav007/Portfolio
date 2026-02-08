import { useEffect, useRef, useCallback } from 'react';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

export function WaterRippleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });
  const animationRef = useRef<number | null>(null);
  const lastMoveTime = useRef(0);

  const createRipple = useCallback((x: number, y: number, isClick = false) => {
    const ripple: Ripple = {
      x,
      y,
      radius: 0,
      maxRadius: isClick ? 120 : 60,
      opacity: isClick ? 0.6 : 0.3,
      speed: isClick ? 3 : 2,
    };
    ripplesRef.current.push(ripple);
  }, []);

  useEffect(() => {
    // Check if device has coarse pointer (touch) - disable on mobile
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (hasCoarsePointer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Create ripple on movement (throttled)
      if (now - lastMoveTime.current > 50) {
        const dx = mouseRef.current.x - mouseRef.current.lastX;
        const dy = mouseRef.current.y - mouseRef.current.lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 10) {
          createRipple(e.clientX, e.clientY, false);
          mouseRef.current.lastX = e.clientX;
          mouseRef.current.lastY = e.clientY;
        }
        lastMoveTime.current = now;
      }
    };

    // Handle click
    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY, true);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += ripple.speed;
        ripple.opacity -= 0.008;

        if (ripple.opacity <= 0) {
          return false;
        }

        // Draw ripple ring
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79, 109, 255, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw inner glow
        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          0,
          ripple.x,
          ripple.y,
          ripple.radius
        );
        gradient.addColorStop(0, `rgba(79, 109, 255, 0)`);
        gradient.addColorStop(0.8, `rgba(79, 109, 255, ${ripple.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(79, 109, 255, 0)`);

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw secondary ring for click ripples
        if (ripple.maxRadius > 80 && ripple.radius > 20) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(123, 143, 255, ${ripple.opacity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createRipple]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9990]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
