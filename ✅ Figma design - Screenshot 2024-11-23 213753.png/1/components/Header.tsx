"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const Header = () => {
  return (
    <header className={styles.div14}>
      <div className={styles.div15}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fc1b8f0042e2bfaa5b6e5c48a77516ce287f144"
          alt="Search"
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Search..."
          className={styles.div16}
          aria-label="Search"
        />
      </div>
      <div className={styles.div17}>
        <button aria-label="Notifications">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28cc13808c6ede2ebe1cedd0b35d51ae6db77c0"
            alt="Notification"
            className={styles.headerIcon}
          />
        </button>
        <button aria-label="Messages">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a9f8368d65aa3e38defe99bfc3b40b59ae5a3e"
            alt="Message"
            className={styles.headerIcon}
          />
        </button>
        <div className={styles.div18} aria-hidden="true" />
        <button aria-label="Settings">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9a1a208164bb42a40b2a87c5c728af1a80c093"
            alt="Settings"
            className={styles.headerIcon}
          />
        </button>
        <span className={styles.div19}>LogiDigital</span>
      </div>
    </header>
  );
};

export default Header;
