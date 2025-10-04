"use client";

import React, { useState, useEffect } from "react";
import HomeAboutSection from "@/app/components/home-about/home-about-section";
import HomeEventsSection from "@/app/components/events/section";
import HomeProjectsSection from "@/app/components/projects/section";
import AppHeroSection from "@/app/components/app-hero/app-hero-section";
import TShirtPopup from "@/components/popup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when the page loads
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // 0.5 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AppHeroSection />
      <HomeAboutSection />
      <HomeProjectsSection />
      <HomeEventsSection />
      <TShirtPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
