import React, { useEffect } from "react";
import { Link } from "gatsby";

import { useCurrentHeight } from "./hooks";

import * as styles from './header.module.scss';

const Header = () => {
  let height;

  useEffect(() => {
    const resize = () => {
      height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  return (
    <header className={styles.container} style={{ height: useCurrentHeight() }}>
      <div className={styles.hero}>
        <div className={styles.logo}></div>
        <Link className={styles.title} to="/">COSMIC POLYGON</Link>
      </div>
    </header>
  );
};

export default Header;
