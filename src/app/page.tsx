import About from "./about/page";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";
import Resume from "./resume/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <>
      <Portfolio />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}
