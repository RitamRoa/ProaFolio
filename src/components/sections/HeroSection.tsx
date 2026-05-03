"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";

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

const experience = [
  {
    role: "President",
    org: "DevSphere - Open Source Community @ RVU",
    period: "Jul 2025 - Present",
    desc: "Leading and Developing the Open Source Community at RVU.",
    cert: "/certificates/dev-cert-1.pdf"
  },
  {
    role: "Team Lead",
    org: "Binary Banner - Monthly Newsletter For SOCSE - RVU",
    period: "Dec 2025 - Jan 2026",
    desc: "Managing editorial workflows of ll student and faculty achievements for SOCSE-RVU",
    cert: "/certificates/bb-cert.pdf"
  },
  {
    role: "PR & Outreach",
    org: "GDG - RVU",
    period: "Aug 2025 - Dec 2025",
    desc: "Connecting the developer student club with the campus and out."
  },
  {
    role: "Business Development",
    org: "ZANS",
    period: "Jun 2025 - Jul 2025",
    desc: "Strategic outreach and market positioning for emerging tech solutions.",
    cert: "/certificates/zans-business-marketing-certificate.pdf"
  }
];

type Post = {
  id: string;
  title: string;
  date: string;
  caption: string;
  venue: string;
  folder: string;
  images: string[];
};

