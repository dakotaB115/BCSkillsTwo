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
        <div className="body-container">
          <div className="header">
            <div className="title">Contact Us</div>
            <div className="subtitle" />
          </div>
          <div className="column">
            <div className="left">
              Call me at:
              <div className="phone">270-629-3967 (Office)</div>
              <div className="phone">270-590-0053 (Mobile)</div>
            </div>
            <div className="right">
              <div className="message">Contact me at:</div>
              <div className="email">
                Email:
                <div>justin.browning@barren.kyschools.us</div>
              </div>
              <div className="social">
                <div className="twitter">
                  Twitter:
                  <div>
                    <a
                      href="https://twitter.com/JustinBBrowning"
                      target="_blank rel='noreferrer noopener'"
                    >
                      @JustinBBrowning
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
