import React from "react";
import { Link } from "gatsby";

import { pages } from "../common/types";

import * as styles from './header.module.scss';

const Header = ({ page }) => (
  <header className={styles.container}>
    <nav>
      <div className={`${styles.home} ${page === pages.HOME ? styles.isHome : ''}`}>
        <Link to="/">Home</Link>
      </div>
      <span><Link to="/projects">PROJECTS</Link></span>
      <span><Link to="/about">ABOUT ME</Link></span>
    </nav>
  </header>
);

export default Header;
