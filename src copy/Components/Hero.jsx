import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-09T00:00:00"); // event start
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

  return (
    <section
      id="home"
      className="min-vh-100 d-flex flex-column justify-content-center text-center text-light position-relative"
    >
      <div className="mb-6">
        <h1 className="display-1 fw-bold text-warning">DHRUV'25</h1>
        <p className="lead">
          Where Technology Meets Innovation <br />
          <span className="text-warning">October 09-11, 2025</span>
        </p>

        {/* Countdown Timer */}
        <div className="d-flex justify-content-center gap-4 my-4">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="text-center">
              <h2 className="fw-bold text-warning">{value}</h2>
              <small className="text-secondary text-uppercase">{label}</small>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <Button variant="warning" size="lg">
            Register Now
          </Button>
          <Button variant="outline-warning" size="lg">
            View Events
          </Button>
        </div>

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
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <small className="text-secondary">Scroll</small>
        <ChevronDown className="text-warning animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
