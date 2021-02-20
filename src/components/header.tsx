import React from "react";
import { Link } from "gatsby";

import { pages } from "../common/types";

import * as styles from './header.module.scss';

const Header = ({ page }) => (
  <header className={styles.container}>
    <nav>
      <div className={styles.col}>
        <div className={`${styles.home} ${page === pages.HOME ? styles.isHome : ''}`}>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className={styles.col}>
        <span><Link to="/projects">PROJECTS</Link></span>
        <span><Link to="/about">ABOUT ME</Link></span>
      </div>
    </nav>
    <div className={styles.mobileMenuButton}>menu</div>
  </header>
);

export default Header;
