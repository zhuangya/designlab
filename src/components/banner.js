import React from "react";
import Tilt from "react-tilt";

import "./banner.css";

import BannerSvg from "../images/assets/banner.svg";
import BannerRing from "../images/assets/circular.svg";

const Banner = () => (
  <>
    <a
      style={{ backgroundColor: "rgba(21,193,255,0.08)" }}
      className="banner-space"
      href="http://localhost:8000/articles/dark_mode/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Tilt
        className="Tilt"
        options={{
          max: 20,
          reverse: true,
          scale: 1.04,
          reset: true,
          perspective: 1600,
        }}
      >
        <img
          src="../../cover/darkmode_cover.gif"
          alt="1"
          className="Tilt-inner"
        />
      </Tilt>
      <div className="banner-ring">
        <p>DarkMode</p>
        <BannerRing />
      </div>
    </a>

    <BannerSvg />
  </>
);

export default Banner;
