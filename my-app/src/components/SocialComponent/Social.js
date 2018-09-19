import React from "react";

import "./style.css";

const Social = () => {
  return (
    <body className="social">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col lg-12 my-auto">
            <div className="social-content mx-auto">
              <ul>
                <li>
                  <a href="www.facebook.com" class="fa fa-facebook" />
                </li>
                <li>
                  <a href="#" class="fa fa-twitter" />
                </li>
                <li>
                  <a href="#" class="fa fa-instagram" />
                </li>
                <li>
                  <a href="#" class="fa fa-youtube" />
                </li>
                <li>
                  <a href="#" class="fa fa-reddit" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Social;
