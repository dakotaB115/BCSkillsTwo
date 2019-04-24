import React from "react";

import { Home, About, Testimonials, Contact } from "./Screens/ScreenIndex";
import { NavBar } from "./Components/ComponentIndex";

import "./App.scss";

function App() {
  return (
    <body className="App">
      <NavBar className="navbar" />
      <div className="home">
        <Home />
      </div>
      <About />
      <Testimonials />
      <Contact />
    </body>
  );
}

export default App;
