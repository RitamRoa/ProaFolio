"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";

import {
  images,
  quotes,
  experience,
  galleryImages,
  socials,
  posts,
  type Post
} from "@/data/portfolio";

const DraggableProfile = ({
  size = "h-32 w-32 sm:h-36 sm:w-36",
  imageIndex,
  setImageIndex
}: {
  size?: string;
  imageIndex: number;
  setImageIndex: (val: number | ((prev: number) => number)) => void
}) => (
  <div className="relative shrink-0 cursor-grab active:cursor-grabbing group/profile">
    <div className={`relative ${size} overflow-hidden border-2 border-[#44444E] bg-[#44444E]/50 shadow-2xl`}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x > 50) setImageIndex((prev) => (prev - 1 + images.length) % images.length);
          else if (info.offset.x < -50) setImageIndex((prev) => (prev + 1) % images.length);
        }}
        className="h-full w-full relative"
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
            <Image
              src={images[imageIndex]}
              alt="Profile"
              fill
              sizes="(max-width: 768px) 192px, 192px"
              className="object-cover pointer-events-none"
              priority
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Profile Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); setImageIndex((prev) => (prev - 1 + images.length) % images.length); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 hover:bg-[#715A5A] text-white rounded-full transition-all opacity-0 group-hover/profile:opacity-100 backdrop-blur-sm z-10"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setImageIndex((prev) => (prev + 1) % images.length); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 hover:bg-[#715A5A] text-white rounded-full transition-all opacity-0 group-hover/profile:opacity-100 backdrop-blur-sm z-10"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 6 6 6-6 6" /></svg>
      </button>
    </div>
  </div>
);

