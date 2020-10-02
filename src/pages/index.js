import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import RellaxWrapper from "react-rellax-wrapper";
import Draggable from "react-draggable";
import { RandomReveal } from "react-random-reveal";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import Social from "../components/social";
import PageUp from "../components/page-up";

import Banner from "../components/banner";

import Threenodels from "../components/threemodels";

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
      <main className="zoom-out">
        <SEO title="Home" />

        <div className="home-space">
          <PageUp />
          <section className="home-01">
            <Draggable handle=".handle">
              <h1 className="big-type handle capital">
                <RandomReveal
                  isPlaying
                  duration={2}
                  revealDuration={0.5}
                  characters="DESIGN"
                  characterSet="DESIGN"
                  onComplete={() => [true, 8000]}
                />
                ,
                <br />
                <span className="big-stroke">
                  DEVELOP
                  <br />& CREATE.
                </span>
              </h1>
            </Draggable>
          </section>
          <section className="home-02">
            <Banner />
          </section>
          <section className="home-03">
            <RellaxWrapper speed={-4}>
              <img src={`../../me.jpg`} alt="" />
            </RellaxWrapper>
            <div className="ring">
              <Footer
                siteTitle={date.site.siteMetadata.title}
                footerLink="none"
              />
            </div>
          </section>
          <section className="home-04">
            <h2>Hey!</h2>
            <h4>
              I'm Curiosity Wen, I'm a senior experience designer at Alibaba on
              the Teambition team. Used to work in ecommerce, recruitment
              industry, engaged in digital product design. I also work in other
              fields such as Motion Graphic, Illustration
              <span className="text-cursor">_</span>
            </h4>
          </section>

          <Social />
        </div>
        <div className="home-space mobile-space">
          <section className="home-05">
            <li>
              <h1 className="big-type big-stroke">8</h1>
              <p>Years</p>
            </li>
            <li>
              <h1 className="big-type big-stroke">2</h1>
              <p>Design Systems</p>
            </li>
            <li>
              <h1 className="big-type big-stroke">20+</h1>
              <p>Commercial Projects</p>
            </li>
            
            <RellaxWrapper speed={4} percentage={0.5}>
              <Threenodels />
            </RellaxWrapper>
          </section>
          <section className="home-06">
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
          <section className="home-07">
            <Footer siteTitle={date.site.siteMetadata.title} />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
