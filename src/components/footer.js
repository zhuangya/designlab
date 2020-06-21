import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./header.css";

const Footer = ({ siteTitle, footerLink }) => (
  <div className="circular">
    <style>
      {`
        .circular {
          position: relative;
          width: 12.25rem;
          height: 12.25rem;
          padding: 1rem;
          font-size: 1rem;
        }
        .circular svg{
          display: block;
          font-family: "Spoof";
          letter-spacing: 0.25rem;
          overflow: visible;
          transform: rotate(-32deg);
          fill: var(--Text-3);
          text-transform: uppercase;
          animation: rota 12s linear infinite;
        }
        @keyframes rota {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .circular path {
          fill: none;
          text-align: center;
        }
        .footer-link {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .footer-link a {
          margin: 0.25rem 0;
        }
        .footer-link h4 {
          margin: 0;
        }
      `}
    </style>
    <svg viewBox="0 0 164 164" className="circular-big">
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
    <div className="footer-link" style={{ display: footerLink }}>
      <Link to="/"><h4>Home</h4></Link>
      <Link to="/stories/"><h4>Stories</h4></Link>
      <a
        href="https://thoughts.teambition.com/sharespace/5dcc2f9ff32abe001545f2c5/docs/5dcc2f94f32abe001545f2c1"
        target="_blank"
        title="Thoughts"
        rel="noopener noreferrer"
      >
        <h4>Works</h4>
      </a>
    </div>
  </div>
);
Footer.propTypes = {
  siteTitle: PropTypes.string,
};
Footer.defaultProps = {
  siteTitle: ``,
};
export default Footer;
