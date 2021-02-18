import React from "react";
import { Link } from "gatsby";

import * as styles from './header.module.scss';

const Header = ({ page }) => (
  <header className={styles.container}>
    <nav>
      <div className={`${styles.home} ${styles.page === 'home' ? styles.home : ''}`}>
        <Link to="/"></Link>
      </div>
      <span><Link to="/projects">PROJECTS</Link></span>
      <span><Link to="/about">ABOUT ME</Link></span>
    </nav>
  </header>
);

export default Header;
