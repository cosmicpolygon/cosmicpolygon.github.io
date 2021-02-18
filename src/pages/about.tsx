import React from "react";

import About from "../components/about";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { pages } from "../common/types";

const IndexPage = () => (
  <Layout page={pages.ABOUT}>
    <SEO title="About Me" />
    <About />
  </Layout>
);

export default IndexPage;
