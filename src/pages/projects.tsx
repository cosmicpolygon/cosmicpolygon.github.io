import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { pages } from "../common/types";

import styles from  '../common/page.module.scss';

const IndexPage = () => (
  <Layout page={pages.PROJECTS}>
    <SEO title="Projects" />
    <div className={styles.container}>
      <h1>PROJECTS</h1>
      <p>Coming Soon...</p>
    </div>
  </Layout>
);

export default IndexPage;
