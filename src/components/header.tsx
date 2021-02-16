import React, { useEffect } from "react";
import { Link } from "gatsby";

import { useCurrentHeight } from "./hooks";

import * as styles from './header.module.scss';

const Header = () => {
  let height: number;

  useEffect(() => {
    let timeoutId = null;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => height = window.innerHeight, 256);
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  return (
    <header className={styles.container} style={{ height }}>
      <div className={styles.logo}></div>
      <Link className={styles.title} to="/">COSMIC POLYGON</Link>
    </header>
  );
};

export default Header;
