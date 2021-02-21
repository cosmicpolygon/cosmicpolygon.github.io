import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Logo from "../components/logo";
import Background from "../components/background";
import { pages } from "../common/types";

import styles from '../common/index.module.scss';

const IndexPage = (): JSX.Element => {
  const [height, setHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : undefined);
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : undefined);

  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      }, 256);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Layout page={pages.HOME}>
      <SEO title="Design, UX, & Illustration" />
      <div className={styles.container} style={{ height }}>
        {/* <Background width={width} height={height} /> */}
        <Logo />
        <div className={styles.title}>
          <h1>COSMIC POLYGON</h1>
          <h3>DESIGN, UX, & ILLUSTRATION</h3>
        </div>
      </div>
    </Layout>
  )
};

export default IndexPage;
