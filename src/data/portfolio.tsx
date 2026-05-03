export type Post = {
  id: string;
  title: string;
  date: string;
  caption: string;
  venue: string;
  folder: string;
  images: string[];
};

export const images = [
  "/new_pics/pic1.jpeg",
  "/new_pics/pic2.jpeg",
  "/new_pics/pic3.jpeg",
  "/new_pics/pic4.jpeg",
];

export const quotes = [
  { text: "You Just Discovered What It Takes To Become A Legend.", author: "Silverhand" },
  { text: "Wake The F**k Up, Samurai! We Have A City To Burn.", author: "Silverhand" },
  { text: "Goodbye, V, And Never Stop Fighting.", author: "Silverhand" },
  { text: "Damn, You're Ugly.", author: "Geralt of Rivia" },
  { text: "I Am Vengeance. I Am The Night. I Am Batman!", author: "Random Orphan" },
];

export const experience = [
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

export const galleryImages = [
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.36%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.40%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.47%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.48%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.48%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.49%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.50%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.50%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.51%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.52%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.52%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.53%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.54%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.54%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.55%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.55%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.56%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.56%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.57%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.57%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.04.58%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.07%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.07%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.07%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.08%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.08%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.09%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.09%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.09%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.10%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.10%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.10%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.11%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.11%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.11%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.12%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.12%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.13%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.13%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.13%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.14%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.14%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.14%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.15%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.15%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.15%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.16%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.16%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.17%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.17%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.17%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.18%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.18%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.18%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.19%20AM%20(1).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.19%20AM%20(2).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.19%20AM%20(3).jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.05.19%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.06.34%20AM.jpeg",
  "/gallery/WhatsApp%20Image%202026-05-04%20at%201.06.35%20AM.jpeg"
];

export const socials = [
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
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/ritam.roa/",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
];

export const posts: Post[] = [
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
    images: ["/features_posts/deb%20comp/pic%202.jpeg"]
  },
  {
    id: "math-nirvana",
    title: "Math Nirvana",
    date: "2024-12-11",
    caption: "Organizing Committee - Math Nirvana",
    venue: "RVU",
    folder: "math nirvana",
    images: ["/features_posts/math%20nirvana/Math%20nirvana.jpeg?v=1"]
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
