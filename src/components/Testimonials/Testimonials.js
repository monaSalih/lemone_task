import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

// Testimonial data array
const testimonials = [
  {
    name: "Aaliyah",
    comment:
      "'Little Lemon wowed me! Flavors danced, service shone—a truly unforgettable dining experience.'",
    rating: 5,
    image: require("./Images/Aaliyah_Latest.jpg"),
  },
  {
    name: "Mark",
    comment:
      "'Culinary masterpiece! Little Lemon's detail, warm hospitality left me craving more. A memorable, delightful visit.'",
    rating: 5,
    image: require("./Images/Mark_Newest.jpg"),
  },
  {
    name: "Rodriquez",
    comment:
      "'Little Lemon, haven of excellence. Each bite told a story of passion. Friendly staff, home.'",
    rating: 5,
    image: require("./Images/Rodriquez_New.jpg"),
  },
  {
    name: "Martha",
    comment:
      "'Extraordinary! Little Lemon's tastes, welcoming atmosphere—a memorable, delicious adventure.'",
    rating: 5,
    image: require("./Images/Martha_Newest.jpg"),
  },
  // Add more testimonials with images if needed
];

// Testimonial component
const Testimonial = () => {
  return (
    // Testimonial section with background
    <div className="testimonial-bg" id="testimonial">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="testimonial-container">
        {/* Map through testimonials and render individual testimonial cards */}
        {testimonials.map((testimonial, index) => (
          <div className={`testimonial testimonial-${index + 1}`} key={index}>
            {/* Testimonial name */}
            <h3 style={{ marginLeft: "10px" }}>{testimonial.name}</h3>
            {/* Testimonial image */}
            <img
              src={testimonial.image}
              alt={`Testimonial ${index + 1}`}
              className={`testimonial-image`}
              width="207px"
            />
            {/* Testimonial comment with ARIA live attribute for accessibility */}
            <p className={`testimonial-comment`} aria-live="polite">
              {testimonial.comment}
            </p>
            {/* Testimonial information, including star ratings */}
            <div
              className={`testimonial-info`}
              style={{ color: "yellowgreen", marginLeft: "9px" }}
            >
              <h4>
                Ratings: {/* Display star ratings using FontAwesome icons */}
                <span
                  className={`testimonial-stars`}
                  style={{ marginLeft: "10px", color: "yellowgreen" }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
