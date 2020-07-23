import React from "react";
import Tilt from "react-tilt";
import { useStaticQuery, graphql } from "gatsby";

import "./banner.css";

import BannerRing from "../images/assets/circular.svg";

// DESC降序 ASC生序
const Banner = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      sandwiches: allAirtable(
        filter: { table: { eq: "Sandwiches" } }
        sort: { fields: data___Name, order: ASC }
      ) {
        nodes {
          data {
            Name
            Description
            BannerLink
            Color
            Cover {
              url
            }
          }
          recordId
        }
      }
    }
  `);
  return (
    <>
      {data.sandwiches.nodes.map((item) => (
        <a
          key={item.recordId}
          className="banner-space"
          style={{ backgroundColor: item.data.Color }}
          href={item.data.BannerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tilt
            className="Tilt"
            options={{
              max: 20,
              reverse: true,
              scale: 1,
              reset: true,
              perspective: 1200,
            }}
          >
            <img
              src={item.data.Cover[0].url}
              alt={item.data.Name}
              className="Tilt-inner"
            />
          </Tilt>
          <div className="banner-ring">
            <p>
              {item.data.Name} - {item.data.Description}
            </p>
            <BannerRing />
          </div>
        </a>
      ))}
    </>
  );
};

export default Banner;