import React from "react";
import { graphql, Link } from "gatsby";

import PageUp from "../components/page-up";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./templates.css";

const Template = ({ data }) => {
  const { markdownRemark } = data;

  const title = markdownRemark.frontmatter.title;
  const date = markdownRemark.frontmatter.date;
  // const twiter = markdownRemark.frontmatter.twiter;
  const html = markdownRemark.html;

  return (
    <Layout>
      <SEO title={title} />
      <div className="stories-sticky"></div>
      <div className="page">
        <h1 className="page-title">{title}</h1>
        <p className="page-date">{date}</p>
        {/* <a
          href={twiter}
          target="_blank"
          rel="noopener noreferrer"
          className="page-share"
        >
          
        </a> */}
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div>
          <Link to="/">Home</Link>

          <Link to="/stories/">Stories</Link>
          <a
            href="https://thoughts.teambition.com/sharespace/5dcc2f9ff32abe001545f2c5/docs/5dcc2f94f32abe001545f2c1"
            target="_blank"
            title="Thoughts"
            rel="noopener noreferrer"
          >
            Works
          </a>
          <p>Dr.cat © 2020, Built with Gatsby</p>
        </div>
      </div>
      <PageUp />
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
        twiter
      }
    }
  }
`;
export default Template;
