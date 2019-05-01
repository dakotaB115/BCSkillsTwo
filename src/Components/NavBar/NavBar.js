import React, { Component } from "react";
import { Hamburger } from "../ComponentIndex";

import "./NavBar.scss";

export default class NavBar extends Component {

  scrollTo(name) {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div className="navbar">
        <div className="title" onClick={() => this.scrollTo("home")}>
          <img
            className="about-img"
            src={require(`../../Img/BCFullBadgeRev.png`)}
            alt="BCFullBadgeRev.png"
          />
        </div>
        <div className="navbar-elements">
          <div onClick={() => this.scrollTo("home")}>Home</div>
          <div onClick={() => this.scrollTo("about")}>About</div>
          {/* <div onClick={() => this.scrollTo("testimonials")}>Testimonials</div> */}
          <div onClick={() => this.scrollTo("contact")}>Contact</div>
          <a href="https://sites.google.com/barren.kyschools.us/bcskillsenrollment/home?fbclid=IwAR3vQeHvZGNmEkEtrBiPeW1xYRgr3n1DCluH25iBa0M0y6CjWVnGIH7U0eM">Enroll Now!</a>
          <div className="hamburger">
            <Hamburger />
          </div>
        </div>
      </div>
    );
  }
}
