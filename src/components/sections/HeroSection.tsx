"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    )
  },
  { 
    id: "linkedin", 
    href: "https://linkedin.com/in/ritam-roa", 
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    id: "email",
    href: "mailto:ritamrao48@gmail.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-background text-foreground selection:bg-accent selection:text-white overflow-hidden flex flex-col">
      <div className="mx-auto max-w-3xl px-6 flex flex-col h-full w-full">
        {/* Header */}
        <header className="flex items-center justify-between py-8 shrink-0">
          <h1 className="text-xl font-bold tracking-wider text-accent">Ritam Roa</h1>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-accent transition-colors">Posts</Link>
            <Link href="#" className="hover:text-accent transition-colors">About</Link>
            <div className="flex items-center gap-4 ml-2">
              <button className="hover:text-accent" title="Gallery">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </button>
              <button className="hover:text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                </svg>
              </button>
            </div>
          </nav>
        </header>

        <div className="h-px w-full bg-accent/20 shrink-0" />

        {/* Main Content Area - Scrollable if needed but intended to fit */}
        <main className="flex-1 flex flex-col justify-center py-8 min-h-0">
          {/* Profile Section */}
          <section className="flex flex-col md:flex-row items-center gap-12 py-8">
            <div className="relative shrink-0">
              <div className="relative h-44 w-44 overflow-hidden border-4 border-accent shadow-xl bg-muted">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={images[currentIndex]}
                      alt="Profile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <button
                onClick={nextImage}
                className="absolute -right-5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-accent text-white shadow-lg hover:brightness-110 transition-all z-10"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

            <div className="flex flex-col gap-5 text-center md:text-left">
              <h2 className="text-4xl font-bold text-accent tracking-tight">Hi, I'm Ritam.</h2>
              <div className="flex flex-col gap-2">
                <p className="max-w-lg text-foreground/80 leading-relaxed text-lg font-medium italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="max-w-lg text-foreground/60 leading-relaxed text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 mt-1">
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <Link key={social.id} href={social.href} target="_blank" className="text-accent hover:opacity-70 transition-all transform hover:scale-110">
                      {social.icon}
                    </Link>
                  ))}
                </div>
                <Link 
                  href="https://cal.com/ritam-roa" 
                  target="_blank"
                  className="bg-secondary text-white px-5 py-2 text-xs font-bold shadow-md hover:brightness-105 transition-all flex items-center gap-2"
                >
                  Book a call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </Link>
              </div>
            </div>
          </section>

          <div className="my-6 h-px w-full bg-accent/10" />

          {/* Featured Section - Compact */}
          <section className="py-4">
            <h3 className="mb-4 text-xs font-bold tracking-widest uppercase text-accent/60">Featured</h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold text-accent hover:underline cursor-pointer">Lorem Ipsum Dolor</h4>
              <p className="text-foreground/70 max-w-xl leading-relaxed text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </section>
        </main>

        <div className="h-px w-full bg-accent/20 shrink-0" />

        {/* Footer */}
        <footer className="py-10 shrink-0">
          <div className="h-12 flex flex-col justify-center items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-1"
              >
                <p className="text-xs font-medium italic text-foreground/70 leading-relaxed max-w-xl">
                  "{quotes[quoteIndex].text}"
                </p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold opacity-80">
                  — {quotes[quoteIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-[9px] text-foreground/30 tracking-[0.2em] uppercase">
            <p>© 2026 Ritam Roa</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              {socials.map((social) => (
                <Link key={social.id} href={social.href} className="hover:text-accent transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HeroSection;




