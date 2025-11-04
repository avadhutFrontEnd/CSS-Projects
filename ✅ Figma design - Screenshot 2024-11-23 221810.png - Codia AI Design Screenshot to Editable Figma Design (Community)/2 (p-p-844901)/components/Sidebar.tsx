import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6aec7893f0afc60ad42acebacb3586db4e5706c"
        alt="Company logo"
        className={styles.logo}
      />
      <div className={styles.navItems}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57f99c4d05e725d50b96ab1225afefd8127ce889"
          alt="Navigation icon"
          className={styles.navIcon}
        />
        <div className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/562cde37acdc5bbb41eb2980058ae0e6ac467255"
            alt="Navigation icon"
            className={styles.navIcon}
          />
        </div>
        <div className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/300f9d5bb9aea4f0c69d5f152206679e9b9d0453"
            alt="Navigation icon"
            className={styles.navIcon}
          />
        </div>
        <div className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7030fe60f7b331659647be644f80b5825706ec6f"
            alt="Navigation icon"
            className={styles.navIcon}
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/edabe2f02d52b3296db29c3601db5cc61f930613"
          alt="Navigation icon"
          className={styles.navIcon}
        />
        <div className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d21ba0936b563c6129453d42892cdfefc954944f"
            alt="Profile icon"
            className={styles.profileIcon}
          />
        </div>
        <div className={styles.navItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee524d8108d12933adb586aa38f8c66302076459"
            alt="Profile icon"
            className={styles.profileIcon}
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/446a725f9c88327d0e027e4caf4315b4dd4b3eed"
          alt="Navigation icon"
          className={styles.navIcon}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
