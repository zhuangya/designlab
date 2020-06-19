import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageUp from "../components/page-up";

import "./pages.css";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const [currentTag, setCurrentTag] = useState("");
  const allTags = [];
  edges
    .map((n) => n.node.frontmatter.tags)
    .forEach((tags) => {
      for (const tag of tags) {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      }
    });

  console.log(allTags, currentTag);

  const visibleWorks = currentTag
    ? edges.filter((n) => n.node.frontmatter.tags.includes(currentTag))
    : edges;

  return (
    <Layout>
      <SEO title="Articles" />
      {/* 吸附筛选条 */}
      <div className="space-sticky">
        <p>UPDATE: 06.11.2020</p>
        <section>
          <div className="tgas-tab">
            {allTags.map((n) => (
              <div
                key={n}
                className={n === currentTag ? "active" : ""}
                onClick={() => {
                  setCurrentTag(n);
                }}
                role="button"
                onKeyPress={() => {}}
                tabIndex="0"
              >
                <h1 className="big-stroke">{n}</h1>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 文章区域 */}
      <section className="work-grid">
      <PageUp />
        {visibleWorks.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <Link
                to={frontmatter.path}
                className="work-cover"
                title={frontmatter.excerpt}
              >
                <img
                  src={frontmatter.cover}
                  alt={frontmatter.title}
                  className="Tilt-inner"
                />
                <p>{frontmatter.title}</p>
                <p className="work-date">{frontmatter.date}</p>
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
