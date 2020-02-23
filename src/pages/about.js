import React from "react"
import Parallax from "react-rellax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logos from "../components/logos"

const AboutPage = () => (
  <Layout>
    <SEO title="about"/>
    <section>
      <h1 className="title title-center">About</h1>
    </section>
    <section className="grid-sys about">
      <span className="col-6 about-img">
        <Parallax speed={-3} className="grid-sys air">
          <a href="https://www.instagram.com/p/_R7v66vfql/" target="_blank" rel="noopener noreferrer" className="col-12 col-mo-6 air"><img src={`../../me.jpg`} alt=""/></a>
          <span className="col-4 air"></span>
          <a href="https://www.instagram.com/p/BHy8EQEB3E7/" target="_blank" rel="noopener noreferrer" className="col-8 air"><img src={`../../me2.jpg`} alt=""/></a>
        </Parallax>
      </span>
      <span className="col-6">
        <h1>
          I'm Haoqi Wen (also known as Dr.Cat), Currently based in Shanghai.
          Devoted to UI/UE and Branding, I also work in other fields such as
          Packaging Motion Graphic, Illustration…
        </h1>
        <h3>
          Profoundly influenced by the culture of Germany and Northern Europe, I
          have gradually developed a unique insight into the 
          <span> "Simplicity"</span> in design and hence formed my own design
          ideas and style. I am convinced that design can settle many of the
          unreasonable. In my previous design experience, I attached importance
          to the application of rational thoughts and techniques and knowledge
          that I handled, to meet the requirements in an easier way.
        </h3>
        <h3>
          Self-described as a "Modern Craftsman", I pursue uniqueness while
          maintaining the reasons, control the precise location while set free
          my horizon. Communication and thinking, much superior to the
          repetitive low-efficient trials, are important parts of the
          cooperation. With the goal of communicating and coordinating with
          customers, I deliver my works without complexity in the procedures.
          <span> Looking forward to becoming more customer’s choice.</span>
        </h3>
      </span>
    </section>
    <Logos />
  </Layout>
)

export default AboutPage
