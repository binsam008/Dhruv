import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Icons
import { Calendar, Users } from "lucide-react";

const events = [
  {
    name: "Day 1",
    date: "October 09",
    participants: "200+",
    description:
      "Battle of the bots – experience AI-powered machines clashing in an epic showdown.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Day 2",
    date: "October 10",
    participants: "300+",
    description:
      "A 24-hour nonstop coding hackathon – only the strongest survive!",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Day 3",
    date: "October 11",
    participants: "100+",
    description:
      "Learn modern web development techniques from industry experts.",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const Events = () => {
  return (
    <section id="events" className="bg-black text-white p-16">
      <style>
        {`
        /* ==============================
           🌠 Events Section (Swiper)
           ============================== */
        .events-swiper {
          max-width: 1000px;
          height: 450px;
          margin: 0 auto;
          overflow: visible; 
        }

        /* Individual Slides (Cards) */
        .swiper-slide {
          width: 280px;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          position: relative;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.6);
          transition: all 0.5s ease-in-out;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

/* Glassmorphism content - hidden by default */
.event-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
  z-index: 2;
  background: rgba(255, 136, 0, 0.2);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0 0 18px 18px;
  
  opacity: 0; /* hidden initially */
  transform: translateY(20px); /* slide up animation */
  transition: all 0.4s ease;
}

/* Show glass effect on hover/touch */
.swiper-slide:hover .event-card-content {
  opacity: 1;
  transform: translateY(0);
}


        .swiper-pagination-bullet-active {
          background: #ffc107 !important;
        }

        /* Navigation arrows */
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffc107 !important;
          font-weight: bold;
          transition: transform 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.2);
        }

        /* Button */
        .btn-book-now {
          background: #ffc107;
          color: #000;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: 600;
          transition: background 0.3s ease;
          cursor: pointer;
        }

        .btn-book-now:hover {
          background: #e0a800;
        }
        `}
      </style>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-yellow-500">Featured Events</h2>
        <p className="text-white text-lg mt-2">
          Join us for days of innovation, competition, and excellence
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        loop={events.length > 2}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, EffectCoverflow, Navigation]}
        className="events-swiper"
      >
        {events.map((event, idx) => (
          <SwiperSlide
            key={idx}
            className="swiper-slide"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className="event-card-content">
              <h3 className="text-yellow-500 font-semibold">{event.name}</h3>
              <p className="flex items-center text-sm mb-1">
                <Calendar size={16} className="mr-2 text-yellow-500" />
                {event.date}
              </p>
              <p className="flex items-center text-sm mb-2">
                <Users size={16} className="mr-2 text-yellow-500" />
                {event.participants} participants
              </p>
              <p className="text-sm">{event.description}</p>
              <button className="btn-book-now mt-4">Book Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Events;
