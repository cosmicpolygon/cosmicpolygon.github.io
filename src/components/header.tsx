import React from "react";
import { Link } from "gatsby";

import { pages } from "../common/types";

import * as styles from './header.module.scss';

const Header = ({ page }) => (
  <header className={styles.container}>
    <nav>
      <div className={styles.col}>
        <Link to="/" className={`${styles.home} ${page === pages.HOME ? styles.isHome : ''}`} />
      </div>
      <div className={styles.col}>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/about">ABOUT ME</Link>
      </div>
    </nav>
    <div className={styles.mobileMenuButton}>menu</div>
  </header>
);

export default Header;
