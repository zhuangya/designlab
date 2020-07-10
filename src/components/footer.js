import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

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
          font-family: "Loop";
          letter-spacing: 0.34rem;
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
        .footer-link p {
          margin: 0;
          font-weight: 500;
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
        <textPath startOffset="210" xlinkHref="#c-2">
          All Rights Reserved
        </textPath>
      </text>
    </svg>
    <div className="footer-link" style={{ display: footerLink }}>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/stories/">
        <p>Stories</p>
      </Link>
      <a
        href="https://thoughts.teambition.com/sharespace/5dcc2f9ff32abe001545f2c5/docs/5dcc2f94f32abe001545f2c1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Works</p>
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
