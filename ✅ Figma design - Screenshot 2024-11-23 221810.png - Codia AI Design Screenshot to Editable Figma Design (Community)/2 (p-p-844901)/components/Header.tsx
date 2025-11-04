"use client";
import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>Tracking Delivery</h1>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba27b13ddeeb5e161d449aea6de7c1e1bf04a1f"
            alt="Search icon"
            className={styles.searchIcon}
          />
          <span className={styles.searchPlaceholder}>Search</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e47f14be670c6cc5d8b02aef7dee0a18ddff9e6"
          alt="Profile"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.filterContainer}>
        <button className={styles.filterButton}>
          <span>21Jan-1Feb</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c9dbfb071146d7c99605f675d3604b31d261672"
            alt="Arrow"
            className={styles.arrowIcon}
          />
        </button>
        <button className={styles.filterButton}>
          <span>Checking</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/586d60c2d0f444c5c2015fd528ce461710e64feb"
            alt="Arrow"
            className={styles.arrowIcon}
          />
        </button>
        <button className={styles.filterButton}>
          <span>In Transit</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cde76478586e1bd7a82e8ea0c22ad0d0c9e0d73f"
            alt="Arrow"
            className={styles.arrowIcon}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
