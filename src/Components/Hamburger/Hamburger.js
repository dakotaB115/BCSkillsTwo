import React, { Component } from "react";
import { Sidebar } from "../ComponentIndex";

import "./Hamburger.scss";

export default class Hamburger extends Component {
  state = {
    showSidebar: false
  };

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  };

  scrollTo(name) {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div className="constructor">
        <div className="wrapper">
          <img
            className="menu"
            onClick={this.toggleSidebar}
            src={require(`../../Img/Hamburger_icon.png`)}
            alt="Hamburger_icon.png"
          />
        </div>

        <Sidebar
          show={this.state.showSidebar}
          closeCallback={this.toggleSidebar}
          customClass="custom_sidebar_class"
        >
          <React.Fragment>
            <div className="elements">
              <div
                onClick={() => {
                  this.scrollTo("home");
                  this.toggleSidebar();
                }}
              >
                Home
              </div>
              <div
                onClick={() => {
                  this.scrollTo("about");
                  this.toggleSidebar();
                }}
              >
                About
              </div>
              <div
                onClick={() => {
                  this.scrollTo("testimonials");
                  this.toggleSidebar();
                }}
              >
                Testimonials
              </div>
              <div
                onClick={() => {
                  this.scrollTo("contact");
                  this.toggleSidebar();
                }}
              >
                Contact
              </div>
            </div>
          </React.Fragment>
        </Sidebar>
      </div>
    );
  }
}
