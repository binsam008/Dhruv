import React from "react";

// Import your guest images at the top
import rajeevImg from "../assets/images/rajeev.png";
 import satheesan from "../assets/images/satheesan.png"; 
 import rameshImg from "../assets/images/ramesh.png";
 import kuncheriaImg from "../assets/images/kuncheria.png";

const guestData = [
  {
    id: 1,
    name: "SRI ADV P RAJEEV",
    title: "HON'BLE MINISTER OF INDUSTRIES, LAW AND COURT, KERALA",
    image:rajeevImg , 
    gradientColors: "from-green-400 via-blue-500 to-purple-600"
  },
  {
    id: 2,
    name: "SRI ADV VD SATHEESAN", 
    title: "HON'BLE OPPOSITION LEADER OF KERALA",
    image: satheesan, 
    gradientColors: "from-purple-400 via-pink-500 to-red-500"
  },
  {
    id: 3,
    name: "DR RAMESH UNNIKRISHNAN",
    title: "FORMER DIRECTOR & ADVISOR OF AICTE INDIA", 
    image: rameshImg, 
    gradientColors: "from-orange-400 via-red-500 to-pink-500"
  },
  {
    id: 4,
    name: "DR KUNCHERIA P ISAAC",
    title: "EDUCATOR AND FORMER VICE CHANCELLOR OF APJKTU",
    image: kuncheriaImg,
    gradientColors: "from-pink-400 via-purple-500 to-indigo-600"
  }
];

const GuestCard = ({ guest }) => (
  <div className="relative h-[500px] overflow-hidden shadow-2xl">
    {/* Background gradient matching the image */}
    <div className={`absolute inset-0 bg-gradient-to-br ${guest.gradientColors} opacity-90`} />
    
    {/* Content container */}
    <div className="relative h-full flex flex-col">
      {/* Top text section */}
      <div className="p-4 pb-0 flex-shrink-0">
        <div className="text-white">
          <h2 className="text-lg font-bold mb-1 leading-tight tracking-wide">
            {guest.name}
          </h2>
          <div className="text-xs font-medium leading-tight opacity-90">
            {guest.title.split(' ').map((word, index) => (
              <div key={index} className="block">
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Image section - takes up remaining space */}
      <div className="flex-1 flex items-end justify-center px-4 pb-4">
        <div className="relative w-full">
          {/* Actual image */}
          <div className="w-full h-[320px] rounded-lg overflow-hidden">
            <img 
              src={guest.image} 
              alt={guest.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback placeholder */}
            <div className="w-full h-full bg-gray-300/20 backdrop-blur-sm border border-white/10 flex items-center justify-center" style={{display: 'none'}}>
              <div className="text-white/60 text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">
                    {guest.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <p className="text-xs opacity-75">Guest Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Subtle overlay for depth */}
    <div className="absolute inset-0 bg-black/5" />
  </div>
);

const Guests = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen overflow-hidden">
      {/* Animated Background */}
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

      {/* Header */}
      <div className="text-center mb-16 z-10 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4">
          GUEST SPEAKERS
        </h1>
        <p className="text-cyan-200/60 text-lg max-w-2xl mx-auto">
          Distinguished guests who will share their expertise and insights
        </p>
      </div>

      {/* Guests Grid - Horizontal Layout */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-4 gap-0">
          {guestData.map((guest) => (
            <GuestCard key={guest.id} guest={guest} />
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="container mx-auto px-4 mt-20 max-w-4xl text-center">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-cyan-200 mb-4">Join the Conversation</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            Don't miss this opportunity to learn from industry leaders and visionaries. 
            Each speaker brings decades of experience and unique insights that will inspire and educate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-200 rounded-full border border-cyan-500/30">
              Government Leadership
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full border border-blue-500/30">
              Educational Excellence
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/30">
              Policy Innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guests;