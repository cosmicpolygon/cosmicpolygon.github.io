import React from "react";
import { Link } from "gatsby";

import { pages } from "../common/types";
import Icon from '../images/logo.inline.svg';

import * as styles from './header.module.scss';

const Header = ({ page }) => (
  <header className={styles.container}>
    <nav>
      <div className={styles.col}>
        <Link
          to="/"
          className={`${styles.home} ${page === pages.HOME ? styles.isHome : ''}`}
          title="Home">
          <Icon className="headerHomeIcon" />
        </Link>
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
