import React from "react";
import styles from "./TrackingStats.module.css";

const TrackingStats: React.FC = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.titleColumn}>
          <h2 className={styles.sectionTitle}>
            Tracking
            <br />
            Orders List
          </h2>
        </div>
        <div className={styles.statsColumn}>
          <div className={styles.statsCards}>
            <div className={styles.statCard}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/d13cc63f09a1d2bf0a01cfc58e1fb080b7f3d05f1a547125a070a53115c6335a?placeholderIfAbsent=true"
                className={styles.statIcon}
                alt="Total shipments icon"
              />
              <div className={styles.statContent}>
                <h3 className={styles.statTitle}>Total Shipments</h3>
                <div className={styles.statValues}>
                  <span className={styles.statNumber}>789</span>
                  <span className={styles.statIncrease}>+5,45%↗</span>
                </div>
              </div>
            </div>

            <div className={styles.statCard}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/9d543ab6f8d3c25c5d00484e7586fb651216ea0bf862ecc986ab7759e414e58e?placeholderIfAbsent=true"
                className={styles.statIcon}
                alt="Active tracking icon"
              />
              <div className={styles.statContent}>
                <h3 className={styles.statTitle}>Active Tracking</h3>
                <div className={styles.statValues}>
                  <span className={styles.statNumber}>120</span>
                  <span className={styles.statDecrease}>-0,45% 7</span>
                </div>
              </div>
            </div>

            <div className={styles.statCard}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1e3fa936fcab49bfb8b8dad74682f95c/34828df8b74f6deb9cbff4f851a1836dd6e41736d2257cc79cf9e0909d1788c5?placeholderIfAbsent=true"
                className={styles.statIcon}
                alt="Delivered shipments icon"
              />
              <div className={styles.statContent}>
                <h3 className={styles.statTitle}>Delivered Shipments</h3>
                <div className={styles.statValues}>
                  <span className={styles.statNumber}>98</span>
                  <span className={styles.statIncrease}>+5,45%↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingStats;
