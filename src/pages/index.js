import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

import Footer from "../components/footer";
import Social from "../components/social";
import PageUp from "../components/page-up";

import Parallax from "react-rellax";
import BannerSvg from "../images/assets/banner.svg";
import BannerRing from "../images/assets/circular.svg";
import Brand from "../images/assets/brand.svg";
import Uiux from "../images/assets/ui.svg";
import Motion from "../images/assets/motion.svg";

import "./pages.css";

const IndexPage = () => {
  const date = useStaticQuery(
    graphql`
      query SiteTitleQueryAndSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-space">
        <section id="#home" className="home-01">
          <h1 className="big-type">
            DR.CAT
            <br />
            DESIGNER
            <br />
            <span className="big-stroke">SHANGHAI</span>
          </h1>
        </section>
        <section className="home-02">
          <BannerSvg />
          <div className="banner-ring">
            <BannerRing />
          </div>
        </section>
        <section className="home-03">
          <Parallax speed={-3}>
            <img src={`../../me.jpg`} alt="" />
          </Parallax>
          <div className="ring">
            <Footer siteTitle={date.site.siteMetadata.title} />
          </div>
        </section>
        <section className="home-04">
          <h3>
            Hello!
          </h3>
          <h4>
            I'm Haoqi Wen (also known as Dr.Cat), I am the senior
            experience designer of Alibaba Shanghai. Used to work in ecommerce,
            recruitment industry, engaged in digital product design. Devoted to
            UI/UX and Branding, I also work in other fields such as Motion
            Graphic, Illustration.
          </h4>
        </section>
        <Social />
        <PageUp />
      </div>
      <div className="home-space">
        <section className="home-05">
          <li>
            <Uiux />
            <p>UI/UX</p>
          </li>
          <li>
            <Motion />
            <p>Motion</p>
          </li>
          <li>
            <Brand />
            <p>Brand</p>
          </li>
        </section>
        <section className="home-06">
          <li>
            <h1 className="big-type big-stroke">8</h1>
            <p>Years</p>
          </li>
          <li>
            <h1 className="big-type big-stroke">2</h1>
            <p>Design Systems</p>
          </li>
          <li>
            <h1 className="big-type big-stroke">15</h1>
            <p>Commercial Projects</p>
          </li>
        </section>
        <section className="home-07">
          <Footer siteTitle={date.site.siteMetadata.title} />
        </section>
      </div>

      {/* <Link to="/articles/">
        </Link> */}
    </Layout>
  );
};

export default IndexPage;
