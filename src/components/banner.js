import React, { useState, useEffect, useRef, useCallback } from "react";
import Tilt from "react-tilt";
import { useStaticQuery, graphql } from "gatsby";

import "./banner.css";

const Banner = () => {
  const [RandomNum, setProgress] = useState("");

  const lastProgress = useRef();

  const getRandomProgress = useCallback(() => {
    var max = 4;
    var min = 1;

    var num = Math.floor(Math.random() * max + min);
    while (num === lastProgress.current) {
      num = Math.floor(Math.random() * max + min);
    }
    lastProgress.current = num;

    var rnum = "banner_" + num;
    setProgress(rnum);
    // console.log(rnum);
  }, []);

  useEffect(() => {
    getRandomProgress();

    setInterval(function() {
      getRandomProgress();
    }, 4000);
  }, [getRandomProgress]);

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
  // DESC降序 ASC生序
  return (
    <div className={RandomNum} id="hahaha">
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
              {item.data.Description}
            </p>
            <div className="banner-time-ring"></div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Banner;
