import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MaleComponent from "./GenderOptionComponent/Male";
import FemaleComponent from "./GenderOptionComponent/Female";

import "./style.css";

class Features extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    Male: false,
    Female: false
  };

  downloadFile() {
    this.props.gender = true;
  }

  render() {
    const { Male, Female } = this.state;
    return (
      <body className="bodylayout">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col lg-12 my-auto">
              <div className="body-content mx-auto">
                <div className="row h-100">
                  <div className="col col-lg-6 my-auto">
                    <div className="column-content mx-auto">
                      <button
                        onClick={() => this.setState({ Male: !Male })}
                        type="button"
                        class="btn btn-lg btn-dark btn-block"
                      >
                        Male
                      </button>
                      {Male ? <MaleComponent /> : null}
                    </div>
                  </div>
                  <div className="col col-lg-6 my-auto">
                    <div className="column-content mx-auto">
                      <button
                        // onClick={() => this.downloadFile()}
                        onClick={() => this.setState({ Female: !Female })}
                        type="button"
                        class="btn btn-lg btn-dark btn-block"
                      >
                        Female
                      </button>
                      {Female ? <FemaleComponent /> : null}

                      {this.props.gender ? (
                        <MaleComponent />
                      ) : (
                        <FemaleComponent />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Features;
