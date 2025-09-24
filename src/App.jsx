import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
// import Home from "./sections/Home";
import Info from "./sections/Info";
import Carousel from "./sections/Carousel";
import Sponsors from "./sections/Sponsors";
import About from "./sections/About";
import Footer from "./components/Footer";
import IVA from "./assets/images/eva.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DayPrograms from "./pages/Day1";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day1" element={<DayPrograms day="day1" />} />
          <Route path="/day2" element={<DayPrograms day="day2" />} />
          <Route path="/day3" element={<DayPrograms day="day3" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Background>
    </Router>
  );
}

export default App;
