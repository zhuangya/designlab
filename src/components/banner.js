import React from "react";
import Parallax from "react-rellax";
import BannerSvg1 from "../images/assets/banner1.svg";
import BannerSvg2 from "../images/assets/banner2.svg";
import BannerSvg3 from "../images/assets/banner3.svg";

import Tilt from "react-tilt";

import "./banner.css";

const Banner = () => (
  <section className="grid-sys banner-section">
    <span className="col-8 banner">
      <h1 className="title">
        Dr.cat is a experience designer currently working at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.teambition.com/"
          className="banner-link"
        >
          Teambition
        </a>{" "}
        in Shanghai.<span className="text-cursor">_</span>
      </h1>
    </span>
    <span className="col-4 air"></span>
    <span className="bannersvg">
      <Parallax speed={-6}>
        <Tilt
          className="Tilt"
          options={{
            max: 32,
            reverse: true,
            scale: 1,
            reset: true,
            perspective: 800
          }}
        >
          <BannerSvg1 />
          <BannerSvg2 />
          <BannerSvg3 />
        </Tilt>
      </Parallax>
    </span>
  </section>
);

export default Banner;
