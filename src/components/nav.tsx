import React from "react";
import { Link } from "gatsby";

import * as styles from './nav.module.scss';

const Nav = () => (
  <nav className={styles.container}>
    <ul className={styles.links}>
      <li><Link to="/about">ABOUT ME</Link></li>
    </ul>
  </nav>
);

export default Nav;
