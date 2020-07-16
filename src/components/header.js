import { Link } from "gatsby";
import React from "react";

import SplitText from "../components/splittext";

import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <header
        id="#home"
        className={`header${this.state.isToggleOn ? "" : " header-active"}`}
      >
        <div className="header-content">
          <a className="header-logo logo-type" href="/">
            curiosity<span>wen</span>
          </a>
          <div
            className="menu-btn"
            onClick={this.handleClick}
            onFocus={() => 0}
            role="button"
            onKeyPress={() => {}}
            tabIndex="0"
          >
            {this.state.isToggleOn}
            <li></li>
          </div>
        </div>

        <div className="header-bg">
          <span className="menu-link">
            <Link className="nav-title" to="/">
              <SplitText copy="Home" />
              <SplitText copy="Home" />
            </Link>

            <Link className="nav-title" to="/stories/">
              <SplitText copy="Stories" />
              <SplitText copy="Stories" />
            </Link>
            <a
              href="https://thoughts.teambition.com/sharespace/5dcc2f9ff32abe001545f2c5/docs/5dcc2f94f32abe001545f2c1"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-title"
            >
              <SplitText copy="Works" />
              <SplitText copy="Works" />
            </a>
          </span>
          <span className="menu-footer">
            <p className="type-p">GET IN TOUCH</p>
            <a href="tel:+86 186 0487 2509" title="Phone & Wechat">
              86 186-0487-2509
            </a>
            <a href="mailto:curiosity.wen@gmail.com" title="Mail">
              curiosity.wen@gmail.com
            </a>
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
