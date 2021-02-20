import React from "react";

import Home from "../components/home";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { pages } from "../common/types";

const IndexPage = () => (
  <Layout page={pages.HOME}>
    <SEO title="Design, UX, & Illustration" />
    <Home />
  </Layout>
);

export default IndexPage;
