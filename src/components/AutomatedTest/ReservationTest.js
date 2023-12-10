import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

test("renders reservation form", () => {
  render(<ReservationForm />);

  // Check if the form elements are rendered
  const nameInput = screen.getByLabelText(/name/i);
  const dateInput = screen.getByLabelText(/choose date/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const seatingSelect = screen.getByLabelText(/seating preference/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const reserveButton = screen.getByRole("button", { name: /reserve table/i });

  expect(nameInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(seatingSelect).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();
  expect(reserveButton).toBeInTheDocument();
});

test("submits reservation form", () => {
  render(<ReservationForm />);

  // Fill in the form
  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2023-11-30" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "5" },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "19:00" },
  });
  fireEvent.change(screen.getByLabelText(/seating preference/i), {
    target: { value: "outside" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  // Submit the form
  fireEvent.click(screen.getByRole("button", { name: /reserve table/i }));

  // Check if the form submission details alert is displayed
  const alert = screen.getByText(/reservation submitted/i);
  expect(alert).toBeInTheDocument();
});
