import React from "react";
import { pages } from "../pages/types";

import * as styles from './footer.module.scss';

const Footer = ({ page }) => (
  <footer className={`${styles.container} ${page === pages.HOME ? styles.isHome : ''}`}>
    © {new Date().getFullYear()} CHRISTOPHER PETERS
  </footer>
);

export default Footer;
