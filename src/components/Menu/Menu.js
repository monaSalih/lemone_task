import GreekSalad from "./Images/greek-salad.jpg";
import BoiledMarineLobster from "./Images/Boiled-Marine-Lobster-Adj.jpg";
import BuffaloWings from "./Images/Buffalo-Wings-Adj.jpg";
import EggBenedict from "./Images/Egg-Benedict-Adj.jpg";
import ChickenTender from "./Images/Chicken-Tender-Adj.jpg";
import Stromboli from "./Images/Stromboli-Adj.jpg";
import SalisburyStake from "./Images/Salisbury-Stake-Adj.jpg";
import DishPizza from "./Images/Chicago-Style-Deep-Dish-Pizza-Adj.jpg"
import "./Menu.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

 // Main container for the menu section with ARIA attributes
export default function Menu() {
  return (
    <div className="menu-bg" id="menu" role="region" aria-label="Menu">
      <div className="main-container">
        <h2>Menu</h2>

        <div className="Card-Container">
          <div className="card" role="menuitem">
            <img src={GreekSalad} alt="" width="207px" />
            <h3>
              Greek Salad <span>$30.21</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              consectetur?
            </p>
            <div
              style={{
                color: "yellowgreen",
                marginLeft: "9px",
              }}
              className="rating-mobile"
              role="img"
              aria-label="Rating: 5 stars"
            >
              <h4>
                Ratings:{" "}
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={BoiledMarineLobster} alt="" width="207px" />
            <h3>
              Boiled Lobster <span>$23.42</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              consectetur?
            </p>
            <div
              style={{
                color: "yellowgreen",
                marginLeft: "9px",
              }}
            >
              <h4>
                Ratings:{" "}
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={BuffaloWings} alt="" width="207px" />
            <h3>
              Buffalo Wings <span>$40.33</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              consectetur?
            </p>
            <div
              style={{
                color: "yellowgreen",
                marginLeft: "9px",
              }}
            >
              <h4>
                Ratings:{" "}
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={EggBenedict} alt="" width="207px" />
            <h3>
              Egg Benedict <span>$15.28</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              consectetur?
            </p>
            <div
              style={{
                color: "yellowgreen",
                marginLeft: "9px",
              }}
            >
              <h4>
                Ratings:{" "}
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={ChickenTender} alt="" width="207px" />
            <h3>
              Chicken Tender <span>$15.28</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              consectetur?
            </p>
            <div
              style={{
                color: "yellowgreen",
                marginLeft: "9px",
              }}
            >
              <h4>
                Ratings:{" "}
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={Stromboli} alt="" width="207px" />
            <h3>
              Stromboli <span>$32.19</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              consectetur?
            </p>
            <div
              style={{
                color: "yellowgreen",
                marginLeft: "9px",
              }}
            >
              <h4>
                Ratings:{" "}
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={SalisburyStake} alt="" width="207px" />
            <h3>
              Stalisbury Stake <span>$28.55</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              consectetur?
            </p>
            <div
              style={{
                color: "yellowgreen",
                marginLeft: "9px",
              }}
            >
              <h4>
                Ratings:{" "}
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={DishPizza} alt="" width="207px" />
            <h3>
              Dish Pizza <span>$18.19</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
              consectetur?
            </p>
            <div
              style={{
                color: "yellowgreen",
                marginLeft: "9px",
              }}
            >
              <h4>
                Ratings:{" "}
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
