"use client"
import Contact from "@/components/contact";
import Resume from "@/components/resume";
import Skills from "@/components/skills";
import About from "@/components/about";
import Portfolio from "@/components/header";
import ScrollToTop from "@/components/scrolltop";


export default function Home() {

  
  return (
    <>

      <Portfolio />
      <About />
      <Skills />
      <Resume />
      <Contact />
      <ScrollToTop />
    </>
  );
}
