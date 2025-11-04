"use client";
import React from "react";
import styles from "./InputDesign.module.css";

function SearchBar() {
  return (
    <div className={styles.div36}>
      <div className={styles.div37}>
        <input type="text" placeholder="Search" className={styles.input} />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44438a02e6ca5123da857491fb98a987d8f53d66"
          alt="Search"
          className="absolute right-[16px] top-1/2 transform-[translateY(-50%)]"
        />
      </div>

      <button className={styles.button2}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea7699657f2d11e47315f4b5fd4ae38fcad50f9a"
          alt="Sort"
        />
        <span className={styles.span2}>Sort</span>
      </button>

      <button className={styles.button3}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b27f94cfeae75a97e4372a74a3625b518e2676"
          alt="Filter"
        />
        <span className={styles.span3}>Filters</span>
      </button>

      <button className={styles.button4}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c876f34f6dc56b6fd70b2e351ebb0c7eaca77160"
          alt="Download"
        />
        <span className={styles.span4}>Download report</span>
      </button>
    </div>
  );
}

export default SearchBar;
