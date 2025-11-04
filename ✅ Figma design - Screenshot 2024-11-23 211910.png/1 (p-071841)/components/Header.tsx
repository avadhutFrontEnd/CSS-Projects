"use client";
import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb52c9b9c46c176f2e976706e7b8a6cafe298994"
          alt="Search"
        />
        <span>Search...</span>
      </div>
      <div className={styles.userSection}>
        <button className={styles.iconButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18f54d961365dafad35db397e6e85d370d00b553"
            alt="Notification"
          />
        </button>
        <button className={styles.iconButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e8a696de1cc49ae4d08e724efbb1f8625e9ad97"
            alt="Message"
          />
        </button>
        <div className={styles.divider} />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f414b57c806f3acf4a5b6b96f234bae63e66823d"
          alt="Profile"
        />
        <span>LogiDigital</span>
      </div>
    </header>
  );
};

export default Header;
