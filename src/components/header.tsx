import React from "react";
import { Link } from "gatsby";

import { pages } from "../common/types";

import * as styles from './header.module.scss';

const Header = ({ page }) => (
  <header className={`${styles.container} ${page === pages.HOME ? styles.isHome : ''}`}>
    <nav>
      <div className={styles.col}>
        <Link className={styles.home} to="/">HOME</Link>
      </div>
      <div className={styles.col}>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/about">ABOUT ME</Link>
      </div>
    </nav>
    <div className={styles.mobileMenuButton}>
      <button>menu</button>
    </div>
  </header>
);

export default Header;
