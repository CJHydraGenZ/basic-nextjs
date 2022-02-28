import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ula}>
        <li style={{ listStyle: "none" }}>
          <Link className={styles.btnNav} href="/">
            Home
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link className={styles.btnNav} href="/blog">
            Blog
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link className={styles.btnNav} href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
