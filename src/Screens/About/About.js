import React, { Component } from "react";

import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div
          id="about"
          style={{ position: "absolute", top: 1000, right: "50%" }}
        />
        <div>About</div>
      </div>
    );
  }
}
