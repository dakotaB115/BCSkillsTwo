import React, { Component } from "react";

import "./Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div
          id="contact"
          style={{ position: "absolute", top: 3000, right: "50%" }}
        />
        <div>Contact</div>
      </div>
    );
  }
}
