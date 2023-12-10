import React, { useState, useEffect } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-scroll";

const HamburgerMenu = () => {
  // State for managing menu open/close and scroll
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle menu open/close
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle scroll and update isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Main container for the hamburger menu
    <div
      className={`hamburger-menu ${isOpen ? "open" : ""}`}
      onClick={handleMenuToggle}
      aria-expanded={isOpen} // ARIA attribute for menu state
      role="button" // ARIA role to indicate interactivity
      tabIndex="0" // ARIA attribute to make it focusable
    >
      {/* Hamburger icon with spans */}
      <div className="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu items */}
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        {/* List of navigation links */}
        <ul
          style={{
            color: "#333",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px 30px",
            outline: isScrolled ? "2px solid ##a09b8e67" : "",
            backdropFilter: "blur(10px)",
            borderTopLeftRadius: "40px",
          }}
        >
          {/* Each navigation link */}
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-35}
              duration={500}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="reservations"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
