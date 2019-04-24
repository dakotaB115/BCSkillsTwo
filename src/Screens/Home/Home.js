import React, { Component } from "react";

import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div
          id="home"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div className="content">
          <div className="pic-container">
            <img src={require(`../../Img/classpic.jpg`)} alt="classpic.jpg" />
          </div>
        </div>
      </div>
    );
  }
}
