import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./sections/Home";
import Programs from "./sections/Programs";
import Info from "./sections/Info";
import CarouselSection from "./sections/CarouselSection";
import Sponsors from "./sections/Sponsors";
import Footer from "./components/Footer";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsScrolling(true);

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <Background>
      <div className="relative text-white overflow-x-hidden min-h-screen">
        <style jsx global>{`
          ::-webkit-scrollbar {
            display: none;
          }
          html {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <Navbar />

        <div className="fixed right-4 top-0 h-full w-12 z-50 pointer-events-none">
          <div className="relative h-full w-2 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-blue-500/30 to-cyan-500/20 rounded-full blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full"></div>

            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${i * 5}%`,
                  left: `${Math.random() > 0.5 ? "0px" : "4px"}`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </div>

          <div
            className={`absolute w-10 h-10 transition-all duration-300 ease-out ${
              isScrolling ? "scale-110" : "scale-100"
            }`}
            style={{ top: `calc(${scrollProgress}% - 20px)`, left: "-16px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-md animate-pulse"></div>
            <div className="relative w-10 h-10 bg-gradient-to-b from-gray-300 to-gray-100 rounded-full border-2 border-blue-300/50 flex items-center justify-center shadow-xl">
              <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full blur-sm"></div>
              <div className="w-6 h-6 bg-gradient-to-b from-blue-900/80 to-blue-700/80 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
              </div>
            </div>

            {isScrolling && (
              <>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gradient-to-t from-red-500 to-orange-400 rounded-full animate-pulse"></div>
              </>
            )}

            <div
              className={`absolute top-1/2 -left-8 w-6 h-0.5 bg-gradient-to-r from-transparent to-cyan-400/60 rounded-full transition-opacity duration-300 ${
                isScrolling ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-mono bg-black/50 px-2 py-1 rounded-full border border-cyan-500/30">
            {Math.round(scrollProgress)}%
          </div>
        </div>

        <main className="relative z-10">
          <section id="home">
            <Home />
          </section>
          <section id="programs">
            <Programs />
          </section>
          <section id="info">
            <Info />
          </section>
          <section id="carousel">
            <CarouselSection />
          </section>
          <section id="sponsors">
            <Sponsors />
          </section>
        </main>

        <Footer />
      </div>
    </Background>
  );
}

export default App;
