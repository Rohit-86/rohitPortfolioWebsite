import React, { useEffect, useState } from "react";
import About from "./About";
import Crousel from "./Crousel";
import Navbar from "./Navbar";
import Socialmedia from "./Socialmedia";
import Welcome from "./Welcome";
import up from "../Images/up-arrow.png";
import "../Style/Home.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import Contact from "./Contact";

const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="home" className="home">
      <Navbar />
      <Crousel />
      <Socialmedia />
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {showScrollToTop && (
        <img
          style={{ width: "70px", height: "70px" }}
          className="up-button"
          src={up}
          alt="Scroll to Top"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default Home;
