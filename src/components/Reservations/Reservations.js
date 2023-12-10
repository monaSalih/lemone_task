import React, { useState } from "react";
import "./ReservationStyle.css";

// ReservationForm component
const ReservationForm = () => {
  // State hooks for form inputs
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [seatingPreference, setSeatingPreference] = useState("inside");

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationDetails = {
      name,
      date,
      guests,
      seatingPreference,
    };

    console.log("Reservation submitted:", reservationDetails);

    // Display form submit details as an alert
    alert(`Reservation submitted!\nWe will contact you shortly.\nThank you!`);
    setGuests("");
    setName("");
    setDate("");
    setSeatingPreference("");
  };

  // Render ReservationForm component
  return (
    <div className="Reservation-Form" id="reservations">
      <div className="reservation-section" id="reservation-section">
        <div className="reservation-details">
          {/* Reservation form heading */}
          <h2>Reservation Form</h2>
          {/* Reservation form description */}
          <p style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Commodi officiis deleniti ex repellendus
            accusantium exercitationem possimus, <br />
            sequi unde vero ipsa maxime optio odio dolorem assumenda at dolore
            eum recusandae expedita, quis ducimus natus fuga illum quidem.
            Voluptas saepe exercitationem, unde praesentium ad corrupti, eius
            ex, accusamus tempora sapiente fuga minus?
          </p>
        </div>
        <div className="form">
          {/* Reservation form */}
          <form onSubmit={handleSubmit}>
            {/* Name input */}
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-labelledby="name"
            />
            <br />

            {/* Date input */}
            <label htmlFor="date">Choose date:</label>
            <br />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              aria-labelledby="date"
            />
            <br />

            {/* Number of Guests input */}
            <label htmlFor="guests">Number of Guests:</label>
            <br />
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              aria-labelledby="guests"
            />
            <br />

            {/* Choose time input */}
            <label htmlFor="res-time">Choose time:</label>
            <select id="res-time" aria-labelledby="res-time">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
            <br />

            {/* Seating Preference input */}
            <label htmlFor="seatingPreference">Seating Preference:</label>
            <br />
            <select
              value={seatingPreference}
              onChange={(e) => setSeatingPreference(e.target.value)}
              id="seatingPreference"
              aria-labelledby="seatingPreference"
            >
              <option value="inside">Inside</option>
              <option value="outside">Outside</option>
            </select>
            <br />

            {/* Occasion input */}
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" aria-labelledby="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <br />

            {/* Submit button */}
            <button type="submit" aria-labelledby="submit">
              Reserve Table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
