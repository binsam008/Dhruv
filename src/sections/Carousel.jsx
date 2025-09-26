import React, { useEffect, useState } from "react";
import { X, Clock, Calendar, MapPin } from "lucide-react";

const scheduleData = [
  {
    day: "Day 1",
    date: "9th October 2025",
    events: [
      { 
        time: "9:00 AM - 12:00 PM", 
        title: "Inauguration",
        description: "Grand opening ceremony with keynote speakers",
        venue: "Main Auditorium"
      },
      { 
        time: "12:30 PM - 3:30 PM", 
        title: "Ideathon",
        description: "Collaborative innovation challenge",
        venue: "Innovation Hub"
      },
      {
        time: "1:00 PM - 3:00 PM",
        title: "Workshop 1",
        description: "Technical workshops across multiple domains",
        venue: "Various Halls",
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
      { 
        time: "9:00 AM - 10:00 AM", 
        title: "Panel Discussion",
        description: "Industry experts share insights",
        venue: "Main stage"
      },
      { 
        time: "2:00 PM - 3:00 PM", 
        title: "Mentalism",
        description: "Mind-bending performance",
        venue: "Main Stage"
      },
      { 
        time: "3:00 PM - 4:00 PM", 
        title: "Film Promotion",
        description: "Latest movie previews and discussions",
        venue: "Main Stage"
      },
      { 
        time: "4:00 PM - 7:00 PM", 
        title: "Concert ",
        description: "Pataholic – A Night of Music & Madness! 🎶✨,An electrifying concert full of beats, vibes, and unforgettable energy! ",
        venue: "Main Stage"
      },
      {
        time: "All day",
        title: "Other Activities",
        description: "Fun activities throughout the day",
        venue: "Multiple Locations",
        details: ["AR/VR", "Offline Games", "Soppy Football", "Food Stall"],
      },
    ],
  },
  {
    day: "Day 3",
    date: "11th October 2025",
    events: [
      { 
        time: "9:00 AM - 12:00 PM", 
        title: "Closing Ceremony",
        description: "Award ceremony and farewell",
        venue: "Main Auditorium"
      },
      { 
        time: "All day", 
        title: "Food Fest",
        description: "Culinary delights from around the world",
        venue: "Food Court"
      },
      { 
        time: "12:00 PM - 8:00 PM", 
        title: "Fashion Show",
        description: "Live music performances",
        venue: "Outdoor Stage"
      },
      { 
        time: "All day", 
        title: "Online Gaming",
        description: "Competitive gaming tournaments",
        venue: "Gaming Zone"
      },
      { 
        time: "All day", 
        title: "Autoshow",
        description: "Latest automobile exhibitions",
        venue: "Exhibition Ground"
      },
    ],
  },
];

const EventCard = ({ event }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleRegister = (e) => {
    e.stopPropagation();
    setIsRegistered(!isRegistered);
    // Here you would typically make an API call to register/unregister
    console.log(`${isRegistered ? 'Unregistered from' : 'Registered for'}: ${event.title}`);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-xl font-bold text-cyan-100 flex-1">{event.title}</h4>
        {event.time && (
          <div className="flex items-center text-cyan-300/80 text-sm ml-4">
            <Clock className="w-4 h-4 mr-1" />
            {event.time}
          </div>
        )}
      </div>
      
      {event.description && (
        <p className="text-slate-300 mb-3 text-sm leading-relaxed">{event.description}</p>
      )}
      
      {event.venue && (
        <div className="flex items-center text-cyan-400/80 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          {event.venue}
        </div>
      )}
      
      {event.details && (
        <div className="mt-4 mb-4">
          <p className="text-cyan-200/80 text-sm font-medium mb-2">Activities:</p>
          <div className="flex flex-wrap gap-2">
            {event.details.map((detail, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-cyan-500/20 text-cyan-200 text-xs rounded-full border border-cyan-500/30"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="pt-4 border-t border-cyan-500/20">
        <button
          onClick={handleRegister}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
            isRegistered
              ? 'bg-green-500/20 border border-green-500/50 text-green-300 hover:bg-green-500/30'
              : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg hover:shadow-cyan-500/30'
          }`}
        >
          {isRegistered ? '✓ Registered' : 'Register Now'}
        </button>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, day }) => {
  if (!isOpen || !day) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-cyan-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-sm border-b border-cyan-500/30 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {day.day}
            </h2>
            <div className="flex items-center text-cyan-300/80 mt-1">
              <Calendar className="w-4 h-4 mr-2" />
              {day.date}
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] custom-scrollbar">
          <div className="grid gap-4 md:gap-6">
            {day.events.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isModalOpen) {
        setCurrentIndex((prev) => (prev + 1) % scheduleData.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isModalOpen]);

  const handleCardClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };

  return (
    <>
      <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-15 animate-pulse"
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
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            EVENTS
          </h2>
          <p className="text-cyan-200/60 mt-4 text-lg">Click on any day to explore events</p>
        </div>

        <div className="container mx-auto px-4 w-full max-w-5xl">
          <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
            {scheduleData.map((day, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;

              return (
                <div
                  key={index}
                  className={`absolute w-full max-w-[90%] sm:max-w-[70%] md:max-w-[60%] transition-all duration-1000 ease-in-out transform cursor-pointer ${
                    isActive
                      ? "translate-x-0 scale-100 opacity-100 z-10"
                      : offset > 0
                      ? "translate-x-[110%] scale-75 opacity-50"
                      : "-translate-x-[110%] scale-75 opacity-50"
                  }`}
                  onClick={() => handleCardClick(day)}
                >
                  <div className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-cyan-500/50 group min-h-[450px] sm:min-h-[500px] md:min-h-[600px] overflow-y-auto transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-200 mb-2 drop-shadow-lg group-hover:text-cyan-100 transition-colors duration-300">
                        {day.day}
                      </h3>
                      <div className="flex items-center text-cyan-200/80 mb-6">
                        <Calendar className="w-5 h-5 mr-2" />
                        <p className="text-base sm:text-lg">{day.date}</p>
                      </div>
                      
                      <div className="space-y-4">
                        {day.events.slice(0, 3).map((event, idx) => (
                          <div
                            key={idx}
                            className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-semibold text-cyan-100 text-sm sm:text-base">
                                {event.title}
                              </p>
                              {event.time && (
                                <div className="flex items-center text-cyan-300/80 text-xs">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {event.time.split(' - ')[0]}
                                </div>
                              )}
                            </div>
                            {event.description && (
                              <p className="text-cyan-100/60 text-xs sm:text-sm">{event.description}</p>
                            )}
                          </div>
                        ))}
                        
                        {day.events.length > 3 && (
                          <div className="text-center pt-4">
                            <span className="text-cyan-300/60 text-sm">
                              +{day.events.length - 3} more events
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="absolute bottom-4 right-4 text-cyan-400/60 text-sm">
                        Click to explore →
                      </div>
                    </div>
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
              />
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} day={selectedDay} />
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(71, 85, 105, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.7);
        }
      `}</style>
    </>
  );
};

export default ScheduleCarousel;