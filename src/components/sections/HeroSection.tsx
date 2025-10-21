"use client";

import { type PointerEvent as ReactPointerEvent } from "react";
import { cubicBezier, motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import useDigitalHum from "@/hooks/useDigitalHum";

const entranceEase = cubicBezier(0.16, 1, 0.3, 1);

const socials = [
  {
    id: "email",
    label: "Email",
    href: "mailto:ritamrao48@gmail.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/RitamRoa",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.43c.58.11.8-.25.8-.56v-2.05c-3.26.71-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.11-.75.4-1.27.72-1.56-2.6-.3-5.33-1.33-5.33-5.92 0-1.31.46-2.38 1.2-3.22-.12-.3-.52-1.51.11-3.16 0 0 .98-.32 3.22 1.23a11.1 11.1 0 0 1 5.86 0c2.24-1.55 3.22-1.23 3.22-1.23.63 1.65.23 2.86.11 3.16.75.84 1.2 1.91 1.2 3.22 0 4.6-2.74 5.62-5.35 5.92.41.36.77 1.07.77 2.16v3.19c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/ritamroa",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm.02 5.75H2v11.25h3V9.25Zm5 0H7v11.25h3v-5.92c0-1.56.53-2.63 1.85-2.63 1.35 0 1.65 1.03 1.65 2.54v6.01h3v-6.44c0-2.94-1.57-4.31-3.67-4.31-1.69 0-2.44.94-2.86 1.6h-.05l-.13-1.11Z" />
      </svg>
    ),
  },
];

export function HeroSection() {
  const { enabled, toggle } = useDigitalHum();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const glowX = useSpring(pointerX, { stiffness: 80, damping: 20, mass: 0.6 });
  const glowY = useSpring(pointerY, { stiffness: 80, damping: 20, mass: 0.6 });

  const percentX = useTransform(glowX, (value: number) => `${value * 100}%`);
  const percentY = useTransform(glowY, (value: number) => `${value * 100}%`);
  const gradientStyle = useMotionTemplate`
    radial-gradient(
      420px circle at ${percentX} ${percentY},
      rgba(0, 255, 157, 0.28),
      transparent 65%
    )
  `;

  const handlePointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-28 text-center text-balance"
      onPointerMove={handlePointer}
      onPointerLeave={() => {
        pointerX.set(0.5);
        pointerY.set(0.5);
      }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: entranceEase }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: gradientStyle }}
      />

      <motion.div
        className="relative flex max-w-4xl flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.1, ease: entranceEase }}
      >
        <motion.span
          className="font-mono text-sm uppercase tracking-[0.4em] text-[#3EF8FF]/80"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          {"// entering the mainframe"}
        </motion.span>

        <div className="relative">
          <motion.h1
            className="select-none font-mono text-5xl sm:text-6xl md:text-7xl text-[#0aff9d] drop-shadow-[0_0_32px_rgba(0,255,157,0.35)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: entranceEase }}
          >
            Ritam Roa
          </motion.h1>
          <motion.span
            aria-hidden
            className="absolute inset-0 select-none font-mono text-5xl sm:text-6xl md:text-7xl text-[#3EF8FF] opacity-40 mix-blend-screen"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{
              clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)", "inset(10% 0 65% 0)", "inset(0 0 0 0)"],
            }}
            transition={{ delay: 1.1, duration: 1.2, ease: "easeInOut" }}
          >
            Ritam Roa
          </motion.span>
        </div>

        <motion.p
          className="max-w-xl font-mono text-lg text-[#bafff2]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.75, ease: "easeOut" }}
        >
          coding through weird projects — shaping poetic interfaces for the networks we inhabit.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-3 text-[#9cffdd]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#3EF8FF]/80">
            connect with me / hire me →
          </span>
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const isEmail = social.id === "email";
              return (
                <Link
                  key={social.id}
                  href={social.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#0aff9d]/30 bg-black/40 text-[#0aff9d] transition hover:border-[#0aff9d] hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
        >
          <motion.button
            type="button"
            onClick={() => void toggle()}
            className="rounded-full border border-[#3EF8FF]/40 bg-black/40 px-5 py-2 font-mono text-sm uppercase tracking-[0.25em] text-[#3EF8FF] transition-colors hover:border-[#3EF8FF] hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {enabled ? "digital hum: on" : "digital hum: off"}
          </motion.button>
          <Link
            href="#projects"
            className="group rounded-full border border-[#0aff9d] bg-[#0aff9d]/10 px-6 py-2 font-mono text-sm uppercase tracking-[0.25em] text-[#0aff9d] transition-all hover:bg-[#0aff9d]/30"
          >
            <span className="group-hover:translate-x-1 inline-flex items-center gap-2 transition-transform">
              discover more
              <motion.span
                aria-hidden
                className="inline-block h-2 w-2 rotate-45 border border-[#0aff9d]"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute bottom-10 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-[0.4em] text-[#3EF8FF]/70"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
      >
        <span>scroll to access</span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-[#3EF8FF] to-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