const posts: Post[] = [
  {
    id: "build-hackathon",
    title: "AI Build Sprint Hackathon",
    date: "2026-04-10",
    caption: "Won AI Build Sprint Hackathon",
    venue: "RV University",
    folder: "build",
    images: ["/features_posts/build/ai%20bulld%20spint%20at%20rvu%20april%2010.jpeg", "/features_posts/build/pic%202.jpeg"]
  },
  {
    id: "build-with-ai",
    title: "Build with AI - Google for Developers",
    date: "2026-04-06",
    caption: "Lead Speaker at Build with AI - Google for Developers",
    venue: "RV University",
    folder: "build with ai",
    images: ["/features_posts/build%20with%20ai/pic%201.png"]
  },
  {
    id: "nav-world-ai",
    title: "Navigating the World of AI",
    date: "2026-03-20",
    caption: "Organized Navigating the World of AI with Databricks",
    venue: "ECE Hall",
    folder: "nav world of ai",
    images: ["/features_posts/nav%20world%20of%20ai/pic%201%20.jpeg"]
  },
  {
    id: "linkin-park",
    title: "Linkin Park Concert",
    date: "2026-01-23",
    caption: "LINKIN PARK AND BLOODYWOOD CONCERT",
    venue: "Bangalore",
    folder: "linkin park",
    images: ["/features_posts/linkin%20park/pic%201%20.jpeg", "/features_posts/linkin%20park/pic%202%20.jpeg"]
  },
  {
    id: "civo",
    title: "Civo Navigate India",
    date: "2025-11-18",
    caption: "Civo Navigate India Event",
    venue: "Four Seasons",
    folder: "civo",
    images: ["/features_posts/civo/pic%201%20.jpeg", "/features_posts/civo/pic%202%20.jpeg"]
  },
  {
    id: "notion",
    title: "Notion India Team",
    date: "2025-11-06",
    caption: "Met Notion India Team",
    venue: "MG Road",
    folder: "notion",
    images: ["/features_posts/notion/pic%201%20.jpeg"]
  },
  {
    id: "vibeathon",
    title: "SAP Github Vibeathon",
    date: "2025-09-27",
    caption: "Runner Up at SAP Github Vibeathon",
    venue: "SAP Labs India Whitefield",
    folder: "vibeathon",
    images: ["/features_posts/vibeathon/pic%201%20.jpeg", "/features_posts/vibeathon/pic%202%20.jpeg"]
  },
  {
    id: "fkcci",
    title: "Met Revathi Kamath @ FKCCI",
    date: "2025-09-19",
    caption: "Met Revathi Kamath @ FKCCI",
    venue: "FKCCI",
    folder: "fkcci revathi kamath",
    images: ["/features_posts/fkcci%20revathi%20kamath/pic%201%20.jpeg"]
  },
  {
    id: "teachers-day",
    title: "Teachers Day",
    date: "2025-09-05",
    caption: "Teachers day with merin mam",
    venue: "Her Cabin",
    folder: "teachers day",
    images: ["/features_posts/teachers%20day/pic%201%20.jpeg"]
  },
  {
    id: "co-pilot",
    title: "Organized Co Pilot event",
    date: "2025-08-22",
    caption: "Organized Co Pilot event with Dhanashri Chavan, Github",
    venue: "RVU",
    folder: "co pilot",
    images: ["/features_posts/co%20pilot/pic%201%20.jpeg", "/features_posts/co%20pilot/pic%202%20.jpeg"]
  },
  {
    id: "santhe",
    title: "RVU Santhe",
    date: "2025-06-31",
    caption: "First event as President of Devsphere",
    venue: "RVU",
    folder: "santhe",
    images: ["/features_posts/santhe/june%2031%20santhe.jpeg", "/features_posts/santhe/pic%202%20.jpeg"]
  },
  {
    id: "grant",
    title: "ICSSR Grant Work",
    date: "2025-06-22",
    caption: "at Mysuru for ICSSR Grant Related work",
    venue: "Mysuru",
    folder: "grant",
    images: ["/features_posts/grant/june%2022%20.jpeg"]
  },
  {
    id: "bb-inauguration",
    title: "Binary Banner Inauguration",
    date: "2025-02-21",
    caption: "Binary Banner Inauguration",
    venue: "RVU",
    folder: "bb",
    images: ["/features_posts/bb/bb%20inaug.jpeg", "/features_posts/bb/pic%202%20.jpeg"]
  },
  {
    id: "deb-comp",
    title: "Debating Competition",
    date: "2025-02-06",
    caption: "First place at debating competition",
    venue: "RVU Tarang",
    folder: "deb comp",
    images: ["/features_posts/deb%20comp/feb%206%20.jpeg", "/features_posts/deb%20comp/pic%202.jpeg"]
  },
  {
    id: "math-nirvana",
    title: "Math Nirvana",
    date: "2024-12-11",
    caption: "Organizing Committee - Math Nirvana",
    venue: "RVU",
    folder: "math nirvana",
    images: ["/features_posts/math%20nirvana/Math%20nirvana.jpeg"]
  },
  {
    id: "marathon",
    title: "CAIAS Marathon",
    date: "2024-12-01",
    caption: "gottigere till Electronic City ~ 15 kms within 52 mins",
    venue: "Gottigere to Electronic City",
    folder: "caias marathon",
    images: ["/features_posts/caias%20marathon/pic%201%20.jpeg", "/features_posts/caias%20marathon/pic%202%20.jpeg"]
  },
  {
    id: "ideathon",
    title: "Ideathon 2.0",
    date: "2024-11-13",
    caption: "Ideathon 2.0 @ IEM Seminar Hall, RV",
    venue: "IEM Seminar Hall, RV",
    folder: "Ideathon",
    images: ["/features_posts/Ideathon/Nov%2013%20ideathon.jpeg"]
  }
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

const DraggableProfile = ({
  size = "h-36 w-36",
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
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); setImageIndex((prev) => (prev + 1) % images.length); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 hover:bg-[#715A5A] text-white rounded-full transition-all opacity-0 group-hover/profile:opacity-100 backdrop-blur-sm z-10"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 6 6 6-6 6"/></svg>
      </button>
    </div>
  </div>
);

export function HeroSection() {
  const [view, setView] = useState<'home' | 'about' | 'gallery'>('home');
  const [imageIndex, setImageIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [githubData, setGithubData] = useState<{ repos: number; contributions: string } | null>(null);

  useEffect(() => {
    if (!selectedPost) setModalImageIndex(0);
  }, [selectedPost]);
  
  const featuredRef = useRef<HTMLDivElement>(null);

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
          repos: data.public_repos || 64,
          contributions: "775+"
        });
      })
      .catch(() => {
        setGithubData({ repos: 64, contributions: "775+" });
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
    <div className="h-screen w-full bg-[#37353E] text-[#D3DAD9] transition-colors duration-500 font-mono flex flex-col selection:bg-[#715A5A] selection:text-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 flex flex-col h-full w-full">
        {/* Header */}
        <header className="flex items-center justify-between py-6 shrink-0">
          <button onClick={() => setView('home')} className="text-lg font-bold text-[#D3DAD9] opacity-90 tracking-tighter hover:opacity-100 transition-opacity">Ritam Roa</button>
          <nav className="flex items-center gap-6 text-xs">
            <button onClick={() => setView('gallery')} className={`hover:text-[#715A5A] transition-colors ${view === 'gallery' ? 'text-[#715A5A]' : ''}`}>Posts</button>
            <button onClick={() => setView('about')} className={`hover:text-[#715A5A] transition-colors ${view === 'about' ? 'text-[#715A5A]' : ''}`}>About</button>
            <div className="flex items-center gap-4 ml-2">
              <button onClick={() => setView('gallery')} className={`hover:text-[#715A5A] transition-all ${view === 'gallery' ? 'opacity-100' : 'opacity-60'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="16" height="16" x="4" y="4" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m20 16-3-3a2 2 0 0 0-2.8 0L6 20" />
                </svg>
              </button>
            </div>
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

                {/* Recent Posts Slider */}
                <section className="py-2 shrink-0">
                  <div className="flex items-center justify-between mb-6 px-1">
                    <h3 className="text-[11px] font-bold tracking-widest uppercase opacity-40 text-[#D3DAD9]">Recent Posts</h3>
                    <button onClick={() => setView('gallery')} className="flex items-center gap-1 text-[10px] hover:text-[#715A5A] opacity-60 transition-all">
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
                        className="min-w-[320px] bg-[#44444E] border border-[#D3DAD9]/5 shadow-2xl transition-all group overflow-hidden cursor-pointer"
                      >
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image 
                            src={post.images[0]} 
                            alt={post.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            sizes="320px" 
                            priority={idx < 2}
                            loading={idx < 2 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#37353E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-5 flex flex-col gap-2">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-bold text-[#D3DAD9] opacity-90 tracking-tight line-clamp-1">{post.title}</h4>
                            <span className="text-[9px] opacity-30 italic whitespace-nowrap">{formatDate(post.date)}</span>
                          </div>
                          <p className="text-[11px] opacity-60 line-clamp-2 leading-relaxed h-8">
                            {post.caption}
                          </p>
                          <div className="mt-2 flex items-center gap-1.5 opacity-30 text-[9px] uppercase tracking-wider">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
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

            {view === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="pb-12"
              >
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#D3DAD9]">Gallery</h2>
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
                        <Image
                          src={post.images[0]}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={idx < 4}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] uppercase tracking-widest font-bold">View Detail</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-xs font-bold text-[#D3DAD9]">{post.title}</h4>
                          <span className="text-[8px] opacity-30">{formatDate(post.date)}</span>
                        </div>
                        <div className="text-[9px] opacity-40 line-clamp-1">{post.venue}</div>
                      </div>
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
                <section className="flex flex-col md:flex-row items-start gap-10 py-6">
                  <DraggableProfile size="h-48 w-48" imageIndex={imageIndex} setImageIndex={setImageIndex} />
                  <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-3xl font-bold text-[#D3DAD9]">About Me</h2>
                    <p className="opacity-80 leading-relaxed text-base italic max-w-xl">
                      "Understanding why everything the way it is, and also i like making stuff that everyone will actually use."
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

                {/* Github Activity Overview - Big */}
                <section className="flex flex-col gap-4">
                  <h3 className="text-[11px] font-bold tracking-widest uppercase opacity-40 text-[#D3DAD9]">Github Activity</h3>
                  <div className="w-full p-8 bg-black border border-[#D3DAD9]/5 shadow-xl flex flex-col items-center justify-center gap-6 rounded-lg min-h-[280px]">
                    <div className="w-full overflow-hidden flex justify-center text-[10px]">
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
                    <div className="flex gap-12 text-center">
                      <div>
                        <div className="text-3xl font-bold text-[#39d353]">{githubData?.contributions || "775+"}</div>
                        <div className="text-[10px] uppercase opacity-40 text-[#D3DAD9] mt-1">Contributions</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#39d353]">64</div>
                        <div className="text-[10px] uppercase opacity-40 text-[#D3DAD9] mt-1">Repositories</div>
                      </div>
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
              <div className="md:w-1/2 bg-black flex items-center justify-center relative min-h-[400px] group/modal">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={modalImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={selectedPost.images[modalImageIndex]} 
                      alt={`${selectedPost.title} - ${modalImageIndex}`} 
                      fill 
                      className="object-contain" 
                      sizes="50vw" 
                    />
                  </motion.div>
                </AnimatePresence>

                {selectedPost.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setModalImageIndex((prev) => (prev - 1 + selectedPost.images.length) % selectedPost.images.length)}
                      className="absolute left-4 p-2 bg-black/50 hover:bg-[#715A5A] text-white rounded-full transition-all opacity-0 group-hover/modal:opacity-100 backdrop-blur-sm z-10"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button 
                      onClick={() => setModalImageIndex((prev) => (prev + 1) % selectedPost.images.length)}
                      className="absolute right-4 p-2 bg-black/50 hover:bg-[#715A5A] text-white rounded-full transition-all opacity-0 group-hover/modal:opacity-100 backdrop-blur-sm z-10"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 6 6 6-6 6"/></svg>
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
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D3DAD9] tracking-tight">{selectedPost.title}</h3>
                    <div className="text-xs text-[#715A5A] font-bold mt-1">{formatDate(selectedPost.date)}</div>
                  </div>
                  <button onClick={() => setSelectedPost(null)} className="p-2 hover:bg-white/5 rounded-full transition-colors opacity-40 hover:opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 opacity-50 text-[10px] uppercase tracking-widest font-bold">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {selectedPost.venue}
                </div>
                <div className="h-px w-full bg-[#D3DAD9]/10" />
                <p className="text-sm leading-relaxed opacity-70 italic">
                  "{selectedPost.caption}"
                </p>
                <div className="mt-auto pt-8 flex items-center gap-2">
                   <div className="text-[10px] opacity-30 uppercase tracking-[0.2em]">Shared via Ritam's Timeline</div>
                </div>
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
