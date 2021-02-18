import React from "react";

import Projects from "../components/projects";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { pages } from "../common/types";

const IndexPage = () => (
  <Layout page={pages.PROJECTS}>
    <SEO title="Projects" />
    <Projects />
  </Layout>
);

export default IndexPage;
