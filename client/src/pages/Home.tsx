/**
 * DVORNIKOV PORTFOLIO — Home Page
 * Design: Corporate Minimalism with Geometric Tension
 * Palette: #111111 / #6B6B6B / #E5E5E5 / #F5F5F5 / #FFFFFF
 * Fonts: Space Grotesk (display) + Inter (body)
 * Layout: Asymmetric, left-anchored, strong typographic hierarchy
 */

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Competencies from "@/components/Competencies";
import CaseStudies from "@/components/CaseStudies";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <Nav />
      <Hero />
      <Competencies />
      <CaseStudies />
      <Certificates />
      <Footer />
    </div>
  );
}
