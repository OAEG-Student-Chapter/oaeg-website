import React from "react";
import HomeAboutSection from "@/app/components/home-about/home-about-section";
import HomeProjectsSection from "@/app/components/projects/section";
import AppHeroSection from "@/app/components/app-hero/app-hero-section";

export default function Home() {
  return (
      <>
          <AppHeroSection/>
        <HomeAboutSection/>
          <HomeProjectsSection/>
      </>
  )
}
