import React from "react";
import PropTypes from "prop-types";

import "./header.css";

const Footer = ({ siteTitle }) => (
  <div className="circular">
    <svg viewBox="0 0 164 164">
      <path d="M 0,82 a 82,82 0 1,1 0,1 z" id="c-1" />
      <path d="M 0,82 a 82,82 0 1,1 0,1 z" id="c-2" />
      <text>
        <textPath xlinkHref="#c-1">
          {siteTitle} © {new Date().getFullYear()}
        </textPath>
        <textPath startOffset="200" xlinkHref="#c-2">
          • All Rights Reserved •
        </textPath>
      </text> 
    </svg>
  </div>
);
Footer.propTypes = {
  siteTitle: PropTypes.string,
};
Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
