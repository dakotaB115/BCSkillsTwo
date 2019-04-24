import React, { Component } from "react";

import "./Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container" style={{ position: "relative" }}>
        <div
          id="contact"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div>Contact</div>
      </div>
    );
  }
}
