import React from "react";
import { Link } from "gatsby";

import * as styles from './header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <nav>
      <span><Link to="/projects">PROJECTS</Link></span>
      <span><Link to="/about">ABOUT ME</Link></span>
    </nav>
  </header>
);

export default Header;
