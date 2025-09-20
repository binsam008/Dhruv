import { useEffect, useState } from "react";

const GalaxyBackground = ({ children }) => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateInitialStars();
    generateInitialMeteors();

    const starInterval = setInterval(() => {
      setStars((prev) => [...prev, createFallingStar(prev.length)]);
    }, 1000);

    const meteorInterval = setInterval(() => {
      setMeteors((prev) => [...prev, createMeteor(prev.length)]);
    }, 5000);

    return () => {
      clearInterval(starInterval);
      clearInterval(meteorInterval);
    };
  }, []);

  const createFallingStar = (id) => ({
    id: `star-${id}-${Math.random()}`,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 10,
  });

  const createMeteor = (id) => ({
    id: `meteor-${id}-${Math.random()}`,
    size: Math.random() * 2 + 1,
    x: Math.random() * 90,
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 10,
  });

  const generateInitialStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    setStars(Array.from({ length: numberOfStars }, (_, i) => createFallingStar(i)));
  };

  const generateInitialMeteors = () => {
    setMeteors(Array.from({ length: 5 }, (_, i) => createMeteor(i)));
  };

  return (
    <div className="galaxy-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star falling"
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
