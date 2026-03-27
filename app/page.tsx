"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-[#121212] min-h-screen font-sans text-white selection:bg-white/20 selection:text-white">
      {/* 500vh Scroll-linked Canvas Section */}
      <section ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </section>
      
      {/* CV Content Sections */}
      <div className="relative z-10 bg-[#121212] shadow-[0_-20px_50px_rgba(18,18,18,1)] pb-20">
        <About />
        <Experience />
        <Skills />
        <Projects />
      </div>

    </main>
  );
}