export function HeroSection() {
  const [view, setView] = useState<'home' | 'about' | 'posts' | 'gallery'>('home');
  const [imageIndex, setImageIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [githubData, setGithubData] = useState<{ repos: number; contributions: string } | null>(null);

  useEffect(() => {
    if (!selectedPost) setModalImageIndex(0);
  }, [selectedPost]);

  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/RitamRoa")
      .then(res => res.json())
      .then(data => {
        setGithubData({
          repos: data.public_repos,
          contributions: "775+", // This usually comes from a separate scraping or proxy in real apps
          lastPushed: data.updated_at
        });
      })
      .catch(() => {
        setGithubData({ repos: 64, contributions: "775+", lastPushed: new Date().toISOString() });
      });
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen h-[100dvh] w-full bg-[#37353E] text-[#D3DAD9] transition-colors duration-500 font-mono flex flex-col selection:bg-[#715A5A] selection:text-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 flex flex-col h-full w-full">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4 shrink-0">
          <button onClick={() => setView('home')} className="text-xl font-bold text-[#D3DAD9] opacity-90 tracking-tighter hover:opacity-100 transition-opacity">Ritam Roa</button>
          <nav className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs">
            <button onClick={() => setView('home')} className={`hover:text-[#715A5A] transition-colors ${view === 'home' ? 'text-[#715A5A]' : ''}`}>Home</button>
            <button onClick={() => setView('posts')} className={`hover:text-[#715A5A] transition-colors ${view === 'posts' ? 'text-[#715A5A]' : ''}`}>Featured</button>
            <button onClick={() => setView('gallery')} className={`hover:text-[#715A5A] transition-colors ${view === 'gallery' ? 'text-[#715A5A]' : ''}`}>Gallery</button>
            <button onClick={() => setView('about')} className={`hover:text-[#715A5A] transition-colors ${view === 'about' ? 'text-[#715A5A]' : ''}`}>About</button>
          </nav>
        </header>

        <div className="h-px w-full bg-[#44444E] shrink-0" />

        <main className="flex-1 overflow-y-auto no-scrollbar py-4 min-h-0">
          <AnimatePresence mode="wait">
            {view === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full"
              >
                {/* Profile Section */}
                <section className="flex flex-col md:flex-row items-center gap-8 py-4 shrink-0">
                  <DraggableProfile imageIndex={imageIndex} setImageIndex={setImageIndex} />

                  <div className="flex flex-col gap-3 text-center md:text-left flex-1">
                    <h2 className="text-2xl font-bold text-[#D3DAD9]">Hi, I&apos;m Ritam.</h2>
                    <p className="max-w-md opacity-70 leading-relaxed text-sm italic">
                      In a committed relationship with the right-hand tail of the normal distribution curve. also i like building things that people would use.
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

                {/* Recent Posts Slider */}
                <section className="py-2 shrink-0">
                  <div className="flex items-center justify-between mb-6 px-1">
                    <h3 className="text-[11px] font-bold tracking-widest uppercase opacity-40 text-[#D3DAD9]">Featured Posts</h3>
                    <button onClick={() => setView('posts')} className="flex items-center gap-1 text-[10px] hover:text-[#715A5A] opacity-60 transition-all">
                      View all <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                    </button>
                  </div>
                  <div
                    ref={featuredRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-6 cursor-grab active:cursor-grabbing px-1"
                  >
                    {posts.slice(0, 6).map((post, idx) => (
                      <motion.div
                        key={post.id}
                        whileHover={{ y: -8 }}
                        onClick={() => setSelectedPost(post)}
                        className="min-w-[280px] sm:min-w-[320px] bg-[#44444E] border border-[#D3DAD9]/5 shadow-2xl transition-all group overflow-hidden cursor-pointer"
                      >
                        <div className="relative h-48 w-full overflow-hidden">
                          {post.images && post.images.length > 0 ? (
                            <Image
                              src={post.images[0]}
                              alt={post.title}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                              sizes="320px"
                              priority={idx < 2}
                              loading={idx < 2 ? "eager" : "lazy"}
                              unoptimized={post.images[0].includes('?')}
                            />
                          ) : (
                            <div className="w-full h-full bg-[#37353E] flex items-center justify-center text-[10px] opacity-20 uppercase tracking-widest">
                              Coming Soon
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#37353E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-5 flex flex-col gap-2">
                          <div className="flex justify-between items-start gap-3">
                            <h4 className="text-sm font-bold text-[#D3DAD9] opacity-90 tracking-tight line-clamp-1 flex-1">{post.title}</h4>
                            <span className="text-[9px] opacity-30 italic whitespace-nowrap mt-0.5">{formatDate(post.date)}</span>
                          </div>
                          <p className="text-[11px] opacity-60 line-clamp-2 leading-relaxed h-8">
                            {post.caption}
                          </p>
                          <div className="mt-2 flex items-center gap-1.5 opacity-30 text-[9px] uppercase tracking-wider">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            {post.venue}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4 mt-2">
                    <button onClick={() => scroll(featuredRef, 'left')} className="p-1 hover:text-[#715A5A] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg></button>
                    <button onClick={() => scroll(featuredRef, 'right')} className="p-1 hover:text-[#715A5A] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg></button>
                  </div>
                </section>
              </motion.div>
            )}

            {view === 'posts' && (
              <motion.div
                key="posts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="pb-12"
              >
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#D3DAD9]">Featured Posts</h2>
                  <button onClick={() => setView('home')} className="text-xs opacity-40 hover:opacity-100 transition-opacity">Back Home</button>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {posts.map((post, idx) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedPost(post)}
                      className="break-inside-avoid bg-[#44444E] border border-[#D3DAD9]/5 shadow-xl transition-all cursor-pointer group"
                    >
                      <div className="relative overflow-hidden">
                        {post.images && post.images.length > 0 ? (
                          <Image
                            src={post.images[0]}
                            alt={post.title}
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={idx < 4}
                            unoptimized={post.images[0].includes('?')}
                          />
                        ) : (
                          <div className="w-full h-48 bg-[#44444E] flex items-center justify-center text-[10px] opacity-20 uppercase tracking-widest">
                            No Image Available
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] uppercase tracking-widest font-bold">View Detail</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h4 className="text-xs font-bold text-[#D3DAD9] line-clamp-1 flex-1">{post.title}</h4>
                          <span className="text-[8px] opacity-30 whitespace-nowrap mt-0.5">{formatDate(post.date)}</span>
                        </div>
                        <div className="text-[9px] opacity-40 line-clamp-1">{post.venue}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {view === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="pb-12"
              >
                <div className="mb-8 flex flex-col gap-1">
                  <h2 className="text-2xl font-bold text-[#D3DAD9]">Gallery</h2>
                  <p className="text-[10px] opacity-40 italic">random pictures that i took (99%)</p>
                </div>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                  {galleryImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedGalleryImage(img)}
                      className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-white/5"
                    >
                      <Image
                        src={img}
                        alt={`Gallery ${idx}`}
                        width={300}
                        height={400}
                        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {view === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-10 pb-12"
              >
                {/* About Profile Section - Bigger */}
                <section className="flex flex-col md:flex-row items-center md:items-start gap-10 py-6">
                  <DraggableProfile size="h-40 w-40 sm:h-48 sm:w-48" imageIndex={imageIndex} setImageIndex={setImageIndex} />
                  <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-3xl font-bold text-[#D3DAD9]">About Me</h2>
                    <p className="opacity-80 leading-relaxed text-base italic max-w-xl">
                      &quot;In a committed relationship with the right-hand tail of the normal distribution curve. also i like building things that people would use.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <div className="flex gap-4">
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

                {/* Github Activity Overview - New Design */}
                <section className="flex flex-col gap-4">
                  <div className="flex items-center justify-between px-1">
                    <div className="bg-[#44444E] border border-[#D3DAD9]/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      <span className="text-[10px] font-bold tracking-tight">Github activity</span>
                    </div>
                    <span className="text-[10px] opacity-60 font-medium">
                      {githubData?.contributions || "355"} contributions in the last year
                    </span>
                  </div>
                  
                  <div className="w-full p-6 sm:p-8 bg-[#44444E]/30 border border-[#D3DAD9]/5 shadow-xl flex flex-col gap-6 rounded-2xl">
                    <div className="w-full overflow-x-auto no-scrollbar flex justify-center py-2">
                      <div className="min-w-[600px] scale-90 sm:scale-100 flex justify-center">
                        <GitHubCalendar
                          username="RitamRoa"
                          blockSize={12}
                          blockMargin={4}
                          fontSize={10}
                          theme={{
                            dark: ['#1d1d21', '#0e4429', '#006d32', '#26a641', '#39d353'],
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="h-px w-full bg-[#D3DAD9]/10" />
                    
                    <div className="text-xs sm:text-sm opacity-80 font-medium tracking-tight">
                      Last pushed on {githubData?.lastPushed ? new Date(githubData.lastPushed).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric'
                      }) : "Tuesday, April 28th 2026"}
                    </div>
                  </div>
                </section>

                {/* Experience Boxes */}
                <section className="flex flex-col gap-4">
                  <h3 className="text-[11px] font-bold tracking-widest uppercase opacity-40 text-[#D3DAD9]">Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.map((exp, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        className="p-5 bg-[#44444E] border border-[#D3DAD9]/5 shadow-lg flex flex-col gap-3 relative group"
                      >
                        <div className="flex justify-between items-start">
                          <div className="text-[9px] font-bold text-[#715A5A] uppercase tracking-wider bg-[#715A5A]/10 px-2 py-0.5 rounded-full">
                            {exp.period}
                          </div>
                          {exp.cert && (
                            <Link
                              href={exp.cert}
                              download
                              target="_blank"
                              className="opacity-40 group-hover:opacity-100 transition-opacity bg-[#715A5A]/20 hover:bg-[#715A5A]/40 p-1.5 rounded-md"
                              title="Download Certificate"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-10 5 5 5-5m-5-4v14" />
                              </svg>
                            </Link>
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#D3DAD9]">{exp.role}</h4>
                          <div className="text-[10px] opacity-50 mt-1">{exp.org}</div>
                        </div>
                        <p className="text-[11px] opacity-60 leading-relaxed mt-1">
                          {exp.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
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
                <p className="text-[11px] font-medium italic opacity-80 text-[#D3DAD9] leading-relaxed max-w-xl">
                  &quot;{quotes[quoteIndex].text}&quot;
                </p>
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 text-[#715A5A]">
                  — {quotes[quoteIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[8px] opacity-20 tracking-[0.2em] uppercase">
            <p>© 2026 Ritam Roa</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:opacity-100 transition-colors">Privacy</Link>
              <Link href="#" className="hover:opacity-100 transition-colors">Terms</Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 bg-[#37353E]/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#44444E] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#D3DAD9]/10 shadow-2xl flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 bg-black flex items-center justify-center relative aspect-square sm:aspect-auto sm:min-h-[400px] group/modal shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={modalImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {selectedPost.images[modalImageIndex] ? (
                      <Image
                        src={selectedPost.images[modalImageIndex]}
                        alt={`${selectedPost.title} - ${modalImageIndex}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized={selectedPost.images[modalImageIndex].includes('?')}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs opacity-20">
                        Image Not Found
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {selectedPost.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setModalImageIndex((prev) => (prev - 1 + selectedPost.images.length) % selectedPost.images.length)}
                      className="absolute left-4 p-2 bg-black/50 hover:bg-[#715A5A] text-white rounded-full transition-all opacity-100 sm:opacity-0 group-hover/modal:opacity-100 backdrop-blur-sm z-10"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button
                      onClick={() => setModalImageIndex((prev) => (prev + 1) % selectedPost.images.length)}
                      className="absolute right-4 p-2 bg-black/50 hover:bg-[#715A5A] text-white rounded-full transition-all opacity-100 sm:opacity-0 group-hover/modal:opacity-100 backdrop-blur-sm z-10"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 6 6 6-6 6" /></svg>
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full z-10">
                      {selectedPost.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setModalImageIndex(i)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${i === modalImageIndex ? 'bg-[#715A5A] w-4' : 'bg-white/30'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="md:w-1/2 p-6 sm:p-12 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#D3DAD9] tracking-tight">{selectedPost.title}</h3>
                    <div className="text-[10px] sm:text-xs text-[#715A5A] font-bold mt-1">{formatDate(selectedPost.date)}</div>
                  </div>
                  <button onClick={() => setSelectedPost(null)} className="p-2 hover:bg-white/5 rounded-full transition-colors opacity-40 hover:opacity-100 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 opacity-50 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {selectedPost.venue}
                </div>
                <div className="h-px w-full bg-[#D3DAD9]/10" />
                <p className="text-xs sm:text-sm leading-relaxed opacity-70 italic">
                  &quot;{selectedPost.caption}&quot;
                </p>
                <div className="mt-auto pt-6 sm:pt-8 flex items-center gap-2">
                  <div className="text-[9px] sm:text-[10px] opacity-30 uppercase tracking-[0.2em]">Shared via Ritam&apos;s Timeline</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Image Modal */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryImage(null)}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedGalleryImage}
                  alt="Gallery Full"
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
