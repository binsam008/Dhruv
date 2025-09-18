import React, { useEffect, useState } from "react";
import "./GalaxyBackground.css";

const GalaxyBackground = ({ children }) => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Initial generation
    generateInitialStars();
    generateInitialMeteors();

    // Set up continuous star generation
    const starInterval = setInterval(() => {
      // Add a new falling star every second
      setStars((prevStars) => [...prevStars, createFallingStar(prevStars.length)]);
    }, 1000);

    // Set up continuous meteor generation
    const meteorInterval = setInterval(() => {
      // Add a new meteor every 5 seconds
      setMeteors((prevMeteors) => [...prevMeteors, createMeteor(prevMeteors.length)]);
    }, 5000);

    // Cleanup function to clear intervals and prevent memory leaks
    return () => {
      clearInterval(starInterval);
      clearInterval(meteorInterval);
    };
  }, []);

  // Creates a single falling star object with random properties
  const createFallingStar = (id) => ({
    id: `star-${id}-${Math.random()}`,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 10,
  });

  // Creates a single meteor object with random properties
  const createMeteor = (id) => ({
    id: `meteor-${id}-${Math.random()}`,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 10,
  });

  // Generates a large number of initial stars to fill the screen
  const generateInitialStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push(createFallingStar(i));
    }
    setStars(newStars);
  };

  // Generates initial meteors
  const generateInitialMeteors = () => {
    const newMeteors = [];
    for (let i = 0; i < 5; i++) {
      newMeteors.push(createMeteor(i));
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="galaxy-background">
      {/* Renders all stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star falling" // All stars are now falling
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Renders all meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size * 40}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: "-10%",
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}

      <div className="content">{children}</div>
    </div>
  );
};

export default GalaxyBackground;