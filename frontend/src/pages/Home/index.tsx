import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Education from "./Education";

function Home() {
  const location = useLocation();

  // Scroll to the element with the ID from the URL hash when the component mounts
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Header />
      <div className="bg-primary sm:px-5">
        <Intro />
        <About />
        <Experiences />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
