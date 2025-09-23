import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 mb-6 md:mb-8 flex justify-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-52 md:w-72 lg:w-96 h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="relative z-10 max-w-3xl text-white text-center space-y-4 px-4 md:px-0">
        <p className="text-md md:text-lg lg:text-xl bg-black/40 backdrop-blur-md p-4 rounded-lg shadow-lg">
          Dhruv 2025 is a three-day Tech-Culture-Innovation Festival at MES
          College of Engineering and Technology. With 3,000+ daily attendees
          from 50+ colleges, it blends hackathons, cultural competitions, and
          live entertainment. As Title Sponsor, your brand gains exclusive
          visibility and powerful digital reach to a Gen-Z audience.
        </p>
        <p className="mt-2 text-yellow-400 font-semibold text-md md:text-lg lg:text-xl">
          October 09-11, 2025
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8 px-4">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col items-center p-3 md:p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            style={{
              background: "linear-gradient(145deg, #0b3d91, #1c7ed6, #122f5e)",
              boxShadow: "0 4px 15px rgba(18, 47, 94, 0.6)",
            }}
          >
            <span className="text-2xl md:text-3xl lg:text-5xl font-bold text-white drop-shadow-md">
              {value < 10 ? `0${value}` : value}
            </span>
            <span className="uppercase text-xs md:text-sm text-white/80 mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
