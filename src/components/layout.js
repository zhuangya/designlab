import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <>
      <div className="overlay big-type big-stroke">
        Version 10 is coming...
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
