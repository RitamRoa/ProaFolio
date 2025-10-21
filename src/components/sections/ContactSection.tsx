"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Link from "next/link";
import { cubicBezier, motion } from "framer-motion";
import { CONTACT_LINKS } from "@/data/content";

const entranceEase = cubicBezier(0.16, 1, 0.3, 1);

const fieldVariants = {
  hidden: { opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.6, ease: entranceEase },
  },
};

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `[Portfolio Contact] ${form.name || "New Signal"}`;
    const bodyLines = [
      `Name: ${form.name || "Not provided"}`,
      `Email: ${form.email || "Not provided"}`,
      "",
      form.message || "",
    ];
    const mailtoLink = `mailto:ritamrao48@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoLink;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-32 pt-16">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7, ease: entranceEase }}
        className="flex flex-col gap-3"
      >
        <span className="font-mono text-xs uppercase tracking-[0.5em] text-[#3EF8FF]/70">{"// contact"}</span>
        <h2 className="text-3xl font-mono text-[#e7fff6] sm:text-4xl">Open channel</h2>
        <p className="max-w-2xl font-mono text-sm text-[#9cffdd]/80">
          Drop a signal and I will respond from the nearest terminal. Inputs are validated softly — feel free to improvise.
        </p>
      </motion.header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.18, delayChildren: 0.2 }}
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-3xl border border-[#0aff9d]/30 bg-black/50 p-8 font-mono text-sm text-[#c4fff0] shadow-[0_0_32px_rgba(0,255,157,0.2)] backdrop-blur-xl"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(0,255,157,0.25)_0%,_transparent_60%)] opacity-40"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <motion.label variants={fieldVariants} className="relative block">
            <span className="mb-2 block uppercase tracking-[0.3em] text-[#3EF8FF]">identity</span>
            <input
              name="name"
              type="text"
              placeholder="enter designation"
              className="neon-field"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </motion.label>

          <motion.label variants={fieldVariants} className="relative mt-6 block">
            <span className="mb-2 block uppercase tracking-[0.3em] text-[#3EF8FF]">contact channel</span>
            <input
              name="email"
              type="email"
              placeholder="email or frequency"
              className="neon-field"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </motion.label>

          <motion.label variants={fieldVariants} className="relative mt-6 block">
            <span className="mb-2 block uppercase tracking-[0.3em] text-[#3EF8FF]">message packet</span>
            <textarea
              name="message"
              rows={4}
              placeholder="compose transmission"
              className="neon-field resize-none"
              value={form.message}
              onChange={handleChange}
            />
          </motion.label>

          <motion.button
            type="submit"
            variants={fieldVariants}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#0aff9d] bg-[#0aff9d]/10 px-6 py-2 uppercase tracking-[0.3em] text-[#0aff9d] transition-all hover:bg-[#0aff9d]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            transmit
            <motion.span
              aria-hidden
              className="inline-block h-2 w-2 rotate-45 border border-[#0aff9d]"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>

          <motion.p
            role="status"
            aria-live="polite"
            variants={fieldVariants}
            className="mt-4 text-xs uppercase tracking-[0.3em] text-[#82ffe4]/80"
          >
            {status === "sent" ? "Signal relayed via your mail client." : "No transmission yet."}
          </motion.p>
        </motion.form>

        <motion.aside
          className="flex flex-col gap-6 rounded-3xl border border-[#3EF8FF]/20 bg-black/40 p-6 font-mono text-sm text-[#bafff2] shadow-[0_0_28px_rgba(63,248,255,0.2)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: entranceEase }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-[#3EF8FF]/70">quick commands</p>
          <ul className="space-y-4 text-base">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label} className="group">
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="relative inline-flex w-full flex-col gap-1 border border-transparent px-4 py-3 transition"
                >
                  <span className="text-[#0aff9d]">&gt; {link.label}</span>
                  <span className="text-xs uppercase tracking-[0.35em] text-[#82ffe4]/70">{link.hint}</span>
                  <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">{link.href}</span>
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl border border-[#3EF8FF]/40"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, filter: "drop-shadow(0 0 25px rgba(63,248,255,0.35))" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}

export default ContactSection;
