import React from "react";
import HeroBanner from "./_components/HeroBanner";
import BrandScrollerSection from "./_components/BrandScrollerSection";
import HowItWorksSection from "./_components/HowItWorksSection";
import FreeToolsSection from "./_components/FreeToolsSection";
import FaqSection from "./_components/FaqSection";
import StartNowSection from "./_components/StartNowSection";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#FDFBF7]">
      <HeroBanner />
      <BrandScrollerSection />
      <HowItWorksSection />
      <FreeToolsSection />
      <FaqSection />
      <StartNowSection />
    </div>
  );
}
