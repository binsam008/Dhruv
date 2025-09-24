import React, { useEffect, useState } from "react";
import "../assets/css/carousel.css";
import { title } from "framer-motion/client";
const scheduleData = [
  {
    day: "Day 1",
    date: "9th October 2025",
    events: [
      { time: "9:00 AM - 12:00 PM", title: "Inauguration" },
      { time: "12:30 PM - 3:30 PM", title: "Ideathon" },
      {
        time: "1:00 PM - 3:00 PM",
        title: "Workshop 1",
        details: [
          "AI/ML",
          "Robotics",
          "Construction",
          "Mechanical",
          "KSRTC Expo",
          "Medical Expo",
        ],
      },
    ],
  },
  {
    day: "Day 2",
    date: "10th October 2025",
    events: [
      { time: "9:00 AM - 10:00 AM", title: "Panel Discussion" },
      { time: "2:00 PM - 3:00 PM", title: "Mentalism" },
      { time: "3:00 PM - 4:00 PM", title: "Film Promotion" },
      { time: "6:00 PM - 9:00 PM", title: "Fashion Show" },
      {
        time: "All day",
        title: "Other Activities",
        details: ["AR/VR", "Offline Games", "Soppy Football", "Food Stall"],
      },
    ],
  },
  {
    day: "Day 3",
    date: "11th October 2025",
    events: [
      { time: "9:00 AM - 12:00 AM", title: "Closing Ceremony" },
      { time: "", title: "Food Fest" },
      { time: "4:00 PM - 8:00 PM", title: "Concert" },
      { time: "", title: "Online Gaming" },
      {time:"", title:"Autoshow"},
      
    ],
  },
];

const ScheduleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scheduleData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
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
          EVENTS
        </h2>
      </div>

      <div className="container mx-auto px-4 perspective-1000 w-full max-w-5xl">
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          {scheduleData.map((day, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <div
                key={index}
                className={`absolute w-full max-w-[90%] sm:max-w-[70%] md:max-w-[60%] transition-all duration-1000 ease-in-out transform ${
                  isActive
                    ? "translate-x-0 scale-100 opacity-100 rotate-y-0 z-10"
                    : offset > 0
                      ? "translate-x-[110%] scale-75 opacity-50 rotate-y-30"
                      : "-translate-x-[110%] scale-75 opacity-50 -rotate-y-30"
                }`}
                style={{
                  zIndex: 10 - absOffset,
                  transformOrigin: "center center",
                }}
              >
                <div className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-cyan-500/50 group min-h-[450px] sm:min-h-[500px] md:min-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-neon-green scrollbar-track-neon-magenta" 
                
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-orbit" />

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-200 mb-2 drop-shadow-lg group-hover:text-cyan-100 transition-colors duration-300">
                    {day.day}
                  </h3>
                  <p className="text-base sm:text-lg text-cyan-200/80 mb-6">
                    {day.date}
                  </p>
                  <ul className="space-y-4">
                    {day.events.map((event, idx) => (
                      <li
                        key={idx}
                        className="bg-white/10 p-4 rounded-lg transform hover:-translate-y-1 hover:shadow-cyan-400/30 transition-all duration-300"
                      >
                        <p className="font-semibold text-cyan-100 text-sm sm:text-base">
                          {event.time} - {event.title}
                        </p>
                        {event.details && (
                          <ul className="list-disc list-inside mt-2 text-cyan-100/80 text-xs sm:text-sm">
                            {event.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {scheduleData.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-cyan-400 scale-125"
                  : "bg-blue-500/50 hover:bg-blue-500/80"
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleCarousel;
