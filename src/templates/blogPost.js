import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./templates.css";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const date = markdownRemark.frontmatter.date;
  const html = markdownRemark.html;

  return (
    <Layout>
      <SEO title={title} />
      <div className="page">
        <h1 className="page-title">{title}</h1>
        <p className="page-date">{date}</p>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="page-btn">
          {prev && (
            <Link
              title={prev.frontmatter.title}
              to={prev.frontmatter.path}
              className="page-prev"
            >
              {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              title={next.frontmatter.title}
              to={next.frontmatter.path}
              className="page-next"
            >
              {next.frontmatter.title}
            </Link>
          )}
        </div>
      </div>
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
      }
    }
  }
`;
export default Template;
