"use client";
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fba6234da34dd057707ef26610c521a4c9fa7f3"
          alt="Logo"
        />
      </div>
      <nav className={styles.navItems}>
        <button className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e25e61fe18dd19a1fce1f74cb61a20ed36114e5"
            alt="Navigation"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f82cff644dbeda66272cbc2ef2f93aba7d86d6c"
            alt="Navigation"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ac68d2190092a2a164a64bc91c16d1aacf3abae"
            alt="Navigation"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0efd7bc95b73a4d4b74410f63be796039b83e01"
            alt="Navigation"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac8c2f607cd87e0f5db23fa8234a8c81955a760"
            alt="Navigation"
            className={styles.navIcon}
          />
        </button>
      </nav>
      <div className={styles.bottomNav}>
        <button className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8d16c1295e3c7a85b9df8d387fd33d31388176f"
            alt="Navigation"
            className={styles.navIcon}
          />
        </button>
        <button className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/26a9ddb472a1d3d026567f25d3eedad94339d592"
            alt="Navigation"
            className={styles.navIcon}
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
