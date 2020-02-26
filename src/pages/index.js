import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Parallax from "react-rellax";
import Tilt from "react-tilt";

import "./pages.css";

const IndexPage = ({ data }) => {

  const { edges } = data.allMarkdownRemark;

  const [currentTag, setCurrentTag] = useState("");
  const allTags = [];
  edges
    .map(n => n.node.frontmatter.tags)
    .forEach(tags => {
      for (const tag of tags) {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      }
    });

  console.log(allTags, currentTag);

  const visibleWorks = currentTag
    ? edges.filter(n => n.node.frontmatter.tags.includes(currentTag))
    : edges;

  return (
    <Layout>
      <SEO title="Articles" />
      {/* banner */}
      <section className="grid-sys">
        <span className="col-8 banner">
          <h1 className="title">
            Dr.cat is a experience designer currently working at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.teambition.com/"
              className="banner-link"
            >Teambition</a>
            {" "}in Shanghai.
          </h1>
        </span>
        <span className="col-4"><Parallax speed={-7} className="title">🏗</Parallax></span>
      </section>

      {/* 吸附筛选条 */}
      <div className="space-sticky">
        <section>
          <div className="tgas-tab">
            {allTags.map(n => (
              <li key={n} className={n === currentTag ? "active" : ""} onClick={() => { setCurrentTag(n); }}>
                {n}
              </li>
            ))}
          </div>
        </section>
      </div>

      {/* 文章区域 */}
      <section className="grid-sys">
        {visibleWorks.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} className="col-4">
              <Link to={frontmatter.path} className="work-cover" title={frontmatter.excerpt}>
                <Tilt
                  className="Tilt"
                  options={{
                    max: 18,
                    reverse: true,
                    scale: 1,
                    reset: true,
                    perspective: 900
                  }}
                >
                  <img
                    src={frontmatter.cover}
                    alt={frontmatter.title}
                    className="Tilt-inner"
                  />
                  <img
                    src={frontmatter.cover}
                    alt={frontmatter.title}
                    className="img-shadow"
                  />
                </Tilt>
                <p>{frontmatter.title}</p>
                
                <p className="work-date">
                  {frontmatter.date}
                </p>
                <div className="work-line"></div>
              </Link>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            tags
            excerpt
            cover
          }
        }
      }
    }
  }
`;
export default IndexPage;
