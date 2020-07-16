import React from "react";
import { Link } from "gatsby";

import "./pagefooter.css";

const PageFooter = () => (
  <div className="page-footer">
    <a className="pagefooter-logo logo-type" href="/">
      curiosity<span>wen</span>
    </a>

    <div className="pagefooter-nav">
      <Link to="/">Home</Link>
      <Link to="/stories/">Stories</Link>
      <a
        href="https://thoughts.teambition.com/sharespace/5dcc2f9ff32abe001545f2c5/docs/5dcc2f94f32abe001545f2c1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Works
      </a>
    </div>

    <div className="pagefooter-nav">
      <a
        href="https://www.behance.net/haoqi123"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bēhance
      </a>
      <a
        href="https://www.instagram.com/wenhaoqi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://github.com/wenhaoqiasd"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>

    <div className="pagefooter-nav">
      <a href="tel:+86 186 0487 2509" title="Phone & Wechat">
        86 186-0487-2509
      </a>
      <a href="mailto:curiosity.wen@gmail.com" title="Mail">
        curiosity.wen@gmail.com
      </a>
    </div>

    <p className="pagefooter-text">
      © {new Date().getFullYear()}, Built with{" "}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </p>
  </div>
);

export default PageFooter;
