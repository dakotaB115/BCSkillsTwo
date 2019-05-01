import React from "react";

import {
  Home,
  About,
  // eslint-disable-next-line
  Testimonials,
  Contact,
  Bottom
} from "./Screens/ScreenIndex";
import { NavBar } from "./Components/ComponentIndex";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar className="navbar" />
      <div className="home">
        <Home />
      </div>
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
