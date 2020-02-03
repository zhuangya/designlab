import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Social from "./social"

import "./header-footer.css"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="header-content">
      <div className="footer-link">
        <Link to="/">Home</Link>
        <Link to="/articles/">Articles</Link>
        <Link to="/about/">About</Link>
      </div>
      <div className="circular">
        <svg viewBox="0 0 72 72">
          <path d="M 0,36 a 36,36 0 1,1 0,1 z" id="c-1" />
          <path d="M 0,36 a 36,36 0 1,1 0,1 z" id="c-2" />
          <text>
            <textPath xlinkHref="#c-1">
              {siteTitle} © {new Date().getFullYear()}
            </textPath>
            <textPath startOffset="86" xlinkHref="#c-2">• All Rights Reserved •</textPath>
          </text>
          <path d="M 10,50 a 40,40 10 1,1 0,1 z" />
        </svg>
      </div>
      <Social />
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}
Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
