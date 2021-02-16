import React from "react";
import { Link } from "gatsby";

import { useCurrentHeight } from "./hooks";

import * as styles from './header.module.scss';

const Header = () => {
  const height = useCurrentHeight();

  return (
    <header className={styles.container} style={{ height }}>
      <div className={styles.logo}></div>
      <Link className={styles.title} to="/">COSMIC POLYGON</Link>
    </header>
  );
};

export default Header;
