"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Point = {
  id: number;
  x: number;
  y: number;
};

const MAX_POINTS = 10;
const FRAME_INTERVAL = 1000 / 60; // cap updates to roughly 60fps

export function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);
  const [active, setActive] = useState(false);
  const pendingPoint = useRef<Point | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(0);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setActive(true);
      pendingPoint.current = {
        id: event.timeStamp,
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleLeave = () => {
      setActive(false);
      setPoints([]);
      pendingPoint.current = null;
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    const tick = (now: number) => {
      if (pendingPoint.current && now - lastFrameTime.current >= FRAME_INTERVAL) {
        const point = pendingPoint.current;
        pendingPoint.current = null;
        lastFrameTime.current = now;
        setPoints((previous) => {
          const next = [...previous, point];
          return next.slice(-MAX_POINTS);
        });
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const lead = points.at(-1);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 mix-blend-screen">
      {lead ? (
        <motion.span
          key="cursor-core"
          className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0aff9d] shadow-[0_0_18px_rgba(5,255,177,0.6)]"
          animate={{ x: lead.x, y: lead.y, scale: active ? 0.95 : 0.5, opacity: active ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
        />
      ) : null}
      <AnimatePresence>
        {points.map((point, index) => {
          const progress = index / points.length;
          return (
            <motion.span
              key={point.id}
              className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(58,255,222,0.4)] blur-[2px]"
              initial={{ opacity: 0.5, scale: 0.5, x: point.x, y: point.y }}
              animate={{
                x: point.x,
                y: point.y,
                opacity: 0.4 - progress * 0.3,
                scale: 0.35 + progress * 0.7,
              }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default CursorTrail;
