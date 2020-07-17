import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageUp from "../components/page-up";
import PageFooter from "../components/pagefooter";

import "./pages.css";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const [currentTag, setCurrentTag] = useState("All Stories");
  const allTags = ["All Stories"];
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

  const visibleWorks =
    currentTag !== "All Stories"
      ? edges.filter((n) => n.node.frontmatter.tags.includes(currentTag))
      : edges;

  return (
    <Layout>
      <main className="zoom-in">
        <SEO title="Stories" />
        <div className="space-sticky">
          <p>UPDATE: July 18, 2020</p>
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
        </div>

        {/* 文章区域 */}
        <section className="work-grid">
          {visibleWorks.map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <div key={frontmatter.path}>
                <Link to={frontmatter.path} className="work-cover">
                  <img src={frontmatter.cover} alt={frontmatter.title} />
                  <h4>{frontmatter.title}</h4>
                  <p className="work-date">
                    {frontmatter.date}
                  </p>
                  <div className="work-line"></div>
                </Link>
              </div>
            );
          })}
        </section>
        <PageUp />
        <PageFooter />
      </main>
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
            cover
          }
        }
      }
    }
  }
`;
export default IndexPage;
