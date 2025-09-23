import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import dhruvBg from "../assets/Dhruv.png"; // Adjust path as needed
import logo from "../assets/logo.png"; 


const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-10-09T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const heroStyle = {
    backgroundImage: `url(${dhruvBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '100%', width: '70vw', margitop: '10%' 
    // backgroundAttachment: 'fixed', // Optional: for a parallax effect
  };

  return (
    <section 
    
      id="home" 
      className=" border border-radius-10 m-10 d-flex flex-column justify-content-center text-center text-light position-relative"
      style={{ ...heroStyle }} // Added height, width, and margin for centering
    >
      {/* Background Overlay */}
      {/* <div className="position-absolute top-10 start-0 w-100 h-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div> */}

      {/* Main Content */}
      <div className="mb-6 position-relative" style={{ zIndex: 1 }}>
        <div style={{alignItems:"center"}}>
            <img style={{width:"30%"}} src={logo} alt="" />
        </div>
        <p className="lead">
          Dhruv 2025 is a three-day Tech-Culture-Innovation Festival at MES College of Engineering and Technology in Kunnukara, set to attract over 3,000 daily attendees, including students from more than 50 colleges across Kerala, industry professionals, and influencers. The event uniquely blends technical activities like hackathons and robotics showcases with cultural competitions such as Choreo Night and a Music Band Competition, alongside live concerts and fashion walks. As a Title Sponsor, your brand will gain exclusive branding rights, prominent logo placement, and a direct channel to engage with a tech-savvy Gen-Z audience, promising over 100,000 digital impressions and a significant presence in Kerala's dynamic youth and innovation ecosystem.<br />
          <span className="text-warning">October 09-11, 2025</span>
        </p>

        {/* Countdown Timer */}
        <div className="d-flex justify-content-center gap-4 my-4">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="text-center">
              <h2 className="fw-bold ">{value}</h2>
              <small className="text-secondary text-uppercase">{label}</small>
            </div>
          ))}
        </div>
        
        {/* Buttons */}
       

        {/* Socials */}
        <div className="d-flex justify-content-center gap-3">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="text-secondary hover-warning">
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ zIndex: 1 }}>
        <small className="text-secondary">Scroll</small>
        <ChevronDown className="text-warning animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;