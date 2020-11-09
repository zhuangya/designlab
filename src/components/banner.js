import React, { useState, useEffect } from "react";
import cx from "classnames";
import Tilt from "react-tilt";
import { useStaticQuery, graphql } from "gatsby";

import "./banner.css";

const pickExcept = (array, prev) => {
  const candidates = prev ? array.filter((item) => item !== prev) : array;
  return candidates[Math.floor(Math.random() * candidates.length)];
};

function useBanners() {
  const { sandwiches } = useStaticQuery(graphql`
    query MenuQuery {
      sandwiches: allAirtable(
        filter: { table: { eq: "Sandwiches" } }
        sort: { fields: data___Description, order: ASC }
      ) {
        nodes {
          data {
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

  return sandwiches.nodes || [];
}

function usePickBanner(sandwiches) {
  const [result, setResult] = useState(pickExcept(sandwiches));

  useEffect(() => {
    const interval = setInterval(
      () => setResult(pickExcept(sandwiches, result)),
      4000
    );
    return () => clearInterval(interval);
  }, [result, sandwiches]);

  return result;
}

const Banner = () => {
  const sandwiches = useBanners();
  const currentSandwich = usePickBanner(sandwiches);

  return (
    <div>
      {sandwiches.map((item) => (
        <a
          key={item.recordId}
          className={cx("banner-space", {
            visible: item.recordId === currentSandwich.recordId,
          })}
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
              alt={item.data.Description}
              className="Tilt-inner"
            />
          </Tilt>
          <div className="banner-ring">
            <p>{item.data.Description}</p>
            <div className="banner-time-ring"></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Banner;
