import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Menu, X } from "lucide-react";
import wallELogo from "../assets/Dhruv.png"; // Make sure the path is correct

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="navstyl" expand="md" bg="dark" variant="dark" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">
          {/* Logo and Text */}
          <img
            src={wallELogo}
            alt="WALL-E Logo"
            style={{ width: '200px' }}
            className="d-inline-block align-top me-2"
          />
          {/* <span className="text-warning">WALL-E</span> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <X /> : <Menu />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["Home", "Events", "Schedule", "Sponsors", "Contact"].map(
              (item) => (
                <Nav.Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setExpanded(false)}
                >
                  {item}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;