import React from "react";
import { graphql } from "gatsby";

import PageUp from "../components/page-up";

import Layout from "../components/layout";
import PageFooter from "../components/pagefooter";
import SEO from "../components/seo";
import "./templates.css";

const Template = ({ data }) => {
  const { markdownRemark } = data;

  const title = markdownRemark.frontmatter.title;
  const date = markdownRemark.frontmatter.date;
  const path = markdownRemark.frontmatter.path;
  const color = markdownRemark.frontmatter.color;
  const html = markdownRemark.html;

  return (
    <Layout>
      <main className="zoom-in">
        <SEO title={title} />
        <div className="page-header" style={{ backgroundColor: color }}>
          <div className="page">
            <h1 className="page-title">{title}</h1>
            <p className="page-share-title">{date}</p>
          </div>
        </div>
        <div className="stories-sticky"></div>
        <div className="page">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <p className="page-share-title">Share</p>
        <div className="page-share">
          <a
            href={
              "http://service.weibo.com/share/share.php?url=https://wenhaoqi.com" +
              path +
              "&title=" +
              title
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Weibo"
          >
            
          </a>
          <a
            href={
              "https://twitter.com/share?text=Thoughts Covers&url=https://wenhaoqi.com" +
              path
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            
          </a>
          <a
            href={
              "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=https://wenhaoqi.com" +
              path
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            
          </a>
        </div>
        <PageUp />
        <PageFooter />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        color
      }
    }
  }
`;
export default Template;
