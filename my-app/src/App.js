import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "font-awesome/css/font-awesome.css";

import HeroComponent from "./components/HeroComponent/HeroComponent";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import Features from "./components/FeaturesComponent/Features";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBarComponent />
          <HeroComponent />
          <Features />
        </div>
      </Router>
    );
  }
}

export default App;
