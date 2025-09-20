import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Pagination,
    Autoplay,
    EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// For the icons
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
                    max-width: 800px;
                    height: 420px;
                    margin: 0 auto;
                    overflow: visible; 
                }
                
                /* Individual Slides (Cards) */
                .swiper-slide {
                    width: 300px;
                    height: 100%;
                    border-radius: 20px;
                    overflow: hidden;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
                    transition: all 0.5s ease-in-out;
                    border: 2px solid transparent;
                }
                
                /* The semi-transparent overlay */
                .swiper-slide::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.4);
                    backdrop-filter: blur(2px);
                    transition: backdrop-filter 0.5s ease-in-out, background 0.5s ease-in-out;
                    z-index: 1;
                }
                
                /* The text and button container */
                .event-card-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 1.5rem;
                    color: white;
                    z-index: 2;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(6px);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    opacity: 1;
                    transform: translateY(0);
                }
                
                /* Custom styles for Swiper pagination */
                .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.5) !important;
                }
                
                .swiper-pagination-bullet-active {
                    background: #ffc107 !important;
                }
                
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
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-yellow-500">Featured Events</h2>
                <p className="text-white text-lg mt-2">
                    Join us for days of innovation, competition, and excellence
                </p>
            </div>
            
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, EffectCoverflow]}
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