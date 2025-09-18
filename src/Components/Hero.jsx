import React from "react";
import { Button } from "react-bootstrap";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex flex-column justify-content-center text-center text-light">
      <div className="mb-6">
        <h1 className="display-1 fw-bold text-warning">DHRUV'25</h1>
        {/* <h2 className="h2 fw-bold">TechFest 202</h2> */}
        <p className="lead">Where Technology Meets Innovation<br/> 
          <span className="text-warning">October 09-11, 2025</span>
        </p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <Button variant="warning" size="lg">Register Now</Button>
          <Button variant="outline-warning" size="lg">View Events</Button>
        </div>
        <div className="d-flex justify-content-center gap-3">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="text-secondary hover-warning">
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <small className="text-secondary">Scroll</small>
        <ChevronDown className="text-warning animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
