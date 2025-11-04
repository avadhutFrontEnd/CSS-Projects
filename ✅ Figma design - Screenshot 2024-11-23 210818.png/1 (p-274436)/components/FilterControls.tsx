"use client";
import React from "react";
import styles from "./FilterControls.module.css";

function FilterControls() {
  return (
    <div className={styles.filterControlsContainer}>
      <div className={styles.showMeSection}>
        <h3 className={styles.sectionTitle}>Show me:</h3>
        <button className={styles.filterButton}>
          <div className={styles.buttonBackground}>Open Now</div>
        </button>
      </div>

      <div className={styles.sortBySection}>
        <h3 className={styles.sectionTitle}>Sort by:</h3>
        <div className={styles.sortButtonsContainer}>
          <button className={styles.sortButton}>
            <div className={styles.buttonBackground}>Nearest</div>
          </button>
          <button className={styles.filterButton}>
            <div className={styles.filterButtonBackground}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/84f970a8157f22199d6ed0a0f070c6bef8c64e53a43bd7123cf9183556c77a1e?placeholderIfAbsent=true"
                className={styles.filterIcon}
              />
              <span>Filters</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterControls;
