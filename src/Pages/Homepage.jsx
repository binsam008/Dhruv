import { useState, useEffect } from "react";
import NavbarComponent from "../Components/Navbar";
import Hero from "../Components/Hero";
import Events from "../Components/Events";
import Statistics from "../Components/Statistics";
import Sponsors from "../Components/Sponsors";
import Footer from "../Components/Footer";
import GalaxyBackground from "../Components/GalaxyBackground";

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarComponent />
      <GalaxyBackground>
        <main>
          <Hero scrollY={scrollY} />
          <Events />
          <Statistics />
          <Sponsors />
        </main>
        <Footer />
      </GalaxyBackground>
    </>
  );
};

export default Homepage;
