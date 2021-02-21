import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { pages } from "../common/types";

import styles from  '../common/page.module.scss';

const IndexPage = () => (
  <Layout page={pages.ABOUT}>
    <SEO title="About Me" />
    <div className={styles.container}>
      <h1>ABOUT ME</h1>
      <p>Coming Soon...</p>
    </div>
  </Layout>
);

export default IndexPage;
