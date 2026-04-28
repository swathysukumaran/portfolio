import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Intro />
      <About />
      <Experiences />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
