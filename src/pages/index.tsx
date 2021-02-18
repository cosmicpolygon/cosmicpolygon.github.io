import React from "react";

import Home from "../components/home";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout page="home">
    <SEO title="Cosmic Polygon" />
    <Home />
  </Layout>
);

export default IndexPage;
