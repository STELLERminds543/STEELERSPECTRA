import React, { useEffect, useRef } from 'react';

export const KineticCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CELL_SIZE = 50;
    const INFLUENCE_RADIUS = 250;
    const MAX_WARP = 22;
    const DOT_SPACING = 28;
    const LERP_SPEED = 0.08;

    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: -9999 };
    const targetMouse = { x: -9999, y: -9999 };
    const ripples: { x: number; y: number; radius: number; opacity: number; born: number }[] = [];
    let rafId: number;

    function resize() {
      if (!canvas) return;
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || 600;
      canvas.width = width;
      canvas.height = height;
    }

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        targetMouse.x = e.clientX - rect.left;
        targetMouse.y = e.clientY - rect.top;
      } else {
        targetMouse.x = -9999;
        targetMouse.y = -9999;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, select, textarea, iframe')) return;

      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        opacity: 1,
        born: performance.now(),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('click', handleClick);

    function lerpN(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function getWarpedPoint(gx: number, gy: number, col: number, row: number, cols: number, rows: number) {
      const edgeMargin = 1.5;
      const colPin = Math.min(col / edgeMargin, (cols - 1 - col) / edgeMargin, 1);
      const rowPin = Math.min(row / edgeMargin, (rows - 1 - row) / edgeMargin, 1);
      const pinFactor = colPin * colPin * rowPin * rowPin;

      const dx = gx - mouse.x;
      const dy = gy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const proximity = Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pinFactor;

      let rx = 0;
      let ry = 0;
      for (let i = 0; i < ripples.length; i++) {
        const r = ripples[i];
        const rdx = gx - r.x;
        const rdy = gy - r.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        const waveWidth = 55;
        const diff = rdist - r.radius;
        if (Math.abs(diff) < waveWidth) {
          const strength = (1 - Math.abs(diff) / waveWidth) * r.opacity * 18 * pinFactor;
          const angle = Math.atan2(rdy, rdx);
          const sign = diff < 0 ? -1 : 1;
          rx += Math.cos(angle) * strength * sign * -1;
          ry += Math.sin(angle) * strength * sign * -1;
        }
      }

      if (dist < INFLUENCE_RADIUS && dist > 0 && pinFactor > 0) {
        const t = dist / INFLUENCE_RADIUS;
        const eased = t < 0.01 ? 0 : (1 - t) * (1 - t) * Math.min(1, dist / 60);
        const warpAmt = eased * MAX_WARP * pinFactor;
        const angle = Math.atan2(dy, dx);
        return {
          pt: {
            x: gx - Math.cos(angle) * warpAmt + rx,
            y: gy - Math.sin(angle) * warpAmt + ry,
          },
          proximity,
        };
      }

      return { pt: { x: gx + rx, y: gy + ry }, proximity };
    }

    function draw(now: number) {
      if (!ctx || !width || !height) return;

      ctx.clearRect(0, 0, width, height);

      // Dot field background
      ctx.fillStyle = 'rgba(220,163,62,0.04)';
      for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
        for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
          ctx.beginPath();
          ctx.arc(x, y, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const age = (now - r.born) / 1000;
        r.radius = Math.max(0, age * 380);
        r.opacity = Math.max(0, 1 - age * 1.3);
        if (r.opacity <= 0) ripples.splice(i, 1);
      }

      const cols = Math.max(2, Math.ceil(width / CELL_SIZE)) + 1;
      const rows = Math.max(2, Math.ceil(height / CELL_SIZE)) + 1;
      const cellW = width / (cols - 1);
      const cellH = height / (rows - 1);

      const pts: { x: number; y: number }[][] = [];
      const prox: number[][] = [];

      for (let row = 0; row < rows; row++) {
        pts[row] = [];
        prox[row] = [];
        for (let col = 0; col < cols; col++) {
          const { pt, proximity } = getWarpedPoint(
            col * cellW,
            row * cellH,
            col,
            row,
            cols,
            rows
          );
          pts[row][col] = pt;
          prox[row][col] = proximity;
        }
      }

      const drawSeg = (
        p1: { x: number; y: number },
        p2: { x: number; y: number },
        pr1: number,
        pr2: number
      ) => {
        const avg = (pr1 + pr2) / 2;
        const t = avg * avg * (3 - 2 * avg);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(220,163,62,${(0.08 + t * 0.7).toFixed(3)})`;
        ctx.lineWidth = 0.8 + t * 0.8;
        ctx.stroke();
      };

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 1; col++) {
          drawSeg(pts[row][col], pts[row][col + 1], prox[row][col], prox[row][col + 1]);
        }
      }

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 1; row++) {
          drawSeg(pts[row][col], pts[row + 1][col], prox[row][col], prox[row + 1][col]);
        }
      }

      // Nodes
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const p = pts[row][col];
          const pr = prox[row][col];
          const t = pr * pr * (3 - 2 * pr);
          const r = 1.4 + t * 2.2;

          if (t > 0.25) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, r + 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,99,38,${(t * 0.35).toFixed(3)})`;
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = t > 0.3 ? '#ff6326' : 'rgba(220,163,62,0.2)';
          ctx.fill();
        }
      }

      // Ripples
      for (let i = 0; i < ripples.length; i++) {
        const r = ripples[i];
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(0, r.radius), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,99,38,${(r.opacity * 0.35).toFixed(3)})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }
    }

    function animate(now: number) {
      mouse.x = lerpN(mouse.x, targetMouse.x, LERP_SPEED);
      mouse.y = lerpN(mouse.y, targetMouse.y, LERP_SPEED);

      draw(now);
      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('click', handleClick);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
