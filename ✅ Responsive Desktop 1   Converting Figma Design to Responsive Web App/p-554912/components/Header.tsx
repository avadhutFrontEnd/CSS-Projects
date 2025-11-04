"use client";
import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Overview</h2>
        <div className={styles.badge}>8</div>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44438a02e6ca5123da857491fb98a987d8f53d66"
          alt="Search"
          className={styles.searchIcon}
        />
      </div>

      <div className={styles.actionsContainer}>
        <button className={styles.actionButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea7699657f2d11e47315f4b5fd4ae38fcad50f9a"
            alt=""
          />
          <span>Sort</span>
        </button>
        <button className={styles.actionButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b27f94cfeae75a97e4372a74a3625b518e2676"
            alt=""
          />
          <span>Filters</span>
        </button>
        <button className={styles.actionButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c876f34f6dc56b6fd70b2e351ebb0c7eaca77160"
            alt=""
          />
          <span>Download report</span>
        </button>
      </div>

      <button className={styles.newDealButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71c21fcd348287122ec8eb6da3da58091fdf3982"
          alt=""
          className={styles.plusIcon}
        />
        <span>New deal</span>
      </button>
    </header>
  );
};

export default Header;
