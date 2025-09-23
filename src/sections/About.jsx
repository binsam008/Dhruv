import React from "react";
import "../assets/css/About.css";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-15 animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-40 animate-pulse" />
      </div>

      <div className="text-center mb-16 z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-glow">
          About Us
        </h2>
        <p className="mt-4 text-lg md:text-xl text-cyan-200/80 max-w-3xl mx-auto font-light tracking-wide">
          Discover who we are and what drives us.
        </p>
      </div>

      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3 z-10 perspective-1000">
        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 hover:rotate-x-5 transition-all duration-500 ease-in-out group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-orbit" />
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-200 mb-4 drop-shadow-lg group-hover:text-cyan-100 transition-colors duration-300">
            🌌 Our Mission
          </h3>
          <p className="text-cyan-100/80 text-lg">
            We aim to innovate and inspire through technology, creating
            experiences that leave a lasting impact.
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 hover:rotate-x-5 transition-all duration-500 ease-in-out group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-orbit" />
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-200 mb-4 drop-shadow-lg group-hover:text-cyan-100 transition-colors duration-300">
            🚀 Our Vision
          </h3>
          <p className="text-cyan-100/80 text-lg">
            To build a future where creativity and innovation connect people
            across the world seamlessly.
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 hover:rotate-x-5 transition-all duration-500 ease-in-out group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-orbit" />
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-200 mb-4 drop-shadow-lg group-hover:text-cyan-100 transition-colors duration-300">
            🤝 Our Values
          </h3>
          <p className="text-cyan-100/80 text-lg">
            Collaboration, integrity, and excellence guide us in every step we
            take toward building the extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
