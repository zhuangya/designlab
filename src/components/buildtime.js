import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BuildTime = () => {

  const data = useStaticQuery(
    graphql`
      query siteTitleQueryAndSiteTitleQuery {
        site {
          buildTime(formatString: "A h:mm MMMM DD, YYYY")
        }
      }
    `
  );
  return (
    <>
      Updated in {data.site.buildTime}
    </>
  )
}

export default BuildTime