import React from "react";

import { Home, About, Testimonials, Contact } from "./Screens/ScreenIndex";
import { NavBar } from "./Components/ComponentIndex";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
