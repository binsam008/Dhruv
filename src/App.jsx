import Background from "./components/Background";
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
