"use client";
import React from "react";
import styles from "./NavigationBar.module.css";

const NavigationBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.companyName}>TransGlobal</h1>

      <nav className={styles.navigation}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/be23034ab158bf85d16be36f1ebe598069fecb5b10f93048dcba95985224a103?placeholderIfAbsent=true"
          className={styles.backgroundImage}
          alt=""
        />
        <span className={styles.overviewLink}>Overview</span>

        <div className={styles.navLinks}>
          <span className={styles.shippingLink}>Shipping</span>
          <button className={styles.trackingButton}>
            <div className={styles.trackingButtonBg}>Tracking</div>
          </button>
          <span className={styles.invoicesLink}>Invoices</span>
        </div>

        <span className={styles.analyticsLink}>Analytics</span>
      </nav>

      <div className={styles.userProfile}>
        <div className={styles.avatarGroup}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9747f8eb05e1ec36567b902bef664cd2ecb96fe1207ccaa903e2909e07457f82?placeholderIfAbsent=true"
            className={styles.avatarImage1}
            alt="User avatar"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/f71ff2edfbafd1b8cf825ab38a6f270f680f5e940fd09a1a32baf7aa5476d1c7?placeholderIfAbsent=true"
            className={styles.avatarImage2}
            alt="User avatar decoration"
          />
        </div>

        <div className={styles.userInfo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/e4119974ce02e64cdd1e5e03a6d9af5f3aac4bb83bedd6590beaf4ef33ad2804?placeholderIfAbsent=true"
            className={styles.backgroundImage}
            alt=""
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/bc7d4f4e4c77da571a79603f1d14295bcc10b48f64354044a2f56034bbfa5bf5?placeholderIfAbsent=true"
            className={styles.userIcon}
            alt=""
          />

          <div className={styles.userDetails}>
            <div className={styles.nameContainer}>
              <span className={styles.userName}>Anna Green</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/ad9c90f1714974a028eb5cf3c7c43cffad3be38ef4b647d7e2879ee864756369?placeholderIfAbsent=true"
                className={styles.dropdownIcon}
                alt="Dropdown"
              />
            </div>
            <span className={styles.userRole}>Account Executive</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
