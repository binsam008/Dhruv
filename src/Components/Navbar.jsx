import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(!expanded);
  const closeMenu = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg navstyl fixed-top">
      <div className="container-fluid">
        {/* Logo Text */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <span
            className="text-white font-bold sm:text-lg md:text-xl lg:text-2xl"
            style={{
              fontFamily: "Arial, sans-serif",
              textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff7f50, 0 0 20px #ff7f50, 0 0 25px #ff7f50, 0 0 30px #ff7f50, 0 0 35px #ff7f50",
            }}
          >
            DHRUV'25
          </span>
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {expanded ? <X color="white" /> : <Menu color="white" />}
        </button>

        {/* Links: Use a conditional class for visibility */}
        <div className={`nav-links-wrapper ${expanded ? "active" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {["Home", "Events", "Schedule", "Sponsors", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link mx-2"
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;