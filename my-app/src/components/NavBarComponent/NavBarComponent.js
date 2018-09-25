import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

class NavBarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    // Line below binds the prop(this) that is inserted in onScroll to onTestScroll
    // this.onScroll = this.onTestScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });

        // this.onScroll(isTop);
      }
    });
  }

  // onTestScroll(isTop) {
  //   this.setState({ isTop });
  // }

  scrollTo = time => {
    scroll.scrollTo(time);
  };

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
                  onClick={() => this.scrollTo(500)}
                >
                  Behandelingen + Prijs
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
                  onClick={() => this.scrollTo(1000)}
                >
                  Social Media
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
                  onClick={() => this.scrollTo(1200)}
                >
                  Contact
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
