"use client";

import Link from "next/link";
import { cubicBezier, motion } from "framer-motion";
import { EXPERIENCE } from "@/data/content";

const entranceEase = cubicBezier(0.16, 1, 0.3, 1);

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.22,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: entranceEase },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-28">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7, ease: entranceEase }}
        className="flex flex-col gap-2"
      >
        <span className="font-mono text-xs uppercase tracking-[0.5em] text-[#3EF8FF]/70">{"// experience"}</span>
        <h2 className="text-3xl font-mono text-[#e7fff6] sm:text-4xl">Boot logs from the field</h2>
        <p className="max-w-2xl font-mono text-sm text-[#9cffdd]/80">
          Each milestone boots line by line so you can trace the anomalies, learnings, and systems evolved along the way.
        </p>
      </motion.header>

      <div className="relative pl-6">
        <motion.span
          aria-hidden
          className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#0aff9d] via-[#3EF8FF]/60 to-transparent"
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 0.8, scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: entranceEase }}
          style={{ transformOrigin: "top" }}
        />

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={listVariants}
          className="space-y-10"
        >
          {EXPERIENCE.map((entry, index) => (
            <motion.li
              key={entry.id}
              variants={itemVariants}
              className="group relative rounded-3xl border border-[#0aff9d]/20 bg-black/40 px-6 py-6 font-mono text-[#c4fff0] shadow-[0_0_28px_rgba(0,255,157,0.18)] backdrop-blur-md"
            >
              <span className="absolute -left-[3.4rem] top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#3EF8FF]/50 bg-black/80 text-sm text-[#82ffe4] shadow-[0_0_18px_rgba(63,248,255,0.35)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <header className="flex flex-col gap-1 text-left">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.45em] text-[#3EF8FF]/70">
                  <span>{entry.period}</span>
                  <span className="text-[#82ffe4]">{entry.place}</span>
                </div>
                <h3 className="text-2xl text-[#0aff9d]">{entry.role}</h3>
                <p className="text-sm text-[#9cffdd]/80">{entry.summary}</p>
              </header>

              <ul className="mt-6 space-y-3 text-sm text-[#e7fff6]/80">
                {entry.details.map((detail) => (
                  <li
                    key={detail}
                    className="glitch-line relative pl-4 before:absolute before:left-0 before:top-2 before:h-[1px] before:w-2 before:bg-[#3EF8FF]"
                  >
                    {detail}
                  </li>
                ))}
              </ul>

              {entry.certificate ? (
                <Link
                  href={entry.certificate.href}
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#3EF8FF]/40 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#3EF8FF] transition hover:border-[#3EF8FF] hover:text-white"
                >
                  {entry.certificate.label}
                  <span aria-hidden className="inline-block h-2 w-2 rotate-45 border border-current" />
                </Link>
              ) : null}

              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, filter: "drop-shadow(0 0 25px rgba(0,255,157,0.35))" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

export default ExperienceSection;
