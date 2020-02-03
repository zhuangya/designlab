import React from "react";
import { Link } from "gatsby";
import Parallax from "react-rellax";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Logos from "../components/logos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="grid-sys">
      <span className="col-12">
        <h1 className="title">
          <span role="img" aria-label="">
            👨🏻‍💻
          </span>
        </h1>
        <h1 className="title">
          I'm Haoqi Wen <span className="title-y">(</span>
          <span className="title-2">
            also known as Dr<span className="title-y">.</span>Cat
          </span>
          <span className="title-y">)</span>, a designer living in Shanghai.
        </h1>
        <h1 className="banner-h1">
          Focusing across <span>Experience Design</span>, <span>Branding</span>{" "}
          and <span>Motion Graphic</span>. I'm now the Experience designer of{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.teambition.com/"
            className="banner-link"
          >
            Teambition
          </a>
          .
        </h1>
        <Link to="/articles" className="link-btn">
          <button>Articles</button>
        </Link>
      </span>
      <Parallax speed={7}></Parallax>
    </section>
    <Logos />
  </Layout>
);

export default IndexPage;
