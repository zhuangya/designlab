import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageUp from "../components/page-up";
import PageFooter from "../components/pagefooter";

const NotFoundPage = () => (
  <Layout>
    <main className="zoom-out">
      <SEO title="404: Not found" />

      <div className="home-space">
        <section className="notfound-l">
          <h1 className="big-type big-stroke">404</h1>
        </section>
        <section className="notfound-r">
          <div>
            <h1>Oops!</h1>
            <h4>That page can’t be found.</h4>
          </div>
        </section>
      </div>
    </main>
    <PageUp />
    <PageFooter />
  </Layout>
);

export default NotFoundPage;
