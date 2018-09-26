import React, { Component } from "react";
import "./style.css";
import Fade from "react-reveal/Fade";

export const HeroComponent = props => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12 ">
            <div className="header-content mx-auto">
              <div className="content-top">
                <Fade top>
                  <h1>
                    <span style={{ color: "black" }}>Hairstudio</span> Kapsones
                  </h1>
                </Fade>
              </div>
              <div className="content-bottom">
                <Fade right>
                  <h4>Your creative hairstudio</h4>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroComponent;
