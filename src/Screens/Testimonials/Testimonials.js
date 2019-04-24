import React, { Component } from "react";

import { Card } from "../../Components/ComponentIndex";

import "./Testimonials.scss";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonial-container">
        <div
          id="testimonials"
          style={{ position: "absolute", top: 2000, right: "50%" }}
        />
        <div>
          <Card />
        </div>
      </div>
    );
  }
}
