import React, { Component } from "react";

import { Button } from "../../Components/ComponentIndex";

import "./Testimonials.scss";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonial-container" style={{ position: "relative" }}>
        <div
          id="testimonials"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div className="row-one">
          <Button img="jacob.png" name="Jacob Finn" />
          <Button img="jamie.png" name="Jamie Cummings" />
          <Button img="alex.png" name="Alex Richardson" />
          <Button img="spencer.png" name="Spencer Casteel" />
          <Button img="Katelyn.png" name="Katelyn Pace" />
          <Button img="Matthew.png" name="Matthew Riley" />
          <Button img="alex.png" name="Alex Richardson" />
          <Button img="spencer.png" name="Spencer Casteel" />
        </div>
        <div className="row-middle-one">
          <Button img="Katelyn.png" name="Katelyn Pace" />
          <Button img="Matthew.png" name="Matthew Riley" />
          <Button img="alex.png" name="Alex Richardson" />
          <Button img="spencer.png" name="Spencer Casteel" />
          <Button img="Katelyn.png" name="Katelyn Pace" />
          <Button img="Matthew.png" name="Matthew Riley" />
          <Button img="alex.png" name="Alex Richardson" />
          <Button img="spencer.png" name="Spencer Casteel" />
        </div>
        <div className="row-middle-two">
          <Button img="Katelyn.png" name="Katelyn Pace" />
          <Button img="Matthew.png" name="Matthew Riley" />
          <Button img="alex.png" name="Alex Richardson" />
          <Button img="spencer.png" name="Spencer Casteel" />
          <Button img="Katelyn.png" name="Katelyn Pace" />
          <Button img="Matthew.png" name="Matthew Riley" />
          <Button img="alex.png" name="Alex Richardson" />
          <Button img="spencer.png" name="Spencer Casteel" />
        </div>
        <div className="row-last">
          <Button img="Katelyn.png" name="Katelyn Pace" />
          <Button img="Matthew.png" name="Matthew Riley" />
          <Button img="alex.png" name="Alex Richardson" />
          <Button img="spencer.png" name="Spencer Casteel" />
          <Button img="Katelyn.png" name="Katelyn Pace" />
          <Button img="Matthew.png" name="Matthew Riley" />
          <Button img="alex.png" name="Alex Richardson" />
          <Button img="spencer.png" name="Spencer Casteel" />
        </div>
      </div>
    );
  }
}
