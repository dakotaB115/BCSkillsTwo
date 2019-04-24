import React, { Component } from "react";

import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-header" style={{ position: "relative" }}>
          <div className="about-header-contents">
            <div className="about-title">About Us</div>
            <div
              id="about"
              style={{ position: "absolute", top: -71, right: "50%" }}
            />
            <div className="about-description">
              At <span>BCSKILLS</span>, we believe <span>EVERYONE</span> has the
              capacity to be an innovator. We exist to provide opportunities for
              our students and our community to do just that. With an emphasis
              on computer science,
              <span> BCSKILLS</span> is a place where high-demand skills are
              gained and connected to <span>industry</span>,
              <span> entrepreneurship</span>, and <span>higher-education</span>.
            </div>
          </div>
        </div>

        <div className="about-mission">
          <div className="about-mission-content">
            <div className="about-mission-title">Mission statement</div>
            <div className="about-mission-statement">
              We offer <span>EDUCATION</span> opportunities beginning as early
              as 4th grade and continuing throughout adulthood. We facilitate
              opportunities for <span>INNOVATION</span> including partnerships
              with both public and private sector as well as the research and
              development of original products. We <span>DEPLOY</span>
              our people both locally and nationally as <span>app</span>/
              <span>software</span>/<span>webdevelopers</span>, to
              higher-education, and as <span>ENTREPRENEURS</span>.
            </div>
          </div>
        </div>

        <div className="about-container-img">
          <img
            className="about-img"
            src={require(`../../Img/BCSkillsEID.jpg`)}
            alt="BCSkillsEID.jpg"
          />
        </div>
      </div>
    );
  }
}
