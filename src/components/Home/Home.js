// Importing necessary styles and components
import "./HomeStyle.css";
import HeroImage from "./smilingChef.png";
import Button from "../Button/Button";

// Home component for the homepage
export default function Home() {
  return (
    // Section for the home content with a gradient background
    <section
      style={{
        background: "linear-gradient(to top, #00A88483, #ffff00)",
        overflow: "hidden",
        borderBottomRightRadius: "300px",
      }}
      // Adding an id for easier navigation
      id="home"
      // Adding ARIA attribute to label the section for screen readers
      aria-labelledby="homeHeading"
    >
      {/* Container for the main content */}
      <div className="article">
        {/* Right side of the content */}
        <div className="right">
          {/* Heading for the restaurant */}
          <h1 id="homeHeading">
            <span>Welcome</span> to the Little Lemon Restaurant
          </h1>
          {/* Paragraph describing the restaurant */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            perferendis similique eius ipsam, culpa libero nemo aperiam cum
            veritatis voluptatibus maxime natus eligendi ratione magni nobis id
            vero ut ex.
          </p>
          {/* Button component for placing an order */}
          <Button
            // Adding descriptive text for screen readers
            aria-label="Place an order button"
            // Uncomment the line below to add a link to reservations
            // link="../Reservations/Reservations.js"
            text="place an order"
            // Adding a custom class for styling
            customClass="custom-style"
            // Adding an id for easier identification
            id="customId"
          />
        </div>
        {/* Left side of the content with an image */}
        <div className="left">
          {/* Image of a smiling chef with alt text */}
          <img src={HeroImage} alt="Smiling Chef" width="450px" />
        </div>
      </div>
    </section>
  );
}
