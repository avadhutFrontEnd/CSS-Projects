"use client";
import React from "react";
import styles from "./MainContent.module.css";
import DeliveryMap from "./DeliveryMap";
import VehicleDetails from "./VehicleDetails";

const MainContent: React.FC = () => {
  return (
    <section className={styles.mainContent}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/dae6ff960f03a9eec58b81a0fde6dee96737ab508e084594bc5ddb985ada949c?placeholderIfAbsent=true"
        className={styles.backgroundImage}
        alt="Background"
      />

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.orderId}>Order ID: #AD345Jk758</h2>
          <button className={styles.documentationButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9c2182dde5100e9f51867bada0da9d33912406caafc9d311ee0bd3ca51677354?placeholderIfAbsent=true"
              className={styles.documentIcon}
              alt=""
            />
            <span>Documentation</span>
          </button>
        </div>
      </header>

      <DeliveryMap />

      <section className={styles.mainInfoSection}>
        <h3 className={styles.sectionTitle}>Main info</h3>
        <div className={styles.infoContainer}>
          <nav className={styles.tabsContainer}>
            <button className={styles.tabButton}>Order details</button>
            <button className={styles.tabButton}>Vehicle</button>
            <button className={styles.tabButton}>Driver information</button>
            <button className={styles.tabButton}>Customer information</button>
          </nav>

          <img
            src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/5be819ded9396f8579df503596185d0ec937b20c346913b948cfbbd724c9726a?placeholderIfAbsent=true"
            className={styles.divider}
            alt=""
          />

          <div className={styles.contentContainer}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <div className={styles.progressContainer}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/32188ba631b12eb0659ebdfc0f5c989d1b193dac7774dc6b550b076b57233712?placeholderIfAbsent=true"
                    className={styles.progressBackground}
                    alt=""
                  />
                  <span className={styles.progressText}>71%</span>
                </div>
              </div>

              <div className={styles.column}>
                <VehicleDetails />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
