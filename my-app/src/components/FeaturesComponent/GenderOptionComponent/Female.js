import React from "react";
import Fade from "react-reveal/Fade";

import "./style.css";

const Female = () => {
  return (
    <Fade top>
      <body className="gender">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col lg-12 my-auto">
              <div className="gender-content mx-auto">
                <div className="row h-100">
                  <div className="col col-lg-6 my-auto">
                    <div className="column-content mx-auto">
                      <div className="row">
                        <h3>
                          <span style={{ color: "#fdcc52" }}>Knippen</span>
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col col-lg-8 px-0">
                          <ul>
                            <li>Knippen</li>
                            <li>Knippen + Wassen / Stylen</li>
                          </ul>
                        </div>
                        <div className="col col-lg-4 my-auto">
                          <ul>
                            <li>&euro; 15</li>
                            <li>&euro; 18</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-6 my-auto">
                    <div className="column-content mx-auto">
                      <div className="row">
                        <h3>
                          <span style={{ color: "#fdcc52" }}>Specials</span>
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col col-lg-8 px-0">
                          <ul>
                            <li>Full Color</li>
                            <li>Technical Color</li>
                            <li>Toner after treatment</li>
                            <li>Normal Toner</li>
                          </ul>
                        </div>
                        <div className="col col-lg-4">
                          <ul>
                            <li>&euro; 50</li>
                            <li>&euro; 65</li>
                            <li>&euro; 15</li>
                            <li>&euro; 30</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Fade>
  );
};

export default Female;
