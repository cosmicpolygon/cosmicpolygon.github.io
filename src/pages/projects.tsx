import React from "react";

import Projects from "../components/projects";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Cosmic Polygon" />
    <Projects />
  </Layout>
);

export default IndexPage;
