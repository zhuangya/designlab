import React from "react";
import PropTypes from "prop-types";

const Footer = ({ siteTitle }) => (
  <div className="circular">
    <style>
      {`
    .circular {
      width: 12.25rem;
      height: 12.25rem;
      padding: 1rem;
      font-size: 1rem;
      letter-spacing: 0.25rem;
      animation: rota 12s linear infinite;
      font-family: "Spoof";
    }
    @keyframes rota {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    .circular svg {
      display: block;
      overflow: visible;
      transform: rotate(-32deg);
      fill: var(--Text-3);
      text-transform: uppercase;
    }
    .circular path {
      fill: none;
      text-align: center;
    }
    `}
    </style>
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
