import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { pages } from "../common/types";

const IndexPage = () => (
  <Layout page={pages.ABOUT}>
    <SEO title="About Me" />
    <h1>ABOUT ME</h1>
  </Layout>
);

export default IndexPage;
