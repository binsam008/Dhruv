import Homepage from "./Pages/Homepage.jsx";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* Main entry point */}
      <Homepage />
    </div>
  );
};

export default App;
