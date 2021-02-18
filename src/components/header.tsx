import React from "react";
import { Link } from "gatsby";

import * as styles from './header.module.scss';
import { pages } from "../common/types";

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
