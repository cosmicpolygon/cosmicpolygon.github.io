import React from "react";
import { Link } from "gatsby";

import * as styles from './logo.module.scss';

const Logo = () => (
  <Link className={styles.container} to="/">
    <div className={styles.right}></div>
    <div className={styles.left}></div>
    <div className={styles.top}></div>
    <div className={styles.p}></div>
    <div className={styles.c}></div>
    <div className={styles.rightShade}></div>
    <div className={styles.leftShade}></div>
    <div className={styles.topShade}></div>
  </Link>
);

export default Logo;
