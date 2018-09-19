import React from "react";

import "./style.css";

const Male = () => {
  return (
    <body className="gender">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col lg-12 my-auto">
            <div className="gender-content mx-auto">
              <div className="row h-100">
                <div className="col col-lg-6 my-auto">
                  <div className="column-content mx-auto">
                    <div className="row">
                      <h3>Knippen</h3>
                    </div>
                    <div className="row">
                      <div className="col col-lg-7 my-auto">
                        <ul>
                          <li>Knippen</li>
                          <li>Knippen + Wassen + Fohnen</li>
                          <li>Knippen + Wassen + Fohnen + Stylen</li>
                        </ul>
                      </div>
                      <div className="col col-lg-5 my-auto">
                        <ul>
                          <li>&euro; 15</li>
                          <li>&euro; 18</li>
                          <li>&euro; 20</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 my-auto">
                  <div className="column-content mx-auto">Block 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Male;
