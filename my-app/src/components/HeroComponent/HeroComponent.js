import React, { Component } from "react";
import "./style.css";
import Fade from "react-reveal/Fade";

export const HeroComponent = props => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12 my-auto">
            <div className="header-content mx-auto">
              <Fade top>
                <h1>
                  Welkom bij <span style={{ color: "#fdcc52" }}>Kapsonses</span>{" "}
                  kapperzaak
                </h1>
                <a
                  href="appointment"
                  className="btn btn-secondary btn-outline btn-lg btn-xl js-scroll-trigger"
                >
                  Afspraak maken!
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroComponent;
