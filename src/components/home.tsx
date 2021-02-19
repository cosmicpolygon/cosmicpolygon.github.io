import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import Logo from "./logo";

import * as styles from './home.module.scss';

const Home = () => {
  const [height, setHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : undefined);

  useEffect(() => {
    let timeoutId = null;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setHeight(window.innerHeight), 256);
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

  return (
    <div className={styles.container} style={{ height }}>
      <Logo />
      <div className={styles.title}>
        <h1>COSMIC POLYGON</h1>
        <h3>DESIGN, UX, & ILLUSTRATION</h3>
      </div>
    </div>
  );
};

export default Home;
