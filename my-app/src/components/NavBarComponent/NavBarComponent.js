import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class NavBarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };

    this.onScroll = this.onTestScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onTestScroll(isTop) {
    this.setState({ isTop });
  }

  scrollTo() {
    scroll.scrollTo(500);
  }

  scrollTo2() {
    scroll.scrollTo(1000);
  }

  scrollTo3() {
    scroll.scrollTo(1200);
  }

  render() {
    const { isTop } = this.state;
    return (
      <nav
        className={
          isTop
            ? "navbar navbar-expand-lg navbar-light fixed-top"
            : "navbar navbar-expand-lg navbar-light fixed-top bg-dark"
        }
        id="mainNav"
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link js-scroll-trigger"
                  to=""
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  <a onClick={this.scrollTo}> Behandelingen + Prijs</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link js-scroll-trigger"
                  to="afspraak"
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  Afspraak maken
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link js-scroll-trigger"
                  to=""
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  <a onClick={this.scrollTo2}> Social Media</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link js-scroll-trigger"
                  to=""
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  <a onClick={this.scrollTo3}> Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBarComponent;
