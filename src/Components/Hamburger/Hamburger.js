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
        <button
          className="toggle-button"
          onClick={() => {
            this.toggleSidebar();
          }}
        >
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
        </button>

        <Sidebar
          show={this.state.showSidebar}
          closeCallback={this.toggleSidebar}
          customClass="custom_sidebar_class"
        >
          <React.Fragment>
            <div className="elements">
              {/* <div className="header" /> */}
              <div className="element-wrapper">
                <div
                  className="element"
                  onClick={() => {
                    this.scrollTo("home");
                    this.toggleSidebar();
                  }}
                >
                  Home
                </div>
                <div
                  className="element"
                  onClick={() => {
                    this.scrollTo("about");
                    this.toggleSidebar();
                  }}
                >
                  About
                </div>
                <div
                  className="element"
                  onClick={() => {
                    this.scrollTo("testimonials");
                    this.toggleSidebar();
                  }}
                >
                  Testimonials
                </div>
                <div
                  className="element"
                  onClick={() => {
                    this.scrollTo("contact");
                    this.toggleSidebar();
                  }}
                >
                  Contact
                </div>
              </div>
            </div>
          </React.Fragment>
        </Sidebar>
      </div>
    );
  }
}
