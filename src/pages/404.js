import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1 style={{ margin: '8rem 0 0' }}>404: Not found</h1>
      <h1>Oops! That page can’t be found.</h1>
    </section>
  </Layout>
)

export default NotFoundPage
