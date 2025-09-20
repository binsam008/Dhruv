import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(!expanded);
  const closeMenu = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg navstyl fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="https://via.placeholder.com/160x50.png?text=DHRUV+Logo"
            alt="Dhruv Logo"
            style={{ width: "160px", height: "auto" }}
            className="d-inline-block align-top"
          />
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

        {/* Links */}
        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
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

export default NavbarComponent;
