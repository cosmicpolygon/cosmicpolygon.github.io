import React from "react";

import * as styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.container}>
    © {new Date().getFullYear()} CHRISTOPHER PETERS
  </footer>
);

export default Footer;
