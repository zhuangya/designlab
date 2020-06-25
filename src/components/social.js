import React from "react";
import "./header.css";

const Social = () => (
  <div className="social-icon">
    <style>
      {`
        .social-icon {
          z-index: 60;
          position: fixed;
          bottom: 0;
          left: 0rem;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 1rem;
        }
        .social-icon a {
          margin-top: 0;
          font-family: "uuicon";
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          display: inline-block;
          font-size: 1.5rem;
          text-shadow: 0 0 1.5rem var(--BG-P);
        }
      `}
    </style>
    <a
      href="https://www.behance.net/haoqi123"
      target="_blank"
      title="Bēhance"
      rel="noopener noreferrer"
    >
      
    </a>
    <a
      href="https://www.instagram.com/wenhaoqi"
      target="_blank"
      title="Instagram"
      rel="noopener noreferrer"
    >
      
    </a>
    <a
      href="https://github.com/wenhaoqiasd"
      target="_blank"
      title="GitHub"
      rel="noopener noreferrer"
    >
      
    </a>
  </div>
);

export default Social;