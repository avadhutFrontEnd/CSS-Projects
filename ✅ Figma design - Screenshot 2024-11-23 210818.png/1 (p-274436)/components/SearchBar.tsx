import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBackground}>
          <span className={styles.searchPlaceholder}>Search...</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/0f4035f7beb382aff145da2a25d6e3a81bfef2067d9821dd8c22fcba36da965a?placeholderIfAbsent=true"
            className={styles.searchIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
