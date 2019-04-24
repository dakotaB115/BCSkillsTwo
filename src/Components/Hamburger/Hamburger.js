import React, { Component } from "react";
import { Sidebar } from "../ComponentIndex";

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
        <div onClick={this.toggleSidebar}>
          <div>-</div>
          <div>-</div>
          <div>-</div>
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
              <div onClick={() => this.scrollTo("about")}>About</div>
              <div onClick={() => this.scrollTo("testimonials")}>
                Testimonials
              </div>
              <div onClick={() => this.scrollTo("contact")}>Contact</div>
            </div>
          </React.Fragment>
        </Sidebar>
      </div>
    );
  }
}
