import React from "react";

import About from "../components/about";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="About Me" />
    <About />
  </Layout>
);

export default IndexPage;
