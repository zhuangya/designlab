import { Link } from "gatsby";
import React from "react";

import Social from "./social";
import Logo from "../images/assets/dr.svg";

import "./header-footer.css";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    var header = document.getElementById("header-line");
    if (window.pageYOffset >= 24) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <header
        className={`header${this.state.isToggleOn ? "" : " header-active"}`}
      >
        <div className="header-content">
          <a className="header-logo" href="/">
            <Logo />
          </a>
          <div
            className="menu-btn"
            onClick={this.handleClick}
            onFocus={() => 0}
          >
            {this.state.isToggleOn}
            <li></li>
          </div>
        </div>
        <div className="header-bg">
          <span>
            <Link className="header-link" to="/">
              <h1 className="title">Articles</h1>
            </Link>
            <Link className="header-link" to="/about/">
              <h1 className="title">About</h1>
            </Link>
            <a
              className="header-link"
              href="http://work.wenhaoqi.com/"
              target="_blank"
              title="Notion"
              rel="noopener noreferrer"
            >
              <h1 className="title">Works</h1>
            </a>
          </span>
          <span>
            <hr />
            <a href="tel:+86 186 0487 2509" title="Phone & Wechat">
              +86 186 0487 2509
            </a>
            <a href="mailto:curiosity.wen@gmail.com" title="Mail">
              curiosity.wen@gmail.com
            </a>
            <Social />
          </span>
        </div>
        <div id="header-line" className="header-line"></div>
      </header>
    );
  }
}

export default Header;
