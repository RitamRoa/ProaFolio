"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "[BOOT] Establishing neural uplink...",
  "[SYNC] Loading personal archive...",
  "[READY] Enter mainframe",
];

export function BootSequence() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-50 grid place-items-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="w-[min(540px,88vw)] space-y-2 rounded-lg border border-[#0aff9d]/40 bg-black/70 p-6 font-mono text-sm text-[#9cffdd] shadow-[0_0_32px_rgba(0,255,157,0.35)]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.35, delayChildren: 0.2 },
              },
            }}
          >
            {LINES.map((line, index) => (
              <motion.p
                key={line}
                variants={{
                  hidden: { opacity: 0, filter: "blur(6px)" },
                  visible: { opacity: 1, filter: "blur(0px)" },
                }}
                className="tracking-tight"
              >
                <span className="text-[#45f4b0]">&gt;</span> {line}
                <motion.span
                  aria-hidden
                  className="ml-2 inline-block h-3 w-2 animate-pulse bg-[#3EF8FF]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === LINES.length - 1 ? [0, 1, 0] : 0 }}
                  transition={
                    index === LINES.length - 1
                      ? { duration: 1.1, ease: "easeInOut", repeat: Infinity }
                      : { duration: 0 }
                  }
                />
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default BootSequence;
