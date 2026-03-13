import React from "react";
import HomeAboutSection from "@/components/sections/home-about/home-about-section";
import HomeEventsSection from "@/components/sections/events/section";
import HomeProjectsSection from "@/components/sections/projects/section";
import AppHeroSection from "@/components/app-hero/app-hero-section";

export default function Home() {
  return (
    <>
      <AppHeroSection />
      <HomeAboutSection />
      <HomeProjectsSection />
      <HomeEventsSection />
    </>
  );
}
