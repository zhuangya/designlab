import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Tilt from "react-tilt";

import "./pages.css";

const WorkPage = ({ data }) => {
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

      <section>
        <h1 className="title title-center">Articles</h1>
      </section>
      <div className="space-sticky">
        <section>
          <div className="tgas-tab">
            {allTags.map(n => (
              <li
                key={n}
                className={n === currentTag ? "active" : ""}
                onClick={() => {
                  setCurrentTag(n);
                }}
              >
                {n}
              </li>
            ))}
          </div>
        </section>
      </div>
      <section className="grid-sys">
        {visibleWorks.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} className="col-4">
              <Link to={frontmatter.path} className="work-cover" title={frontmatter.title + " " + frontmatter.date}>
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
                <h3>{frontmatter.title}</h3>
                <p>{frontmatter.excerpt}</p>
                <p className="work-date">
                  <i></i>
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
export default WorkPage;
