import React from "react";
import "./ContactStyle.css";
import FooterLogo from "./Images/Little_Lemon_Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faTwitter, faInstagram);

export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Footer section */}
      <div className="footer" id="contact">
        <div className="footer-logo">
          <img src={FooterLogo} alt="" />
        </div>
        {/* Doormat Navigation */}
        <div className="doormat-navigation">
          <h3>Doormat Navigation</h3>
          {/* onClick events for smooth scrolling to respective sections */}
          <p onClick={() => scrollToSection("home")}>Home</p>
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("menu")}>Menu</p>
          <p onClick={() => scrollToSection("reservations")}>Reservations</p>
          <p onClick={() => scrollToSection("testimonial")}>Testimonial</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>
        </div>
        {/* Contact Navigation */}
        <div className="contact-navigation" id="contact">
          <h3>Contact</h3>
          {/* onClick events for smooth scrolling to respective sections */}
          <p onClick={() => scrollToSection("location")}>
            {/* Font Awesome icon with color and ARIA label */}
            <span style={{ color: "#4F625C" }}>
              <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
            </span>
            {"  "}
            Boulevard Crescent, <br />
            Little Lemon HQ.
          </p>
          <p onClick={() => scrollToSection("phone")}>
            <span style={{ color: "#4F625C" }}>
              <FontAwesomeIcon icon={faAddressBook} aria-hidden="true" />
            </span>
            <span> +123123123</span>
          </p>
          <p onClick={() => scrollToSection("email")}>
            <span style={{ color: "#4F625C" }}>
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            </span>
            {"  "}
            order@littlelemon.com
          </p>
        </div>
        {/* Social Media Links */}
        <div className="social-media-navigation">
          <h3>Social Media Links</h3>
          <p>
            <span style={{ color: "#1b1bbe" }}>
              {/* Font Awesome icon with color and ARIA label */}
              <FontAwesomeIcon icon={["fab", "facebook"]} aria-hidden="true" />
            </span>
            {"   "}
            Facebook
          </p>
          <p>
            <span style={{ color: "brown" }}>
              <FontAwesomeIcon icon={["fab", "instagram"]} aria-hidden="true" />
            </span>
            {"   "}
            Instagram
          </p>
          <p>
            <span style={{ color: "lightblue" }}>
              <FontAwesomeIcon icon={["fab", "twitter"]} aria-hidden="true" />
            </span>
            {"   "}
            Twitter
          </p>
        </div>
      </div>
    </div>
  );
}
