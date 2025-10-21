"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const CHARSET = "01<>[]{}/*-=+▒▓░◊∆ΣΩΨλ";
const COLORS = ["#0aff9d", "#3EF8FF", "#45f4b0"];
const BASE_FILL = "rgba(0, 10, 14, 0.16)";
const FONT_SIZE = 22;
const HIGHLIGHT_RADIUS = 260;

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const columnsRef = useRef<number>(0);
  const dropsRef = useRef<number[]>([]);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150, mass: 0.4 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150, mass: 0.4 });

  const translateX = useTransform(smoothX, [0, 1], [-45, 45]);
  const translateY = useTransform(smoothY, [0, 1], [-30, 30]);
  const glareOpacity = useTransform(smoothX, [0, 1], [0.25, 0.55]);

  const { scrollYProgress } = useScroll();
  const dimOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0.28, 0.65]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

  let width = window.innerWidth;
  let height = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const initialiseDrops = () => {
      columnsRef.current = Math.floor(width / FONT_SIZE) + 1;
      dropsRef.current = new Array(columnsRef.current).fill(0);
    };

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.resetTransform();
      context.scale(dpr, dpr);
      initialiseDrops();
    };

    setCanvasSize();

    const draw = () => {
  context.fillStyle = BASE_FILL;
      context.fillRect(0, 0, width, height);
      context.font = `${FONT_SIZE}px "JetBrains Mono", "IBM Plex Mono", monospace`;
      context.textBaseline = "top";

      const drops = dropsRef.current;
      const columns = columnsRef.current;
      const pointerX = pointerRef.current.x * width;
      const pointerY = pointerRef.current.y * height;
      const radius = HIGHLIGHT_RADIUS;

      for (let column = 0; column < columns; column += 1) {
        const x = column * FONT_SIZE;
        const y = drops[column] * FONT_SIZE;
        const character = CHARSET[Math.floor(Math.random() * CHARSET.length)];
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];

        const dx = x - pointerX;
        const dy = y - pointerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / radius);
        const softenedInfluence = influence ** 2.4;
  const ambientSpark = Math.random() < 0.02 ? 0.1 : 0;
  const opacity = Math.min(0.85, softenedInfluence + ambientSpark);

        if (opacity < 0.08) {
          drops[column] += 1;
          if (y > height && Math.random() > 0.975) {
            drops[column] = 0;
          }
          continue;
        }

        context.save();
        context.globalAlpha = opacity;
  context.shadowBlur = 6 + softenedInfluence * 14;
        context.shadowColor = color;
        context.fillStyle = color;
        context.fillText(character, x, y);
        context.restore();

        if (y > height && Math.random() > 0.975) {
          drops[column] = 0;
        } else {
          drops[column] += 1;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      setCanvasSize();
    };

    const handlePointer = (event: PointerEvent) => {
      const normalizedX = event.clientX / width;
      const normalizedY = event.clientY / height;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
      pointerRef.current = { x: normalizedX, y: normalizedY };
    };

    const handlePointerLeave = () => {
      mouseX.set(0.5);
      mouseY.set(0.5);
      pointerRef.current = { x: 0.5, y: 0.5 };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-70" />
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,157,0.35)_0%,_transparent_45%)] mix-blend-screen"
        style={{ translateX, translateY, opacity: glareOpacity }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80"
        style={{ opacity: dimOpacity }}
      />
    </div>
  );
}

export default MatrixBackground;
