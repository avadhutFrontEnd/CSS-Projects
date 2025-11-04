import React from "react";
import styles from "./FinFlowDashboard.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        aria-label="Search transactions"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44438a02e6ca5123da857491fb98a987d8f53d66"
        alt="Search"
        className={styles.searchIcon}
      />
    </div>
  );
};

export default SearchBar;
