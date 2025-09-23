import { useEffect, useState } from "react";

export default function Background({ children }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (stars.length === 0) {
      const generatedStars = [];

      for (let i = 0; i < 200; i++) {
        generatedStars.push({
          size: "1px",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 5 + 2}s`,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }

      for (let i = 0; i < 50; i++) {
        generatedStars.push({
          size: "2px",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 5 + 3}s`,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }

      for (let i = 0; i < 20; i++) {
        generatedStars.push({
          size: "4px",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 6 + 4}s`,
          opacity: Math.random() * 0.9 + 0.1,
        });
      }

      setStars(generatedStars);
    }
  }, [stars.length]);

  return (
    <div className="relative w-full h-full">
      <div className="fixed inset-0 -z-20 overflow-hidden">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              animationDuration: star.duration,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 -z-30 pointer-events-none bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black/80 animate-nebula"></div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-twinkle {
          animation: twinkle linear infinite;
        }

        @keyframes nebulaMove {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 20px) scale(1.05);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-nebula {
          animation: nebulaMove 60s linear infinite;
        }
      `}</style>

      {children}
    </div>
  );
}
