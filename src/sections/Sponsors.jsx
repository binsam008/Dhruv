import React from "react";

const sponsors = ["TechCorp", "InnovateAI", "RoboTech", "FutureCode"];

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="relative py-24 bg-black text-white min-h-screen flex flex-col items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at center, rgba(30, 0, 60, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%),
          linear-gradient(45deg, rgba(0, 20, 40, 0.3) 0%, rgba(0, 0, 0, 1) 50%, rgba(20, 0, 40, 0.3) 100%)
        `,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 0.5}px`,
              height: `${Math.random() * 3 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}

        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting"
            style={{
              top: `${Math.random() * 30 + 10}%`,
              left: `-10px`,
              animationDelay: `${i * 8 + Math.random() * 5}s`,
            }}
          />
        ))}

        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-500/15 via-purple-500/20 to-transparent rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-500/10 via-blue-500/15 to-transparent rounded-full blur-3xl animate-float" />

        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full animate-drift opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="text-center mb-20 z-10 relative">
        <div className="relative inline-block">
          <h2 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 animate-glow-pulse mb-4">
            Our SPONSORS
          </h2>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/20 rounded-full animate-spin-slow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-500/20 rounded-full animate-spin-reverse pointer-events-none" />
        </div>

        <p className="mt-8 text-xl md:text-2xl text-cyan-200/70 max-w-4xl mx-auto font-light tracking-wider leading-relaxed">
          {" Powered by "}
          <span className="text-purple-400 font-semibold">
            {" industry leaders"}
          </span>
        </p>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {sponsors.map((sponsor, idx) => (
            <div
              key={sponsor}
              className="group relative transform hover:scale-105 transition-all duration-500 ease-out"
              style={{
                animationDelay: `${idx * 0.2}s`,
              }}
            >
              <div className="relative bg-gradient-to-br from-gray-900/40 via-black/60 to-gray-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                  <div
                    className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"
                    style={{ animationDelay: "0.25s" }}
                  />
                  <div
                    className="absolute top-4 bottom-4 right-4 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
                    style={{ animationDelay: "0.75s" }}
                  />
                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500" />
                <div className="absolute -inset-1 rounded-3xl border border-purple-500/20 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-black font-bold text-xl group-hover:animate-pulse">
                    {sponsor.charAt(0)}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
                    {sponsor}
                  </h3>

                  <div className="mt-4 text-cyan-200/60 text-sm tracking-widest">
                    ── COSMIC PARTNER ──
                  </div>
                </div>

                {[...Array(6)].map((_, i) => (
                  <div
                    key={`card-particle-${idx}-${i}`}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 animate-float-particle"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${10 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-24 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-cyan-500/30 via-purple-500/20 to-transparent rounded-full blur-xl animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes shooting {
          0% {
            transform: translateX(-10px) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(-50px);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(1deg);
          }
          66% {
            transform: translateY(10px) translateX(-5px) rotate(-1deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) translateX(15px) rotate(2deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) translateX(-10px) rotate(-1deg);
          }
        }

        @keyframes drift {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            text-shadow:
              0 0 20px rgba(34, 211, 238, 0.5),
              0 0 40px rgba(34, 211, 238, 0.3);
          }
          50% {
            text-shadow:
              0 0 30px rgba(34, 211, 238, 0.8),
              0 0 60px rgba(34, 211, 238, 0.5);
          }
        }

        @keyframes glow-pulse-delayed {
          0%,
          100% {
            text-shadow:
              0 0 20px rgba(147, 51, 234, 0.5),
              0 0 40px rgba(147, 51, 234, 0.3);
          }
          50% {
            text-shadow:
              0 0 30px rgba(147, 51, 234, 0.8),
              0 0 60px rgba(147, 51, 234, 0.5);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
          }
        }

        .animate-twinkle {
          animation: twinkle var(--tw-animate-duration, 3s) ease-in-out infinite;
        }
        .animate-shooting {
          animation: shooting 8s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        .animate-drift {
          animation: drift var(--tw-animate-duration, 20s) linear infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .animate-glow-pulse-delayed {
          animation: glow-pulse-delayed 3s ease-in-out infinite 1.5s;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-float-particle {
          animation: float-particle var(--tw-animate-duration, 4s) ease-in-out
            infinite;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
