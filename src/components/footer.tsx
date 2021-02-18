import React from "react";

import * as styles from './footer.module.scss';

const Footer = ({ page }) => (
  <footer className={`${styles.container} ${page === 'home' ? styles.home : ''}`}>
    © {new Date().getFullYear()} CHRISTOPHER PETERS
  </footer>
);

export default Footer;
