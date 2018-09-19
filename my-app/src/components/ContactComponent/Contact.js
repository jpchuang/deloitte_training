import React from "react";

import "./style.css";

const Contact = () => {
  return (
    <body className="contact">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col col-lg-12 my-auto">
            <div className="row h-100">
              <div className="col col-lg-6">
                <div className="row justify-content-center">
                  <h1>Openingstijden</h1>
                </div>
                <div className="row">
                  <div className="col col-lg-3">
                    <ul>
                      <li>Maandag: </li>
                      <li>Dinsdag: </li>
                      <li>Woensdag: </li>
                      <li>Donderdag </li>
                      <li>Vrijdag:</li>
                      <li>Zaterdag: </li>
                      <li>Zondag:</li>
                    </ul>
                  </div>
                  <div className="col col-lg-9">
                    <ul>
                      <li>11:00 - 19:00 </li>
                      <li>11:00 - 19:00 </li>
                      <li>11:00 - 19:00 </li>
                      <li>11:00 - 19:00 </li>
                      <li>10:00 - 18:00</li>
                      <li>11:00 - 19:00 </li>
                      <li>Gesloten</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="row justify-content-center">
                  <h1>Contact</h1>
                </div>
                <div className="row justify-content-center">
                  <ul>
                    <li>Kapsones Haarstudio</li>
                    <li>Adres: Geldersekade 113-F, 1011EN Amsterdam</li>
                    <li>Telefoon: 020-4205409</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Contact;
