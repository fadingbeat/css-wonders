import React, { Component } from "react";
import Nina from "../images/Nina.jpeg";
import "../styles/aboutme.css";
import "../App.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="biography-wrapper">
        <div className="about-section">
          <div className="portrait">
            <img
              src={Nina}
              alt="Face of the author of the website: Light orange hair, light face and skin, eyes color deep blue."
            />
          </div>
          <div className="about-section">
            <div className="about-text">
              <h1>Nikolina Požega</h1>
              <h2>What I do</h2>
              <h2>Inspiration</h2>
              <h2>Why Photography</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
