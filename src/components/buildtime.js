import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BuildTime = () => {

  const data = useStaticQuery(
    graphql`
      query siteTitleQueryAndSiteTitleQuery {
        site {
          buildTime(formatString: "YYYY-MM-DD hh:mm A")
        }
      }
    `
  );
  return (
    <>
      Build time: {data.site.buildTime}
    </>
  )
}

export default BuildTime