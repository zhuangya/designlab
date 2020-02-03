import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1 className="title title-center" style={{ margin: '6rem 0' }}>Oops! That page can’t be found.</h1>
    </section>
  </Layout>
)

export default NotFoundPage
