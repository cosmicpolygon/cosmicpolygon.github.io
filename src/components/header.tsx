import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import Logo from "./logo";

import * as styles from './header.module.scss';

const Header = () => {
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
    <header className={styles.container} style={{ height }}>
      <Logo />
      <Link className={styles.title} to="/">COSMIC POLYGON</Link>
    </header>
  );
};

export default Header;
