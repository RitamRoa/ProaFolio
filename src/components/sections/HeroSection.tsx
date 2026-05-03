"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/new_pics/pic1.jpeg",
  "/new_pics/pic2.jpeg",
  "/new_pics/pic3.jpeg",
  "/new_pics/pic4.jpeg",
];

const quotes = [
  { text: "You Just Discovered What It Takes To Become A Legend.", author: "Silverhand" },
  { text: "Wake The F**k Up, Samurai! We Have A City To Burn.", author: "Silverhand" },
  { text: "Goodbye, V, And Never Stop Fighting.", author: "Silverhand" },
  { text: "Damn, You're Ugly.", author: "Geralt of Rivia" },
  { text: "I Am Vengeance. I Am The Night. I Am Batman!", author: "Random Orphan" },
];

const socials = [
  {
    id: "github",
    href: "https://github.com/RitamRoa",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    )
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/ritam-roa",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    id: "gmail",
    href: "mailto:ritamrao48@gmail.com",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
];

export function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const featuredRef = useRef<HTMLDivElement>(null);
  const allPostsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-full bg-[#37353E] text-[#D3DAD9] transition-colors duration-500 font-mono flex flex-col selection:bg-[#715A5A] selection:text-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 flex flex-col h-full w-full">
        {/* Header */}
        <header className="flex items-center justify-between py-6 shrink-0">
          <h1 className="text-lg font-bold text-[#D3DAD9] opacity-90 tracking-tighter">Ritam Roa</h1>
          <nav className="flex items-center gap-6 text-xs">
            <Link href="#" className="hover:text-[#715A5A] transition-colors">Posts</Link>
            <Link href="#" className="hover:text-[#715A5A] transition-colors">About</Link>
            <div className="flex items-center gap-4 ml-2">
              <button className="hover:text-[#715A5A] opacity-60 hover:opacity-100 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="16" height="16" x="4" y="4" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m20 16-3-3a2 2 0 0 0-2.8 0L6 20" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        <div className="h-px w-full bg-[#44444E] shrink-0" />

        <main className="flex-1 flex flex-col py-4 min-h-0">
          {/* Profile Section */}
          <section className="flex flex-col md:flex-row items-center gap-8 py-4 shrink-0">
            <div className="relative shrink-0 cursor-grab active:cursor-grabbing">
              <div className="relative h-36 w-36 overflow-hidden border-2 border-[#44444E] bg-[#44444E]/50 shadow-2xl">
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 50) setImageIndex((prev) => (prev - 1 + images.length) % images.length);
                    else if (info.offset.x < -50) setImageIndex((prev) => (prev + 1) % images.length);
                  }}
                  className="h-full w-full"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image src={images[imageIndex]} alt="Profile" fill className="object-cover pointer-events-none" priority />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-[#D3DAD9]">Hi, I'm Ritam.</h2>
              <p className="max-w-md opacity-70 leading-relaxed text-sm italic">
                Understanding why everything the way it is, and also i like making stuff that everyone will actually use.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-1">
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <Link key={s.id} href={s.href} target="_blank" className="text-[#D3DAD9]/60 hover:text-[#715A5A] transition-all">
                      {s.icon}
                    </Link>
                  ))}
                </div>
                <Link
                  href="https://cal.com/ritam-roa"
                  target="_blank"
                  className="bg-[#715A5A] text-[#D3DAD9] px-4 py-1.5 text-[10px] font-bold shadow-lg hover:brightness-110 transition-all border border-[#D3DAD9]/10"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </section>

          <div className="my-4 h-px w-full bg-[#44444E]/50 shrink-0" />

          {/* Featured Posts - Prominent */}
          <section className="py-2 shrink-0">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-[11px] font-bold tracking-widest uppercase opacity-40 text-[#D3DAD9]">Featured Posts</h3>
              <Link href="#" className="flex items-center gap-1 text-[10px] hover:text-[#715A5A] opacity-60 transition-all">
                View all <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
              </Link>
            </div>
            <div
              ref={featuredRef}
              className="flex gap-6 overflow-x-auto no-scrollbar pb-3 cursor-grab active:cursor-grabbing px-1"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="min-w-[300px] p-6 bg-[#44444E] border border-[#D3DAD9]/5 shadow-xl transition-all hover:border-[#715A5A]/30"
                >
                  <h4 className="text-lg font-bold mb-3 text-[#D3DAD9] opacity-90 tracking-tight">Lorem Ipsum Legend {i}</h4>
                  <p className="text-[12px] opacity-60 line-clamp-2 leading-relaxed">
                    You just discovered what it takes to become a legend. Wake the f**k up, samurai!
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] opacity-30 italic">5 Mar, 2026</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#715A5A] opacity-60"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <button onClick={() => scroll(featuredRef, 'left')} className="p-1 hover:text-[#715A5A] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg></button>
              <button onClick={() => scroll(featuredRef, 'right')} className="p-1 hover:text-[#715A5A] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg></button>
            </div>
          </section>

          {/* All Posts - Below Featured */}
          <section className="py-2 shrink-0 mt-2">
            <div className="flex items-center justify-between mb-3 px-1">
              <h3 className="text-[10px] font-bold tracking-widest uppercase opacity-30 text-[#D3DAD9]">All Posts</h3>
              <Link href="#" className="flex items-center gap-1 text-[9px] hover:text-[#715A5A] opacity-50 transition-all">
                Explore <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
              </Link>
            </div>
            <div
              ref={allPostsRef}
              className="flex gap-4 overflow-x-auto no-scrollbar pb-2 cursor-grab active:cursor-grabbing px-1"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <motion.div
                  key={i}
                  className="min-w-[160px] p-3 border border-[#44444E] bg-[#44444E]/40 hover:bg-[#44444E]/80 transition-colors"
                >
                  <h4 className="text-[11px] font-medium truncate opacity-80 text-[#D3DAD9]">Post #{i}: Cyberpunk Logs</h4>
                  <div className="text-[8px] opacity-30 mt-1 uppercase tracking-wider">Feb 2026</div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-1">
              <button onClick={() => scroll(allPostsRef, 'left')} className="p-0.5 opacity-40 hover:opacity-100 transition-opacity"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6" /></svg></button>
              <button onClick={() => scroll(allPostsRef, 'right')} className="p-0.5 opacity-40 hover:opacity-100 transition-opacity"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6" /></svg></button>
            </div>
          </section>
        </main>

        <div className="h-px w-full bg-[#44444E] shrink-0" />

        {/* Footer */}
        <footer className="py-6 shrink-0">
          <div className="h-10 flex flex-col justify-center items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-0.5"
              >
                <p className="text-[10px] font-medium italic opacity-60 leading-relaxed max-w-xl">
                  "{quotes[quoteIndex].text}"
                </p>
                <p className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-40 text-[#715A5A]">
                  — {quotes[quoteIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex flex-col md:flex-row items-center justify-between text-[8px] opacity-20 tracking-[0.2em] uppercase">
            <p>© 2026 Ritam Roa</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-100 transition-colors">Privacy</Link>
              <Link href="#" className="hover:opacity-100 transition-colors">Terms</Link>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default HeroSection;







