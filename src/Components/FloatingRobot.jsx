import React from "react";

const FloatingRobot = ({ scrollY, delay = 0 }) => (
  <div
    className="position-absolute opacity-60"
    style={{
      transform: `translateY(${Math.sin((scrollY + delay) * 0.01) * 20}px)`,
      transition: "all 0.1s ease-out",
    }}
  >
    <div className="w-12 h-12 bg-warning rounded shadow-lg border border-warning">
      <div className="w-3 h-3 bg-primary rounded-circle mt-2 ms-2 animate-pulse"></div>
      <div
        className="w-3 h-3 bg-primary rounded-circle mt-1 ms-4 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  </div>
);

export default FloatingRobot;
