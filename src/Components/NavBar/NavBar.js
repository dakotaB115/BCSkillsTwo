import React, { Component } from "react";

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
          {`<`}
          <span>BC</span>
          {`SKILLS>`}
        </div>
        <div className="elements">
          <div onClick={() => this.scrollTo("home")}>Home</div>
          <div onClick={() => this.scrollTo("about")}>About</div>
          <div onClick={() => this.scrollTo("testimonials")}>Testimonials</div>
          <div onClick={() => this.scrollTo("contact")}>Contact</div>
        </div>
      </div>
    );
  }
}
