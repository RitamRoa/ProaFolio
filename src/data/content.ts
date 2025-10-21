export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  highlight: string;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
};

export type Experience = {
  id: string;
  period: string;
  role: string;
  place: string;
  summary: string;
  details: string[];
  certificate?: {
    label: string;
    href: string;
  };
};

export type ContactLink = {
  label: string;
  href: string;
  hint: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Roa.ai",
    description:
      "Personal question assistant that distils any prompt into sharp, cite-as-you-go replies powered by Gemini 1.5 Flash.",
  stack: ["React", "Gemini 1.5 Flash"],
    link: "https://github.com/RitamRoa/Roa.ai",
    highlight: "Latency-tuned streaming answers with inline references",
    image: {
      src: "/projects/roaai.webp",
      alt: "Neon console identity for the Roa.ai assistant",
      position: "center 55%",
    },
  },
  {
    title: "Roa Therapist",
    description:
      "Self-therapy conversationalist that remembers every session, revisits your notes, and keeps Gemini 1.5 focused on long-form growth.",
  stack: ["React", "Gemini 1.5", "Memory Engine"],
    link: "https://github.com/RitamRoa/Roa-Therapist-",
    highlight: "Context-aware reflections with persistent, recallable memory",
    image: {
      src: "/projects/roatherapist.webp",
      alt: "Chat therapy interface concept for the Roa Therapist project",
      position: "center 40%",
    },
  },
  {
    title: "Mindful Software — ICSSR Grant",
    description:
      "National research initiative exploring mindful computing rituals for Viksit Bharat @2047, blending design probes with AI tooling.",
  stack: ["Research", "React", "Python"],
    link: "https://github.com/RitamRoa/mindful-software-",
    highlight: "Software for holistic development for police officers",
    image: {
      src: "/projects/icssrgrant.webp",
      alt: "Daily wellness check-in dashboard for the mindful software grant",
      position: "center 35%",
    },
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "zans-internship",
    period: "Jun 2025 — Jul 2025",
    role: "Business & Marketing Intern",
    place: "ZANS",
    summary: "Completed an intensive two-month internship delivering real marketing impact for a growth-stage team.",
    details: [
      "Executed day-to-day business operations while coordinating with cross-functional teams on campaign priorities.",
      "Shipped modern marketing experiments grounded in performance metrics and target audience research.",
      "Maintained project tracking rituals to ensure client deliverables landed on schedule.",
    ],
    certificate: {
      label: "Download certificate",
      href: "/certificates/zans-business-marketing-certificate.pdf",
    },
  },
  {
    id: "icssr-grant",
    period: "Feb 2025 — Jul 2025",
    role: "",
    place: "Karnataka Police Officers Development App",
    summary: "Designed and launched a holistic development platform for Grant by the Indian Council of Social Science Research.",
    details: [
      "Architected end-to-end training flows that blend skill assessment, wellbeing prompts, and personalised growth plans.",
      "Directed cross-disciplinary collaboration between Software and Social Impact",
      "Implemented modular feature sets for continuous officer development, including reflective journaling and readiness dashboards.",
    ],
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  { label: "email", href: "mailto:ritamrao48@gmail.com", hint: "initiate connection" },
  { label: "github", href: "https://github.com/RitamRoa", hint: "inspect source" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/ritam-rao-86503a2b6/",
    hint: "sync professional node",
  },
];
