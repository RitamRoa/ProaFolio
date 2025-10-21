"use client";

import dynamic from "next/dynamic";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

const MatrixBackground = dynamic(() => import("@/components/background/MatrixBackground"), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,255,157,0.22)_0%,_transparent_65%)]" />
  ),
});

const CursorTrail = dynamic(() => import("@/components/effects/CursorTrail"), {
  ssr: false,
});

const BootSequence = dynamic(() => import("@/components/effects/BootSequence"), {
  ssr: false,
});

export function MainScene() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#01090b] text-[#dfffe8]">
      <MatrixBackground />
      <CursorTrail />
      <BootSequence />

      <div className="relative z-10 flex flex-col gap-6">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default MainScene;
