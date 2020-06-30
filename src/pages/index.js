import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Parallax from "react-rellax";
import Draggable from "react-draggable";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import Social from "../components/social";
import PageUp from "../components/page-up";
import Banner from "../components/banner";

import Brand from "../images/assets/brand.svg";
import Uiux from "../images/assets/ui.svg";
import Motion from "../images/assets/motion.svg";
import BannerSvg from "../images/assets/banner.svg";

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
      <main className="zoom-out">
        <SEO title="Home" />
        <div className="home-space">
          <section className="home-01">
            <Draggable
              // axis="y"
              handle=".handle"
            >
              <h1 className="big-type handle">
                DR.CAT
                <br />
                DESIGNER
                <br />
                <span className="big-stroke">SHANGHAI</span>
              </h1>
            </Draggable>
          </section>
          <section className="home-02">
            <Banner />
            <BannerSvg />
          </section>
          <section className="home-03">
            <Parallax speed={-4}>
              <img src={`../../me.jpg`} alt="" />
            </Parallax>
            <div className="ring">
              <Footer
                siteTitle={date.site.siteMetadata.title}
                footerLink="none"
              />
            </div>
          </section>
          <section className="home-04">
            <h2>Hello!</h2>
            <h4>
              I'm Haoqi Wen (also known as Dr.Cat), I am the senior experience
              designer of Alibaba Shanghai. Used to work in ecommerce,
              recruitment industry, engaged in digital product design. Devoted
              to UI/UX and Branding, I also work in other fields such as Motion
              Graphic, Illustration<span className="text-x">_</span>
            </h4>
          </section>
          <Social />
          <PageUp />
        </div>
        <div className="home-space">
          <section className="home-05">
            <li>
              <Uiux />
              <h4>UI/UX</h4>
            </li>
            <li>
              <Motion />
              <h4>Motion</h4>
            </li>
            <li>
              <Brand />
              <h4>Brand</h4>
            </li>
          </section>
          <section className="home-06">
            <li>
              <h1 className="big-type big-stroke">8</h1>
              <h4>Years</h4>
            </li>
            <li>
              <h1 className="big-type big-stroke">2</h1>
              <h4>Design Systems</h4>
            </li>
            <li>
              <h1 className="big-type big-stroke">20+</h1>
              <h4>Commercial Projects</h4>
            </li>
          </section>
          <section className="home-07">
            <Footer siteTitle={date.site.siteMetadata.title} />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
