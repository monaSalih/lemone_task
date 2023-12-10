import React from "react";
import { Element } from "react-scroll";
import HomePage from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Login from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Reservations from "./components/Reservations/Reservations";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Navigation />
      <Element name="home">
        <HomePage />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="menu">
        <Menu />
      </Element>
      <Element name="reservations">
        <Reservations />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Login />
      </Element>
    </div>
  );
}

export default App;
