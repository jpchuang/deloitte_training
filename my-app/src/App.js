import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "font-awesome/css/font-awesome.css";

import HeroComponent from "./components/HeroComponent/HeroComponent";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import Features from "./components/FeaturesComponent/Features";
import Social from "./components/SocialComponent/Social";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBarComponent />
          <HeroComponent />
          <Features />
          <Social />
          <Contact />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
