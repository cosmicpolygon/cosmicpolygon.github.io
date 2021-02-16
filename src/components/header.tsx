import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import * as styles from './header.module.scss';

const Header = () => {
  const [height, setHeight] = useState(9999);

  useEffect(() => {
    let timeoutId = null;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setHeight(window.innerHeight), 256);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('DOMContentLoaded', resize);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('DOMContentLoaded', resize);
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
