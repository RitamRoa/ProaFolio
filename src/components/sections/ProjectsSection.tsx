"use client";

import Image from "next/image";
import Link from "next/link";
import { cubicBezier, motion } from "framer-motion";
import { PROJECTS } from "@/data/content";

const entranceEase = cubicBezier(0.16, 1, 0.3, 1);

const cardVariants = {
  initial: { opacity: 0, y: 60, scale: 0.98 },
  enter: { opacity: 1, y: 0, scale: 1 },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-28">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7, ease: entranceEase }}
        className="flex flex-col gap-2 text-left"
      >
        <span className="font-mono text-xs uppercase tracking-[0.5em] text-[#3EF8FF]/70">{"// projects"}</span>
        <h2 className="text-3xl font-mono text-[#e7fff6] sm:text-4xl">Strange prototypes that teach me things</h2>
        <p className="max-w-2xl font-mono text-sm text-[#9cffdd]/80">
          Interfaces that bend the rules — equal parts utility, glitch aesthetics, and systems thinking.
        </p>
      </motion.header>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#0aff9d]/30 bg-black/45 text-left shadow-[0_0_36px_rgba(0,255,157,0.2)] backdrop-blur-md transition-transform"
            variants={cardVariants}
            initial="initial"
            whileInView="enter"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08, duration: 0.65, ease: entranceEase }}
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(0,255,157,0.18),_transparent_60%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

            <div className="relative h-60 overflow-hidden rounded-t-3xl sm:h-64">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 92vw"
                priority={index === 0}
                style={{ objectPosition: project.image.position ?? "center 50%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/35" />
            </div>

            <header className="flex items-start justify-between gap-4 px-6 pt-6 pb-2">
              <div className="space-y-2">
                <h3 className="font-mono text-2xl text-[#0aff9d]">{project.title}</h3>
                <p className="typing-line font-mono text-sm text-[#9cffdd]/70" data-content={project.description}>
                  {project.description}
                </p>
              </div>
              <span className="rounded-full border border-[#3EF8FF]/40 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-[#3EF8FF]/80">
                {String(index + 1).padStart(2, "0")}
              </span>
            </header>

            <dl className="mt-6 flex flex-col gap-3 px-6 font-mono text-xs uppercase tracking-[0.35em] text-[#82ffe4]/80">
              <div className="flex items-center gap-2 text-[11px] text-[#bafff2]/70">
                <dt className="text-[#3EF8FF]">highlight</dt>
                <dd className="tracking-normal text-[#e7fff6]/80">{project.highlight}</dd>
              </div>
              <div>
                <dt className="text-[#3EF8FF]">stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2 tracking-normal text-[#bafff2]/80">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-[#0aff9d]/30 px-3 py-1 text-[11px] text-[#9cffdd]">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <Link
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex items-center gap-2 px-6 pb-6 pt-4 font-mono text-sm uppercase tracking-[0.3em] text-[#3EF8FF] transition-colors hover:text-white"
            >
              &gt; open project
              <motion.span
                aria-hidden
                className="inline-block h-[1px] w-8 bg-gradient-to-r from-[#3EF8FF] to-transparent"
                animate={{ scaleX: [0.2, 1, 0.2] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
