"use client";

import { HeroSection } from "@/components/sections/HeroSection";

export function MainScene() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="relative z-10">
        <HeroSection />
      </div>
    </main>
  );
}

export default MainScene;

